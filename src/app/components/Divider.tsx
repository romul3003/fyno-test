import { FC } from 'react'
import clsx from 'clsx'

type DividerProps = {
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export const Divider: FC<DividerProps> = ({ orientation = 'vertical', className = '' }) => {
  return (
    <div
      className={clsx(
        'border-solid border-neutral-100',
        {
          ['h-0 w-full border-b']: orientation === 'horizontal',
          ['border-r']: orientation === 'vertical',
        },
        className,
      )}
    />
  )
}
