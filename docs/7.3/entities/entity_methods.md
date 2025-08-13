# `public void move(double xd, double yd, double zd)`

Moves an entity by the deltas specified.

## Parameters:

* xd: delta between current destination and desired destination in the X axis.
* yd: delta between current destination and desired destination in the Y axis.
* xd: delta between current destination and desired destination in the Z axis.

---

# `public void moveTo(double x, double y, double z, float yRot, float xRot)`

Moves an entity to the coordinates specified with the specified rotation.

## Parameters:

* x: global position in the X axis.
* y: global position in the Y axis.
* x: global position in the Z axis.
* yRot: Pitch axis *(most likely the head of the mob.)*
* xRot: Yaw axis

---

# `public void push(double x, double y, double z)`

Pushes an entity in a direction by adding to the acceleration values.

---

# `public boolean hurt(Entity attacker, int baseDamage, DamageType type)`

Causes damage to an entity. The entity may take into consideration who ever delt it, the amount and the type.
It is worth noting that projectiles don't set themselves as attackers instead the projectile's owner is set as the attacker.