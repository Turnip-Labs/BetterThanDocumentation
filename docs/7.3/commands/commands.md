# Commands

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

### Example 1: Simple Command

```java
public class HelloCommand implements CommandManager.CommandRegistry {

    @Override
    public void register(CommandDispatcher<CommandSource> commandDispatcher) {
        commandDispatcher.register(
            (ArgumentBuilderLiteral) ArgumentBuilderLiteral.literal("hello")
                .executes(context -> {
                    CommandSource source = (CommandSource) context.getSource();
                    source.sendMessage("Hello!");
                    return 1;
                })
        );
    }
}
````

---

### Example 2: Command with Integer Argument

```java
public class HelloCommand2 implements CommandManager.CommandRegistry {

    @Override
    public void register(CommandDispatcher<CommandSource> commandDispatcher) {
        commandDispatcher.register(
            (ArgumentBuilderLiteral) ArgumentBuilderLiteral.literal("hello")
                .then(ArgumentBuilderLiteral.argument("amount", integer())
                    .executes(context -> {
                        int amount = context.getArgument("amount", Integer.class);
                        context.getSource().sendMessage("Added: " + (amount + 10));
                        return amount;
                    })
                )
        );
    }
}
```

---

### Example 3: Command with Player and Integer Arguments

```java
public class LevelUp implements CommandManager.CommandRegistry {

    @Override
    public void register(CommandDispatcher<CommandSource> commandDispatcher) {
        commandDispatcher.register(
            (ArgumentBuilderLiteral) ArgumentBuilderLiteral.literal("hello")
                .then(ArgumentBuilderRequired.argument("target", ArgumentTypeEntity.player())
                    .then(ArgumentBuilderRequired.argument("amount", ArgumentTypeInteger.integer())
                        .executes(context -> {
                            Player player = ArgumentTypeEntity.getPlayer(context, "target");
                            int amount = context.getArgument("amount", Integer.class);

                            ((IPainScalePlayer) player).ps$addLevels(amount);
                            player.sendMessage("Now your level is: " + ((IPainScalePlayer) player).ps$getDifficultyLevel());

                            return 1;
                        })
                    )
                )
        );
    }
}
```

---

### Example 4: Command with Subcommands to Add Levels or Points

```java
public class LevelUp2 implements CommandManager.CommandRegistry {

    @Override
    public void register(CommandDispatcher<CommandSource> commandDispatcher) {
        commandDispatcher.register(
            (ArgumentBuilderLiteral) ArgumentBuilderLiteral.literal("hello")
                .then(argument("target", ArgumentTypeEntity.player())
                    .then(literal("add")
                        // First option: add levels
                        .then(ArgumentBuilderLiteral.literal("levels")
                            .then(ArgumentBuilderRequired.argument("target", ArgumentTypeEntity.player())
                                .then(ArgumentBuilderRequired.argument("level", ArgumentTypeInteger.integer())
                                    .executes(context -> {
                                        Player player = ArgumentTypeEntity.getPlayer(context, "target");
                                        int amount = context.getArgument("amount", Integer.class);

                                        ((IPainScalePlayer) player).ps$addLevels(amount);
                                        player.sendMessage("Added " + amount + " levels!");
                                        return 1;
                                    })
                                )
                            )
                        )

                        // Second option: add points
                        .then(literal("points")
                            .then(ArgumentBuilderRequired.argument("target", ArgumentTypeEntity.player())
                                .then(ArgumentBuilderRequired.argument("level", ArgumentTypeInteger.integer())
                                    .executes(context -> {
                                        Player player = ArgumentTypeEntity.getPlayer(context, "target");
                                        int amount = context.getArgument("amount", Integer.class);

                                        ((IPainScalePlayer) player).ps$addPoints(amount);
                                        player.sendMessage("Added " + amount + " points!");
                                        return 1;
                                    })
                                )
                            )
                        )
                    )
                )
        );
    }
}
```

---

### Example 5: Command Requiring Admin Permission

```java
public class LevelUp implements CommandManager.CommandRegistry {

    @Override
    public void register(CommandDispatcher<CommandSource> commandDispatcher) {
        commandDispatcher.register(
            (ArgumentBuilderLiteral) ArgumentBuilderLiteral.literal("hello").requires(source -> ((CommandSource)source).hasAdmin())
                .then(ArgumentBuilderRequired.argument("target", ArgumentTypeEntity.player())
                    .then(ArgumentBuilderRequired.argument("level", ArgumentTypeInteger.integer())
                        .executes(context -> {
                            Player player = ArgumentTypeEntity.getPlayer(context, "target");
                            int amount = context.getArgument("amount", Integer.class);

                            ((IPainScalePlayer) player).ps$addLevels(amount);
                            player.sendMessage("Now your level is: " + ((IPainScalePlayer) player).ps$getDifficultyLevel());

                            return 1;
                        })
                    )
                )
        );
    }
}
```
> If you want to see more complex examples, check out the base commands from BTA 7.3 located in the package`net.minecraft.core.net.command`.
