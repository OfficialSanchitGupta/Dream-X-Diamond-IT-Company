'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const shouldBeVisible = scrolled > 300
      setIsVisible(shouldBeVisible)
    }

    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(window.scrollTimeout)
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(window.scrollTimeout)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-lg transition-all duration-300',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
        isScrolling ? 'scale-95' : 'scale-100'
      )}
    >
      <ChevronUp className="h-5 w-5" />
      <span className="sr-only">Back to top</span>
    </Button>
  )
}