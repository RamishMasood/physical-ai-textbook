---
sidebar_position: 2
---

# Modern Control

This section covers modern control theory concepts.

## State-Space Representation

State-space models represent systems with state variables:

```
ẋ = Ax + Bu
y = Cx + Du
```

Where:
- x is the state vector
- u is the input vector
- y is the output vector
- A, B, C, D are system matrices

## Linear Quadratic Regulator (LQR)

LQR optimizes a quadratic cost function:

```
J = ∫[xᵀQx + uᵀRu]dt
```

The optimal control law is: u = -Kx

## Observers and State Estimation

When state variables aren't directly measurable:

- **Luenberger observer**: For linear systems
- **Kalman filter**: For systems with noise
- **Extended Kalman filter**: For nonlinear systems

## Model Predictive Control (MPC)

MPC solves an optimization problem at each time step:

- Considers future predictions
- Handles constraints explicitly
- Receding horizon approach