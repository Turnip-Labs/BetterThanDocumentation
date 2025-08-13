# Entity methods

This document contains info what some methods of the Entity classes do.
Please and always expand this document if you happen to find some method that isn't explicit about its function. Likewise, if you'd wish to add a small addendum to a deceptive name.

> ⚠️ This document isn't extensive. it only serves to document methods that may pose issue to a new modder or lack explict explanation. 
> Please and always decompile source code and grep to it, reverse engineering is guaranteed to give you answers with *enough* effort.

## `public void move(double xd, double yd, double zd)`

Moves an entity by the deltas specified.

### Parameters:

* xd: delta between current destination and desired destination in the X axis.
* yd: delta between current destination and desired destination in the Y axis.
* xd: delta between current destination and desired destination in the Z axis.

---

## `public void moveTo(double x, double y, double z, float yRot, float xRot)`

Moves an entity to the coordinates specified with the specified rotation.

### Parameters:

* x: global position in the X axis.
* y: global position in the Y axis.
* z: global position in the Z axis.
* yRot: Pitch axis *(most likely the head of the mob.)*
* xRot: Yaw axis

---

## `public void push(double x, double y, double z)`

Pushes an entity in a direction by adding to the acceleration values.

---

## `public boolean hurt(Entity attacker, int baseDamage, DamageType type)`

Causes damage to an entity. The entity may take into consideration who ever delt it, the amount and the type.
It is worth noting that projectiles don't set themselves as attackers instead the projectile's owner is set as the attacker.

---

## `public boolean showBoundingBoxOnHover()`

This method returns whether the game should render a selection box around this entity. For example, boats, fire and paintings all return `true`.

---

## `public AABB getBb()`

Returns the bounding box to be used for *Collision*. Normally entities have soft pushable collision but some entities such as boats may allow a player to stand on them.
As such, you can use this method to return a solid box. Normally, something like this would do fine: `@Override public AABB getBb() { return this.bb.copy(); }`.