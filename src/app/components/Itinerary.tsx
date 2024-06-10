import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import PlainIcon from '@/static/icons/plain.svg'
import CalendarIcon from '@/static/icons/calendar.svg'
import PersonIcon from '@/static/icons/person-small.svg'

type InfoBlockProps = {
  children: ReactNode
  className?: string
  startIcon?: ReactNode
}

const InfoBlock: FC<InfoBlockProps> = ({ children, className = '', startIcon }) => {
  return (
    <div
      className={clsx(
        `text-label-secondary flex h-10 items-center whitespace-nowrap rounded-lg bg-white px-4 text-sm ${className}`,
        {
          ['pl-1']: !!startIcon,
        },
      )}
    >
      {!!startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
    </div>
  )
}

type ItineraryProps = {
  className?: string
}

export const Itinerary: FC<ItineraryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h3 className="mb-6 text-2xl font-semibold">Iceland itinerary</h3>
      <div className="bg-brand-50 flex gap-4 rounded-2xl p-6">
        <div className="flex grow items-center gap-1">
          <InfoBlock className="min-w-44">Reykjavík, KEF</InfoBlock>
          <PlainIcon />
          <InfoBlock className="min-w-44">San Francisco, SFO</InfoBlock>
        </div>
        <InfoBlock startIcon={<CalendarIcon />}>Jul 03 - Jul 11</InfoBlock>
        <InfoBlock startIcon={<PersonIcon />}>2</InfoBlock>
      </div>
    </div>
  )
}
