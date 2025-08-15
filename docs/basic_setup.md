# Basic Setup

## Clone the Repository

To get started you should use a template from GitHub. This template will provide you with the basic structure and necessary files to build your mod, saving you a lot of time and effort. Here's how you can use a GitHub template to kickstart your BTA modding journey.

## **Visit the GitHub Repository**:

Start by navigating to the GitHub repository that contains the template.

Use the [Turnip-Labs - bta-example-mod](https://github.com/Turnip-Labs/bta-example-mod)

## **Use the Template**:

On the GitHub repository page, locate and click the **"Use this template"** button. This will allow you to create a new repository based on the provided template.

**Important**: Make sure to select **"Include all branches"** when creating your new repository.

## Project structure

Your mod's directory structure should look like this:
```tree
src/main/
    ├── java/turniplabs/examplemod/
    │   └── ExampleMod.java
    ├── resources/
    │    └── lang/examplemod/
    │        └── en_US.lang
    ├── examplemod.mixins.json
    ├── fabric.mod.json
    └── icon.png`
```

### Explanation:

- **ExampleMod.java**: Main Java file for your mod.
- **en_US.lang**: Localization strings for American English.
- **examplemod.mixins.json**: Defines mixins used by your mod.
- **fabric.mod.json**: Mod metadata (name, version, dependencies).
- **icon.png**: Mod icon.
- The `resources/` folder is where you should place the textures for your mod.

Place your files in these directories to ensure your mod works properly.

**Initially, you must change `examplemod` and `turniplabs` to `your_mod_name_here` and `your_account_name_here`.**

## gradle.properties

The `gradle.properties` file is a configuration file used by Gradle to define properties and project settings. This file can contain various configurations, such as:

- **Memory Configuration**: Settings for the amount of memory that Gradle can use.
- **Dependency Versions**: Specifies the versions of the project's dependencies.
- **Mod Configuration**: Includes specific information about the mod, such as the version, group, and name.

> This is just an example and may be outdated.
```yaml
org.gradle.jvmargs=-Xmx2G

# This specifies the version of BTA used for your mod
# BTA
bta_version=7.2_01

# Dependencies for your mod
# Loader & Mod Menu
loader_version=0.15.6-babric.6-bta
mod_menu_version=2.0.6
halplibe_version=4.1.3

# The version, group, and name of your mod. Initially, you need to change these to match your mod's information.
# Each time you release a new version, update the *mod_version* value to a different or newer value.
# Mod
mod_version=1.0.0
mod_group=turniplabs # **your account name here**
mod_name=examplemod # **your mod name here** 
```

## Other templates
* [kotlin](https://github.com/Turnip-Labs/bta-example-mod-kotlin)
* [java](https://github.com/Turnip-Labs/bta-example-mod-scala)
