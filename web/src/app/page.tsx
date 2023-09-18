import FilterBar from '@/components/filter-bar'
import ProductList from '@/components/product-list'
import DefaultLayout from '@/components/default-layout'
import Pagination from '@/components/pagination'

export default function Home() {
  return (
    <DefaultLayout>
      <FilterBar />
      <Pagination />
      <ProductList />
    </DefaultLayout>
  )
}
