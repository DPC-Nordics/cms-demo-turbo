import { IContenfulProduct, IContentfulProductsResult } from "./types"

export const productsTransformer = (response: any) => {
  return response.json().then((data: IContentfulProductsResult) => {
    return data.items.map((apiProduct: IContenfulProduct) => jsonToProduct(apiProduct))
  })
}

export const productTransformer = (response: any) => {
  return response.toJson().then((data: IContenfulProduct) => jsonToProduct(data));
}

export const jsonToProduct = (json: IContenfulProduct): { name: string, price: number } => {
  return {
    name: json.fields.name,
    price: json.fields.price,
  }
}
