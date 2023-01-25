export interface IContentstackProductsResult {
  total: number,
  skip: number,
  limit: number,
  entries: Array<IContentstackProduct>
}

export interface IContentstackProduct {
    title: string,
    price: number
}