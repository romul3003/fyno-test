import { FC, MouseEventHandler } from 'react'

import ArrowRightIcon from '@/static/icons/arrow-right.svg'

type NextArrowProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export const NextArrow: FC<NextArrowProps> = ({ className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute right-3 top-2/4 z-10 flex h-10 w-10 -translate-y-[calc(100%+16px)] items-center justify-center rounded-full bg-white transition-colors hover:bg-neutral-100 ${className}`}
    >
      <ArrowRightIcon />
    </button>
  )
}

export const PreviousArrow: FC<NextArrowProps> = ({ className, onClick }) => {
  return <NextArrow className={`${className} left-3 right-auto rotate-180`} onClick={onClick} />
}
