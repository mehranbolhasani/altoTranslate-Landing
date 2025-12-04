"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, AnimationType } from "@/lib/gsap-animations"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPAnimationProps {
  children: React.ReactNode
  animation?: AnimationType
  trigger?: "onLoad" | "onScroll"
  duration?: number
  delay?: number
  className?: string
  dataAnimateChild?: boolean
}

/**
 * Component wrapper for GSAP animations
 * Usage: <GSAPAnimation animation="fadeInUp" trigger="onScroll">Content</GSAPAnimation>
 */
export const GSAPAnimation = ({
  children,
  animation = "fadeInUp",
  trigger = "onScroll",
  duration,
  delay,
  className = "",
  dataAnimateChild = false,
}: GSAPAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

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
      })
    } else {
      // Animate on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          once: true,
          toggleActions: "play none none none",
        },
      })

      scrollTriggerRef.current = tl.scrollTrigger as ScrollTrigger

      animationRef.current = animationFn(element, {
        duration: duration ?? 0.8,
        delay: delay ?? 0,
      })

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
  }, [animation, trigger, duration, delay])

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ visibility: "hidden" }}
      data-animate-child={dataAnimateChild ? "" : undefined}
    >
      {children}
    </div>
  )
}

/**
 * Initialize animations for elements with data attributes
 * This allows using animations via Tailwind classes
 */
export const initGSAPAnimations = () => {
  if (typeof window === "undefined") return

  // Animation mappings from data attributes to animation functions
  const animationMap: Record<string, AnimationType> = {
    "animate-fade-in": "fadeIn",
    "animate-fade-in-up": "fadeInUp",
    "animate-fade-in-down": "fadeInDown",
    "animate-fade-in-left": "fadeInLeft",
    "animate-fade-in-right": "fadeInRight",
    "animate-slide-up": "slideUp",
    "animate-slide-down": "slideDown",
    "animate-slide-left": "slideLeft",
    "animate-slide-right": "slideRight",
    "animate-scale-in": "scaleIn",
    "animate-scale-up": "scaleUp",
    "animate-rotate-in": "rotateIn",
    "animate-blur-in": "blurIn",
    "animate-zoom-in": "zoomIn",
    "animate-zoom-out": "zoomOut",
    "animate-flip-x": "flipX",
    "animate-flip-y": "flipY",
    "animate-bounce-in": "bounceIn",
    "animate-elastic-in": "elasticIn",
    "animate-back-in": "backIn",
    "animate-smooth-fade": "smoothFade",
    "animate-smooth-slide": "smoothSlide",
    "animate-smooth-scale": "smoothScale",
    "animate-smooth-rotate": "smoothRotate",
    "animate-smooth-blur": "smoothBlur",
  }

  // Find all elements with animation classes
  Object.keys(animationMap).forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`)

    elements.forEach((element) => {
      const htmlElement = element as HTMLElement
      const animationType = animationMap[className]
      const animationFn = animations[animationType]

      if (!animationFn) return

      // Get duration and delay from data attributes
      const duration = parseFloat(htmlElement.dataset.duration || "0.8")
      const delay = parseFloat(htmlElement.dataset.delay || "0")
      const trigger = (htmlElement.dataset.trigger || "onScroll") as
        | "onLoad"
        | "onScroll"

      if (trigger === "onLoad") {
        // Animate on page load
        animationFn(htmlElement, { duration, delay })
      } else {
        // Animate on scroll
        gsap
          .timeline({
            scrollTrigger: {
              trigger: htmlElement,
              start: "top 85%",
              end: "bottom 15%",
              once: true,
              toggleActions: "play none none none",
            },
          })
          .add(animationFn(htmlElement, { duration, delay }))
      }
    })
  })
}
