import { ImageProps } from 'next/image'

export type CardTypes = {
  title: string
  subtitle: string
  src: ImageProps['src']
  rating?: string | number
  isCuratorsPick?: boolean
}
