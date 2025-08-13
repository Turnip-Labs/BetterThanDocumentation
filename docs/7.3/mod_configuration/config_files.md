# Configuration Using TOML

A simple and readable way to manage mod settings is by using **TOML** files. This format allows you to organize settings into categories and entries, with comments that make it easier to read and edit manually.

### Example in Java:

```java
public static final String MOD_ID = "modid";
public static TomlConfigHandler CFG;
private static final Toml TOML = new Toml("A comment");  // General comment for the TOML file

// Add a category called "IDs" with two entries
TOML.addCategory("IDs")
    .addEntry("starting_item_id", 19000)
    .addEntry("starting_block_id", 11000);

// Initialize the config handler with the MOD_ID and the TOML configuration
CFG = new TomlConfigHandler(MOD_ID, TOML);
```

### Generated `.toml` output:

```toml
# A comment

[IDs] # Category
    starting_item_id = 19000 # Values
    starting_block_id = 11000
```

* **File location: `.minecraft\config\yourmodid.cfg`**
* **Intellijidea file location: `project\run\config\yourmodid.cfg`**

### Retrieving values in code

You can read values using getters matching the data type:

* `getBoolean()`
* `getDouble()`
* `getFloat()`
* `getLong()`
* `getInt()`

Example to get an integer value:

```java
int value = CFG.getInt("CategoryName.value_name");
```