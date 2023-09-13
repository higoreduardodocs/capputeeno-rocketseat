import { ReactNode } from 'react'
import FilterContextProvider from '@/contexts/filter-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

interface ProviderProps {
  children: ReactNode
}

const theme = {
  desktopBreakpoint: '992px',
}

export default function DefaultProviders({ children }: ProviderProps) {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}
