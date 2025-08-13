# Adding blocks

## BlockModel

`CustomBlockModel.java`

```java
public class CustomBlockModel<T extends Block> extends BlockModelStandard<T> {
	public CustomBlockModel(Block block) {
		super(block);
	}
	
	public boolean render(Tessellator tessellator, int x, int y, int z) {
		boolean flag = false;

		block.setBlockBounds(0, 0, 0, 1, 1, 1);
		flag = this.renderStandardBlock(tessellator, this.block, x, y, z);

		this.block.setBlockBoundsBasedOnState(BlockModelStandard.renderBlocks.blockAccess, x, y, z);
		return flag;
	}

	public void renderBlockOnInventory(Tessellator tessellator, int metadata, float brightness, float alpha) {

		block.setBlockBounds(0, 0, 0, 1, 1, 1);

		super.renderBlockOnInventory(tessellator, metadata, brightness, 0);
	}
}

```

It is a regular cube 3D model for our blocks.

## The block

`CustomBlock.java`

```java
public class CustomBlock extends BlockTileEntityRotatable {

	public CustomBlock(String key, int id) {
		super(key, id, Material.metal);
	}
}
```

### Textures from /resources

The block needs textures, which should be created in the directory `/resources/your_mod_id_here/textures/block`.

Be careful with the name; it's similar to an ID.

### Adding it

`BlockInitializer.java`

```java
public class BlockInitializer {

	public static Block custom_block;
	public void Initialize() {

		BlockBuilder standard_block_builder = new BlockBuilder(MOD_ID); // BlockBuilder is available from Halplibe since 7.1

		// Creating blocks
		BlockBuilder custom_block_builder = standard_block_builder
			.setBlockModel(CustomBlockModel::new)
			.setBlockSound(BlockSounds.METAL)
			.setHardness(1.0F)
			.setResistance(1.0F)
			// Examplemod is your mod id
			.setTextures("examplemod:block/custom_block")
			.setTags(BlockTags.MINEABLE_BY_PICKAXE);
		;

		custom_block = new CustomBlock("custom_block", 12000));
		custom_block_builder.build(custom_block );
	}
}

```

`ExampleMod.java`

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

		new BlockInitializer().Initialize();

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

# Other examples

> [Original discord message](https://discord.com/channels/1138825919088312403/1139018202161102940/1197286517555609610)
> 
- Block Builder Example: https://github.com/Turnip-Labs/halplibe-examples-repo/tree/blockbuilder