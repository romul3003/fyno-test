import { FC, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonColor = 'primary' | 'secondary' | 'neutral'

const colors: Record<ButtonColor, string> = {
  primary: 'bg-white font-semibold',
  secondary: 'bg-dark backdrop-blur-md text-white',
  neutral: 'bg-neutral-100',
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
      className={`inline-flex h-8 items-center rounded-2xl pl-2 pr-3 text-sm shadow-elevation-10 ${colors[color]} ${className}`}
    >
      {!!startIcon && <span className="mr-1">{startIcon}</span>}
      {children}
    </button>
  )
}
