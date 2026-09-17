import { useCallback, useEffect, useRef, useState } from 'react'

const AUTO_STOP_MS = 5 * 60 * 1000 // 5분

function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoStopped, setAutoStopped] = useState(false)
  const timerRef = useRef(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const stop = useCallback(() => {
    clearTimer()
    setIsPlaying(false)
  }, [clearTimer])

  const stopByTimer = useCallback(() => {
    clearTimer()
    setIsPlaying(false)
    setAutoStopped(true)
  }, [clearTimer])

  const start = useCallback(() => {
    clearTimer()
    setAutoStopped(false)
    setIsPlaying(true)
    timerRef.current = setTimeout(stopByTimer, AUTO_STOP_MS)
  }, [clearTimer, stopByTimer])

  const toggle = useCallback(() => {
    if (isPlaying) {
      stop()
    } else {
      start()
    }
  }, [isPlaying, start, stop])

  useEffect(() => clearTimer, [clearTimer])

  return { isPlaying, autoStopped, toggle }
}

export default useAnimation
