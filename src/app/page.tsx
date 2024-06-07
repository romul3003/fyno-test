import { Chip } from '@/components/Chip'
import { Divider } from '@/components/Divider'
import { TopPanel } from './views/TopPanel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mx-auto my-0 max-w-[698px]">
        <div className="py-5">
          <TopPanel>
            <Chip className="pl-4">Trips</Chip>
            <Divider />
            <Chip>Iceland</Chip>
            <Divider />
          </TopPanel>
        </div>
      </div>
    </main>
  )
}
