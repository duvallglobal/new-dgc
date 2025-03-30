"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextGlimmerProps {
  text: string
  className?: string
  glimmerClassName?: string
  gradient?: boolean
  delay?: number
}

export default function TextGlimmer({
  text,
  className,
  glimmerClassName,
  gradient = true,
  delay = 0,
}: TextGlimmerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      const glimmerElements = container.querySelectorAll(".glimmer")
      glimmerElements.forEach((el, index) => {
        const glimmerEl = el as HTMLElement

        // Calculate distance from mouse to center of element
        const elLeft = glimmerEl.offsetLeft
        const elTop = glimmerEl.offsetTop
        const elWidth = glimmerEl.offsetWidth
        const elHeight = glimmerEl.offsetHeight

        const elCenterX = elLeft + elWidth / 2
        const elCenterY = elTop + elHeight / 2

        const deltaX = x - elCenterX
        const deltaY = y - elCenterY

        // Calculate distance (0 to 1, where 0 is at the element and 1 is far away)
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / (Math.max(width, height) / 2)
        const intensity = Math.max(0, 1 - distance * 1.5)

        glimmerEl.style.setProperty("--intensity", intensity.toString())
      })
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const words = text.split(" ")

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="mr-2 inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: delay + wordIndex * 0.1 + charIndex * 0.02,
              }}
              className={cn(
                "glimmer inline-block transition-all duration-300",
                gradient &&
                  "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-purple-400",
                "style-[--intensity:0]",
                glimmerClassName,
              )}
              style={{
                filter: `brightness(calc(1 + var(--intensity) * 0.5))`,
                textShadow: `0 0 calc(var(--intensity) * 15px) rgba(139, 92, 246, calc(var(--intensity) * 0.8))`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}

