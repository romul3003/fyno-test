import { Gallery } from '@/components/Gallery'
import { Itinerary } from '@/components/Itinerary'

import { TripInfo } from '@/views/TripInfo'
import { Highlights } from '@/views/Highlights'
import { TopPanel } from '@/views/TopPanel'
import { Regions } from '@/views/Regions'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto my-0 w-full max-w-[762px] px-4 sm:px-6 md:px-8">
        <TopPanel />
        <Gallery className="mb-7" />
        <TripInfo className="mb-7" />
        <Highlights />
        <Itinerary className="py-6" />
        <Regions />
      </div>
    </main>
  )
}
