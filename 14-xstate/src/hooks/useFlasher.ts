import { useRef, useEffect } from "react"

export const useFlasher = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.setAttribute("style", "box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;")
    setTimeout(() => {
      if (!ref.current) return
      ref.current.setAttribute("style", "")
    }, 300)
  })
  return ref
}
