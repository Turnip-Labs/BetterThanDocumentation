# Examples
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
