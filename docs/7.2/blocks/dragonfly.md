# Custom Block Models (Dragonfly Library)

# Work in progress

This page will be enhanced further later.

## Using BlockBench

Blockbench is a tool for 3D voxel modeling, commonly used with Minecraft mods because it supports the Minecraft model JSON format.

The **DragonFly Model Library** adds compatibility with the new Minecraft 3D model format used by Blockbench, allowing you to integrate it into your mods.

https://www.blockbench.net/

### Resources

https://www.youtube.com/watch?v=GukhptdHlPk

https://www.youtube.com/watch?v=5euTBuGYUhU

### And more

https://www.youtube.com/watch?v=dsax5p4brN8&list=PLvULVkjBtg2SezfUA8kHcPUGpxIS26uJR

## Please read it before.

[Adding blocks](https://www.notion.so/Adding-blocks-ce9a70b449234626bf3a3046589a0fb1?pvs=21) 

## Assets Folder

- **`assets/models/`**
    
    Here, place the block JSON files.
    
- **`assets/models/block`**
    
    Here, place the item JSON files.
    
- **`assets/models/item`**

## Code examples

### 7.1

```java
// Create a new block called testBlock using BlockBuilder
public static final Block testBlock = new BlockBuilder(MOD_ID)
    // Set the block model using the DragonFly model format
    .setBlockModel(new BlockModelDragonFly(ModelHelper.getOrCreateBlockModel(MOD_ID, "block/TestBlock.json")))
    // Build the block with specified parameters
    .build(new BlockModel("testblock", 1000, Material.dirt, ModelHelper.getOrCreateBlockModel(MOD_ID, "block/TestBlock.json")));
```

### 7.2

```java
// Create a new block called testBlock using BlockBuilder
public static final Block testBlock = new BlockBuilder(MOD_ID)
    // Set the block model using a custom DFBlockModelBuilder
    .setBlockModel(
        block -> new DFBlockModelBuilder(MOD_ID)
            // Specify the JSON file for the block model
            .setBlockModel("block/testblock.json")
            // Build the block model with the specified parameters
            .build(block))
    // Build the block with an ExampleBlockModel, setting its name and properties
    .build(new ExampleBlockModel("testblock", 2000, Material.dirt));

```

### Textures

Use `setTextures` to set the main texture of your block model. Its placement is managed by the model and DragonFly.

### Resources

> https://github.com/UselessSolutions/DragonFlyExample
>