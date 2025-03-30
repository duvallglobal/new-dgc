"use client"

import type React from "react"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type ReactNode, useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
  delay?: number
}

export default function ServiceCard({ title, description, icon, href, delay = 0 }: ServiceCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Handle mouse movement for the 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  // Calculate the rotation and highlight position
  const calculateStyles = () => {
    if (!cardRef.current || !isHovering) return {}

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (mousePosition.y - centerY) / 20
    const rotateY = (centerX - mousePosition.x) / 20

    const highlightX = (mousePosition.x / rect.width) * 100
    const highlightY = (mousePosition.y / rect.height) * 100

    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      background: `radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)`,
    }
  }

  return (
    <Link href={href}>
      <motion.div
        ref={cardRef}
        className="glass-card gradient-border rounded-xl h-full transition-all duration-300 group card-hover"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        style={calculateStyles()}
      >
        <div className="p-6 relative z-10">
          <div
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-500",
              "bg-gradient-to-br from-primary/20 to-purple-500/20",
              "group-hover:from-primary/30 group-hover:to-purple-500/30",
            )}
          >
            <motion.div
              animate={{ rotate: isHovering ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary"
            >
              {icon}
            </motion.div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">{description}</p>

          <div className="flex items-center text-primary font-medium">
            <span className="group-hover:mr-2 transition-all duration-300">Learn more</span>
            <ArrowRight className={cn("ml-2 h-4 w-4 transition-all duration-300", "group-hover:translate-x-1")} />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

