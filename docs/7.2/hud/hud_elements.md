First, create a package named `gui` within your mod package. Place all components or classes related to the HUD in this package.

### Writting a HudManger

```java
package your.package.name.gui;

// All HUD components are instantiated.
// Import net.minecraft.client.gui.hud.HudComponents;
import net.minecraft.client.gui.hud.*

public class HudManager {
	private static final HudComponent thermometer = HudComponents.register(new ExampleComponent(
		"exampleComponent",
		182, 7,
		
		new SnapLayout(
	
		  // Parent component
			HudComponents.HOTBAR,
			
			// Parent anchor
			ComponentAnchor.TOP_LEFT, 
			
			// Anchor
			ComponentAnchor.BOTTOM_LEFT
		
		)));

	public static void init() {
		StanleyLib.LOGGER.debug("Registering HUD components");
	}
}
```

### Writting a HudComponent

```java
package your.package.name.gui;

import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.Gui;
import net.minecraft.client.gui.GuiIngame;
import net.minecraft.client.gui.hud.Layout;
import net.minecraft.client.gui.hud.MovableHudComponent;
import net.minecraft.core.entity.player.EntityPlayer;
import net.minecraft.core.player.gamemode.Gamemode;
import org.lwjgl.opengl.GL11;

// The MovableHudComponent can be moved from its position.
// HudComponent is fixed and cannot be moved.

public class ExampleComponent extends MovableHudComponent {

	private int width = 182;
	private int height = 5;

  // Your texture path, from resources folder
	private final String texture = "assets/yourmodname/textures/gui/example.png";

	public ExampleComponent(String key, int xSize, int ySize, Layout layout) {
		super(key, xSize, ySize, layout);
	}

	@Override
	public boolean isVisible(Minecraft mc) {
		EntityPlayer player = mc.thePlayer;
		if (player == null)
			return true;

		return (!player.getGamemode().isPlayerInvulnerable() && mc.gameSettings.immersiveMode.drawHotbar() && player.getGamemode()
			.equals(Gamemode.survival));
	}

	private void renderSprite(Minecraft mc, Gui gui, int x, int y) {
		GL11.glDisable(GL11.GL_BLEND);
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, mc.renderEngine.getTexture(texture));
		gui.drawTexturedModalRect(x, y, 0, 0, width, height);
	}

	@Override
	public void render(Minecraft mc, GuiIngame gui, int xSizeScreen, int ySizeScreen, float partialTick) {
		int x = this.getLayout().getComponentX(mc, this, xSizeScreen);
		int y = this.getLayout().getComponentY(mc, this, ySizeScreen);

		renderSprite(mc, gui, x, y);
	}

	@Override
	public void renderPreview(Minecraft mc, Gui gui, Layout layout, int xSizeScreen, int ySizeScreen) {
		int x = layout.getComponentX(mc, this, xSizeScreen);
		int y = layout.getComponentY(mc, this, ySizeScreen);

		renderSprite(mc, gui, x, y);
	}
}

```

### Init the hud manager

```java
package your.package.name;

import your.package.name.gui.HudManager;
import net.fabricmc.api.ModInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import turniplabs.halplibe.util.GameStartEntrypoint;
import turniplabs.halplibe.util.RecipeEntrypoint;

public class ExampleMod implements ModInitializer, GameStartEntrypoint, RecipeEntrypoint {

  public static final String MOD_ID = "Examplemod";
	public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

	@Override
   public void onInitialize() {

		LOGGER.info("StanleyLib initialized.");

	}

	@Override
	public void beforeGameStart() {

	}

	@Override
	public void afterGameStart() {
	  // Here. 
		HudManager.init();
	}

	@Override
	public void onRecipesReady() {

	}

	@Override
	public void initNamespaces() {

	}
}

```

# Notes

**If your HUD element is not appearing, it may be due to incorrect size, position, or other configuration issues. I've experienced similar problems myself.**

**Please avoid calling `HudManager.init();` in the `onInitialize()` method, as this can cause your mod to crash.**

If you want more code examples, check the `net.minecraft.client.gui.hud` package, which contains all BTA components.

# Additional examples of mods

> https://github.com/JamDoggie/better-when-running
> 

> https://github.com/Garkatron/StanleyLib/tree/7.2_01
> 

# Credits

> Thanks! Your mod was useful for learning how to add HUD elements
> 

> https://github.com/JamDoggie
>