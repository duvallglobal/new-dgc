"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight * 0.7

    canvas.width = width
    canvas.height = height

    const circles: Circle[] = []

    class Circle {
      x: number
      y: number
      radius: number
      dx: number
      dy: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * 100 + 50
        this.dx = (Math.random() - 0.5) * 0.5
        this.dy = (Math.random() - 0.5) * 0.5

        const colors = [
          "rgba(79, 70, 229, 0.15)", // Indigo
          "rgba(139, 92, 246, 0.15)", // Purple
          "rgba(236, 72, 153, 0.15)", // Pink
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.dx = -this.dx
        }

        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy

        this.draw()
      }
    }

    for (let i = 0; i < 5; i++) {
      circles.push(new Circle())
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, width, height)

      circles.forEach((circle) => {
        circle.update()
      })
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight * 0.7
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[70vh] -z-10" />
}

