import { Chip } from '@/components/Chip'
import { Divider } from '@/components/Divider'
import { Button } from '@/components/Button'

import { DaySelector } from '@/views/DaySelector'

import PlusIcon from '@/static/icons/plus.svg'

export const TopPanel = () => {
  return (
    <section className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
      <DaySelector>
        <Chip className="grow pl-2">Trips</Chip>
        <Divider />
        <Chip className="grow">Iceland</Chip>
        <Divider />
      </DaySelector>
      <Button startIcon={<PlusIcon />} className="justify-center gap-0 hover:bg-neutral-500">
        Create
      </Button>
    </section>
  )
}
