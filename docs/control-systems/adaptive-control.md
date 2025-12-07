---
sidebar_position: 3
---

# Adaptive Control

This section covers adaptive control techniques for systems with uncertain or changing parameters.

## Model Reference Adaptive Control (MRAC)

MRAC adjusts controller parameters to make the plant follow a reference model:

- Reference model: Defines desired behavior
- Parameter adaptation: Adjusts controller to minimize error
- Stability: Ensured through Lyapunov methods

## Self-Tuning Regulators (STR)

STR methods estimate plant parameters online and tune the controller:

1. Parameter estimation (e.g., recursive least squares)
2. Controller calculation using estimated parameters
3. Continuous adaptation

## Gain Scheduling

Gain scheduling adjusts controller parameters based on operating conditions:

- Operating point dependent gains
- Multiple models for different conditions
- Smooth interpolation between operating points

## Applications

- Aircraft control (changing flight conditions)
- Process control (varying operating conditions)
- Robotics (changing loads)
- Automotive systems (varying road conditions)