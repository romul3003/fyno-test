'use client'

import { useState, FC, useRef } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'

import { useClickOutside } from '@/hooks/useClickOutside'
import ChevronDownIcon from '@/static/icons/chevron-down.svg'
import { CLASS_NAMES, DURATION } from '@/constants/fadeEffect'

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
  const nodeRef = useRef<HTMLUListElement | null>(null)

  useClickOutside(clickRef, () => {
    setIsOpen(false)
  })

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue)
    setIsOpen(false)
  }

  return (
    <div ref={clickRef} className="text-gray-700 relative inline-flex w-full">
      <button
        type="button"
        className={`focus:shadow-outline placeholder-gray-600 flex h-8 w-full min-w-28 items-center justify-between whitespace-nowrap rounded-lg border bg-white px-5 text-sm font-semibold ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{options.find((option) => option.value === value)?.label || 'Select an option'}</span>
        <span
          className={clsx('ml-1 transition-transform', {
            ['rotate-180']: isOpen,
          })}
        >
          <ChevronDownIcon />
        </span>
      </button>

      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={DURATION}
        classNames={CLASS_NAMES}
        unmountOnExit
      >
        <ul
          ref={nodeRef}
          className="absolute top-full z-10 mt-1 max-h-48 w-full overflow-y-auto rounded-lg bg-white shadow-elevation-10"
        >
          {options.map(({ value, label }) => (
            <li
              key={value}
              className={`cursor-pointer px-4 py-2 text-sm hover:bg-neutral-100 ${value === value ? 'bg-gray-100' : ''}`}
              onClick={() => handleSelect(value)}
            >
              {label}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
}
