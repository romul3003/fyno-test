import { FC } from 'react'

import { CardType } from '@/types'
import SparkleIcon from '@/static/icons/sparkle-small.svg'
import BedIcon from '@/static/icons/bed-small.svg'

import { RegionGallery } from './components/RegionGallery'
import { RegionDescription } from './components/RegionDescription'

type RegionProps = {
  dotValue: string
  title: string
  keyWords: string[]
  description: string
  itineraryId?: string
  highlights: CardType[]
  hotels: CardType[]
  id: string
}

export const Region: FC<RegionProps> = ({
  dotValue,
  title,
  itineraryId,
  keyWords,
  description,
  highlights,
  hotels,
  id,
}) => {
  return (
    <section id={itineraryId} className="pb-6 pt-3">
      <div className="decorative-line relative before:top-4">
        <RegionDescription
          dotValue={dotValue}
          title={title}
          keyWords={keyWords}
          description={description}
        />

        <RegionGallery
          id={id}
          icon={<SparkleIcon />}
          title="Region highlights"
          cards={highlights}
          hasDailyPlan
        />
      </div>

      <RegionGallery icon={<BedIcon />} title="Where to stay" cards={hotels} />
    </section>
  )
}
