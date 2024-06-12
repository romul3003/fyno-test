import { ReactNode, FC } from 'react'

import { Dot } from '@/components/Dot'

type RegionGalleryProps = {
  icon: ReactNode
  children: ReactNode
  className?: string
}

export const RegionTitle: FC<RegionGalleryProps> = ({ icon, children, className = '' }) => {
  return (
    <div
      className={`relative mb-6 flex flex-wrap items-center justify-between gap-2 pl-12 leading-8 ${className}`}
    >
      <Dot
        color="secondary"
        className="absolute left-1 top-[3px] group-first-of-type:top-2/4 group-first-of-type:-translate-y-2/4"
      >
        {icon}
      </Dot>
      {children}
    </div>
  )
}
