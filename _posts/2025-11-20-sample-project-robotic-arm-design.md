---
title: "Freespace Cryostat Upgrades"
date: 2026-1-20
categories:
  - Manufacturing
  - Design
math: true
toc: true
---

## Project Overview

Designed and implemented mechanical upgrades to cryostat in order to improve ease of use

## Objectives

- Design a lightweight 6-DOF robotic arm with 500mm reach
- Develop kinematic models for motion planning
- Create a functional prototype using additive manufacturing
- Validate design through simulation and physical testing

## Design Specifications

### Mechanical Design

**Key Parameters:**
- **Reach**: 500 mm
- **Payload**: 2 kg
- **Repeatability**: ±0.5 mm
- **Weight**: 3.5 kg (excluding base)
- **Actuators**: 6 servo motors (20 kg·cm torque)

### Link Configuration

The arm consists of 6 revolute joints:

1. **Base Rotation** (Joint 1): 360° continuous
2. **Shoulder Pitch** (Joint 2): -90° to +90°
3. **Elbow Pitch** (Joint 3): -135° to +135°
4. **Wrist Roll** (Joint 4): 360° continuous
5. **Wrist Pitch** (Joint 5): -90° to +90°
6. **End Effector Roll** (Joint 6): 360° continuous

## CAD Modeling

The ACME lead screw jack was designed in **SolidWorks** with emphasis on:

- **Lightweight Structure**: Optimized link geometry using topology optimization
- **Stiffness**: Ensured adequate rigidity for precision tasks
- **Cable Management**: Integrated cable routing channels
- **Modularity**: Standardized joint interfaces for easy maintenance

![Robotic Arm Assembly](/assets/img/robotic-arm-assembly.png)
*Figure 1: Complete 6-DOF robotic arm assembly*

## Kinematic Analysis

### Forward Kinematics

Developed forward kinematics model using **Denavit-Hartenberg (D-H) parameters**:

The transformation matrix for each joint was calculated using:

$$T_i = \begin{bmatrix}
\cos(\theta_i) & -\sin(\theta_i)\cos(\alpha_i) & \sin(\theta_i)\sin(\alpha_i) & a_i\cos(\theta_i) \\
\sin(\theta_i) & \cos(\theta_i)\cos(\alpha_i) & -\cos(\theta_i)\sin(\alpha_i) & a_i\sin(\theta_i) \\
0 & \sin(\alpha_i) & \cos(\alpha_i) & d_i \\
0 & 0 & 0 & 1
\end{bmatrix}$$

### Inverse Kinematics

Implemented inverse kinematics solver in **MATLAB** using:
- Geometric approach for first 3 joints
- Analytical solution for wrist joints
- Singularity detection and avoidance

### Workspace Analysis

- **Reachable Workspace**: Spherical volume with 500mm radius
- **Dexterous Workspace**: Smaller volume where all orientations are achievable
- **Singularity Zones**: Identified and avoided in path planning

![Workspace Visualization](/assets/img/workspace-analysis.png)
*Figure 2: Reachable workspace visualization*

## Control System

### Motion Planning

Developed trajectory planning algorithms:
- **Point-to-Point**: Cubic spline interpolation
- **Continuous Path**: Linear interpolation with orientation control
- **Collision Avoidance**: Workspace constraints

### Implementation

- **Microcontroller**: Arduino Mega 2560
- **Control Algorithm**: PID control for each joint
- **Communication**: Serial interface for trajectory commands

## Prototyping

### 3D Printing

- **Material**: PLA (Polylactic Acid) for initial prototype
- **Print Settings**: 0.2mm layer height, 20% infill
- **Post-Processing**: Sanding and assembly with metal fasteners

### Assembly Challenges

- **Tolerance Management**: Designed press-fit joints for servo mounting
- **Cable Routing**: Integrated channels prevented interference
- **Weight Distribution**: Balanced design to minimize motor loads

## Testing & Validation

### Performance Metrics

| Metric | Target | Achieved |
|--------|--------|----------|
| Reach | 500 mm | 495 mm |
| Payload | 2 kg | 2.1 kg |
| Repeatability | ±0.5 mm | ±0.4 mm |
| Speed | 30°/s | 32°/s |

### Test Results

✅ **Position Accuracy**: Within ±0.4mm across workspace  
✅ **Payload Capacity**: Successfully lifted 2.1kg  
✅ **Repeatability**: Consistent positioning over 100 cycles  
✅ **Smooth Motion**: No jerky movements or vibrations  

## Technical Challenges & Solutions

### Challenge 1: Singularity Avoidance
**Problem**: Arm enters singular configurations at workspace boundaries  
**Solution**: Implemented singularity detection in inverse kinematics solver

### Challenge 2: Weight Optimization
**Problem**: Initial design exceeded weight budget  
**Solution**: Topology optimization reduced material while maintaining stiffness

### Challenge 3: Cable Management
**Problem**: Cables interfered with joint motion  
**Solution**: Redesigned links with integrated cable channels

## Tools & Software

- **CAD**: SolidWorks 2023
- **Analysis**: MATLAB R2023a
- **Simulation**: Simulink for control system design
- **3D Printing**: Ultimaker Cura
- **Electronics**: Arduino IDE

## Future Enhancements

1. **Material Upgrade**: Replace PLA with carbon fiber composite for production
2. **Force Control**: Add force/torque sensors for compliant manipulation
3. **Vision Integration**: Implement computer vision for object detection
4. **Machine Learning**: Train neural network for improved path planning

## Project Files

- CAD models and drawings
- MATLAB kinematic analysis scripts
- Arduino control code
- Assembly instructions

---

## References

1. Spong, M. W., et al. (2020). *Robot Modeling and Control*. Wiley.
2. Craig, J. J. (2005). *Introduction to Robotics: Mechanics and Control*. Pearson.
3. Denavit, J., & Hartenberg, R. S. (1955). "A kinematic notation for lower-pair mechanisms based on matrices."

---

*This project demonstrates skills in mechanical design, kinematic analysis, control systems, and rapid prototyping. For technical details or collaboration, please [contact me](/contact/).*
