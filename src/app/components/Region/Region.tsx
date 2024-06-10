import { FC } from 'react'

import { CardTypes } from '@/types'
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
  highlights: CardTypes[]
  hotels: CardTypes[]
}

export const Region: FC<RegionProps> = ({
  dotValue,
  title,
  itineraryId,
  keyWords,
  description,
  highlights,
  hotels,
}) => {
  return (
    <section id={itineraryId} className="pb-6 pt-3">
      <RegionDescription
        dotValue={dotValue}
        title={title}
        keyWords={keyWords}
        description={description}
      />

      <RegionGallery
        icon={<SparkleIcon />}
        title="Region highlights"
        cards={highlights}
        hasButton
        hasDecorationLine
      />

      <RegionGallery icon={<BedIcon />} title="Where to stay" cards={hotels} />
    </section>
  )
}
