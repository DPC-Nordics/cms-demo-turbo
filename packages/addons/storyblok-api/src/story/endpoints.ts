import { storyblokApiSlice } from '../storyblokApiSlice'
import { Storyblok, StoryblokStoryName } from './types'

const accessToken = String(
  process.env.NEXT_PUBLIC_STORYBLOK_PUBLISHED_ACCESS_TOKEN,
)

export const storyblokApiStorySlice = storyblokApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStories: builder.query<Storyblok.Stories, void>({
      query: () => ({
        url: 'stories',
        params: {
          token: accessToken,
        },
      }),
    }),
    getStoryById: builder.query<Storyblok.Story, StoryblokStoryName>({
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
  getRunningOperationPromises:
    getRunningNavigationOperationPromisessStoryblokStory,
} = storyblokApiStorySlice.util

export const { useGetStoryByIdQuery, useGetAllStoriesQuery } =
  storyblokApiStorySlice

// export endpoints for use in SSR
export const { getStoryById, getAllStories } = storyblokApiStorySlice.endpoints
