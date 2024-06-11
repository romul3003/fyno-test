import { ImageProps } from 'next/image'

export type CardType = {
  title: string
  subtitle: string
  src: ImageProps['src']
  rating?: string | number
  isCuratorsPick?: boolean
}

export type Option = {
  value: string
  label: string
}
