export interface IContentfulProductsResult {
  total: number,
  skip: number,
  limit: number,
  items: Array<IContenfulProduct>
}

export interface IContenfulProduct {
  fields: {
    name: string,
    price: number
  }
}