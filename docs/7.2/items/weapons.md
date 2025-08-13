# Adding Weapons

### Please read it before start

### Sword

```java
// key.name, itemId, toolMaterial
myExampleSword  = (new ItemToolSword("tool.sword.custom", 16493, ToolMaterial.steel)).withTags(new Tag[]{ItemTags.PREVENT_CREATIVE_MINING});
```

If you want something more complex, you need to extend from ItemToolSword and add your code.

### Custom Hand Cannon and Cannonball

```java
public class MyOwnHandCannonUnloaded extends ItemHandCannonUnloaded {

    // Constructor that initializes the class using the name and ID of the object
    public MyOwnHandCannonUnloaded (String name, int id) {
        super(name, id);
    }

    // Method that gets triggered when the player uses the hand cannon
    public ItemStack onUseItem(ItemStack itemstack, World world, EntityPlayer entityplayer) {
        // If you want to completely override the behavior, comment out the super() method 
        // and write the new code for the hand cannon's behavior here.
        super(itemstack, world, entityplayer);

        // If you want to add new behavior, you should code it here.
        // This code will execute after the original functionality from the super().
    }
}

```

*The unloaded item*

```java
public class MyOwnHandCannonLoaded extends ItemHandCannonLoaded{
    public MyOwnHandCannonLoaded (String name, int id) {
        super(name, id);
        
        // Modify it if you want.
        this.setMaxDamage(200); // default 100 
        this.maxStackSize = 1;
    }

    public ItemStack onUseItem(ItemStack itemstack, World world, EntityPlayer entityplayer) {
        // If you want to completely override the behavior, comment out the super() method 
        // and write the new code for the hand cannon's behavior here.
        super(itemstack, world, entityplayer);

        // If you want to add new behavior, you should code it here.
        // This code will execute after the original functionality from the super().
    }
}
```

*The loaded item*

```java
// The onUseItem method from ItemHandCannonLoaded is as follows:
public ItemStack onUseItem(ItemStack itemstack, World world, EntityPlayer entityplayer) {
    // Plays a bow-like sound at the player's location with a slight random pitch variation
    world.playSoundAtEntity(entityplayer, entityplayer, "random.bow", 0.3F, 
        1.0F / (itemRand.nextFloat() * -0.2F + -0.4F));

    // Server-side logic for launching the cannonball and handling item durability
    if (!world.isClientSide) {
        // Reduces the item's durability by 1 point
        itemstack.damageItem(1, entityplayer);

        // Spawns a cannonball entity in the world, launched by the player
        world.entityJoinedWorld(new EntityCannonball(world, entityplayer));

        // If the itemstack's size is 0 or less, return null (indicating no more items), 
        // otherwise return an unloaded hand cannon with the appropriate metadata
        return itemstack.stackSize <= 0 ? null : new ItemStack(Item.handcannonUnloaded, 1, 
            itemstack.getMetadata(), itemstack.getData());
    } else {
        // On the client side, just return the current itemstack without changes
        return itemstack;
    }
}

// If you want to use your own custom Cannonball entity or replace it with 
// something different (like a "creeper cannon" or another entity), 
// you'll need to change the entity instantiation inside this method 
// (e.g., replace EntityCannonball with the desired entity).

```

*The on use function of the **loaded item***

```java
public ItemStack onUseItem(ItemStack itemstack, World world, EntityPlayer entityplayer) {
    // Checks if the player has an explosive charge in their inventory
    if (entityplayer.inventory.consumeInventoryItem(Item.ammoChargeExplosive.id)) {
        // Plays a "click" sound at the player's location with a slightly randomized pitch
        world.playSoundAtEntity(entityplayer, entityplayer, "random.click", 1.0F, 
            1.9F / (itemRand.nextFloat() * 0.2F + 0.4F));

        // Returns a new hand cannon item that is "loaded", preserving the metadata and additional data from the current item
        return new ItemStack(Item.handcannonLoaded, 1, itemstack.getMetadata(), itemstack.getData());
    } else {
        // If no explosive charge is consumed, the hand cannon remains in its current state and is returned as-is
        return itemstack;
    }
}

// Explanation:
// This method attempts to load the hand cannon by consuming an explosive charge (ammo).
// If the player has the required ammo, it plays a "click" sound and returns a loaded hand cannon.
// If the player does not have the required ammo, the cannon remains unloaded.

// To replace the ammo type:
// - If you want to use a different type of ammo (for example, regular ammo or custom ammunition), 
//   change "Item.ammoChargeExplosive.id" to the ID of the new ammo item.
//   Example: entityplayer.inventory.consumeInventoryItem(Item.regularAmmo.id);
// - This allows the cannon to be loaded with the new ammo type and continue functioning as intended.
```

*The on use function of the **unloaded item***

### Custom projectile

```java
public class EntityCustomCannonball extends EntityProjectile {

    // Constructor: Initializes cannonball with just the world context
    public EntityCustomCannonball(World world) {
        super(world);
    }

    // Constructor: Initializes cannonball with specific coordinates
    public EntityCustomCannonball(World world, double x, double y, double z) {
        super(world, x, y, z);
    }

    // Constructor: Initializes cannonball with an owning entity (e.g., the player)
    public EntityCustomCannonball(World world, EntityLiving owner) {
        super(world, owner);
    }

    // Initializes the cannonball's gravity and speed
    public void init() {
        this.defaultGravity = 0.09F;  // Gravity affecting the cannonball
        this.defaultProjectileSpeed = 0.88F;  // Initial speed of the cannonball
    }

    // Called when the cannonball hits something
    public void onHit(HitResult hitResult) {
        if (hitResult.hitType == HitType.TILE) {
            // Create an explosion at the hit location with specified radius and effects
            this.world.newExplosion(this.owner, this.x, this.y, this.z, 1.5F, false, true);
            this.remove();  // Remove the cannonball after explosion
        }
    }

    // Called every tick to update the cannonball's state
    public void afterTick() {
        super.afterTick();  // Call to the parent class's tick logic
        // Spawn smoke particles at the cannonball's current position
        this.world.spawnParticle("largesmoke", this.x, this.y, this.z, 0.0, 0.0, 0.0, 0);
    }
}
```

---

# Swords with effects (Work in progress)

like https://www.curseforge.com/minecraft/mc-mods/more-swords-33-swords/screenshots