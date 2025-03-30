"use client"

import type React from "react"

import { useState, useRef, type ReactNode, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  href?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function GradientButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  href,
  type,
  disabled = false,
}: GradientButtonProps) {
  const [isHovering, setIsHovering] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (buttonRef.current) {
      const { width, height } = buttonRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden transition-all duration-300 font-medium",
        variant === "default" && "bg-transparent hover:bg-transparent text-white",
        variant === "outline" &&
          "bg-transparent hover:bg-transparent border-primary/50 hover:border-primary text-white",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      variant={variant}
      size={size}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type={type}
      asChild={!!href}
      disabled={disabled}
    >
      <>
        {/* Background gradient */}
        {variant === "default" && (
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 transition-transform duration-300"></span>
        )}

        {/* Hover effect */}
        <span
          className={cn("absolute inset-0 opacity-0 transition-opacity duration-300", isHovering && "opacity-100")}
          style={{
            background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent)`,
          }}
        />

        {/* Shine effect */}
        {isHovering && (
          <motion.span
            className="absolute inset-0 opacity-0"
            initial={{ opacity: 0, left: -dimensions.width }}
            animate={{ opacity: 0.2, left: dimensions.width * 2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
              width: "50%",
              transform: "skewX(-20deg)",
            }}
          />
        )}

        {/* Content */}
        <span className="relative z-10">{children}</span>
      </>
    </Button>
  )
}

