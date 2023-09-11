'use client'

import { ReactNode, createContext, useState } from 'react'

import { FilterType, FilterPriorityType } from '@/types/filter-types'

export const FilterContext = createContext({
  type: FilterType.ALL,
  setType: (value: FilterType) => {},
  priority: FilterPriorityType.NEWS,
  setPriority: (value: FilterPriorityType) => {},
  search: '',
  setSearch: (value: string) => {},
})

interface ProviderProps {
  children: ReactNode
}

export default function FilterContextProvider({ children }: ProviderProps) {
  const [type, setType] = useState<FilterType>(FilterType.ALL)
  const [priority, setPriority] = useState<FilterPriorityType>(
    FilterPriorityType.NEWS
  )
  const [search, setSearch] = useState<string>('')

  return (
    <FilterContext.Provider value={{ type, setType, priority, setPriority, search, setSearch }}>
      {children}
    </FilterContext.Provider>
  )
}
