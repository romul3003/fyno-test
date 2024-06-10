import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/static/images/gallery/image2x-1-min.jpeg'
import image2 from '@/static/images/gallery/image2x-2-min.jpeg'
import image3 from '@/static/images/gallery/image2x-3-min.jpeg'
import image4 from '@/static/images/gallery/image2x-4-min.jpeg'
import image5 from '@/static/images/gallery/image2x-5-min.jpeg'
import { Button } from './Button'

import List from '@/static/icons/list.svg'
import { FC } from 'react'

const images = [image1, image2, image3, image4, image5]

type GalleryProps = {
  className?: string
}

export const Gallery: FC<GalleryProps> = ({ className = '' }) => {
  return (
    <div className={`relative max-h-[292px] overflow-hidden rounded-3xl ${className}`}>
      <ul className="grid grid-cols-4 grid-rows-2 gap-1">
        {images.map((image, index) => (
          <li
            key={image.src}
            className={clsx({
              ['col-span-2 row-span-3']: index === 0,
            })}
          >
            <Image src={image} alt={`Image ${index + 1}`} priority />
          </li>
        ))}
      </ul>
      <Button color="secondary" startIcon={<List />} className="absolute bottom-3 right-3">
        All photos
      </Button>
    </div>
  )
}
