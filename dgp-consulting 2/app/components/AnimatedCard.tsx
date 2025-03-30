"use client"

import type React from "react"

import { useState, useRef, type ReactNode, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  hoverScale?: boolean
  delay?: number
}

export default function AnimatedCard({
  children,
  className,
  glowColor = "rgba(139, 92, 246, 0.2)",
  hoverScale = true,
  delay = 0,
}: AnimatedCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate rotation (max 5 degrees)
    const x = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 3
    const y = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * -3

    // Calculate position for glow effect
    const posX = e.clientX - rect.left
    const posY = e.clientY - rect.top

    setRotation({ x, y })
    setPosition({ x: posX, y: posY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "glass-card gradient-border rounded-xl transition-all duration-300",
        hoverScale && "hover:scale-[1.02]",
        className,
      )}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none rounded-xl",
          isHovering && "opacity-100",
        )}
        style={{
          background: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, ${glowColor}, transparent)`,
        }}
      />

      {/* Shine effect */}
      {isHovering && (
        <motion.span
          className="absolute inset-0 opacity-0 pointer-events-none rounded-xl overflow-hidden"
          initial={{ opacity: 0, left: -dimensions.width }}
          animate={{ opacity: 0.1, left: dimensions.width * 2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
            width: "50%",
            transform: "skewX(-20deg)",
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

