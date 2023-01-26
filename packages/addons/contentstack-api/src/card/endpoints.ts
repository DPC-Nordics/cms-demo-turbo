import { contentstackApiSlice } from '../contentstackApiSlice';
import { cardsTransformer, cardTransformer } from './utils';

const environment_name = String(process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT);
export const contentstackApiCardSlice = contentstackApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContentstackCards: builder.query<Array<{ title: string, subtitle: string, description:string, logo:{url:string}}>, void>({
      query: () => ({
        url: `content_types/card/entries?environment=${environment_name}`,
        responseHandler: cardsTransformer,
      }),
    }),
    getContentstackCard: builder.query<{ title: string, subtitle: string, description:string, image:string }, string>({
      query: (id: string) => ({
        url: `content_types/card/entries/${id}?environment=${environment_name}`,
        responseHandler: cardTransformer,
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  getRunningOperationPromises: getRunningNavigationOperationPromisesContentstackCard,
} = contentstackApiCardSlice.util

export const { useGetContentstackCardsQuery, useGetContentstackCardQuery } = contentstackApiCardSlice

// export endpoints for use in SSR
export const { getContentstackCards, getContentstackCard } = contentstackApiCardSlice.endpoints
