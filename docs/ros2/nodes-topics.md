---
sidebar_position: 2
---

# Nodes and Topics

This section covers the fundamental communication concepts in ROS 2.

## Nodes

Nodes are the fundamental building blocks of ROS applications:

- Each node runs a specific task
- Nodes communicate with each other through topics, services, and actions
- Nodes are implemented as processes

## Topics

Topics provide asynchronous, many-to-many communication:

- Publisher-subscriber pattern
- Data is published to topics
- Multiple subscribers can listen to the same topic
- Message types are defined with .msg files

## Example Publisher

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

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

## Example Subscriber

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)
```