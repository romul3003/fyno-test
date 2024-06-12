import { FC } from 'react'

import { IconButton } from '@/components/IconButton'
import DirectionsIcon from '@/static/icons/directions.svg'
import EllipsisIcon from '@/static/icons/ellipsis.svg'

import { Place } from './Place'
import { Highlight } from '@/types'

type PlaceListProps = {
  places: Highlight[]
  dayNumber: number
}

export const PlaceList: FC<PlaceListProps> = ({ places, dayNumber }) => {
  const durationSum = places.reduce((sum, place) => Number(place.duration) + sum, 0)

  const totalMinutes = Math.floor(durationSum / (1000 * 60))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return (
    <div className="mb-4 last-of-type:mb-0">
      <div className="flex items-center justify-between pl-12">
        <h4 className="font-semibold">Day {dayNumber}</h4>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <DirectionsIcon />
            <span className="text-xs font-medium text-label-secondary">
              {!!hours && `${hours}h `}
              {!!minutes && `${hours}m`}
            </span>
          </div>
          <IconButton icon={<EllipsisIcon />} />
        </div>
      </div>

      <ul>
        {places.map((place) => (
          <li key={place.title}>
            <Place {...place} />
          </li>
        ))}
      </ul>
    </div>
  )
}
