"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  radius: number
  duration: number
  delay: number
}

export function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubblesRef = useRef<Bubble[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize bubbles
    const initializeBubbles = () => {
      bubblesRef.current = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 30 + 20,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 2,
      }))
    }
    initializeBubbles()

    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubblesRef.current.forEach((bubble) => {
        const elapsedTime = (time / 1000 - bubble.delay) % bubble.duration
        const progress = elapsedTime / bubble.duration

        // Calculate position (floating up)
        const currentY = canvas.height + bubble.radius - progress * (canvas.height + bubble.radius * 2)
        const wobble = Math.sin(progress * Math.PI * 4) * 40

        // Draw bubble with gradient
        const gradient = ctx.createRadialGradient(
          bubble.x + wobble,
          currentY,
          0,
          bubble.x + wobble,
          currentY,
          bubble.radius,
        )
        gradient.addColorStop(0, "rgba(0, 229, 255, 0.3)")
        gradient.addColorStop(0.7, "rgba(2, 136, 209, 0.1)")
        gradient.addColorStop(1, "rgba(0, 188, 212, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(bubble.x + wobble, currentY, bubble.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw bubble outline
        ctx.strokeStyle = "rgba(0, 229, 255, 0.4)"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw highlight on bubble
        const highlightGradient = ctx.createRadialGradient(
          bubble.x + wobble - bubble.radius * 0.3,
          currentY - bubble.radius * 0.3,
          0,
          bubble.x + wobble,
          currentY,
          bubble.radius * 0.5,
        )
        highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.6)")
        highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = highlightGradient
        ctx.beginPath()
        ctx.arc(
          bubble.x + wobble - bubble.radius * 0.2,
          currentY - bubble.radius * 0.2,
          bubble.radius * 0.4,
          0,
          Math.PI * 2,
        )
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current!)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}
