export interface IContentstackCardsResult {
  total: number,
  skip: number,
  limit: number,
  entries: Array<IContentstackCard>
}

export interface IContentstackCard {
    title: string,
    subtitle:string,
    description: string,
    logo:{
      url:string
    }
}