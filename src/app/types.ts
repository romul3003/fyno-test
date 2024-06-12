import { ImageProps } from 'next/image'

export type Highlight = {
  title: string
  subtitle: string
  src: ImageProps['src']
  rating?: string | number
  isCuratorsPick?: boolean
  day?: number
  id: string
  duration?: number
}

export type Option = {
  value: string
  label: string
}
