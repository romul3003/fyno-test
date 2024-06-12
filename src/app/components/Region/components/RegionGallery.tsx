import { FC, ReactNode } from 'react'

import { Highlight } from '@/types'

import { Carousel } from '@/components/Carousel'
import { Card } from '@/components/Card'
import { DailyPlan } from '@/components/DailyPlan'

import { RegionTitle } from './RegionTitle'

type RegionGalleryProps = {
  cards: Highlight[]
  icon: ReactNode
  title: string
  hasDailyPlan?: boolean
}

export const RegionGallery: FC<RegionGalleryProps> = ({ cards, icon, title, hasDailyPlan }) => {
  const dailyPlanCards = cards.filter((card) => !!card.day)

  return (
    <div className="relative pb-4">
      <RegionTitle icon={icon}>
        <h3 className="font-semibold">{title}</h3>
        {hasDailyPlan && <DailyPlan cards={dailyPlanCards} />}
      </RegionTitle>

      <Carousel className="pl-12">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </Carousel>
    </div>
  )
}
