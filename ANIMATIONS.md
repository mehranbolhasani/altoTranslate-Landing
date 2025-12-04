# GSAP Animations Guide

This project includes 25 smooth, performant entrance animations powered by GSAP (GreenSock Animation Platform).

## Available Animations

### Fade Animations
- `animate-fade-in` - Simple fade in
- `animate-fade-in-up` - Fade in from bottom
- `animate-fade-in-down` - Fade in from top
- `animate-fade-in-left` - Fade in from right
- `animate-fade-in-right` - Fade in from left

### Slide Animations
- `animate-slide-up` - Slide up with fade
- `animate-slide-down` - Slide down with fade
- `animate-slide-left` - Slide from right
- `animate-slide-right` - Slide from left

### Scale Animations
- `animate-scale-in` - Scale from 0.8 with bounce
- `animate-scale-up` - Scale from 0.9
- `animate-zoom-in` - Zoom in from 0.5
- `animate-zoom-out` - Zoom out from 1.3

### Rotation Animations
- `animate-rotate-in` - Rotate in from -15deg
- `animate-flip-x` - Flip on X axis
- `animate-flip-y` - Flip on Y axis

### Special Effects
- `animate-blur-in` - Blur to clear
- `animate-bounce-in` - Bounce entrance
- `animate-elastic-in` - Elastic entrance
- `animate-back-in` - Back entrance with overshoot

### Smooth Animations
- `animate-smooth-fade` - Ultra-smooth fade
- `animate-smooth-slide` - Smooth slide up
- `animate-smooth-scale` - Smooth scale
- `animate-smooth-rotate` - Smooth rotation
- `animate-smooth-blur` - Smooth blur transition

## Usage

### Basic Usage with Tailwind Classes

Simply add the animation class to any element:

```tsx
<div className="animate-fade-in-up">
  Content that fades in from bottom
</div>
```

### On Page Load vs On Scroll

By default, animations trigger **on scroll** when the element enters the viewport. To trigger on page load, use the `data-trigger` attribute:

```tsx
{/* Animate on scroll (default) */}
<div className="animate-fade-in-up">
  Content
</div>

{/* Animate on page load */}
<div className="animate-fade-in-up" data-trigger="onLoad">
  Content
</div>
```

### Duration Control

Control animation duration using data attributes:

```tsx
{/* Fast animation (0.4s) */}
<div className="animate-fade-in-up" data-duration="0.4">
  Fast content
</div>

{/* Normal animation (0.8s - default) */}
<div className="animate-fade-in-up" data-duration="0.8">
  Normal content
</div>

{/* Slow animation (1.2s) */}
<div className="animate-fade-in-up" data-duration="1.2">
  Slow content
</div>
```

### Delay Control

Add delays to stagger animations:

```tsx
<div className="animate-fade-in-up" data-delay="0">
  First item
</div>
<div className="animate-fade-in-up" data-delay="0.2">
  Second item (0.2s delay)
</div>
<div className="animate-fade-in-up" data-delay="0.4">
  Third item (0.4s delay)
</div>
```

### Stagger Animations

For multiple children, use stagger containers:

```tsx
<div 
  data-stagger 
  data-stagger-animation="fadeInUp"
  data-stagger="0.1"
  data-duration="0.8"
>
  <div data-stagger-child>Item 1</div>
  <div data-stagger-child>Item 2</div>
  <div data-stagger-child>Item 3</div>
</div>
```

**Stagger Attributes:**
- `data-stagger` - Marks container for stagger animation
- `data-stagger-animation` - Animation type (default: "fadeInUp")
- `data-stagger-delay` - Delay between items in seconds (default: 0.1)
- `data-duration` - Duration for each item
- `data-delay` - Initial delay before first item

### Advanced Scroll Trigger Options

Customize scroll trigger behavior:

```tsx
<div 
  className="animate-fade-in-up"
  data-start="top 80%"      // Start animation when top of element is 80% down viewport
  data-end="bottom 20%"      // End trigger when bottom is 20% down viewport
  data-once="false"          // Allow animation to reverse on scroll up
>
  Content
</div>
```

### Using the Hook API

For programmatic control, use the `useAnimation` hook:

