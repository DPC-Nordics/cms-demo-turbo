import { contentstackApiSlice } from '../contentstackApiSlice';
import { productsTransformer, productTransformer } from './utils';

const environment_name = String(process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT);
export const contentstackApiProductSlice = contentstackApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContentstackProducts: builder.query<Array<{ name: string, price: number }>, void>({
      query: () => ({
        url: `content_types/product/entries?environment=${environment_name}`,
        responseHandler: productsTransformer,
      }),
    }),
    getContentstackProduct: builder.query<{ name: string, price: number }, string>({
      query: (id: string) => ({
        url: `content_types/product/entries/${id}?environment=${environment_name}`,
        responseHandler: productTransformer,
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  getRunningOperationPromises: getRunningNavigationOperationPromisesContentstackProduct,
} = contentstackApiProductSlice.util

export const { useGetContentstackProductsQuery, useGetContentstackProductQuery } = contentstackApiProductSlice

// export endpoints for use in SSR
export const { getContentstackProducts, getContentstackProduct } = contentstackApiProductSlice.endpoints
