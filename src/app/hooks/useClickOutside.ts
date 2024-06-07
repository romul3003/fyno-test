'use client'

import { RefObject, useCallback, useEffect } from 'react'

export const useClickOutside = (ref: RefObject<HTMLElement>, callback: VoidFunction) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    },
    [ref, callback],
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback, handleClick])
}
