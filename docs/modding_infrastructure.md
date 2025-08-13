# Modding Infrastructure

## What is Babric?

[Babric](https://babric.github.io/) is a port of the Fabric modding toolchain designed for **Minecraft Beta versions**.
It provides a modern development environment and tool support for creating mods targeting older Minecraft builds, similar to how Fabric supports modern versions.

---

## Codebase Differences

The **Better Than Adventure! (BTA)** source code differs significantly from both original Beta versions and modern Minecraft.
Because of this, mods made for Beta are **not directly compatible** with BTA and must be **rewritten** to match the BTA codebase structure and API.

---

## Mappings

Mappings define human-readable names for obfuscated classes, fields, and methods in Minecraft.
In a standard Fabric Loom environment:

* **Yarn mappings** are community-maintained and provide meaningful, descriptive names for the Minecraft codebase.
* **Intermediary mappings** are a lower-level mapping layer used internally to ensure cross-version compatibility.

Mappings are required because Minecraft releases are **obfuscated**, making the code difficult to read and work with.
The process of **remapping** applies these mappings to compiled classes or source files, enabling developers to work with understandable names.

> See also: [Fabric Wiki – Mappings](https://wiki.fabricmc.net/tutorial:mappings)

**For BTA:**
BTA uses **its own set of mappings**, distinct from Yarn and Intermediary, to match its unique code structure.
