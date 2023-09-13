import { useDeferredValue } from 'react'
import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'

import {
  ProductFetchResponseType,
  ProductsFetchResponseType,
} from '@/types/product-types'
import mountQuery from '@/utils/graphql-filters'
import useFilter from './use-filter'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string
const fetcher = (query: string): AxiosPromise<ProductsFetchResponseType> => {
  return axios.post(API_URL, { query })
}
export function useProducts() {
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryKey: ['products', type, priority],
    queryFn: () => fetcher(query),
  })

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter((item) =>
    item.name.toLowerCase().includes(searchDeferred.toLowerCase())
  )

  return { data: filteredProducts }
}

const fetcherProduct = (id: string): AxiosPromise<ProductFetchResponseType> => {
  return axios.post(API_URL, {
    query: `
  query {
    Product(id: "${id}") {
      id, name, category, image_url, price_in_cents, description
    }
  }
  `,
  })
}
export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcherProduct(id),
    queryKey: ['product', id],
  })
  
  return {
    data: data?.data?.data?.Product
  }
}
