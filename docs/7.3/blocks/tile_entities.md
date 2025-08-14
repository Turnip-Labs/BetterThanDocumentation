# TileEntity

The `TileEntity` class represents a block entity in Minecraft that can carry state, be carried by entities, and interact with the world. It implements the `ICarriable` interface.

### Key Fields

* `@Nullable World worldObj` – Reference to the world the tile entity is in.
* `@Nullable CarriedBlock carriedBlock` – The block currently carried by this entity, if any.
* `int x, y, z` – Position coordinates.
* `boolean tileEntityInvalid` – Marks whether the tile entity is invalidated.

### Core Methods

#### Tick & Update

* `tick()` – Called every game tick; currently empty for extension.
* `setChanged()` – Updates the tile entity state and notifies neighboring blocks if this block emits signals.

#### Networking

* `getDescriptionPacket()` – Returns a network packet describing this tile entity (currently returns `null`).

#### Block Info

* `getBlockId()` – Returns the ID of the block, either from `carriedBlock` or the world.
* `getBlock()` – Returns the `Block` instance at this position.
* `getBlockMeta()` – Returns metadata of the block.
* `getDistanceFrom(double x, double y, double z)` – Computes squared distance to a given coordinate.

#### Lifecycle

* `isInvalid()`, `invalidate()`, `validate()` – Manage the tile entity’s valid state.
* `readFromNBT(CompoundTag tag)` – Loads position from NBT.
* `writeToNBT(CompoundTag tag)` – Writes position and ID to NBT.

#### Carriable & Placement

* `heldTick(World world, Entity holder)` – Called each tick while the tile is held.
* `dropContents(World world, int x, int y, int z)` – Handles block drops when destroyed.
* `tryPlace(World world, Entity holder, int x, int y, int z, Side side, double xPlaced, double yPlaced)` – Attempts to place the carried block in the world.
* `drop(World world, Entity holder)` – Drops the block near a holder if placement fails.
* `canBeCarried(World world, Entity potentialHolder)` – Determines if the block can be picked up (default `false`).
* `pickup(World world, Entity holder)` – Picks up the block from the world, returning the `ICarriable` instance.

#### Helper

* `getCarriedEntry(World world, Entity holder, Block<?> currentBlock, int currentMeta)` – Wraps a block into a `CarriedBlock` instance.

---

### Notes

* This class handles both static tile entities in the world and blocks being moved or carried by entities.
* Neighbor notification is done whenever a block emitting redstone signals is updated.
* Placement logic respects blocks with the `PLACE_OVERWRITES` tag.
* Drop logic ensures blocks attempt placement in a 3x3x3 area around the holder before falling back to dropping items in the world.
