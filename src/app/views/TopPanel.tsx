import { Chip } from '@/components/Chip'
import { Divider } from '@/components/Divider'
import { Button } from '@/components/Button'

import { DaySelector } from '@/views/DaySelector'

import PlusIcon from '@/static/icons/plus.svg'

export const TopPanel = () => {
  return (
    <section className="flex items-center justify-between py-5">
      <DaySelector>
        <Chip className="pl-2">Trips</Chip>
        <Divider />
        <Chip>Iceland</Chip>
        <Divider />
      </DaySelector>
      <Button startIcon={<PlusIcon />} className="hover:bg-neutral-500">
        Create
      </Button>
    </section>
  )
}
