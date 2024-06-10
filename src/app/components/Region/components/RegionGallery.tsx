import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import { CardTypes } from '@/types'
import CheckListIcon from '@/static/icons/check-list.svg'

import { Carousel } from '@/components/Carousel'
import { Card } from '@/components/Card'
import { Dot } from '@/components/Dot'
import { Button } from '@/components/Button'

type RegionGalleryProps = {
  cards: CardTypes[]
  icon: ReactNode
  title: string
  hasButton?: boolean
  hasDecorationLine?: boolean
}

const decorationClasses =
  "before:absolute before:bottom-0 before:left-[15px] before:top-8 before:w-[2px] before:bg-label-quaternary before:content-['']"

export const RegionGallery: FC<RegionGalleryProps> = ({
  cards,
  icon,
  title,
  hasButton,
  hasDecorationLine,
}) => {
  return (
    <div
      className={clsx('relative pb-4 pl-12', {
        [decorationClasses]: hasDecorationLine,
      })}
    >
      <Dot color="secondary" className="absolute left-1 top-1">
        {icon}
      </Dot>
      <div className="mb-6 flex items-center justify-between leading-8">
        <h3 className="font-semibold">{title}</h3>
        {hasButton && (
          <Button startIcon={<CheckListIcon />} className="rounded-lg hover:bg-neutral-100">
            Show daily plan
          </Button>
        )}
      </div>
      <Carousel>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </Carousel>
    </div>
  )
}
