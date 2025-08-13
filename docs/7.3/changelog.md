# Better than Adventure! 7.3

## Main Features
- Containers can be picked up and moved around!
  - To activate this, hold SHIFT and RIGHT CLICK on a container with an empty hand. Right click again to put it down.
- New command system, thanks to @AndroidDr!
- Rainbows now appear sometimes after it's rained!
- 13 new achievements!
- Texture Packs can now add and replace sounds and music!
- Animals can now be led using a fishing rod!
- Subtitles!
- New game rules: doWeatherCycle and doFireSpread!
- A new credits screen!
- A Skyblock world type!
- Better controller input and much wider compatibility with new controllers!
- A new command, /mobspawning, to control how mobs spawn in the world!
- Stars now have a random colour!
- The achievements screen has been redesigned!
- A festive surprise!

## New Blocks and Items
- Pumice, a new Nether block that soaks up lava.
- Steel Door and Steel Trapdoor, Steel Framed Glass, and Steel Fence.
- Igneous Cobbled Netherrack, Mossy Cobbled Netherrack, Netherrack, Netherrack Bricks, Polished Netherrack Slab, Cobbled Netherrack Slab, Netherrack Brick Slab, Cobbled Netherrack Stairs, and Netherrack Brick Stairs.
- Soul Schist, a new stony variant of Soul Sand. Currently unused.
- Bone Shale, a tough bony block that can only be broken from one direction. Currently unused.
- Paintbrush, which allows you to recolor some blocks such as wool and wooden planks once they've been placed.
- Reinforced Piston, a stronger piston variant that can push more blocks, launches mobs and blocks like projectiles, and can crush blocks down into simpler forms (e.g. cobblestone -> gravel -> sand).
- Activator, a new utility block that, when powered, performs a right-click action for you. Likely to be useful for automated farms.
- Redstone Pumpkin, a new spoOoOky variant of the pumpkin crafted using a Redstone Torch which only applies redstone power from a single side.
- Inverted Redstone Lamp, a variant of the Redstone Lamp that is lit by default and extinguished when powered.

## Changes to Existing Blocks and Items
- Perma-Ice now spawns in patches in cold biomes.
- Food now makes a sound when consumed.
- Removed Redstone Torch burnout.
- Renamed Netherrack to Cobbled Netherrack.
- Cobbled Netherrack can now be used as a substitute for stone in recipes.
- Cherries now only stack to 2.
- Crude Steel has a new texture.
- Many, many piston bugs have been fixed.
- Dyed blocks can now be un-dyed using a sponge.
- Minecarts with chests now retain their colour.
- Pistons can now push block entities such as chests, furnaces, and seats.
- Flowers can now be stacked up to four times in one tile.
- Motion Sensors and Dispensers can now be placed facing upwards and downwards.
- Note blocks now have several more instruments to choose from.
- Nether Portal linking can now be controlled using dyes - e.g. a green portal will only link to another green portal.
- The recipe for ropes has changed to no longer require slime balls.
- Rope breaking behaviour is now more reliable and useful.
- Furnaces and Blast Furnaces now have an alternate texture when they have items sitting in their output slot.
- Players can now control whether the reverse side of a flag is mirrored.
- Pigmen now only spawn on natural Nether blocks.
- Players can now place any item on their head.
- Gave the Trommel a unique bottom texture.
- Retextured the Redstone Block.
- Some blocks now have retro texture variants in the Retro, Indev and Classic world types.
- Added the ability to convert steel ingots back into crude steel.

## Technical Changes
- Migrated the game from LWJGL2 to LWJGL3.
- Added support for modern UUIDs.
- Log4J is now used across both the client and server for logging.
- The game now supports more launch arguments, improving compatibility with modern Minecraft.
- Replaced the Biome Finder utility with Seed Viewer.
- Improved fishing synchronization in multiplayer.
- Improved error handling with corrupted NBT data.
- The client jarfile no longer contains server code, and vice-versa.
- Fixed world holes in multiplayer.
- Made biome range map calculation multi-threaded, improving startup performance.

## Miscellaneous
- The player no longer falls off blocks when sneaking over the edge.
- Added Accessibility page to Options.
- Added two new accessibility options:
    - Contextual FOV Modification
    - Screen Motion Effects
