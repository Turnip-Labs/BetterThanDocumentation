---
layout: default
title: Index
---

# Playing sounds

## Sound Assets

The files for your sounds can be in .ogg or .wav format and must be placed in the

**“resources/assets/modid/sound/”** directory. 

Given this example, the directory to properly use the “test.mysound” SoundType would be:

*“/assets/test/sound/mysound.ogg”* within the resources directory.

## Adding and registering your sounds

First, use Halplbe’s SoundHelper to add a sound to the game using the beforeGameStarts() method. Then, register a SoundType in with the SoundType.register(String) method to ensure proper compatibility with servers.

```java
Import net.minecraft.core.sound.SoundTypes;
Import turniplabs.halplibe.helper.SoundHelper;
Import turniplabs.halplibe.util.GameStartEntrypoint;

public class GameMain implements GameStartEntrypoint {
	@Override
	public void beforeGameStarts() {
	      SoundTypes.register( "test.mysound" );
	      SoundHelper.addSound( "test", "mysound.ogg" );
      }
}
```

# **Playing Sounds**

There are a two ways to play sounds.

### First

```java
world.playSoundEffect(...); // Plays sound at a given coordinate.
// Parameters: (Entity player, SoundCategory category, double x, double y, double z, String soundPath, float volume, float pitch)
```

- **Entity player**: The entity that should not receive the sound playback. This helps prevent the sound from being played twice for the player if they are the one triggering it.

- **SoundCategory category**: The category of the sound, such as SoundCategory.WORLD_SOUNDS or SoundCategory.MUSIC. This helps in organizing and controlling the volume of different types of sounds in the game.

- **double x**: The X coordinate where the sound should be played.
- **double y**: The Y coordinate where the sound should be played.
- **double z**: The Z coordinate where the sound should be played.

- **String soundPath**: The path to the sound resource that should be played. This is usually in the form of "namespace.sound_name", where namespace is typically the mod ID.

- **float volume**: The volume at which the sound should be played. This value is typically between 0.0 and 1.0.
- **float pitch**: The pitch of the sound. Values less than 1.0 will lower the pitch, while values greater than 1.0 will raise the pitch.

### Example

```java
world.playSoundEffect(**null**, SoundCategory.WORLD_SOUND, 100, 100, 100, "test.mysound", 1.0f, 1.0f)
// Plays “test.mysound” at 100x 100y 100z at full volume and original pitch for all players.;
```

### Second

```java
world.playSoundAtEntity(...); // Plays sound at a given entity.
```

- Parameters: (Entity player, Entity player, String soundPath, **float** volume, **float** pitch)
    - **Entity player**: The entity that should not receive the sound playback. This helps prevent the sound from being played twice for the player if they are the one triggering it.
    - **Entity targetEntity**: The entity at which the sound should be played. This can be any entity in the game, including players, mobs, or other entities.
    - **String soundPath**: The path to the sound resource that should be played. This is usually in the form of

"namespace.sound_name", where namespace is typically the mod ID.

- **float volume**: The volume at which the sound should be played. This value is typically between 0.0 and 1.0.
- **float pitch**: The pitch of the sound. Values less than 1.0 will lower the pitch, while values greater than 1.0 will raise the pitch.

### Example

```java
world.playSoundAtEntity(entityplayer, entityplayer, "test.mysound", 1.0f, 1.0f);
// Plays “test.mysound” at “entityplayer” at full volume and original pitch for all players except “entityplayer”.
```

## Trick

Add a random double to the pitch argument of the `playSound` function to vary the pitch.

```java
double randomPitch = Math.random();
```

## Credits

> Thanks to 'deeter._' for contributing to this book with their BTA sound documentation. Much appreciated!. [Document](https://docs.google.com/document/d/1s7zwg0at1eQsFArj2-GGsg-iyHXqW4CVnFmlTRlGBqM/edit?usp=sharing)
>