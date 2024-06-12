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
    <div className={`relative overflow-hidden rounded-3xl sm:max-h-[292px] ${className}`}>
      <ul className="grid grid-cols-4 gap-1 sm:grid-rows-2">
        {images.map((image, index) => (
          <li
            key={image.src}
            className={clsx({
              ['col-span-4 sm:col-span-2 sm:row-span-3']: index === 0,
              ['col-span-2 sm:col-span-1']: index !== 0,
            })}
          >
            <Image src={image} alt={`Image ${index + 1}`} priority placeholder="blur" />
          </li>
        ))}
      </ul>
      <Button color="secondary" startIcon={<List />} className="absolute bottom-3 right-3">
        All photos
      </Button>
    </div>
  )
}
