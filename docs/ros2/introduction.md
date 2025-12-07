---
sidebar_position: 1
---

# Introduction to ROS 2

This section provides an introduction to Robot Operating System 2 (ROS 2).

## What is ROS 2?

ROS 2 is the next generation of the Robot Operating System, designed to provide better support for real-world applications.

## Key Concepts

- **Nodes**: Individual components of a ROS system
- **Topics**: Communication channels for data streams
- **Services**: Request/response communication patterns
- **Actions**: Goal-oriented communication with feedback

## Example Code

```python
import rclpy
from rclpy.node import Node

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World'
        self.publisher.publish(msg)
```