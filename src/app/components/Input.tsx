import { ChangeEvent, FC, HTMLInputTypeAttribute, ReactNode } from 'react'
import clsx from 'clsx'

type InputProps = {
  type?: HTMLInputTypeAttribute
  value?: string | number
  name: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  startIcon?: ReactNode
}

export const Input: FC<InputProps> = ({ className, startIcon, type, ...rest }) => {
  return (
    <label
      className={`flex items-center overflow-hidden rounded-lg bg-white focus-within:outline focus-within:outline-2 focus-within:outline-primary ${className}`}
    >
      <span>{startIcon}</span>
      <input
        {...rest}
        type={type}
        className={clsx('h-10 w-full px-4 text-sm text-label-secondary outline-none', {
          ['pl-2']: !!startIcon,
          ['pr-2']: type === 'number',
        })}
      />
    </label>
  )
}