```tsx
import { useAnimation } from "@/lib/use-animations"

const MyComponent = () => {
  const ref = useAnimation("fadeInUp", {
    trigger: "onScroll",
    duration: 0.8,
    delay: 0.2,
  })

  return <div ref={ref}>Animated content</div>
}
```

### Using the Component API

Wrap content with the `GSAPAnimation` component:

```tsx
import { GSAPAnimation } from "@/components/gsap-animations"

<GSAPAnimation 
  animation="fadeInUp" 
  trigger="onScroll"
  duration={0.8}
  delay={0.2}
>
  <div>Animated content</div>
</GSAPAnimation>
```

## Performance Optimizations

The animation system includes several performance optimizations:

1. **Lazy Initialization** - Animations only initialize when elements are in viewport
2. **ScrollTrigger Refresh Priority** - Optimized refresh cycles
3. **Once-by-Default** - Animations play once to reduce overhead
4. **Hardware Acceleration** - GSAP uses transform and opacity for GPU acceleration
5. **Debounced Refresh** - ScrollTrigger refreshes are optimized

## ScrollSmoother

Smooth scrolling is enabled by default via GSAP's ScrollSmoother plugin (premium feature). If you have a GSAP premium license, smooth scrolling will work automatically. If not, the site will function normally with standard scrolling.

To disable smooth scrolling:

```tsx
// In app/layout.tsx
<AnimationProvider enableScrollSmoother={false}>
  {children}
</AnimationProvider>
```

## Examples

### Hero Section
```tsx
<section className="animate-fade-in-up" data-trigger="onLoad" data-duration="1">
  <h1>Welcome</h1>
</section>
```

### Feature Cards
```tsx
<div className="grid grid-cols-3 gap-4" data-stagger data-stagger-delay="0.15">
  <div className="animate-scale-in" data-stagger-child>Feature 1</div>
  <div className="animate-scale-in" data-stagger-child>Feature 2</div>
  <div className="animate-scale-in" data-stagger-child>Feature 3</div>
</div>
```

### Sequential Content
```tsx
<div className="animate-fade-in-left" data-delay="0">First</div>
<div className="animate-fade-in-left" data-delay="0.2">Second</div>
<div className="animate-fade-in-left" data-delay="0.4">Third</div>
```

## Best Practices

1. **Use appropriate animations** - Subtle animations work best for most content
2. **Don't over-animate** - Too many animations can be distracting
3. **Consider performance** - Use `data-once="true"` (default) for better performance
4. **Test on mobile** - Some animations may need adjustment for mobile devices
5. **Accessibility** - Respect `prefers-reduced-motion` (can be added as enhancement)

## Animation Reference

| Class | Type | Description |
|-------|------|-------------|
| `animate-fade-in` | Fade | Simple opacity transition |
| `animate-fade-in-up` | Fade + Move | Fade in from bottom |
| `animate-fade-in-down` | Fade + Move | Fade in from top |
| `animate-fade-in-left` | Fade + Move | Fade in from right |
| `animate-fade-in-right` | Fade + Move | Fade in from left |
| `animate-slide-up` | Slide | Slide up with fade |
| `animate-slide-down` | Slide | Slide down with fade |
| `animate-slide-left` | Slide | Slide from right |
| `animate-slide-right` | Slide | Slide from left |
| `animate-scale-in` | Scale | Scale with bounce effect |
| `animate-scale-up` | Scale | Subtle scale up |
| `animate-rotate-in` | Rotate | Rotate in from angle |
| `animate-blur-in` | Blur | Blur to clear transition |
| `animate-zoom-in` | Zoom | Zoom in from small |
| `animate-zoom-out` | Zoom | Zoom out from large |
| `animate-flip-x` | Flip | Flip on X axis |
| `animate-flip-y` | Flip | Flip on Y axis |
| `animate-bounce-in` | Bounce | Bounce entrance |
| `animate-elastic-in` | Elastic | Elastic entrance |
| `animate-back-in` | Back | Back entrance with overshoot |
| `animate-smooth-fade` | Smooth | Ultra-smooth fade |
| `animate-smooth-slide` | Smooth | Smooth slide |
| `animate-smooth-scale` | Smooth | Smooth scale |
| `animate-smooth-rotate` | Smooth | Smooth rotate |
| `animate-smooth-blur` | Smooth | Smooth blur |

