import { useEffect, useState, useCallback } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  const updateCursorType = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const isClickable = target.closest('a, button, [role="button"]')
    setIsPointer(!!isClickable)
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', updateCursorType)
    setIsVisible(true)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', updateCursorType)
    }
  }, [updatePosition, updateCursorType])

  if (!isVisible) return null

  const scale1 = isPointer ? 1.5 : 1
  const scale2 = isPointer ? 1.25 : 1
  const borderColor = isPointer ? 'rgba(255,255,255,1)' : 'rgba(96,165,250,0.5)'

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-white rounded-full mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${scale1})`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Trailing cursor */}
      <div
        className="fixed pointer-events-none z-40 w-8 h-8 rounded-full border-2"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${scale2})`,
          borderColor: borderColor,
          transition: 'left 0.15s ease-out, top 0.15s ease-out, border-color 0.3s, transform 0.3s'
        }}
      />
    </>
  )
}
