`BlockBuilder` is a **fluent builder class** designed to simplify the creation and registration of custom blocks in Minecraft. It allows modders to specify block properties (hardness, resistance, luminance, etc.), optionally associate a `TileEntity`, tags, sounds, and items, and then build a `Block` object with all those properties applied.

It also contains a **nested `Registry` class** to handle ID allocation for custom blocks.

---

### **Key Features**

1. **Fluent Property Setters**

   * `setHardness(float)` → sets block hardness.
   * `setResistance(float)` → sets blast resistance.
   * `setLuminance(int)` → sets light emitted by the block.
   * `setSlipperiness(float)` → changes player movement speed on the block.
   * `setImmovable()`, `setUnbreakable()`, `setInfiniburn()` → sets special behaviors.
   * `setFlammability(int, int)` → sets fire spread and burn chance.

2. **Tile Entity & Custom Block Item**

   * `setTileEntity(Supplier<TileEntity>)` → attaches a tile entity to the block.
   * `setBlockItem(BlockLambda<ItemBlock<?>>)` → allows specifying a custom item to represent the block in inventory.

3. **Tags & Textures**

   * `setTags(Tag<Block<?>>...)` and `addTags(Tag<Block<?>>...)` → assign Minecraft tags for behavior like `PLANTABLE`, `INFINITE_BURN`.
   * `textures` array → holds 6 texture paths (one for each block face).

4. **Build Method**

   * `build(String, int, BlockLogicSupplier<T>)` → creates a `Block<T>` instance with all properties applied.
   * Handles vanilla initialization, registration, and caching.

---

### **Cloning Approach**

* Every setter clones the builder to **maintain immutability**, e.g.:

```java
public BlockBuilder setHardness(float hardness) {
    BlockBuilder blockBuilder = this.clone();
    blockBuilder.hardness = hardness;
    return blockBuilder;
}
```

* `clone()` copies the `textures` array to prevent shared references.

---

### **Registry Nested Class**

* Helps **allocate numeric IDs** for new blocks.

* Methods:

  * `findOpenIds(int count)` → finds a sequence of free IDs for new blocks.
  * `findLength(int id, int terminate)` → finds the length of a run of free IDs.
  * `reserveRuns(String modId, Toml runs, int neededIds, Consumer<IdSupplier> function)` → registers block ID runs from a TOML config.

* Uses `RunReserves` and `RunLengthConfig` to track reserved block IDs to prevent collisions.

---

### **Example Usage**

```java
BlockBuilder builder = new BlockBuilder("mymod")
    .setHardness(2.0f)
    .setResistance(10.0f)
    .setLuminance(15)
    .setFlammability(5, 20)
    .setTileEntity(MyTileEntity::new);

Block<?> myBlock = builder.build("my_block", 300, MyBlockLogic::new);
```

This would create a block with custom hardness, resistance, luminance, flammability, and a tile entity.

---

### **Interesting Details**

* Uses `BlockLambda` as a functional interface for custom item creation.
* Supports “infiniburn” blocks (like Netherrack in vanilla Minecraft).
* Provides a mechanism for ticking blocks on load (`tickOnLoad`) and controlling visual updates.
* Integrates with mod’s ID management through `Registry` for safe numeric ID assignment.
