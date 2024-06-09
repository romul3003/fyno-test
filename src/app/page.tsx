import { Gallery } from '@/components/Gallery'
import { Itinerary } from '@/components/Itinerary'

import { TripInfo } from '@/views/TripInfo'
import { Highlights } from '@/views/Highlights'
import { TopPanel } from '@/views/TopPanel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto my-0 w-full max-w-[762px] px-8">
        <TopPanel />
        <Gallery className="mb-7" />
        <TripInfo className="mb-7" />
        <Highlights />
        <Itinerary className="py-6" />
      </div>
    </main>
  )
}
