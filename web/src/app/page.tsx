import FilterBar from '@/components/filter-bar'
import ProductList from '@/components/product-list'
import DefaultLayout from '@/components/default-layout'

export default function Home() {
  return (
    <DefaultLayout>
      <FilterBar />
      <ProductList />
    </DefaultLayout>
  )
}
