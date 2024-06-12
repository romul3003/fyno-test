'use client'

import { ChangeEvent, FC, useState } from 'react'

import PlainIcon from '@/static/icons/plain.svg'
import CalendarIcon from '@/static/icons/calendar.svg'
import PersonIcon from '@/static/icons/person-small.svg'

import { Input } from './Input'

type ItineraryProps = {
  className?: string
}

export const Itinerary: FC<ItineraryProps> = ({ className }) => {
  const [value, setValue] = useState({
    departure: '',
    arrival: '',
    date: '',
    persons: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event

    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }))
  }

  return (
    <div className={className}>
      <h3 className="mb-6 text-2xl font-semibold">Iceland itinerary</h3>
      <form className="grid gap-4 rounded-2xl bg-brand-50 p-6 sm:grid-cols-2 md:grid-cols-[2.5fr_1fr_70px] md:flex-row">
        <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 md:col-span-1 md:grid-cols-[1fr_32px_1fr] md:gap-1">
          <Input
            name="departure"
            value={value.departure}
            onChange={handleChange}
            placeholder="Reykjavík, KEF"
          />
          <PlainIcon className="hidden md:block" />
          <Input
            name="arrival"
            value={value.arrival}
            onChange={handleChange}
            placeholder="San Francisco, SFO"
          />
        </div>

        <Input
          name="date"
          startIcon={<CalendarIcon />}
          value={value.date}
          onChange={handleChange}
          placeholder="Jul 03 - Jul 11"
        />
        <Input
          type="number"
          name="persons"
          startIcon={<PersonIcon />}
          onChange={handleChange}
          placeholder="2"
          // className="max-w-[64px]"
        />
      </form>
    </div>
  )
}
