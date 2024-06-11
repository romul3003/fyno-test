import React, { FC, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { CLASS_NAMES, DURATION } from '@/constants/fadeEffect'
import { Option } from '@/types'

type SelectMenuProps = {
  isOpen?: boolean
  options: Option[]
  onChange: (value: string) => void
}

export const SelectMenu: FC<SelectMenuProps> = ({ options, isOpen = false, onChange }) => {
  const nodeRef = useRef<HTMLUListElement | null>(null)

  return (
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
            onClick={() => onChange(value)}
          >
            {label}
          </li>
        ))}
      </ul>
    </CSSTransition>
  )
}
