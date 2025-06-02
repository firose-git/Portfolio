"use client"

import { useEffect, useState } from "react"

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only render on client after hydration
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleMouseEnterLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setLinkHovered(true)
      }
    }

    const handleMouseLeaveLink = () => {
      setLinkHovered(false)
    }

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", updatePosition)
    document.addEventListener("mouseleave", () => setHidden(true))
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnterLink)
    document.addEventListener("mouseout", handleMouseLeaveLink)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", updatePosition)
      document.removeEventListener("mouseleave", () => setHidden(true))
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnterLink)
      document.removeEventListener("mouseout", handleMouseLeaveLink)
    }
  }, [mounted])

  // 🧠 Prevent render until client mount to avoid hydration mismatch
  if (!mounted) return null

  return (
    <>
      <div
        className={`cursor-dot pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-150 ease-out ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : "scale-100"}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-primary ${
            linkHovered ? "w-6 h-6 opacity-25" : "w-3 h-3 opacity-75"
          } transition-all duration-200`}
        ></div>
      </div>
      <div
        className={`cursor-ring pointer-events-none fixed top-0 left-0 z-50 rounded-full border-2 border-primary transition-transform duration-300 ease-out ${
          hidden ? "opacity-0" : "opacity-75"
        } ${clicked ? "scale-75" : "scale-100"} ${linkHovered ? "scale-150" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: "30px",
          height: "30px",
          marginLeft: "-15px",
          marginTop: "-15px",
        }}
      ></div>
      <style jsx global>{`
        body {
          cursor: none;
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
          .cursor-dot,
          .cursor-ring {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
