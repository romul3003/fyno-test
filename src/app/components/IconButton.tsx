import { FC, MouseEventHandler, ReactNode } from 'react'

type IconButtonSize = 'small' | 'medium'

type IconButtonProps = {
  icon: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  size?: IconButtonSize
}

const IconButtonSize: Record<IconButtonSize, string> = {
  small: 'h-8 w-8',
  medium: 'h-10 w-10',
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  size = 'small',
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center rounded-full transition-colors ${IconButtonSize[size]} ${className}`}
    >
      {icon}
    </button>
  )
}
