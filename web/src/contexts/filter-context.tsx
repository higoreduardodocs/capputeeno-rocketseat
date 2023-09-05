'use client'

import { ReactNode, createContext, useState } from 'react'

import { FilterType, FilterPriorityType } from '@/@types/filter-types'

export const FilterContext = createContext({
  type: FilterType.ALL,
  setType: (value: FilterType) => {},
  priority: FilterPriorityType.NEWS,
  setPriority: (value: FilterPriorityType) => {},
})

interface ProviderProps {
  children: ReactNode
}

export default function FilterContextProvider({ children }: ProviderProps) {
  const [type, setType] = useState<FilterType>(FilterType.ALL)
  const [priority, setPriority] = useState<FilterPriorityType>(
    FilterPriorityType.NEWS
  )

  return (
    <FilterContext.Provider value={{ type, setType, priority, setPriority }}>
      {children}
    </FilterContext.Provider>
  )
}