- Enabled item clumping by default (can be disabled).
- Lightning now prefers to strike higher-up points made of metallic blocks.
- Render Distance is now a slider and scales from 2 to 32 chunks (up from 12).
- Wolves no longer stand when their owner is attacked.
- Added key binds for opening achievements and statistics pages.
- Caves now spawn in the Nether again (whoops).
- The guidebook now displays all crafting recipes.
- Ghast fireballs now respect the mobGriefing game rule.
- Tweaked spawning rules for the Dog music disc.
- Removed default keybinds for Toggle Fog and Toggle Gamma.
- /save command in multiplayer now requires operator permissions to run.
- Added warning on startup when the user is missing Java Cryptography Extensions.
- Renamed /spawnparticle to /particle.
- Removed Herobrine.

# Better than Adventure! v7.3_01
- Added new slab and stair blocks:
    - Lapis bricks
    - Iron bricks
    - Gold bricks
    - Steel bricks
- Empty paintbrushes now render with empty durability
- Paintbrushes now return to uncolored state when fully used
- Player nicknames can no longer have spaces
- /whois now suggests nicknames instead of usernames
- Shift right click now decrements the pitch on noteblocks
- Added molten pumice recipe
- Wet sponges now dry when placed adjacent to lava or igneous netherrack
- Added missing door undyeing recipe
- Added easy bridge keybind
- Made painted doors valid furnace fuel
- Changed light grey dye recipe to use grey dye and bonemeal, rather then grey dye and ink sacks
- Made doubled up cobbled netherrack slabs burn forever
- Re-enabled experimental MultiDraw Renderer (Click the bottom right corner of the main menu to go to the debug menu to find the option)
- NBT Tag json serialization support
- Updated brigadier to 1.0.2
- Added metadata to item sorting parameters
- Various optimizations

- Fixed basket fill being able to render outside the bounds
- Fixed show description prompt improperly showing up on crafting result slots
- Blocks now register their first hit as a punch rather then being explicitly left clicked
- Fixed open guidebook achievement not triggering on controller
- Fixed controller item dragging with x producing broken behavior
- Fixed slider element issues on controller
- Fixed rail power not propagating up slopes
- Fixed fire striker playing sounds twice in multiplayer
- Created optimized map for stone to ore mappings
- Added inverted lamp undyeing recipe
- Made oak and cherry sapling texture more consistent with each other
- Made glowstone blocks always drop 4 glowstone dust
- Fixed snowlayers having incorrect hitbox height
- Fixed painting uncolored chests causing them to dump their contents onto the ground
- Fixed handcannon not applying fling like other explosions
- Fixed subtitles not displaying when game muted
- Set user provided strings to use utf16 in mp rather then utf8
- Temporarily made wood and glass trapdoors not check for powersource removal
- Fixed maxed render distance fog looking too bright
- Made ghast fireball achievement only apply on hit mobs instead of any entity
- Fixed held trommel creating ghost items
- Various command bugfixes
- Fixed enabling Vsync crashing linux
- Fixed view jumping when exiting GUIs on linux
- Fixed window icon image randomly corrupting
- Fixed reversing flags not working it MP
- Fixed map waypoints not working correctly on maps
- Fixed raw iron and raw gold textures having translucent pixels
- Made container sorting also sort in respect to color/metadata
- Increased mp connection timeout from 30 seconds to 90
- Changed ChunkProviderStatic's allocated chunk array size to match current max render distance
- Fixed render distance slider not updating multidraw render's render area ingame
- Fixed fog option not actually disabling most fog
- Removed unneeded iterator to get sign's picture enum
- Made unfueled furnaces not constantly check if they can smelt
- Fixed mouse jump issue on linux
- Untangled mob category interfaces
- Fixed broken get monitor refresh rate method
- Fixed flag editing being largely broken in MP
- Fixed map waypoints not working correctly
- Removed transparent pixels from raw iron and raw gold textures
- Fixed z-fighting on painting frame
- Fixed pickblock move item ignoring default hotbar
- Fixed a minor piston bug

# Better than Adventure! 7.3_02

## Changes
- Added dyed wooden pressure plates, signs, and buttons from 7.4
- Spike changes:
    - Now deal a continuous 2 damage every half a second (1 damage = half a heart)
    - Severely limits movement in all directions
    - When the player is crouching, spikes only deal 1 damage every second, and horizontal movement is much quicker
    - Fall damage is much more consistent on spikes and you will receive to-be-expected levels of fall damage
    - Spikes can now be placed without a block below them
    - The spike hitbox has been changed to accurately reflect its size
- Mushroom changes:
    - Can now bonemeal mushrooms to spawn mushrooms around it
    - Can now place mushrooms on any block surface
    - Increased mushroom spread chance by 75%
