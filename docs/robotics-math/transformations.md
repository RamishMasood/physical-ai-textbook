---
sidebar_position: 3
---

# Transformations

This section covers coordinate transformations in robotics.

## Homogeneous Transformations

Homogeneous transformations combine rotation and translation in a single 4x4 matrix:

```
T = [R  p]
    [0  1]
```

Where R is a 3x3 rotation matrix and p is a 3x1 position vector.

## Rotation Representations

Different ways to represent rotations:

- Rotation matrices
- Euler angles
- Quaternions
- Axis-angle representation

## Denavit-Hartenberg Convention

Standard method for defining coordinate frames on robotic links.

Each joint has 4 parameters:
- θ (theta): Joint angle
- d: Joint offset
- a: Link length
- α (alpha): Link twist