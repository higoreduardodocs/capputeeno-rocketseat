import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { ProductType } from '@/types/product-types'
import ProductCard from './product-card'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([])
  const query = `query { allProducts { id, name, image_url, price_in_cents } }`

  const getProducts = async () => {
    const { data } = await axios.post(API_URL, { query })
    setProducts(data?.data?.allProducts)
  }
  useEffect(() => {
    getProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ProductGrid>
      {products?.length && products.map((item) => (
        <ProductCard key={item.id} image={item.image_url} title={item.name} price={item.price_in_cents} />
      ))}
    </ProductGrid>
  )
}