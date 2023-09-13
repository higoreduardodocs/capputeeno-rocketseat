'use client'

import DefaultProviders from '@/components/default-providers'
import FilterBar from '@/components/filter-bar'
import ProductList from '@/components/product-list'
import DefaultLayout from '@/components/default-layout'

export default function Home() {
  return (
    <DefaultProviders>
      <DefaultLayout>
        <FilterBar />
        <ProductList />
      </DefaultLayout>
    </DefaultProviders>
  )
}
