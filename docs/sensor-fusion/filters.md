---
sidebar_position: 2
---

# Filtering Techniques

This section covers various filtering techniques used in sensor fusion.

## Kalman Filter

The Kalman filter is optimal for linear systems with Gaussian noise:

### Prediction Step
```
x̂ₖ⁻ = Fₖx̂ₖ₋₁ + Bₖuₖ
Pₖ⁻ = FₖPₖ₋₁Fₖᵀ + Qₖ
```

### Update Step
```
Kₖ = Pₖ⁻Hₖᵀ(Sₖ⁻¹)
x̂ₖ = x̂ₖ⁻ + Kₖ(zₖ - Hₖx̂ₖ⁻)
Pₖ = (I - KₖHₖ)Pₖ⁻
```

## Extended Kalman Filter (EKF)

For nonlinear systems, the EKF linearizes around the current estimate.

## Unscented Kalman Filter (UKF)

The UKF uses a deterministic sampling approach to capture the mean and covariance more accurately.

## Particle Filter

A non-parametric filter that represents the probability distribution with particles:

- Better for multimodal distributions
- Computationally more expensive
- Suitable for non-Gaussian noise