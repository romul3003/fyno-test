'use client'

import { useState } from 'react'
import { useLockedBodyScroll } from './useLockedBodyScroll'

interface UseModalReturn {
  isOpen: boolean
  showModal: () => void
  hideModal: () => void
}

const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false)
  const { lockBodyScroll, unlockBodyScroll } = useLockedBodyScroll()

  const showModal = () => {
    setIsOpen(true)
    lockBodyScroll()
  }
  const hideModal = () => {
    setIsOpen(false)
    unlockBodyScroll()
  }

  return { isOpen, showModal, hideModal }
}

export default useModal
