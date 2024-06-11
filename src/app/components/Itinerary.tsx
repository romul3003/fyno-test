'use client'

import { ChangeEvent, FC, HTMLInputTypeAttribute, ReactNode, useState } from 'react'
import clsx from 'clsx'

import PlainIcon from '@/static/icons/plain.svg'
import CalendarIcon from '@/static/icons/calendar.svg'
import PersonIcon from '@/static/icons/person-small.svg'

type InputProps = {
  type?: HTMLInputTypeAttribute
  value?: string | number
  name: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  startIcon?: ReactNode
}

const Input: FC<InputProps> = ({ className, startIcon, type, ...rest }) => {
  return (
    <label
      className={`flex items-center overflow-hidden rounded-lg bg-white focus-within:outline focus-within:outline-2 focus-within:outline-primary ${className}`}
    >
      <span className="">{startIcon}</span>
      <input
        {...rest}
        type={type}
        className={clsx('h-10 w-full px-4 text-sm text-label-secondary outline-none', {
          ['pl-2']: !!startIcon,
          ['pr-2']: type === 'number',
        })}
      />
    </label>
  )
}

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
      <form className="flex gap-4 rounded-2xl bg-brand-50 p-6">
        <div className="flex grow items-center gap-1">
          <Input
            name="departure"
            value={value.departure}
            onChange={handleChange}
            placeholder="Reykjavík, KEF"
            className="min-w-44"
          />
          <PlainIcon />
          <Input
            name="arrival"
            value={value.arrival}
            onChange={handleChange}
            placeholder="San Francisco, SFO"
            className="min-w-44"
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
          className="max-w-[64px]"
        />
      </form>
    </div>
  )
}
