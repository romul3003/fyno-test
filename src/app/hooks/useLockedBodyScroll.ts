'use client'

import { useLayoutEffect, useState, useCallback } from 'react'

export const useLockedBodyScroll = () => {
  const [isLocked, setIsLocked] = useState(false)

  const lockBodyScroll = useCallback(() => setIsLocked(true), [])
  const unlockBodyScroll = useCallback(() => setIsLocked(false), [])
  const toggleBodyScroll = useCallback(() => setIsLocked((state) => !state), [])

  useLayoutEffect(() => {
    if (!isLocked) return

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    // eslint-disable-next-line consistent-return
    return () => {
      document.body.style.overflow = originalOverflow

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight
      }
    }
  }, [isLocked])

  return {
    lockBodyScroll,
    unlockBodyScroll,
    toggleBodyScroll,
  }
}
