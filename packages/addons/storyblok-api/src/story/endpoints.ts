import { storyblokApiSlice } from '../storyblokApiSlice';
import { Storyblok } from './types';

const accessToken = String(process.env.NEXT_PUBLIC_STORYBLOK_PUBLISHED_ACCESS_TOKEN);

export const storyblokApiStorySlice = storyblokApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStoryById: builder.query<Storyblok.Response, string>({
      query: (id: string) => ({
        url: `stories/${id}`,
        params: {
          token: accessToken,
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  getRunningOperationPromises: getRunningNavigationOperationPromisessStoryblokStory,
} = storyblokApiStorySlice.util

export const { useGetStoryByIdQuery } = storyblokApiStorySlice

// export endpoints for use in SSR
export const { getStoryById } = storyblokApiStorySlice.endpoints
