---
sidebar_position: 2
---

# Dynamics

This section covers robotics dynamics - the study of motion with consideration of forces that cause it.

## Newton-Euler Formulation

The Newton-Euler approach to dynamics:

- Linear motion: F = ma
- Rotational motion: τ = Iα

## Lagrangian Formulation

The Lagrangian approach uses energy methods:

- Kinetic energy (T)
- Potential energy (V)
- Lagrangian: L = T - V

## Equations of Motion

The general form of robot dynamics:

```
M(q)q̈ + C(q, q̇)q̇ + G(q) = τ
```

Where:
- M(q) is the mass matrix
- C(q, q̇) contains Coriolis and centrifugal terms
- G(q) contains gravitational terms
- τ represents joint torques