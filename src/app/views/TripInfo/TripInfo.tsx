import Link from 'next/link'
import { TextBlock } from './components/TextBlock'

const data = [
  { title: 'Trip duration', text: '7 days' },
  { title: 'Exploration', text: '4 regions' },
  { title: 'Flight', text: '7h 20m from SFO' },
]

export const TripInfo = () => {
  return (
    <div className="grid grid-cols-[0.9fr_0.9fr_0.9fr_1.3fr] items-center gap-1 rounded-2xl p-6 shadow-elevation-10">
      {data.map(({ title, text }) => (
        <TextBlock key={title} title={title} text={text} />
      ))}
      <Link href="#itinerary" className="text-primary justify-self-end">
        View itinerary
      </Link>
    </div>
  )
}
