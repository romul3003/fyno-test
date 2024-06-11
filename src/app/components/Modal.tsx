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
  className?: string
  hasCloseButton?: boolean
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen = false,
  onClose,
  className = '',
  hasCloseButton,
}) => {
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
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center bg-backdrop">
          <div
            ref={clickRef}
            className={`max-h-[500px] min-h-24 w-full max-w-[754px] overflow-auto rounded-lg bg-white py-4 ${className}`}
          >
            <div className="pl-4 pr-6">
              {hasCloseButton && (
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="inline-flex h-10 w-10 items-center justify-center text-3xl"
                  >
                    &times;
                  </button>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById('modal-root')!,
    )
  )
}
