'use client'

import Image from 'next/image'
import { useState, FC, useRef } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

import { useClickOutside } from '@/hooks/useClickOutside'
import arrowDownIcon from '@/static/icons/arrow-down.svg'

const duration = 150

const classNames = {
  enter: 'opacity-0',
  enterActive: 'opacity-100 transition-opacity duration-150',
  exit: 'opacity-100',
  exitActive: '!opacity-0 transition-opacity duration-150',
  exitDone: 'hidden',
}

type Option = {
  value: string
  label: string
}

type SelectProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export const Select: FC<SelectProps> = ({ options, value, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const clickRef = useRef<HTMLDivElement | null>(null)
  const nodeRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(clickRef, () => {
    setIsOpen(false)
  })

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue)
    setIsOpen(false)
  }

  return (
    <div ref={clickRef} className="relative inline-flex w-full text-gray-700">
      <button
        type="button"
        className={`focus:shadow-outline flex h-10 w-full min-w-28 items-center justify-between rounded-lg border px-5 text-base font-semibold placeholder-gray-600 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{options.find((option) => option.value === value)?.label || 'Select an option'}</span>
        <Image
          src={arrowDownIcon}
          alt="arrow down icon"
          className={clsx('ml-1 transition-transform', {
            ['rotate-180']: isOpen,
          })}
        />
      </button>

      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={duration}
        classNames={classNames}
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className="absolute top-full z-10 mt-1 max-h-48 w-full overflow-y-auto rounded-lg border bg-white shadow-lg"
        >
          {options.map(({ value, label }) => (
            <div
              key={value}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-200 ${value === value ? 'bg-gray-100' : ''}`}
              onClick={() => handleSelect(value)}
            >
              {label}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  )
}
