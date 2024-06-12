'use client'

import dynamic from 'next/dynamic'

import { useState, FC, useRef } from 'react'
import clsx from 'clsx'

import { useClickOutside } from '@/hooks/useClickOutside'
import ChevronDownIcon from '@/static/icons/chevron-down.svg'

const SelectMenu = dynamic(() => import('./components/SelectMenu').then((mod) => mod.SelectMenu))

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

  useClickOutside(clickRef, () => {
    setIsOpen(false)
  })

  const handleChange = (selectedValue: string) => {
    onChange(selectedValue)
    setIsOpen(false)
  }

  return (
    <div ref={clickRef} className="text-gray-700 relative inline-flex">
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

      <SelectMenu isOpen={isOpen} onChange={handleChange} options={options} />
    </div>
  )
}
