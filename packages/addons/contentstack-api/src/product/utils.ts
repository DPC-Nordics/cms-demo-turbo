import { IContentstackProduct, IContentstackProductsResult } from "./types"

export const productsTransformer = (response: any) => {
  return response.json().then((data: IContentstackProductsResult) => {
    return data.entries.map((apiProduct: IContentstackProduct) => jsonToProduct(apiProduct))
  })
}

export const productTransformer = (response: any) => {
  return response.toJson().then((data: IContentstackProduct) => jsonToProduct(data));
}

export const jsonToProduct = (json: IContentstackProduct): { name: string, price: number } => {
  return {
    name: json.title,
    price: json.price,
  }
}
