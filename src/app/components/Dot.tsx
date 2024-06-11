import { FC, ReactNode } from 'react'

type DotColor = 'primary' | 'secondary'

const colors: Record<DotColor, string> = {
  primary: 'bg-primary',
  secondary: 'bg-neutral-300',
}

type DotProps = {
  children: ReactNode
  className?: string
  color?: DotColor
}

export const Dot: FC<DotProps> = ({ children, className, color = 'primary' }) => {
  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-solid border-white text-xs font-medium text-white ${colors[color]} ${className}`}
    >
      {children}
    </div>
  )
}
