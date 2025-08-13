# Introduction

Commands are a way to interact with the game logic. They are useful for admins to moderate, map makers to create, modders to test their mods, and players to configure the game—among many other purposes.

Since version 7.3, the command system is no longer implemented as a large `switch-case` or nested `if` statements. Instead, it uses a more “nested” structure with lambda functions and other constructs. This approach is more complex but provides intelligent autocompletion and type-checking within the game.

---

### Useful Packages

- `net.minecraft.client.Minecraft`
- `net.minecraft.core.net.command.CommandManager`
- `net.minecraft.core.net.command.util.CommandHelper`
- `net.minecraft.core.net.command.arguments`
- `net.minecraft.core.net.command.CommandSource`
- `com.mojang.brigadier.builder`

---

### Arguments

Arguments are the values or options a command takes to execute an action:

/command args...

Inside the `net.minecraft.core.net.command.arguments` package, you can find all argument types previously created by the BTA team. Also, within `com.mojang.brigadier.builder`, you will find two main argument types:

- `ArgumentBuilderLiteral` (literal option)
- `ArgumentBuilderRequired` (required argument with a value)

---

### Command Code Structure

Here are some code examples to show how commands are written for mods.

> Note: you need to cast each argument; otherwise, it may cause crashes.

---

#### Key Functions

- `.then()` is used to chain additional parts to a command.
- `.executes()` defines what happens when the command runs; it is the final action.
- `.requires()` sets a condition or requirement that must be met for a command (or part of it) to be available or executable.

---