import Link from 'next/link'
import { TextBlock } from './components/TextBlock'
import { FC } from 'react'

const data = [
  { title: 'Trip duration', text: '7 days' },
  { title: 'Exploration', text: '4 regions' },
  { title: 'Flight', text: '7h 20m from SFO' },
]

type TripInfoProps = {
  className?: string
}

export const TripInfo: FC<TripInfoProps> = ({ className }) => {
  return (
    <section
      className={`mb-7 grid grid-cols-[0.9fr_0.9fr_0.9fr_1.3fr] items-center gap-1 rounded-2xl p-6 shadow-elevation-10 ${className}`}
    >
      {data.map(({ title, text }) => (
        <TextBlock key={title} title={title} text={text} />
      ))}
      <Link href="#itinerary" className="text-primary justify-self-end">
        View itinerary
      </Link>
    </section>
  )
}
