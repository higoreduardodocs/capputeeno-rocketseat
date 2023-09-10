'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import FilterBar from '@/components/filter-bar'
import ProductList from '@/components/product-list'

export default function Home() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <main>
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  )
}
