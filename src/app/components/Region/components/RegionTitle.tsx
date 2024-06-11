import { ReactNode, FC } from 'react'

import { Dot } from '@/components/Dot'

type RegionGalleryProps = {
  icon: ReactNode
  children: ReactNode
  className?: string
}

export const RegionTitle: FC<RegionGalleryProps> = ({ icon, children, className = '' }) => {
  return (
    <div className={`relative mb-6 flex items-center justify-between pl-12 leading-8 ${className}`}>
      <Dot color="secondary" className="absolute left-1 top-2/4 -translate-y-2/4">
        {icon}
      </Dot>
      {children}
    </div>
  )
}
