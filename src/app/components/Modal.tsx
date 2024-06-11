'use client'

import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import { useClickOutside } from '@/hooks/useClickOutside'
import { CLASS_NAMES, DURATION } from '@/constants/fadeEffect'

type ModalProps = {
  isOpen?: boolean
  onClose: VoidFunction
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({ children, isOpen = false, onClose }) => {
  const [isClient, setIsClient] = useState(false)

  const clickRef = useRef<HTMLDivElement | null>(null)
  const nodeRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(clickRef, () => {
    onClose()
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    isOpen &&
    createPortal(
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={DURATION}
        classNames={CLASS_NAMES}
        unmountOnExit
      >
        <div className="bg-backdrop fixed bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center">
          <div ref={clickRef} className="modal h-24 w-24 bg-white">
            {children}
            <button onClick={onClose} className="close-button">
              &times;
            </button>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById('modal-root')!,
    )
  )
}
