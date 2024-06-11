'use client'

import { useMemo, useState } from 'react'

type UseBooleanReturn = [
  boolean,
  {
    toggle: () => void
    on: () => void
    off: () => void
  },
]

export const useBoolean = (initialValue = false): UseBooleanReturn => {
  const [value, setValue] = useState<boolean>(initialValue)

  const handlers = useMemo(
    () => ({
      toggle: () => setValue((oldValue) => !oldValue),
      on: () => setValue(true),
      off: () => setValue(false),
    }),
    [],
  )

  return [value, handlers]
}
