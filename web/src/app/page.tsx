'use client'

import FilterBar from '@/components/filter-bar'
import ProductList from '@/components/product-list'

export default function Home() {
  return (
    <main>
      <FilterBar />
      <ProductList />
    </main>
  )
}
