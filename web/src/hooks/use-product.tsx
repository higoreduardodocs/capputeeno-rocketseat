import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { ProductFetchResponseType } from '@/types/product-types'
import mountQuery from '@/utils/graphql-filters'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string
const fetcher = (query: string): AxiosPromise<ProductFetchResponseType> => {
  return axios.post(API_URL, { query })
}

export default function useProduct() {
  const query = mountQuery()
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetcher(query),
  })

  const products = data?.data?.data?.allProducts

  return { data: products }
}
