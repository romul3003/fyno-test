import { FC } from 'react'

import { IconButton } from '@/components/IconButton'
import DirectionsIcon from '@/static/icons/directions.svg'
import EllipsisIcon from '@/static/icons/ellipsis.svg'

import { Place, PlaceProps } from './Place'

type PlaceListProps = {
  places: PlaceProps[]
  time: string
  dayNumber: number
}

export const PlaceList: FC<PlaceListProps> = ({ places, dayNumber, time }) => {
  return (
    <div className="mb-4 last-of-type:mb-0">
      <div className="flex items-center justify-between pl-12">
        <h4 className="font-semibold">Day {dayNumber}</h4>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <DirectionsIcon />
            <span className="text-xs font-medium text-label-secondary">{time}</span>
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
