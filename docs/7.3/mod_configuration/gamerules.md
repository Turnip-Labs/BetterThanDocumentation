# Using Gamerules in Minecraft

## Overview

**Gamerules** provide a straightforward and accessible way to add configurable options that can be changed directly in-game.
They are a practical tool for both mod developers and players, offering the following advantages:

* Easily modifiable via command-line or chat commands.
* Automatically saved in the world’s save data, ensuring changes persist between play sessions.
* Allow players to customize world behavior without editing external configuration files.

---

## Creating a Custom Gamerule

Minecraft provides different gamerule classes in the package:

```
net.minecraft.core.data.gamerule
```

### Example: Boolean Gamerule

```java
public static GameRuleBoolean MY_GAMERULE = null;

static {
    // Register the gamerule with a unique name and a default value (true in this example)
    MY_GAMERULE = GameRules.register(new GameRuleBoolean("myGameruleName", true));
}
```

---

## Available Gamerule Types

| Type    | Class Name        | Description                              |
| ------- | ----------------- | ---------------------------------------- |
| Boolean | `GameRuleBoolean` | Toggles an option on or off.             |
| Integer | `GameRuleInteger` | Stores an integer value.                 |
| Float   | `GameRuleFloat`   | Stores a floating-point (decimal) value. |

---

## Notes

* Always choose a **unique, descriptive name** for custom gamerules to avoid conflicts with existing ones.
* Gamerules are stored per world, meaning changes in one world will not affect others.