import { FC } from 'react'

import { Dot } from '@/components/Dot'

type RegionDescriptionProps = {
  dotValue: string
  title: string
  keyWords: string[]
  description: string
}

export const RegionDescription: FC<RegionDescriptionProps> = ({
  dotValue,
  title,
  keyWords,
  description,
}) => {
  return (
    <div className="relative pb-9 pl-12 pt-3 before:absolute before:bottom-0 before:left-[15px] before:top-10 before:w-[2px] before:bg-label-quaternary before:content-['']">
      <Dot className="absolute left-1">{dotValue}</Dot>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <div className="mb-4 flex gap-4 text-sm text-label-tertiary">
        {keyWords.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p className="text-label-secondary">{description}</p>
    </div>
  )
}
