---
sidebar_position: 2
---

# Contributing

This guide explains how to contribute content to the Physical AI & Humanoid Robotics textbook.

## Content Structure

The textbook is organized by modules and weeks:

```
docs/
├── foundations/           # Foundations module
├── robotics-math/        # Robotics Math module
├── control-systems/      # Control Systems module
├── ros2/                 # ROS 2 module
├── sensor-fusion/        # Sensor Fusion module
├── simulation/           # Simulation module
├── ai-agents/            # AI Agents module
├── humanoid-robotics/    # Humanoid Robotics module
└── tutorial-basics/      # Tutorial content
```

Each module contains content organized by weeks, following the structure:

```
module-name/
├── week-1/
│   ├── topic-1.md
│   └── topic-2.md
├── week-2/
│   ├── topic-1.md
│   └── topic-2.md
└── week-3/
    ├── topic-1.md
    └── topic-2.md
```

## Writing Content

### Frontmatter

Each document should include frontmatter with a sidebar position:

```markdown
---
sidebar_position: 1
---

# Title of the Document

Content goes here...
```

### Admonitions

Use admonitions to highlight important information:

```markdown
:::note
This is a note.
:::

:::tip
This is a helpful tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a danger notice.
:::
```

### Code Blocks

Use appropriate language identifiers for syntax highlighting:

```python
def example_function():
    """Example Python code"""
    return "Hello, Robotics!"
```

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, Robotics!" << std::endl;
    return 0;
}
```

### Tabs

Use tabs to show the same concept in different languages:

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

&lt;Tabs&gt;
  &lt;TabItem value="python" label="Python" default&gt;
    ```python
    print("Hello, Python!")
    ```
  &lt;/TabItem&gt;
  &lt;TabItem value="cpp" label="C++"&gt;
    ```cpp
    std::cout << "Hello, C++!" << std::endl;
    ```
  &lt;/TabItem&gt;
&lt;/Tabs&gt;

## Custom Components

### Learning Objectives

Use the LearningObjectives component to define what students should learn:

```markdown
import { LearningObjectives, ObjectiveItem } from '@site/src/components/LearningObjectives';

<LearningObjectives>
  <ObjectiveItem>Understand the basics of kinematics</ObjectiveItem>
  <ObjectiveItem>Learn how to calculate forward kinematics</ObjectiveItem>
</LearningObjectives>
```

### Key Takeaways

Use the KeyTakeaways component to summarize important points:

```markdown
import { KeyTakeaways, TakeawayItem } from '@site/src/components/KeyTakeaways';

<KeyTakeaways>
  <TakeawayItem>Kinematics describes motion without considering forces</TakeawayItem>
  <TakeawayItem>Forward kinematics calculates end-effector position from joint angles</TakeawayItem>
</KeyTakeaways>
```

### Exercise Problems

Use the ExerciseProblem component for practice problems:

```markdown
import ExerciseProblem from '@site/src/components/ExerciseProblem';

<ExerciseProblem
  title="Forward Kinematics Problem"
  problem="Calculate the end-effector position for a 2-DOF planar manipulator with link lengths L1=1m and L2=0.5m, with joint angles θ1=30° and θ2=45°."
  solution="The solution involves calculating transformation matrices for each joint and multiplying them together."
  difficulty="medium">
  <p>Use the DH parameters to solve this problem.</p>
</ExerciseProblem>
```

## Mermaid Diagrams

Create diagrams using Mermaid:

```markdown
import Mermaid from '@theme/Mermaid';

<Mermaid chart={`graph TD
    A[Start] --> B{Decision}
    B -->|Condition 1| C[Result 1]
    B -->|Condition 2| D[Result 2]
`}/>
```

## Images and Assets

Place images in the `static/img/` directory and reference them as:

```markdown
![Description](/img/robot-configuration.png)
```

## Internationalization

Content can be translated by adding files to the `i18n/` directory:

```
i18n/
├── en/  # English
└── ur/  # Urdu
```

## Testing

Before submitting content:

1. Run `npm start` to start the development server
2. Verify that your content renders correctly
3. Check that all links work properly
4. Ensure code examples are accurate