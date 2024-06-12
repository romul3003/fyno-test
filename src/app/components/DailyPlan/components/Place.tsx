import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/Button'

import DragAndDropIcon from '@/static/icons/drag-and-drop.svg'
import EllipsisDropIcon from '@/static/icons/ellipsis.svg'
import { IconButton } from '@/components/IconButton'

export type PlaceProps = {
  title: string
  subtitle: string
  src: ImageProps['src']
  isCuratorsPick?: boolean
}

export const Place: FC<PlaceProps> = ({ src, title, subtitle, isCuratorsPick }) => {
  return (
    <div className="relative z-10 flex flex-col gap-6 py-3 pl-12 before:absolute before:left-3 before:top-2/4 before:h-2 before:w-2 before:-translate-y-2/4 before:rounded-full before:border-2 before:border-white before:bg-label-quaternary before:content-[''] sm:flex-row">
      <div className="relative aspect-[9.6/13.2] shrink overflow-hidden rounded-xl sm:w-24 sm:max-w-24">
        <Image src={src} alt={title} placeholder="blur" fill className="object-cover" />
      </div>

      <div className="flex grow flex-col justify-center gap-3 sm:gap-1">
        <h3 className="font-semibold">{title}</h3>
        {isCuratorsPick && (
          <Button
            color="quaternary"
            className="w-fit rounded-xl border-0 shadow-none hover:bg-neutral-100"
          >
            Curator’s pick
          </Button>
        )}

        <p className="text-sm text-label-secondary">{subtitle}</p>
      </div>

      <div className="flex items-center">
        <IconButton icon={<DragAndDropIcon />} />
        <IconButton icon={<EllipsisDropIcon />} />
      </div>
    </div>
  )
}
