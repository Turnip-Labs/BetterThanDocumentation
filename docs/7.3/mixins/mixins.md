---
layout: default
title: Index
---

# Mixins

[Fabric page about it](https://fabricmc.net/wiki/tutorial:mixin_introduction)

[Cheat sheet by 2xsaiko](https://github.com/2xsaiko/mixin-cheatsheet/?tab=readme-ov-file)

Mixins are a powerful and important tool used in the Fabric ecosystem. Their primary use case is modifying existing code in the base game, whether it be through injecting custom logic, removing mechanics, or modifying values. Note that **mixins must be written in Java**, even if you use Kotlin or another language.

# Setup

You need to do the following:

- Create a folder at: `yourmod/src/main/java/yourmodname/mixin`
    - This is where you should place your mixin Java files. Please name them something like `SomethingMixin.java`.
- If you are using IntelliJ IDEA with the Minecraft Modding plugin, this might be added automatically. If not, you need to manually add the name of your mixin in:
    - `src/main/resources/yourmod.mixins.json`
    - Example:

```java
{
  "required": true,
  "minVersion": "0.8",
  "package": "deus.rune.mixin",
  "compatibilityLevel": "JAVA_8", 
  "mixins": [
    "EntityLivingMixin",
    "EntityMixin",
    "EntityPlayerMixin",
    "EntityPlayerMPMixin",
    "EntityPlayerSPMixin",
    "MinecraftMixin"
  ],
  "client": [
  ],
  "injectors": {
    "defaultRequire": 1
  }
}
```

## Example of @Mixin, @Inject and @Redirect

```java
package your.package.name;

import net.minecraft.client.render.window.GameWindow;
import net.minecraft.core.entity.Entity;
import net.minecraft.core.entity.player.EntityPlayer;
import net.minecraft.core.player.inventory.InventoryPlayer;
import net.minecraft.core.util.helper.DamageType;
import net.minecraft.core.world.World;
import org.checkerframework.checker.units.qual.A;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

import java.util.ArrayList;
import java.util.List;
import static your.package.name.YourMod.MOD_CONFIG;

@Mixin(EntityPlayer.class)
public abstract class EntityPlayerMixin {

    /**
     * The `@Inject` annotation in a mixin is used to inject additional behavior into an existing method.
     *
     * - `@At` specifies where the injection should occur:
     *   - `RETURN`: Inject the method just before the return statement of the target method.
     *   - `TAIL`: Inject the method at the end of the target method.
     *   - `HEAD`: Inject the method at the beginning of the target method.
     * 
     * - `remap`: Determines whether to remap the target method if it is obfuscated.
     */

    @Inject(method = "methodMixinReference", at = @At("RETURN"), cancellable = true, remap = false)
    private void modifyMaxHealth(CallbackInfoReturnable<Integer> cir) {
        // Modify the return value of the method.
        cir.setReturnValue(10); // Half of the original life value.
    }

    /**
     * The `@Redirect` annotation in a mixin is used to redirect method calls to your custom implementation.
     * 
     * - `@At` specifies where the redirection should occur:
     *   - `value = "INVOKE"`: Redirect the method call when the target method is invoked.
     *   - `target`: Defines the method to which the call should be redirected.
     *
     * - `remap`: Determines whether to remap the target method if it is obfuscated.
     */

    @Redirect(
        method = "attackTargetEntityWithCurrentItem(Lnet/minecraft/core/entity/Entity;)V",
        at = @At(value = "INVOKE", target = "Lnet/minecraft/core/player/inventory/InventoryPlayer;getDamageVsEntity(Lnet/minecraft/core/entity/Entity;)I"),
        remap = false
    )
    private int redirectGetDamageVsEntity(InventoryPlayer inventory, Entity entity) {
        // Return a custom damage value instead of the original method's result.
        return randomValue;
    }
}
```

# Using Interfaces

Using an interface is a way to add your own methods to vanilla Minecraft classes.

If you want to add functionality to make the player’s punches stronger, follow these steps:

1. **Create an Interface**: Define an interface, such as `IEntityPlayerAccessor.java`, to declare the methods you want to add.
2. **Implement the Interface**: Implement this interface in your mixin class.
3. **Add Methods**: Add the methods to your mixin and provide their functionality.

By using interfaces, you can extend vanilla Minecraft classes with custom behavior without directly modifying the game's source code.

# Example

```java
package your.package.name;

public interface IEntityAccessor {
		boolean ModName$isCoveredInFlames();
		void ModName$setIsInvulnerableFire(boolean value);
}
```

The `@Shadow` annotation is used in mixins to indicate that a method or field in a mixin class corresponds to a private or protected method or field in the target class. It allows the modder to access or modify those elements without directly altering the original code, maintaining compatibility and avoiding conflicts with other mods

### Here is an example of how to implement the interface methods.

```java
package your.package.name;

import your.package.name.interfaces.IEntityAccessor;
import net.minecraft.core.entity.Entity;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;

@Mixin(Entity.class)
public abstract class EntityMixin implements IEntityAccessor {

	@Shadow
	protected boolean fireImmune;

	@Shadow
	public int remainingFireTicks;

	@Override
	public boolean ModName$getIsInvulnerableFire() {
		return fireImmune;
	}

	@Override
	public void ModName$setIsInvulnerableFire(boolean value) {
		fireImmune = value;
	}

	@Override
	public int ModName$getRemainingFireTicks() {
		return remainingFireTicks;
	}

	@Override
	public boolean ModName$isCoveredInFlames() {

		return !(remainingFireTicks <= 0);
	}
}
```

# Accessing Your New Methods

```java
// When you have an entity variable reference, you need to do this:
IEntityAccesor customEntity = (IEntityAccesor) entityReference;
customEntity.ModName$setIsInvulnerableFire(true)
```

## If you want to do something more specific, you need to read the Minecraft code or other mods' code to learn how to do it.

# Other examples

> https://github.com/Garkatron/BTA-Rune/tree/7.2
>