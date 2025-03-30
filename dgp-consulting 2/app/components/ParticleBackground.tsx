"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  life: number
  maxLife: number
  connections: number[]
}

interface ParticleBackgroundProps {
  className?: string
  particleCount?: number
  particleColors?: string[]
  connectionDistance?: number
  interactive?: boolean
  glow?: boolean
}

export default function ParticleBackground({
  className = "",
  particleCount = 50,
  particleColors = ["#6d28d9", "#8b5cf6", "#a78bfa", "#c4b5fd"],
  connectionDistance = 150,
  interactive = true,
  glow = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const createParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        const particle: Particle = {
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          life: 0,
          maxLife: Math.random() * 100 + 50,
          connections: [],
        }
        particlesRef.current.push(particle)
      }
    }

    const findConnections = () => {
      // Reset connections
      particlesRef.current.forEach((p) => {
        p.connections = []
      })

      // Find connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            particlesRef.current[i].connections.push(j)
            particlesRef.current[j].connections.push(i)
          }
        }
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]

        for (let j = 0; j < p.connections.length; j++) {
          const connectedParticle = particlesRef.current[p.connections[j]]
          const dx = p.x - connectedParticle.x
          const dy = p.y - connectedParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Calculate opacity based on distance
          const opacity = 0.15 * (1 - distance / connectionDistance)

          // Draw connection
          ctx.beginPath()
          ctx.strokeStyle = `rgba(111, 66, 193, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(connectedParticle.x, connectedParticle.y)
          ctx.stroke()
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      findConnections()
      drawConnections()

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]

        // Update particle position
        p.x += p.speedX
        p.y += p.speedY

        // Boundary check
        if (p.x < 0 || p.x > width) p.speedX *= -1
        if (p.y < 0 || p.y > height) p.speedY *= -1

        // Mouse interaction
        if (interactive) {
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx)
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius

            p.speedX += Math.cos(angle) * force * 0.2
            p.speedY += Math.sin(angle) * force * 0.2
          }
        }

        // Speed limit
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
        if (speed > 0.8) {
          p.speedX = (p.speedX / speed) * 0.8
          p.speedY = (p.speedY / speed) * 0.8
        }

        // Update life
        p.life++
        if (p.life > p.maxLife) {
          // Reset particle
          p.x = Math.random() * width
          p.y = Math.random() * height
          p.speedX = (Math.random() - 0.5) * 0.3
          p.speedY = (Math.random() - 0.5) * 0.3
          p.life = 0
          p.maxLife = Math.random() * 100 + 50
        }

        // Draw glow if enabled
        if (glow) {
          ctx.beginPath()
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
          gradient.addColorStop(0, p.color)
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.globalAlpha = p.opacity * 0.3 * (1 - p.life / p.maxLife)
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity * (1 - p.life / p.maxLife)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      createParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [particleCount, particleColors, connectionDistance, interactive, glow])

  return <canvas ref={canvasRef} className={cn("fixed top-0 left-0 w-full h-full -z-10", className)} />
}

