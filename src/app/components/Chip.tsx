import { FC } from 'react'

import { ReactNode } from 'react'

type ChipProps = {
  className?: string
  children: ReactNode
}

export const Chip: FC<ChipProps> = ({ className = '', children }) => {
  return (
    <div
      className={`inline-flex h-8 items-center whitespace-nowrap bg-white px-5 text-center font-semibold ${className}`}
    >
      {children}
    </div>
  )
}
