# BlockLogic

It implements `BlockInterface` and `IItemConvertible`, meaning it defines behavior for blocks and how they convert to items.

### Key Fields:

* `bounds`: Axis-Aligned Bounding Box (AABB) for the block’s physical space.
* `block`: Reference to the block this logic belongs to.
* `material`: Material type of the block (e.g., wood, stone).

### Constructors:

* `BlockLogic(Block<?> block, Material material)`: Initializes the logic with a block and its material.

### Block Properties:

* `getMaterial()`, `getMaterialColor()`: Returns the block's material and its color.
* `isCubeShaped()`: Returns whether the block is a full cube (default `true`).
* `canPlaceOnSurface()`: Returns if it can be placed on surfaces.

### Bounds & Collision:

* `setBlockBounds(...)`, `getBounds()`, `getCollisionBoundingBoxFromPool(...)`: Set and retrieve the block’s collision bounds.
* `collidesWithEntity(Entity entity, ...)`: Checks entity collisions.
* `getSelectedBoundingBoxFromPool(...)`: Returns the bounding box used for selection/highlighting.

### Rendering & Lighting:

* `isSolidRender()`, `blocksLight()`, `getBlockBrightness(...)`: Defines how the block interacts with light.
* `getAmbientOcclusionStrength(...)`: Determines shading.

### Interaction:

* `onBlockPlacedByWorld(...)`, `onBlockDestroyedByPlayer(...)`, `onBlockRightClicked(...)`: Events for placement, destruction, and player interaction.
* `onEntityWalking(...)`, `onEntityCollidedWithBlock(...)`: Handles entities moving through the block.

### Breaking & Drops:

* `getBreakResult(...)`: Returns items dropped when broken.
* `harvestBlock(...)`: Handles proper harvesting based on tool used.
* `dropBlockWithCause(...)`: Drops items with specific cause (e.g., Silk Touch, proper/improper tool).

### Redstone & Signals:

* `getSignal(...)`, `isSignalSource()`, `getDirectSignal(...)`: Determines if the block emits or conducts redstone signals.

### Miscellaneous:

* `updateTick(...)`, `animationTick(...)`, `onNeighborBlockChange(...)`: Handles updates and block ticks.
* `getPistonPushReaction(...)`: Determines behavior when pushed by pistons.
* `isClimbable(...)`: Returns if entities can climb this block.

### Utility:

* `asItem()`: Converts block to item form.
* `getLanguageKey(int meta)`: Returns the localization key for the block.

---

The class is essentially a **comprehensive blueprint for block behavior** in a Minecraft-style game, covering placement, collision, rendering, interaction, drops, and physics.