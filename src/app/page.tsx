import { Chip } from '@/components/Chip'
import { Divider } from '@/components/Divider'
import { TopPanel } from '@/views/TopPanel'
import { Button } from '@/components/Button'
import PlusIcon from '@/static/icons/plus.svg'
import { Gallery } from '@/components/Gallery'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto my-0 w-full max-w-[762px] px-8">
        <div className="flex items-center justify-between py-5">
          <TopPanel>
            <Chip className="pl-2">Trips</Chip>
            <Divider />
            <Chip>Iceland</Chip>
            <Divider />
          </TopPanel>
          <Button startIcon={<PlusIcon />}>Create</Button>
        </div>

        <Gallery className="mb-7" />
      </div>
    </main>
  )
}
