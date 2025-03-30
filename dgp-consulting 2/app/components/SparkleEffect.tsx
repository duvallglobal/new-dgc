"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SparkleEffectProps {
  className?: string
  color?: string
  size?: number
  count?: number
  speed?: number
  glow?: boolean
}

export default function SparkleEffect({
  className,
  color = "#8b5cf6",
  size = 3,
  count = 20,
  speed = 1,
  glow = true,
}: SparkleEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let sparkles: Array<{
      x: number
      y: number
      size: number
      opacity: number
      speedY: number
      speedX: number
      life: number
      maxLife: number
      rotation: number
      rotationSpeed: number
    }> = []

    const createSparkles = () => {
      sparkles = []
      for (let i = 0; i < count; i++) {
        addSparkle(Math.random() * canvas.width, Math.random() * canvas.height)
      }
    }

    const addSparkle = (x: number, y: number) => {
      sparkles.push({
        x,
        y,
        size: Math.random() * size + 1,
        opacity: Math.random(),
        speedY: (Math.random() - 0.5) * speed,
        speedX: (Math.random() - 0.5) * speed,
        life: 0,
        maxLife: Math.random() * 100 + 50,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i]

        s.y += s.speedY
        s.x += s.speedX
        s.life++
        s.rotation += s.rotationSpeed

        if (s.life > s.maxLife) {
          // Reset sparkle
          s.x = Math.random() * canvas.width
          s.y = Math.random() * canvas.height
          s.life = 0
          s.maxLife = Math.random() * 100 + 50
        }

        // Draw sparkle
        const opacityFade = 1 - s.life / s.maxLife

        // Draw glow if enabled
        if (glow) {
          ctx.beginPath()
          const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3)
          gradient.addColorStop(0, `${color}`)
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.globalAlpha = s.opacity * opacityFade * 0.3
          ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw sparkle star
        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate(s.rotation)

        ctx.beginPath()
        ctx.fillStyle = color
        ctx.globalAlpha = s.opacity * opacityFade

        // Draw a star shape
        const spikes = 4
        const outerRadius = s.size
        const innerRadius = s.size / 2

        for (let j = 0; j < spikes * 2; j++) {
          const radius = j % 2 === 0 ? outerRadius : innerRadius
          const angle = (j * Math.PI) / spikes
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }

      ctx.globalAlpha = 1

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      createSparkles()
    }

    handleResize()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [color, size, count, speed, glow])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 pointer-events-none", className)} />
}

