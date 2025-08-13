---
layout: default
title: Index
---

# Mod Configuration 

## Configuration Using TOML

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

---

## Using Gamerules in Minecraft

### Why use gamerules?

Gamerules provide a simple, accessible way to add configurable options that players can change directly in-game. They have several advantages:

* Easily modifiable via command line or chat commands.
* Automatically saved in the world’s save data, so changes persist between sessions.
* Allow players to customize world behavior without editing external files.

### Creating a custom gamerule

Minecraft provides different gamerule types in the package `net.minecraft.core.data.gamerule`.

For example, to create a boolean gamerule:

```java
public static GameRuleBoolean MY_GAMERULE = null;

static {
    // Register the gamerule with a unique name and a default value (true here)
    MY_GAMERULE = GameRules.register(new GameRuleBoolean("myGameruleName", true));
}
```

### Types of gamerules available

* Boolean (`GameRuleBoolean`) — for toggling options on or off.
* Integer (`GameRuleInteger`) — for numeric values.
* Float (`GameRuleFloat`) — for decimal values.
* Other types depending on Minecraft version and use case.

![Types](image.png)