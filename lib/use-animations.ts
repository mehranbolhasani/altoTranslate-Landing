"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, AnimationType, AnimationConfig } from "./gsap-animations"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseAnimationOptions extends AnimationConfig {
  trigger?: "onLoad" | "onScroll"
  animation?: AnimationType
  enabled?: boolean
}

/**
 * Hook for animating elements on page load or scroll
 * Elements should have visibility: hidden in CSS
 */
export const useAnimation = (
  animation: AnimationType = "fadeInUp",
  options: UseAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

  const {
    trigger = "onScroll",
    duration,
    delay,
    ease,
    start = "top 85%",
    end = "bottom 15%",
    once = true,
    enabled = true,
  } = options

  useEffect(() => {
    if (!enabled || !elementRef.current) return

    const element = elementRef.current
    const animationFn = animations[animation]

    if (!animationFn) {
      console.warn(`Animation "${animation}" not found`)
      return
    }

    // Cleanup previous animations
    if (animationRef.current) {
      animationRef.current.kill()
    }
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill()
    }

    if (trigger === "onLoad") {
      // Animate on page load
      animationRef.current = animationFn(element, {
        duration: duration ?? 0.8,
        delay: delay ?? 0,
        ease: ease,
      })
    } else {
      // Animate on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: start,
          end: end,
          once: once,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      })

      scrollTriggerRef.current = tl.scrollTrigger as ScrollTrigger

      animationRef.current = animationFn(element, {
        duration: duration ?? 0.8,
        delay: delay ?? 0,
        ease: ease,
      })

      // Add to timeline
      tl.add(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
      }
    }
  }, [animation, trigger, duration, delay, ease, start, end, once, enabled])

  return elementRef
}

/**
 * Hook for animating multiple elements with stagger
 * Children should have visibility: hidden and data-stagger-child attribute
 */
export const useStaggerAnimation = (
  animation: AnimationType = "fadeInUp",
  options: UseAnimationOptions & { stagger?: number } = {}
) => {
  const containerRef = useRef<HTMLElement>(null)
  const animationRef = useRef<gsap.core.Timeline | null>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

  const {
    trigger = "onScroll",
    duration,
    delay,
    ease,
    stagger = 0.1,
    start = "top 85%",
    end = "bottom 15%",
    once = true,
    enabled = true,
  } = options

  useEffect(() => {
    if (!enabled || !containerRef.current) return

    const container = containerRef.current
    const children = container.querySelectorAll<HTMLElement>(
      "[data-stagger-child]"
    )

    if (children.length === 0) return

    const animationFn = animations[animation]

    if (!animationFn) {
      console.warn(`Animation "${animation}" not found`)
      return
    }

    // Cleanup previous animations
    if (animationRef.current) {
      animationRef.current.kill()
    }
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill()
    }

    const animateChildren = () => {
      children.forEach((child, index) => {
        animationFn(child, {
          duration: duration ?? 0.8,
          delay: (delay ?? 0) + index * stagger,
          ease: ease,
        })
      })
    }

    if (trigger === "onLoad") {
      // Animate on page load with stagger
      animateChildren()
    } else {
      // Animate on scroll with stagger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: start,
          end: end,
          once: once,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      })

      scrollTriggerRef.current = tl.scrollTrigger as ScrollTrigger

      tl.call(animateChildren)

      animationRef.current = tl
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
      }
    }
  }, [
    animation,
    trigger,
    duration,
    delay,
    ease,
    stagger,
    start,
    end,
    once,
    enabled,
  ])

  return containerRef
}
