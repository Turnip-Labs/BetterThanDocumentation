# Mixin tricks
Common and not so common mixins

## Player respawn

### Local
```java
@Mixin(value = Minecraft.class, remap = false)
public class MinecraftMixin {

	@Shadow public PlayerLocal thePlayer;

	@Inject(method = "respawn", at = @At(value = "INVOKE", target = "Lnet/minecraft/client/entity/player/PlayerLocal;setGamemode(Lnet/minecraft/core/player/gamemode/Gamemode;)V"), remap = false)
	public void keepInfo(boolean multiplayer, int targetDimension, CallbackInfo ci, @Local Player previousPlayer) {
        // Copy your data here
	}
}

```
### Multiplayer

```java
@Mixin(value = PlayerList.class, remap = false)
public class PlayerListMixin {
	@Inject(method = "recreatePlayerEntity", at = @At(value = "INVOKE", target = "Lnet/minecraft/core/player/inventory/container/ContainerInventory;transferAllContents(Lnet/minecraft/core/player/inventory/container/ContainerInventory;)V"), remap = false)
	public void keepInfoMP(final PlayerServer previousPlayer, final int i, final CallbackInfoReturnable<PlayerServer> cir, @Local(name = "newPlayer") final PlayerServer newPlayer) {
		// Copy your data here
	}
}
```

## Remove a Mob
```java
@Mixin(value = Biome.class, remap = false)
public abstract class BiomeMixin {

	@Shadow(remap = false)
	protected List<SpawnListEntry> spawnableMonsterList;

	@Inject(method = "<init>", at = @At("TAIL"), remap = false)
	private void onConstructed(String key, CallbackInfo ci) {
		this.spawnableMonsterList.add(new SpawnListEntry(MyCustomMob.class, 4));
		this.spawnableMonsterList.remove(3); // Bye Bye Mob Zombie Armored :) 😈
	}
}
```

## Replace an Item

```java
@Mixin(value = Items.class, remap = false)
public class ItemsMixin {
	@Inject(method = "setupItems", at = @At("TAIL"))
	private static void replaceItems(CallbackInfo ci) {
		Item.itemsList[Items.PAPER.id] = null;
		Item.itemsMap.remove(Items.PAPER.namespaceID);
		String name = Items.PAPER.getKey().substring(Items.PAPER.getKey().indexOf(".") + 1);
		Items.PAPER = new CustomItemPaper(name, Items.PAPER.namespaceID.toString(), Items.PAPER.id);
	}
}
```

## Replace a Recipe

```java
@Mixin(
	value = {RecipeRegistry.class},
	remap = false
)
public class RecipeDenier {
	@Unique private final static List<String> toDeny = new ArrayList<>();

	static {
        toDeny.add("minecraft:workbench/paper");
	}

	@Inject(method = "addCustomRecipe", at = @At("HEAD"), cancellable = true)
	private void RecipeDenierInject(String recipeKey, RecipeEntryBase<?, ?, ?> recipe, CallbackInfo ci) {
		if (toDeny.contains(recipeKey)) {
			LOGGER.info("Recipe {} is denied in Mixin", recipeKey);
			ci.cancel();
		}
	}
}
```