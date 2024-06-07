import { FC } from 'react'

import { ReactNode } from 'react'

type ChipProps = {
  className?: string
  children: ReactNode
}

export const Chip: FC<ChipProps> = ({ className = '', children }) => {
  return (
    <div
      className={`inline-flex items-center whitespace-nowrap px-5 text-center font-semibold leading-8 ${className}`}
    >
      {children}
    </div>
  )
}
