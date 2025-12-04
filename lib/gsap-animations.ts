"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
  
  // ScrollSmoother is a premium plugin - register if available
  try {
    // Will be dynamically imported if needed
  } catch (e) {
    // Handle gracefully
  }
}

// Animation configuration types
export type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleIn"
  | "scaleUp"
  | "rotateIn"
  | "blurIn"
  | "zoomIn"
  | "zoomOut"
  | "flipX"
  | "flipY"
  | "bounceIn"
  | "elasticIn"
  | "backIn"
  | "smoothFade"
  | "smoothSlide"
  | "smoothScale"
  | "smoothRotate"
  | "smoothBlur"

export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
  start?: string
  end?: string
  once?: boolean
}

// Default animation configurations
const defaultConfig: Required<AnimationConfig> = {
  duration: 0.8,
  delay: 0,
  ease: "power2.out",
  stagger: 0,
  start: "top 85%",
  end: "bottom 15%",
  once: true,
}

// Animation definitions
// All animations use visibility: "inherit" in the "to" state to make element visible
// and immediateRender: true in the "from" state to prevent any flash
export const animations = {
  fadeIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, visibility: "visible" },
      {
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: config.ease ?? defaultConfig.ease,
      }
    )
  },

  fadeInUp: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 40, visibility: "visible" },
      {
        opacity: 1,
        y: 0,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: config.ease ?? defaultConfig.ease,
      }
    )
  },

  fadeInDown: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: -40, visibility: "visible" },
      {
        opacity: 1,
        y: 0,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: config.ease ?? defaultConfig.ease,
      }
    )
  },

  fadeInLeft: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, x: 40, visibility: "visible" },
      {
        opacity: 1,
        x: 0,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: config.ease ?? defaultConfig.ease,
      }
    )
  },

  fadeInRight: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, x: -40, visibility: "visible" },
      {
        opacity: 1,
        x: 0,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: config.ease ?? defaultConfig.ease,
      }
    )
  },

  slideUp: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { y: 60, opacity: 0, visibility: "visible" },
      {
        y: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power3.out",
      }
    )
  },

  slideDown: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { y: -60, opacity: 0, visibility: "visible" },
      {
        y: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power3.out",
      }
    )
  },

  slideLeft: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { x: 60, opacity: 0, visibility: "visible" },
      {
        x: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power3.out",
      }
    )
  },

  slideRight: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { x: -60, opacity: 0, visibility: "visible" },
      {
        x: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power3.out",
      }
    )
  },

  scaleIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "back.out(1.2)",
      }
    )
  },

  scaleUp: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.9, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power2.out",
      }
    )
  },

  rotateIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { rotation: -15, opacity: 0, visibility: "visible" },
      {
        rotation: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power2.out",
      }
    )
  },

  blurIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { filter: "blur(10px)", opacity: 0, visibility: "visible" },
      {
        filter: "blur(0px)",
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power2.out",
      }
    )
  },

  zoomIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.5, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power3.out",
      }
    )
  },

  zoomOut: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 1.3, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power3.out",
      }
    )
  },

  flipX: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { rotationX: 90, opacity: 0, visibility: "visible" },
      {
        rotationX: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power2.out",
      }
    )
  },

  flipY: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { rotationY: 90, opacity: 0, visibility: "visible" },
      {
        rotationY: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "power2.out",
      }
    )
  },

  bounceIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.3, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "bounce.out",
      }
    )
  },

  elasticIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.5, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "elastic.out(1, 0.5)",
      }
    )
  },

  backIn: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.8, x: -50, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        x: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? defaultConfig.duration,
        delay: config.delay ?? defaultConfig.delay,
        ease: "back.out(1.4)",
      }
    )
  },

  smoothFade: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, visibility: "visible" },
      {
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? 1.2,
        delay: config.delay ?? defaultConfig.delay,
        ease: "sine.inOut",
      }
    )
  },

  smoothSlide: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { y: 30, opacity: 0, visibility: "visible" },
      {
        y: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? 1,
        delay: config.delay ?? defaultConfig.delay,
        ease: "sine.out",
      }
    )
  },

  smoothScale: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { scale: 0.95, opacity: 0, visibility: "visible" },
      {
        scale: 1,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? 1,
        delay: config.delay ?? defaultConfig.delay,
        ease: "sine.out",
      }
    )
  },

  smoothRotate: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { rotation: -5, opacity: 0, visibility: "visible" },
      {
        rotation: 0,
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? 1,
        delay: config.delay ?? defaultConfig.delay,
        ease: "sine.out",
      }
    )
  },

  smoothBlur: (element: gsap.TweenTarget, config: AnimationConfig = {}) => {
    return gsap.fromTo(
      element,
      { filter: "blur(8px)", opacity: 0, visibility: "visible" },
      {
        filter: "blur(0px)",
        opacity: 1,
        visibility: "inherit",
        duration: config.duration ?? 1.2,
        delay: config.delay ?? defaultConfig.delay,
        ease: "sine.out",
      }
    )
  },
}

// Initialize ScrollSmoother (premium plugin - optional)
export const initScrollSmoother = async () => {
  if (typeof window === "undefined") return null

  try {
    const { ScrollSmoother } = await import("gsap/ScrollSmoother")
    gsap.registerPlugin(ScrollSmoother)
    
    return ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true,
    })
  } catch (e) {
    console.warn("ScrollSmoother not available (premium plugin)")
    return null
  }
}

// Cleanup ScrollSmoother
export const cleanupScrollSmoother = (smoother: any) => {
  if (smoother && typeof smoother.kill === "function") {
    smoother.kill()
  }
}

