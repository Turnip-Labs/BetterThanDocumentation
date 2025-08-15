# How to Add New Blocks in BTA!

In BTA!, all mods that add new blocks should declare them as `public static Block<? extends BlockLogic>` variables inside a dedicated class, typically called `ModnameBlocks`. This makes it easier to access your blocks from other classes.

## 1. Assign a Block ID

Since BTA! **does not yet support namespaces for blocks**, each mod must declare a unique block ID. To avoid conflicts with other mods, this ID should be configurable by the user.

```java
private static int BLOCK_ID = Paperwork.CONFIG.getInt("IDs.startBlockId");
```

> This allows users to modify the ID to prevent overlaps with other mods.

## 2. Declare Your BlockBuilders

Next, declare the `BlockBuilder`s you will use to create your blocks. See the reference [BlockBuilder](./block_builder.md) for more details on how to configure them.

```java
private static BlockBuilder genericBlockBuilder = new BlockBuilder();
```

## 3. Create a Block

To actually create a block, use the `BlockBuilder` you declared. For example:

```java
BLOCK_PRINTER = genericBlockBuilder.build(
    "printer",           // translation key
    "printer",           // interlan name
    newBlockID(),        // unique block ID
    (b) -> new BlockPrinterLogic(b, Material.steel) // block logic
);
```

> **Note on Block Logic:**
> Every block needs a `BlockLogic` object, which defines its behavior. Check [BlockLogic](./logic.md) for more information.

## 4. Helper Method for Generating IDs

To simplify assigning unique IDs to multiple blocks, you can create a helper method:

```java
public static int newBlockID() {
    BLOCK_ID = BLOCK_ID + 1;
    return BLOCK_ID;
}
```

This ensures each block gets a unique ID without manually incrementing each one.

# Interacting with blocks

if you aren't building a decorative block, and you want to implement your onw logic, you should use a [BlockLogic](./logic.md) inherited class.

```java
import net.minecraft.core.block.Block;
import net.minecraft.core.block.BlockLogic;
import net.minecraft.core.block.material.Material;

public class BasicBlockLogic extends BlockLogic {
	public BlockCorckboardLogic(Block<?> block, Material material) {
		super(block, material);
	}
}
```

# Custom-Shaped Blocks

The `BlockModel` class ([see reference](./model.md)) allows you to customize the shapes of your blocks. For standard cubic blocks, you can use `BlockModelStandard`, which renders a normal cube.

For any blocks that are **not cubic**, you can use the other classes that extend `BlockModel`. All of these classes are located in the package:

```
net.minecraft.client.render.block.model
```

# Tile Entity

A `TileEntity` is information on a instance of a block, it isn't generic.
like, clicking on a chest is [BlockLogic](./logic.md) but the inventory is a `TileEntity`.

See the reference [TileEntity](./tile_entities.md.md) for more details on how to configure them.

> Kheppanant Khepnacious Kheppery — 12/08/2025 16:12


