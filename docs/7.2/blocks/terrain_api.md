# Making your own mineral with TerrainApi

Here is an example of ore

```java
public class BlockYourEpicOre extends Block {
	public BlockYourEpicOre (String key, int id, Material material) {
		super(key, id, material);
	}

	@Override
	public ItemStack[] getBreakResult(World world, EnumDropCause dropCause, int x, int y, int z, int meta, TileEntity tileEntity) {
	
	  // If you don't want randomness, delete this and simply return the item stack with a specified number of items.

		Random rand = new Random();
		int random = rand.nextInt(100);

		if (random < 80) { // 70% chance
			return new ItemStack[]{new ItemStack(yourEpicOre, rand.nextInt(8))};
		} else { // 30% chance
			return new ItemStack[]{new ItemStack(yourEpicOre, rand.nextInt(3))};
		}
	}

}
```

### gradle.properties

```java
terrain_api_version=1.4.4-7.2-pre1
```

### build.gradle

```java
modImplementation "com.github.UselessSolutions:TerrainAPI:v${project.terrain_api_version}"
```

### Adding ores

### src/ModContainer/TerrainApi/TerrainApiPlugin.java

```java
public class TerrainApiPlugin implements TerrainAPI {
	@Override
	public String getModID() {
		return MOD_ID;
	}

	public static final OverworldConfig overworldConfig = ChunkDecoratorOverworldAPI.overworldConfig;

	@Override
	public void onInitialize() {

		ChunkDecoratorOverworldAPI.oreFeatures.addManagedOreFeature(getModID(), BlockYourEpicOre, 8, 64, 0.0f, 1.0f, false);
		ChunkDecoratorNetherAPI.oreFeatures.addManagedOreFeature(getModID(), BlockYourEpicOre, 1, 16, 0.0f, 1.0f, false);
	}
}
```

Adds an WorldFeatureOre, which has its generation characteristics managed by OreConfig Params:

- **block** – Ore to generate
- **defaultClusterSize** – Default size in blocks of an ore vein
- **defaultChances** – Default number of chances per chunk to generate an ore patch, this value scales with world height
- **defaultStartingRange** – Value from [0, 1], it's the default fraction from the bottom of the world to the surface that the ore can generate
- **defaultEndingRange** – Value from [0, 1], it's the default fraction from the bottom of the world to the surface that the ore can generate
- **hasStoneStates** – Does ore have states for each stone type

# Additional mod examples

https://github.com/LukeisStuff/randomite-bta

# Credits

> Thanks! Your mod was useful for learning how to add ores with TerrainApi.
> 

> https://github.com/LukeisStuff
>