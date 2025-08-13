# Adding Recipes

Recipes are **essential** if you want to allow the player to use your item without **creative mode**. The following steps on this page will help you add your custom recipes.

## Step 1: Add your own recipe class

**Add the file `YourModRecipeRegistries.java` to your `src/main/java/yourname/yourmodname`**

```java
package your.package;

import net.minecraft.core.block.Block;
import net.minecraft.core.data.registry.Registries;
import net.minecraft.core.data.registry.recipe.RecipeGroup;
import net.minecraft.core.data.registry.recipe.RecipeNamespace;
import net.minecraft.core.data.registry.recipe.RecipeRegistry;
import net.minecraft.core.data.registry.recipe.RecipeSymbol;
import net.minecraft.core.data.registry.recipe.entry.RecipeEntryCrafting;
import net.minecraft.core.data.registry.recipe.entry.RecipeEntryFurnace;
import net.minecraft.core.item.Item;
import net.minecraft.core.item.ItemStack;
import turniplabs.halplibe.helper.RecipeBuilder;

public class YourModRegistries extends RecipeRegistry {
	public static final RecipeNamespace YOURMODNAME = new RecipeNamespace();

	public static void InitRecipes() {
		RecipeBuilder.Shaped("your_mod_id")
            .setShape(
                "rrr",
                "rdr",
                "rrr")
            .addInput('r', yourItemHere) // Replace with your input item/block
            .addInput('d', Item.foodAppleGold) // Example of another input item
            .create("YourRecipeName", yourItemHere.getDefaultStack()); // Replace with your output item/block
	}

	public static void InitNameSpaces() {
		
		// So, you can use this template to add more groups if needed.
		// Constant for a group of crafting recipes related to the workbench.
		final RecipeGroup<RecipeEntryCrafting<?, ?>> WORKBENCH = 
		
		    // Create a new RecipeGroup instance.
		    new RecipeGroup<>(
		
		        // Create a RecipeSymbol for the workbench.
		        new RecipeSymbol(
		
		            // ItemStack representing the workbench block.
		            new ItemStack(Block.workbench)
		        )
		    );
		    
		    // Add the recipe group - id: yourGroupId
				PARAGLIDER.register("workbench", WORKBENCH);
		
		
		// If you have furnace recipes
		// final RecipeGroup<RecipeEntryFurnace> FURNACE = new RecipeGroup<>(new RecipeSymbol(new ItemStack(Block.furnaceStoneActive)));
		// PARAGLIDER.register("furnace", FURNACE);		
		
		// Register all
		Registries.RECIPES.register("yourmodidhere", YOURMODNAME);
	
	}

}

```

## Using your class in `YourModName.java`

```java
package your.package.name;

import net.fabricmc.api.ModInitializer;
import net.minecraft.core.data.registry.Registries;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import turniplabs.halplibe.util.GameStartEntrypoint;
import turniplabs.halplibe.util.RecipeEntrypoint;

public class RuneMod implements ModInitializer, GameStartEntrypoint, RecipeEntrypoint {
    public static final String MOD_ID = "yourmodidhere";
    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

    @Override
    public void onInitialize() {
			LOGGER.info("yourmodnamehere initialized.");
    }

		@Override
		public void beforeGameStart() {
	
		}
	
		@Override
		public void afterGameStart() {
	
		}
	
		@Override
		public void onRecipesReady() {
			YourModRegistries .InitRecipes()
		}
	
		@Override
		public void initNamespaces() {
			YourModRegistries.InitNameSpaces();
	}
}

```

> Thanks, **Martin (sunsetsatellite)**, for advising me about the previous error in this code. (Already fixed)
>