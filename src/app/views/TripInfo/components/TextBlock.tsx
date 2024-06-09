import { FC } from 'react'

type TextBlock = {
  title: string
  text: string
}

export const TextBlock: FC<TextBlock> = ({ title, text }) => {
  return (
    <div>
      <h5 className="text-label-secondary text-sm">{title}</h5>
      <p className="font-semibold">{text}</p>
    </div>
  )
}
