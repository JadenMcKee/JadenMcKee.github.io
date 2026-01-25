---
title: "Automotive Brake System Design & Analysis"
date: 2025-12-15
categories:
  - Design
  - Analysis
math: true
toc: true
---

## Project Overview

This project involved the design and finite element analysis of an automotive disc brake system for a mid-size passenger vehicle. The objective was to optimize the brake rotor design for improved thermal performance while maintaining structural integrity and reducing weight.

## Objectives

- Design a ventilated disc brake rotor with optimal cooling characteristics
- Perform thermal and structural FEA analysis
- Reduce weight by 15% compared to baseline design
- Ensure compliance with automotive safety standards

## Design Process

### Initial Design

The brake rotor was designed using **SolidWorks** with the following key parameters:

- **Outer Diameter**: 320 mm
- **Inner Diameter**: 180 mm
- **Thickness**: 28 mm (ventilated design)
- **Material**: Cast Iron (G3500)

### CAD Modeling

The 3D model included:
- Ventilated disc with curved vanes for improved airflow
- Optimized vane geometry for thermal dissipation
- Chamfered edges to reduce stress concentrations

![Brake Rotor Design](/assets/img/brake-rotor-design.png)
*Figure 1: 3D CAD model of the ventilated brake rotor*

## Analysis & Simulation

### Thermal Analysis

Using **ANSYS Workbench**, I performed a transient thermal analysis to simulate brake application:

**Boundary Conditions:**
- Heat flux: 1.2 MW/m² (typical for emergency braking)
- Convection coefficient: 50 W/m²·K (air cooling)
- Initial temperature: 20°C

**Results:**
- Maximum temperature: 450°C (within safe operating range)
- Temperature distribution showed effective heat dissipation through vanes
- No thermal hotspots detected

### Structural Analysis

Static structural analysis was conducted to evaluate stress distribution:

**Load Conditions:**
- Braking force: 8 kN
- Rotational speed: 1000 RPM
- Friction coefficient: 0.4

**Results:**
- Maximum von Mises stress: 180 MPa (below yield strength of 250 MPa)
- Safety factor: 1.39
- Displacement: 0.15 mm (acceptable deformation)

![Stress Analysis](/assets/img/brake-stress-analysis.png)
*Figure 2: Von Mises stress distribution*

## Optimization

### Weight Reduction

Through iterative design optimization:
- Reduced vane thickness by 20% while maintaining structural integrity
- Optimized disc thickness profile
- **Achieved**: 16% weight reduction (from 4.2 kg to 3.5 kg)

### Performance Improvements

- Improved cooling efficiency by 12% through optimized vane geometry
- Reduced thermal gradients, improving brake fade resistance
- Maintained all structural safety requirements

## Manufacturing Considerations

- Designed for casting process compatibility
- GD&T applied for critical dimensions
- Draft angles included for mold release
- Surface finish specifications defined

## Results & Validation

### Key Achievements

✅ **Weight Reduction**: 16% lighter than baseline  
✅ **Thermal Performance**: Improved heat dissipation  
✅ **Structural Integrity**: All safety factors met  
✅ **Cost Effective**: No increase in manufacturing complexity  

### Testing Recommendations

- Dynamometer testing for validation
- Thermal imaging during brake applications
- Material testing for fatigue life prediction

## Technical Specifications

| Parameter | Value | Unit |
|-----------|-------|------|
| Outer Diameter | 320 | mm |
| Inner Diameter | 180 | mm |
| Disc Thickness | 28 | mm |
| Vane Count | 36 | - |
| Weight | 3.5 | kg |
| Max Operating Temp | 450 | °C |
| Safety Factor | 1.39 | - |

## Tools & Software Used

- **CAD**: SolidWorks 2023
- **FEA**: ANSYS Workbench 2023 R1
- **Analysis**: MATLAB (for data processing)
- **Documentation**: Technical drawings per ASME Y14.5

## Lessons Learned

1. **Thermal vs. Structural Trade-offs**: Optimizing for thermal performance can impact structural strength - careful balance required
2. **Manufacturing Constraints**: Design must account for casting limitations early in the process
3. **Iterative Design**: Multiple analysis iterations were crucial for finding optimal solution

## Future Improvements

- Explore alternative materials (carbon-ceramic composites)
- Investigate active cooling systems
- Develop predictive maintenance algorithms based on thermal data

---

## References

1. Limpert, R. (2011). *Brake Design and Safety*. SAE International.
2. ANSYS Inc. (2023). *ANSYS Mechanical APDL Theory Reference*.
3. Automotive Brake Standards: SAE J2707, ISO 26262

---

*This project demonstrates proficiency in CAD design, FEA analysis, and engineering optimization. For questions or collaboration opportunities, please [contact me](/contact/).*
