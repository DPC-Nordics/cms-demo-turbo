import { contentfulApiSlice } from '../contentfulApiSlice';
import { productsTransformer, productTransformer } from './utils';

export const contentfulApiProductSlice = contentfulApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Array<{ name: string, price: number }>, void>({
      query: () => ({
        url: 'entries',
        responseHandler: productsTransformer,
      }),
    }),
    getProduct: builder.query<{ name: string, price: number }, string>({
      query: (id: string) => ({
        url: `entries/${id}`,
        responseHandler: productTransformer,
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  getRunningOperationPromises: getRunningNavigationOperationPromisesContentfulProduct,
} = contentfulApiProductSlice.util

export const { useGetProductsQuery, useGetProductQuery } = contentfulApiProductSlice

// export endpoints for use in SSR
export const { getProducts, getProduct } = contentfulApiProductSlice.endpoints
