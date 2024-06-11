import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

const colors: Record<ButtonColor, string> = {
  primary: 'bg-white font-semibold',
  secondary: 'bg-dark backdrop-blur-md text-white',
  tertiary: 'bg-neutral-200 backdrop-blur-md text-label-secondary',
  quaternary: 'bg-neutral-500 backdrop-blur-md text-label-secondary',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: ReactNode
  color?: ButtonColor
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  startIcon,
  className,
  color = 'primary',
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        `inline-flex h-8 items-center rounded-2xl px-3 text-sm shadow-elevation-10 transition-colors ${colors[color]} ${className}`,
        {
          ['pl-1']: !!startIcon,
        },
      )}
    >
      {!!startIcon && <span className="mr-1 w-8">{startIcon}</span>}
      {children}
    </button>
  )
}
