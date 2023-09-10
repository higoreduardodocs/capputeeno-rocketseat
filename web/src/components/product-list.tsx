import styled from 'styled-components'

import useProduct from '@/hooks/use-product'
import ProductCard from './product-card'

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`

export default function ProductList() {
  const { data: products } = useProduct()

  return (
    <ProductGrid>
      {products?.length && products.map((item) => (
        <ProductCard key={item.id} image={item.image_url} title={item.name} price={item.price_in_cents} />
      ))}
    </ProductGrid>
  )
}