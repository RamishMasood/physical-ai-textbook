---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Code Syntax Highlighting and Tabs

This tutorial demonstrates code syntax highlighting and tabs in Docusaurus.

## Python Code Example

```python
def forward_kinematics(joint_angles):
    """
    Calculate end-effector position from joint angles
    """
    import numpy as np

    # Create transformation matrices for each joint
    T = np.eye(4)  # 4x4 identity matrix

    for i, angle in enumerate(joint_angles):
        # Create rotation matrix for this joint
        R = np.array([
            [np.cos(angle), -np.sin(angle), 0],
            [np.sin(angle),  np.cos(angle), 0],
            [0,              0,             1]
        ])

        # Calculate position transformation
        # (simplified for example)
        T_joint = np.eye(4)
        T_joint[:3, :3] = R

        # Combine transformations
        T = T @ T_joint

    return T
```

## C++ Code Example

```cpp
#include <vector>
#include <Eigen/Dense>

class RobotController {
public:
    RobotController(int num_joints) : num_joints_(num_joints) {
        joint_positions_.resize(num_joints);
        joint_velocities_.resize(num_joints);
    }

    Eigen::MatrixXd forwardKinematics(const std::vector<double>& joint_angles) {
        Eigen::MatrixXd T = Eigen::MatrixXd::Identity(4, 4);

        for (int i = 0; i < joint_angles.size(); i++) {
            // Simplified transformation calculation
            double c = cos(joint_angles[i]);
            double s = sin(joint_angles[i]);

            Eigen::MatrixXd R(3, 3);
            R << c, -s, 0,
                 s,  c, 0,
                 0,  0, 1;

            // Combine with previous transformation
            // (simplified for example)
        }

        return T;
    }

private:
    int num_joints_;
    std::vector<double> joint_positions_;
    std::vector<double> joint_velocities_;
};
```

## JavaScript Code Example

```javascript
class RobotSimulator {
  constructor() {
    this.jointAngles = [0, 0, 0];
    this.position = {x: 0, y: 0, z: 0};
  }

  forwardKinematics(jointAngles) {
    // Calculate end-effector position
    const x = Math.cos(jointAngles[0]) * Math.cos(jointAngles[1]);
    const y = Math.sin(jointAngles[0]) * Math.cos(jointAngles[1]);
    const z = Math.sin(jointAngles[1]);

    return {x, y, z};
  }

  updatePosition() {
    this.position = this.forwardKinematics(this.jointAngles);
    return this.position;
  }
}
```

## Code Tabs Example

<Tabs>
  <TabItem value="python" label="Python" default>
    ```python
    def calculate_trajectory(waypoints):
        trajectory = []
        for i in range(len(waypoints) - 1):
            start = waypoints[i]
            end = waypoints[i + 1]

            # Linear interpolation between waypoints
            for t in np.linspace(0, 1, num=10):
                point = start + t * (end - start)
                trajectory.append(point)

        return trajectory
    ```
  </TabItem>
  <TabItem value="cpp" label="C++">
    ```cpp
    std::vector<Eigen::Vector3d> calculateTrajectory(
        const std::vector<Eigen::Vector3d>& waypoints) {

        std::vector<Eigen::Vector3d> trajectory;

        for (size_t i = 0; i < waypoints.size() - 1; i++) {
            Eigen::Vector3d start = waypoints[i];
            Eigen::Vector3d end = waypoints[i + 1];

            // Linear interpolation between waypoints
            for (int j = 0; j <= 10; j++) {
                double t = static_cast<double>(j) / 10.0;
                Eigen::Vector3d point = start + t * (end - start);
                trajectory.push_back(point);
            }
        }

        return trajectory;
    }
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    function calculateTrajectory(waypoints) {
      const trajectory = [];

      for (let i = 0; i < waypoints.length - 1; i++) {
        const start = waypoints[i];
        const end = waypoints[i + 1];

        // Linear interpolation between waypoints
        for (let j = 0; j <= 10; j++) {
          const t = j / 10;
          const point = {
            x: start.x + t * (end.x - start.x),
            y: start.y + t * (end.y - start.y),
            z: start.z + t * (end.z - start.z)
          };
          trajectory.push(point);
        }
      }

      return trajectory;
    }
    ```
  </TabItem>
</Tabs>