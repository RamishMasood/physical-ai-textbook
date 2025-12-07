---
sidebar_position: 6
---

import Mermaid from '@theme/Mermaid';

# Mermaid Diagrams

This page demonstrates Mermaid diagram support in Docusaurus.

## Robot Control Architecture

<Mermaid chart={`graph TD
    A[User Input] --> B{Control Mode}
    B -->|Position| C[Position Controller]
    B -->|Velocity| D[Velocity Controller]
    B -->|Torque| E[Torque Controller]
    C --> F[Robot Arm]
    D --> F
    E --> F
    F --> G[Sensors]
    G --> H[State Estimation]
    H --> I[Feedback Controller]
    I --> C
    I --> D
    I --> E
`}/>

## Robot Navigation Flow

<Mermaid chart={`sequenceDiagram
    participant R as Robot
    participant L as LIDAR
    participant M as Map
    participant P as Path Planner
    participant C as Controller

    L->>R: Scan environment
    R->>M: Localize
    M->>P: Request path
    P->>R: Provide path
    R->>C: Execute commands
    C->>R: Move to goal
`}/>

## Kinematic Chain Structure

<Mermaid chart={`graph LR
    subgraph Robot
        A[Base] --> B[Joint 1]
        B --> C[Link 1]
        C --> D[Joint 2]
        D --> E[Link 2]
        E --> F[End Effector]
    end
`}/>

## State Machine for Humanoid Walking

<Mermaid chart={`stateDiagram-v2
    [*] --> Standing
    Standing --> Walking: Start Walk
    Walking --> Standing: Stop Command
    Walking --> Stumbling: External Force
    Stumbling --> Walking: Recovery
    Stumbling --> Standing: Fall Detected
    Standing --> [*]
`}/>