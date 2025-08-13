# GUI (Without GUI Library)

### Please read it before you start

### `GuiContainer` Class

The `GuiContainer` class, found in the `net.minecraft.client.gui` package, is responsible for managing the rendering of textures using OpenGL. It extends the `GuiScreen` class, which in turn extends `Gui`, a utility class for drawing shapes and textures with the help of the tessellator and GL11.

The constructor of the `GuiContainer` class accepts a parameter of type `Container`, which will be discussed later.

```java
public GuiContainer(Container container) {
    Minecraft mc = Minecraft.getMinecraft(this);
    this.xSize = 176; // Width of the GUI
    this.ySize = 166; // Height of the GUI
    this.inventorySlots = container;
    this.guiTooltip = new GuiTooltip(mc);
    this.guiRenderItem = new GuiRenderItem(mc);
    this.itemDragHandler = new GuiItemDragHandler(mc, this, this.guiRenderItem);
}
```

If you want to draw a texture, there are two key methods you need to override: `drawGuiContainerBackgroundLayer` and `drawGuiContainerForegroundLayer`.

- The **`drawGuiContainerBackgroundLayer`** method is responsible for drawing the background of your GUI.
- The **`drawGuiContainerForegroundLayer`** method is used for drawing text or other elements that appear on top of the background.

### `Container` Class

The `Container` class manages slots and related functionality. If you need to modify how your interface handles slots, you'll need to extend this class.

For examples of how to modify it, you can refer to the following classes:

- `ContainerFurnace`
- `ContainerWorkbench`
- `ContainerChest`

These, along with others, can be found in the package `net.minecraft.core.player.inventory`.

### Drawing on `drawGuiContainerBackgroundLayer`

To draw something in the background/foreground layer, use the following pattern:

```java
GL11.glColor4f(1f, 1f, 1f, 1f); // Set the color for the texture or shape
// Load the texture
GL11.glBindTexture(GL11.GL_TEXTURE_2D, mc.renderEngine.getTexture("assets/textures/.../something.png"));
// Disable effects like blending for a clean texture draw
GL11.glDisable(GL11.GL_BLEND);
// Use a method inherited from the GUI class to draw the texture
drawTexturedModalRect(x, y, textureXcoord, textureYCoord, textureWidth, textureHeight);
```

To draw text use it

```java
// With shadow
this.fontRenderer.drawString("TEXT", x, y, textColor);
// No shadow
this.drawStringNoShadow(this.fontRenderer, "TEXT", x, y, textColor);
```

This code sets the drawing color, binds the texture, disables unnecessary effects, and then uses the inherited `drawTexturedModalRect` method to render the texture on the screen.

### **So, how can I draw my custom GUI without the GUI library?**

To handle the drawing of a custom GUI without relying on the GUI library, you'll need to manually calculate the positions of textures, manage timing for animations, and use loops and math to handle positioning, scaling, and movements.

### Resources and examples

> https://github.com/UselessSolutions/BTA_Babric_LegacyUI
> 

> https://github.com/UselessBullets/bta-ironchests
>