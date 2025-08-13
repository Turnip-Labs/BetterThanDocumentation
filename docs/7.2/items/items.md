## Using item class

`ExampleModItems.java`

```java
public class ExampleModItems {

	// Items
	public static Item customItem;

	// Others
	ItemBuilder generic_item_builder = new ItemBuilder(MOD_ID);
	
	// Function that make the items
	public void Initialize() {
		customItem = generic_item_builder.build(new Item("exampleItem", 11000));
	}
}
```

## Inheriting from item class

`CustomItem.java`

```java
public class CustomItem extends Item {

	// Custom properties
	private boolean is_charged = true;

	public CustomItem (String name, int id, boolean charged) {
		super(name, id);
		this.is_charged = charged;
	}
}
```

```java
public class ExampleModItems {

	// Items
	public static CustomItem customItem;

	// Others
	ItemBuilder generic_item_builder = new ItemBuilder(MOD_ID); // ItemBuilder is from Halplibe library, available since 7.2pre1
	
  //Function to initialize items
	public void Initialize() {
		customItem = generic_item_builder.build(new CustomItem ("exampleItem", 11000, true));
	}
}
```

### ExampleMod.java

```java
public class ExampleMod implements ModInitializer, GameStartEntrypoint, RecipeEntrypoint {

	public static final String MOD_ID = "examplemod";
	public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

	@Override
	public void onInitialize() {
		LOGGER.info("Fishing Additions initialized. Debug: "+ isDebug);
	}

	@Override
	public void beforeGameStart() {

		new ExampleModItems().Initialize();

	}

	@Override
	public void afterGameStart() {
	}

	@Override
	public void onRecipesReady() {

	}

	@Override
	public void initNamespaces() {
	}
}
```

---

## Item gruops with namespace (work in progress)

### Please read it before start

[Adding Recipes](https://www.notion.so/Adding-Recipes-34c14053e89f49768f2338dd13d8a30e?pvs=21) 

## Using a namespace to group items.

In your YourModRegistries.java, at the function `InitNameSpaces()` add something like it:

```java
	Registries.ITEM_GROUPS.register(MOD_ID + ":item/yourgroupgere", Registries.stackListOf(YourModItems.yourItem));
```

# Other examples

> [Original discord message](https://discord.com/channels/1138825919088312403/1139018202161102940/1197286517555609610)
> 
- Item Builder Example: https://github.com/Turnip-Labs/halplibe-examples-repo/tree/itemBuilder

# Credits

> https://github.com/LukeisStuff/stardew-farming-bta/blob/7.2/src/main/java/luke/stardew/StardewRecipes.java for the line of code of [Using a namespace to group items.](https://www.notion.so/Using-a-namespace-to-group-items-10f8bb16a9348000ab8ce3328e263bc2?pvs=21)
>