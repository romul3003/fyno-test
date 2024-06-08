'use client'

import { FC, ReactNode, useState } from 'react'
import { Select } from '@/components/Select'

const options = [
  { value: '5', label: '5 days' },
  { value: '6', label: '6 days' },
  { value: '7', label: '7 days' },
  { value: '8', label: '8 days' },
  { value: '9', label: '9 days' },
  { value: '10', label: '10 days' },
]

type TopPanelProps = {
  children: ReactNode
}

export const TopPanel: FC<TopPanelProps> = ({ children }) => {
  const [option, setOption] = useState('7')

  const handleSelectChange = (value: string) => {
    setOption(value)
  }

  return (
    <div className="flex rounded-2xl pl-4 shadow-elevation-10">
      {children}
      <Select
        options={options}
        value={option}
        onChange={handleSelectChange}
        className="!rounded-2xl border-none pr-2"
      />
    </div>
  )
}
