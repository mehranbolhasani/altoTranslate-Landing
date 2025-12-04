"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, AnimationType } from "@/lib/gsap-animations"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimationProviderProps {
  children: React.ReactNode
  enableScrollSmoother?: boolean
}

/**
 * Provider component that initializes GSAP animations
 * Elements use CSS visibility: hidden and GSAP sets visibility: visible when animating
 */
export const AnimationProvider = ({
  children,
  enableScrollSmoother = false,
}: AnimationProviderProps) => {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Track initialized elements to prevent re-initialization
    const initializedElements = new WeakSet<HTMLElement>()
    const initializedContainers = new WeakSet<HTMLElement>()
    let isInitializing = false

    // Animation class to type mapping
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

    // Initialize GSAP animations for elements with animation classes
    const initAnimations = (): boolean => {
      if (isInitializing) return false
      isInitializing = true

      let hasNewElements = false

      try {
        // Build selector for all animation classes that haven't been animated
        const classSelectors = Object.keys(animationMap)
          .map((cls) => `.${cls}:not([data-gsap-animated])`)
          .join(", ")

        const allAnimatedElements = Array.from(
          document.querySelectorAll<HTMLElement>(classSelectors)
        )

        // Process each element
        allAnimatedElements.forEach((htmlElement) => {
          if (initializedElements.has(htmlElement)) return

          // Find which animation class this element has
          let animationType: AnimationType | null = null
          for (const className of Object.keys(animationMap)) {
            if (htmlElement.classList.contains(className)) {
              animationType = animationMap[className]
              break
            }
          }

          if (!animationType) return

          const animationFn = animations[animationType]
          if (!animationFn) return

          // Mark as initialized
          initializedElements.add(htmlElement)
          htmlElement.dataset.gsapAnimated = "true"
          hasNewElements = true

          // Get configuration from data attributes
          const duration = parseFloat(htmlElement.dataset.duration || "0.8")
          const delay = parseFloat(htmlElement.dataset.delay || "0")
          const trigger = (htmlElement.dataset.trigger || "onScroll") as
            | "onLoad"
            | "onScroll"

          if (trigger === "onLoad") {
            // Animate immediately on page load
            animationFn(htmlElement, { duration, delay })
          } else {
            // Animate when scrolled into view
            gsap.timeline({
              scrollTrigger: {
                trigger: htmlElement,
                start: htmlElement.dataset.start || "top 85%",
                end: htmlElement.dataset.end || "bottom 15%",
                once: htmlElement.dataset.once !== "false",
                toggleActions:
                  htmlElement.dataset.once === "false"
                    ? "play none none reverse"
                    : "play none none none",
              },
            }).add(animationFn(htmlElement, { duration, delay }))
          }
        })

        // Handle stagger animations for containers
        const staggerContainers = document.querySelectorAll<HTMLElement>(
          "[data-stagger]:not([data-gsap-stagger-initialized])"
        )

        staggerContainers.forEach((htmlContainer) => {
          if (initializedContainers.has(htmlContainer)) return

          initializedContainers.add(htmlContainer)
          htmlContainer.dataset.gsapStaggerInitialized = "true"
          hasNewElements = true

          const animationType = (htmlContainer.dataset.staggerAnimation ||
            "fadeInUp") as AnimationType
          const animationFn = animations[animationType]
          const stagger = parseFloat(htmlContainer.dataset.staggerDelay || "0.1")
          const children = htmlContainer.querySelectorAll<HTMLElement>(
            "[data-stagger-child]"
          )

          if (!animationFn || children.length === 0) return

          const trigger = (htmlContainer.dataset.trigger || "onScroll") as
            | "onLoad"
            | "onScroll"
          const duration = parseFloat(htmlContainer.dataset.duration || "0.8")
          const delay = parseFloat(htmlContainer.dataset.delay || "0")

          if (trigger === "onLoad") {
            children.forEach((child, index) => {
              animationFn(child, {
                duration,
                delay: delay + index * stagger,
              })
            })
          } else {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: htmlContainer,
                  start: htmlContainer.dataset.start || "top 85%",
                  end: htmlContainer.dataset.end || "bottom 15%",
                  once: htmlContainer.dataset.once !== "false",
                  toggleActions:
                    htmlContainer.dataset.once === "false"
                      ? "play none none reverse"
                      : "play none none none",
                },
              })
              .call(() => {
                // Animate children with stagger when ScrollTrigger fires
                children.forEach((child, index) => {
                  animationFn(child, {
                    duration,
                    delay: index * stagger,
                  })
                })
              })
          }
        })
      } finally {
        isInitializing = false
      }

      return hasNewElements
    }

    // Debounce function for MutationObserver
    let rafId: number | null = null
    let lastRefreshTime = 0
    const REFRESH_THROTTLE = 500

    const debouncedInit = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(() => {
        const newElements = initAnimations()

        const now = Date.now()
        if (newElements && now - lastRefreshTime > REFRESH_THROTTLE) {
          ScrollTrigger.refresh()
          lastRefreshTime = now
        }

        rafId = null
      })
    }

    // Initialize animations
    const hasNewElements = initAnimations()
    if (hasNewElements) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }

    // Handle dynamic content
    const observer = new MutationObserver((mutations) => {
      const hasNewNodes = mutations.some(
        (mutation) =>
          mutation.addedNodes.length > 0 &&
          Array.from(mutation.addedNodes).some(
            (node) =>
              node.nodeType === Node.ELEMENT_NODE &&
              !(node as Element).hasAttribute("data-gsap-animated")
          )
      )

      if (hasNewNodes) {
        debouncedInit()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    })

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      observer.disconnect()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Wrap content for ScrollSmoother if enabled
  if (enableScrollSmoother) {
    return (
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    )
  }

  return <>{children}</>
}
