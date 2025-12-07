---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Code Examples with Syntax Highlighting

This page demonstrates syntax highlighting for various programming languages used in robotics and AI.

## Python Examples

Python is widely used in robotics and AI development:

```python
import numpy as np
from scipy.spatial.transform import Rotation as R

def quaternion_to_rotation_matrix(q):
    """
    Convert a quaternion to a rotation matrix
    """
    r = R.from_quat(q)
    return r.as_matrix()

def compute_jacobian(robot_config, joint_angles):
    """
    Compute the geometric Jacobian for a robot
    """
    # Implementation of Jacobian computation
    pass
```

## C++ Examples

C++ is used for performance-critical robotics applications:

```cpp
#include <iostream>
#include <vector>
#include <Eigen/Dense>

class KinematicsSolver {
public:
    KinematicsSolver(const std::vector<double>& dh_params)
        : dh_params_(dh_params) {}

    Eigen::MatrixXd computeFK(const std::vector<double>& joint_angles) {
        Eigen::MatrixXd T = Eigen::MatrixXd::Identity(4, 4);

        for (size_t i = 0; i < joint_angles.size(); ++i) {
            // DH parameter extraction
            double a = dh_params_[i * 4];
            double alpha = dh_params_[i * 4 + 1];
            double d = dh_params_[i * 4 + 2];
            double theta = joint_angles[i] + dh_params_[i * 4 + 3];

            // Transformation matrix computation
            Eigen::MatrixXd Ti = Eigen::MatrixXd::Identity(4, 4);
            Ti(0, 0) = cos(theta);
            Ti(0, 1) = -sin(theta) * cos(alpha);
            Ti(0, 2) = sin(theta) * sin(alpha);
            Ti(0, 3) = a * cos(theta);
            Ti(1, 0) = sin(theta);
            Ti(1, 1) = cos(theta) * cos(alpha);
            Ti(1, 2) = -cos(theta) * sin(alpha);
            Ti(1, 3) = a * sin(theta);
            Ti(2, 0) = 0;
            Ti(2, 1) = sin(alpha);
            Ti(2, 2) = cos(alpha);
            Ti(2, 3) = d;

            T = T * Ti;
        }

        return T;
    }

private:
    std::vector<double> dh_params_;
};
```

## JavaScript Examples

JavaScript is used for web-based robotics interfaces:

```javascript
// Robot control interface
class RobotController {
  constructor(robotType) {
    this.robotType = robotType;
    this.jointPositions = new Array(6).fill(0);
    this.isMoving = false;
  }

  async moveJoint(jointIndex, targetPosition) {
    if (jointIndex >= 0 && jointIndex < this.jointPositions.length) {
      const startPosition = this.jointPositions[jointIndex];
      const duration = 1000; // 1 second movement
      const steps = 50;
      const stepSize = (targetPosition - startPosition) / steps;

      for (let i = 1; i <= steps; i++) {
        this.jointPositions[jointIndex] = startPosition + stepSize * i;
        await this.delay(20); // 20ms delay between steps
      }
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

## Language Comparison Tabs

<Tabs groupId="robotics-language">
  <TabItem value="python" label="Python" default>
    ```python
    import rospy
    from sensor_msgs.msg import JointState
    import numpy as np

    class JointController:
        def __init__(self):
            self.joint_names = ["joint1", "joint2", "joint3"]
            self.current_positions = [0.0, 0.0, 0.0]

            # Subscribe to joint states
            rospy.Subscriber("/joint_states", JointState, self.joint_callback)

        def joint_callback(self, msg):
            for i, name in enumerate(self.joint_names):
                if name in msg.name:
                    idx = msg.name.index(name)
                    self.current_positions[i] = msg.position[idx]

        def move_to_pose(self, target_positions):
            # Move joints to target positions
            error = np.array(target_positions) - np.array(self.current_positions)
            if np.all(np.abs(error) < 0.01):  # tolerance
                return True
            return False
    ```
  </TabItem>
  <TabItem value="cpp" label="C++">
    ```cpp
    #include <ros/ros.h>
    #include <sensor_msgs/JointState.h>
    #include <vector>
    #include <algorithm>

    class JointController {
    public:
        JointController() {
            joint_names_ = {"joint1", "joint2", "joint3"};
            current_positions_ = {0.0, 0.0, 0.0};

            // Subscribe to joint states
            joint_sub_ = nh_.subscribe("/joint_states", 10,
                                    &JointController::jointCallback, this);
        }

        void jointCallback(const sensor_msgs::JointState::ConstPtr& msg) {
            for (size_t i = 0; i < joint_names_.size(); ++i) {
                auto it = std::find(msg->name.begin(), msg->name.end(),
                                   joint_names_[i]);
                if (it != msg->name.end()) {
                    int idx = std::distance(msg->name.begin(), it);
                    current_positions_[i] = msg->position[idx];
                }
            }
        }

        bool moveToPose(const std::vector<double>& target_positions) {
            // Move joints to target positions
            bool reached = true;
            for (size_t i = 0; i < target_positions.size(); ++i) {
                if (std::abs(target_positions[i] - current_positions_[i]) > 0.01) {
                    reached = false;
                    break;
                }
            }
            return reached;
        }

    private:
        ros::NodeHandle nh_;
        ros::Subscriber joint_sub_;
        std::vector<std::string> joint_names_;
        std::vector<double> current_positions_;
    };
    ```
  </TabItem>
</Tabs>