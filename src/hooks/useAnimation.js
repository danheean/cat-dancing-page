import { useState, useEffect } from 'react'

const useAnimation = () => {
  const [isDancing, setIsDancing] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [preferReducedMotion, setPreferReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPreferReducedMotion(mediaQuery.matches)

    const handleChange = (event) => {
      setPreferReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleDancing = () => {
    setIsDancing(!isDancing)
  }

  const stopDancing = () => {
    setIsDancing(false)
  }

  const startDancing = () => {
    setIsDancing(true)
  }

  const changeSpeed = (speed) => {
    setAnimationSpeed(speed)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleDancing()
      }
      if (event.code === 'Escape') {
        stopDancing()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isDancing])

  return {
    isDancing,
    animationSpeed,
    preferReducedMotion,
    toggleDancing,
    startDancing,
    stopDancing,
    changeSpeed
  }
}

export default useAnimation