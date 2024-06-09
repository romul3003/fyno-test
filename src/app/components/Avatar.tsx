import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

import AvatarFallbackIcon from '@/static/icons/avatar-fallback.svg'

type AvatarProps = {
  src?: ImageProps['src']
  alt?: string
  width?: number
  height?: number
  className?: string
}

export const Avatar: FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  width = 32,
  height = 32,
  className = '',
}) => {
  if (!src) {
    return <AvatarFallbackIcon width={width} height={height} className={className} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ width, height }}
      className={className}
    />
  )
}
