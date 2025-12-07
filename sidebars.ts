import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  textbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Foundations',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'foundations-week-1',
          items: ['foundations/math-basics', 'foundations/physics-basics'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'foundations-week-2',
          items: ['foundations/control-theory'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Robotics Math',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'robotics-math-week-1',
          items: ['robotics-math/kinematics'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'robotics-math-week-2',
          items: ['robotics-math/dynamics'],
        },
        {
          type: 'category',
          label: 'Week 3',
          key: 'robotics-math-week-3',
          items: ['robotics-math/transformations'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Control Systems',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'control-systems-week-1',
          items: ['control-systems/classical-control'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'control-systems-week-2',
          items: ['control-systems/modern-control'],
        },
        {
          type: 'category',
          label: 'Week 3',
          key: 'control-systems-week-3',
          items: ['control-systems/adaptive-control'],
        },
      ],
    },
    {
      type: 'category',
      label: 'ROS 2',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'ros2-week-1',
          items: ['ros2/introduction'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'ros2-week-2',
          items: ['ros2/nodes-topics'],
        },
        {
          type: 'category',
          label: 'Week 3',
          key: 'ros2-week-3',
          items: ['ros2/packages-development'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Sensor Fusion',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'sensor-fusion-week-1',
          items: ['sensor-fusion/introduction'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'sensor-fusion-week-2',
          items: ['sensor-fusion/filters'],
        },
        {
          type: 'category',
          label: 'Week 3',
          key: 'sensor-fusion-week-3',
          items: ['sensor-fusion/multi-sensor'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Simulation',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'simulation-week-1',
          items: ['simulation/gazebo'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'simulation-week-2',
          items: ['simulation/webots'],
        },
        {
          type: 'category',
          label: 'Week 3',
          key: 'simulation-week-3',
          items: ['simulation/custom-environments'],
        },
      ],
    },
    {
      type: 'category',
      label: 'AI Agents',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'ai-agents-week-1',
          items: ['ai-agents/ml-fundamentals'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'ai-agents-week-2',
          items: ['ai-agents/reinforcement-learning'],
        },
        {
          type: 'category',
          label: 'Week 3',
          key: 'ai-agents-week-3',
          items: ['ai-agents/planning'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Humanoid Robotics',
      items: [
        {
          type: 'category',
          label: 'Week 1',
          key: 'humanoid-robotics-week-1',
          items: ['humanoid-robotics/introduction'],
        },
        {
          type: 'category',
          label: 'Week 2',
          key: 'humanoid-robotics-week-2',
          items: ['humanoid-robotics/locomotion'],
        },
        {
          type: 'category',
          label: 'Week 3',
          key: 'humanoid-robotics-week-3',
          items: ['humanoid-robotics/manipulation'],
        },
        {
          type: 'category',
          label: 'Week 4',
          key: 'humanoid-robotics-week-4',
          items: ['humanoid-robotics/cognition'],
        },
      ],
    },
  ],
};

export default sidebars;
