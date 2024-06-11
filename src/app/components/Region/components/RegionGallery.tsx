import { FC, ReactNode } from 'react'

import { CardType } from '@/types'

import { Carousel } from '@/components/Carousel'
import { Card } from '@/components/Card'
import { DailyPlan } from '@/components/DailyPlan'

import { RegionTitle } from './RegionTitle'

type RegionGalleryProps = {
  id?: string
  cards: CardType[]
  icon: ReactNode
  title: string
  hasDailyPlan?: boolean
}

export const RegionGallery: FC<RegionGalleryProps> = ({ id, cards, icon, title, hasDailyPlan }) => {
  return (
    <div className="relative pb-4">
      <RegionTitle icon={icon}>
        <h3 className="font-semibold">{title}</h3>
        {hasDailyPlan && <DailyPlan id={id || ''} />}
      </RegionTitle>

      <Carousel className="pl-12">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </Carousel>
    </div>
  )
}