- Recipe changes:
    - Label recipe is now shapeless
    - Bookshelf recipe now yields 4 instead of 1
    - Piston decimating Sandstone now yields sand
- Dead bushes can now be placed in more locations
- Made plants plant-able on all mossy block
- Made all carved pumpkins fully rotatable
- Added dimension sub command to /tp
- Wands now set name color when named with a color
- New textures for retro bookshelves and retro sand
- Creepers now properly pathfind under trapdoors
- Removed incoming packet throughput limit on client
- Bonemealing algae now causes it to spread
- Made lamp inversion only occur when player right clicks with an empty hand
- Improved chest logging
- Implemented Gungun's improved packet processing mod
- Adjusted portal bounds to reflect build limit rather then worldgen limit
- Adjusted developer drop items to use UUIDs
- Made Return key checks also accept numpad enter
- Easy bridging is no longer able to do interactions other then placement
- Added missing EntityDispatch for egg projectiles
- Explosions now center on the exploded object
- Baskets now actually, finally, propagate redstone updates properly

## Bug Fixes
- Mobs no longer retain the color of the last dyed label given to them
- Fixed Z axis on seed viewer being inverted
- Painting doors no longer deletes half of it
- Fixed potential null pointer exception with sign rendering
- Fixed diamond ore retro texture not applying in retro worlds
- Wrapped sound engine methods in try catch blocks
- Brought double chest texture fix from next into master
- Fixed paintings not dropping themselves when punched
- Fixed falling block bounding box becoming incorrect on reload
- Fixed left clicking blocks sometimes running their left click actions twice
- Painted door item now actually runs the onBlockPlaced code
- When doors are powered on placement it now plays the door opening sound effect
- Fixed duplicate option button strings becoming desynced on option value change
- Made serverside modded sound registration easier
- Fixed statistic packet holding onto pooled namespace id objects
- Fixed issue where at certain angles you can spam hit the top and bottom blocks of the door.
- Fixed falling block bounds becoming invalid on reload
- Made empty furnaces not spam description packets
- Fixed possible null pointer exception on flag edit GUI
- Fixed corner fences collision boxes not matching their model
- Fixed mobGriefing gamerule also disabling explosion particle effects
- Fixed pressureplates and motion sensors detecting spectators
- Portals no longer teleport players while nocliping
- Fixed divide-by-zero crash on the server selection screen
- Fixed double fling bug in multiplayer
- Fixed creepers not being able to pathfind under certain trapdoors
- Fixed greedy baskets

# Better than Adventure! 7.3_03

## Changes
- Added new convenience recipes for dyeing items such as wool, wooden planks, signs, etc.
- Improved description prompting option
    - Never prompt: old item description rendering
    - Prompt: Show "LCTRL: Show more..." prompt
    - Always show: Always shows description

## Bug Fixes
- Reverted LWJGL version from 3.3.4 to 3.3.3
- Added missing hitbox for singular fence post blocks
- Fixed duplicate right-click issue in multiplayer
- Fixed an issue with baskets losing their contents on world load
- Pistons now have proper sounds, and steel pistons now have proper blast resistance
- Pumpkin carving recipe no longer stops functioning after viewing it in the guidebook

# Better than Adventure! 7.3_04

## Changes
- Added fullscreen toggle keybind
- Removed mining speed penalty while climbing
- Reload keybind (F3+R by default) now reloads language packs
- Steve can now paint sheep with a paintbrush
- Included local SSL certificates, which allows sounds to be downloaded when using older Java versions
- Reworked missing JCE screen
- Added scrollwheel support to world select screen
    - And the server select screen
    - And the stats screen
- Changed UUID api from api.mojang.com to api.minecraftservices.com
    - Also added a new server property for overriding the UUID API endpoint
- Inverted lamps and painted pressure plates now have their appropriate map colors
- Swapped the BTA cape API to a new endpoint
- Removed Herobrine

## Bug Fixes
- Mobs (other than players) can no longer control carts they're riding
- Fixed transparency issues and signs being fullbright when lightmaps are disabled
- Steve can now take armor off of dogs
- Fixed water listening for random ticks
- Fixed greedy baskets
- Added additional error details for bad tile entity placement
- Fixed yellow pressure plates not crafting with yellow planks
- Fixed green sign texture
- Fixed NPE on debug menu's unlock stats button
- Made "Chained Up" achievement check for full durability
- Fixed potential moving piston stack overflow
- Various sound repository fixes & improvements
- Fixed muted buttons not being press-able
- Fixed an overflow with minecart fuel