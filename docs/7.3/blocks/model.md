# BlockModel


`BlockModel<T extends BlockLogic>` is an abstract class that defines how a block should be rendered in the game. It contains methods for rendering both **in the world** (`render`) and **in the inventory** (`renderBlockOnInventory`), along with utilities for rendering with textures, colors, and lighting effects.

The generic type `T` allows this model to work with any subclass of `BlockLogic`.

---

### **Key Fields**

```java
public static RenderBlocks renderBlocks;
public final Block<T> block;
```

* `renderBlocks`: A static object that contains low-level rendering functions. Shared across all `BlockModel` instances.
* `block`: Reference to the block this model represents.

---

### **Constructor**

```java
public BlockModel(Block<T> block) {
    this.block = block;
}
```

* Stores the reference to the block associated with this model.

---

### **Basic Rendering**

```java
public abstract boolean render(Tessellator tessellator, int i, int j, int k);
```

* Abstract method that each subclass must implement to render the block in the world.

---

### **Render Without Culling**

```java
public boolean renderNoCulling(Tessellator tessellator, int x, int y, int z) {
    renderBlocks.renderAllFaces = true;
    boolean result = this.render(tessellator, x, y, z);
    renderBlocks.renderAllFaces = false;
    return result;
}
```

* Renders the block showing **all faces**, even the normally hidden ones.

---

### **Render With Override Texture**

```java
public boolean renderWithOverrideTexture(Tessellator tessellator, int x, int y, int z, IconCoordinate textureIndex) {
    renderBlocks.overrideBlockTexture = textureIndex;
    boolean result = this.render(tessellator, x, y, z);
    renderBlocks.overrideBlockTexture = null;
    return result;
}
```

* Renders the block using a temporary `IconCoordinate` as the texture.

---

### **Inventory Rendering**

```java
public void renderBlockOnInventory(Tessellator tessellator, int metadata, float brightness, @Nullable Integer lightmapCoordinate) {
    this.renderBlockOnInventory(tessellator, metadata, brightness, 1.0F, lightmapCoordinate);
}
```

* Convenience method that calls the abstract `renderBlockOnInventory`.

---

### **Textures and Overbright**

These methods allow fetching block textures based on side, metadata, or lighting conditions:

```java
public abstract IconCoordinate getBlockTexture(WorldSource worldSource, int i, int j, int k, Side side);
public abstract IconCoordinate getBlockOverbrightTexture(WorldSource worldSource, int i, int j, int k, int l);
public abstract IconCoordinate getBlockOverbrightTextureFromSideAndMeta(Side side, int i);
public abstract IconCoordinate getBlockTextureFromSideAndMetadata(Side side, int i);
public abstract IconCoordinate getParticleTexture(Side side, int i);
```

* Differentiates between normal textures, **overbright** (brighter) textures, and particle textures.

---

### **Rendering Specific Faces**

```java
public final void renderBottomFace(Tessellator tessellator, AABB bounds, double x, double y, double z, IconCoordinate tex)
```

* Methods like `renderBottomFace`, `renderTopFace`, `renderNorthFace`, etc., delegate rendering of each face to `renderBlocks`.

---

### **Side Control & Bitmask**

```java
public void setRenderSide(Side side, boolean shouldRender)
```

* Allows enabling or disabling specific faces using a **bitmask** in `renderBlocks.renderBitMask`.

---

### **Utilities**

```java
public boolean isRetro() {
    return Minecraft.getMinecraft().currentWorld != null && Minecraft.getMinecraft().currentWorld.isRetro();
}

public float getBlockBrightness(WorldSource blockAccess, int x, int y, int z) {
    return renderBlocks.getBlockBrightness(blockAccess, x, y, z);
}
```

* Detects if retro style is active.
* Retrieves local block lighting.

---

### **Resetting `RenderBlocks`**

```java
public void resetRenderBlocks() { ... }
```

* Resets all properties of `renderBlocks` to default values, preventing previous configurations from affecting the current render.
