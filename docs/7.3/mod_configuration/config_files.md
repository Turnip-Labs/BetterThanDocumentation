# TOML Configuration with **Halplibe**

A clear and maintainable way to manage mod settings is by using **TOML** files.
This format allows you to organize settings into **categories** and **entries**, with comments that make the configuration easy to read and modify manually.

---

## Importing Required Classes

```java
import turniplabs.halplibe.util.TomlConfigHandler;
import turniplabs.halplibe.util.toml.Toml;
```

---

## Example Usage in Java

```java
public static final String MOD_ID = "modid";
public static TomlConfigHandler CFG;

// General comment for the TOML file
private static final Toml TOML = new Toml("A comment");

// Add a category called "IDs" with two entries
TOML.addCategory("IDs")
    .addEntry("starting_item_id", 19000)
    .addEntry("starting_block_id", 11000);

// Initialize the configuration handler with the MOD_ID and the TOML object
CFG = new TomlConfigHandler(MOD_ID, TOML);
```

---

## Generated `.toml` Output

```toml
# A comment

[IDs] # Category
    starting_item_id = 19000 # Values
    starting_block_id = 11000
```

---

## Configuration File Location

* **Minecraft runtime:**
  `.minecraft\config\yourmodid.cfg`
* **IntelliJ IDEA (development environment):**
  `project\run\config\yourmodid.cfg`

---

## Reading Values in Code

Values can be retrieved using getters that match the data type:

* `getBoolean()`
* `getDouble()`
* `getFloat()`
* `getLong()`
* `getInt()`

**Example:** retrieving an integer value from the category `CategoryName`:

```java
int value = CFG.getInt("CategoryName.value_name");
```

---

## Best Practices

* Use lowercase, English names for categories and entries to avoid compatibility issues.
* Document each setting with comments (`#`) for clarity.
* Store configurable values in the `.toml` file rather than hardcoding them in Java.