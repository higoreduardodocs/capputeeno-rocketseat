export interface ProductType {
  id: string
  name: string
  image_url: string
  price_in_cents: number
  category: string
}

export interface ProductFetchResponseType {
  data: { allProducts: ProductType[] }
}
