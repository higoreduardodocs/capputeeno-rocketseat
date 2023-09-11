import { useDeferredValue } from 'react'
import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { ProductFetchResponseType } from '@/types/product-types'
import mountQuery from '@/utils/graphql-filters'
import useFilter from './use-filter'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string
const fetcher = (query: string): AxiosPromise<ProductFetchResponseType> => {
  return axios.post(API_URL, { query })
}

export default function useProduct() {
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryKey: ['products', type, priority],
    queryFn: () => fetcher(query),
  })

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter((item) =>
    item.name.toLowerCase().includes(searchDeferred.toLowerCase()))

  return { data: filteredProducts }
}
