---
sidebar_position: 3
---

# ROS 2 Packages and Development

This section covers creating and managing ROS 2 packages.

## Package Structure

A typical ROS 2 package includes:

```
my_package/
├── CMakeLists.txt
├── package.xml
├── src/
│   └── my_node.cpp
├── include/
│   └── my_package/
│       └── my_header.hpp
├── launch/
│   └── my_launch_file.py
├── config/
│   └── my_config.yaml
└── test/
    └── test_my_package.cpp
```

## Creating a Package

Using the create package tool:

```bash
ros2 pkg create --build-type ament_cmake my_package
```

## CMakeLists.txt

Essential CMake configuration:

```cmake
cmake_minimum_required(VERSION 3.8)
project(my_package)

find_package(ament_cmake REQUIRED)
find_package(rclcpp REQUIRED)
find_package(std_msgs REQUIRED)

add_executable(my_node src/my_node.cpp)
ament_target_dependencies(my_node rclcpp std_msgs)

install(TARGETS my_node DESTINATION lib/${PROJECT_NAME})

ament_package()
```

## Package.xml

Package metadata:

```xml
<?xml version="1.0"?>
<?xml-model href="http://download.ros.org/schema/package_format3.xsd" schematypens="http://www.w3.org/2001/XMLSchema"?>
<package format="3">
  <name>my_package</name>
  <version>0.0.0</version>
  <description>TODO: Package description</description>
  <maintainer email="user@todo.todo">user</maintainer>
  <license>TODO: License declaration</license>

  <buildtool_depend>ament_cmake</buildtool_depend>

  <depend>rclcpp</depend>
  <depend>std_msgs</depend>

  <test_depend>ament_lint_auto</test_depend>
  <test_depend>ament_lint_common</test_depend>

  <export>
    <build_type>ament_cmake</build_type>
  </export>
</package>
```