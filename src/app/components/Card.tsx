import Image from 'next/image'
import { FC } from 'react'

import { CardTypes } from '@/types'

import { Button } from './Button'
import { IconButton } from './IconButton'

import SaveIcon from '@/static/icons/save.svg'
import RatingIcon from '@/static/icons/rating.svg'

export type CardProps = CardTypes

export const Card: FC<CardProps> = ({ src, title, subtitle, rating, isCuratorsPick }) => {
  return (
    <div className="relative max-w-[216px]">
      {isCuratorsPick && (
        <Button color="tertiary" className="hover: absolute left-4 top-4 z-10 hover:bg-white">
          Curator’s pick
        </Button>
      )}

      <IconButton icon={<SaveIcon />} className="absolute right-3 top-4 z-10" />
      <div className="relative aspect-[2.16/2.92] max-w-[216px] overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={title}
          className="absolute h-full w-full object-cover"
          width={216}
          height={292}
        />
      </div>

      <div className="p-2">
        <p className="font-semibold">{title}</p>
        {rating && (
          <p className="text-sx flex items-center gap-1 font-semibold">
            <RatingIcon /> {`${rating}/10`}
          </p>
        )}
        <p className="text-sm text-label-secondary">{subtitle}</p>
      </div>
    </div>
  )
}
