---
sidebar_position: 2
---

# Webots Simulation

This section covers Webots, an open-source robotics simulation software.

## Overview

Webots provides:
- Physics simulation based on Open Dynamics Engine (ODE)
- 3D visualization
- Built-in robot models
- Programming interfaces for multiple languages

## World Files

World files define the simulation environment in VRML97 format:

```
#VRML_SIM R2022b utf8
WorldInfo {
  title "My Simulation"
}
Viewpoint {
  orientation -0.5 -0.5 -0.7 2.09
  position 0.9 1.2 1.0
}
```

## Robot Prototypes

Robots are defined using PROTO files that specify:

- Physical properties
- Sensors
- Actuators
- Controllers

## Programming

Controllers can be written in:
- C
- C++
- Python
- Java
- MATLAB
- ROS