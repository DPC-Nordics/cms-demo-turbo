import { IContentstackCard, IContentstackCardsResult } from './types'

export const cardsTransformer = (response: any) => {
  return response.json().then((data: IContentstackCardsResult) => {
    return data.entries.map((apiCard: IContentstackCard) => jsonToCard(apiCard))
  })
}

export const cardTransformer = (response: any) => {
  return response.toJson().then((data: IContentstackCard) => jsonToCard(data))
}

export const jsonToCard = (
  json: IContentstackCard,
): { title: string; subtitle: string; description: string; image: string } => {
  return {
    title: json.title,
    subtitle: json.subtitle,
    description: json.description,
    image: json.logo.url,
  }
}
