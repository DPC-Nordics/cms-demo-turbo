// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const storyblokBaseUrl = `https://api.storyblok.com/v2/cdn`;

// Define our single API slice object
export const storyblokApiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'storyblokApi',
  baseQuery: fetchBaseQuery({
    baseUrl: storyblokBaseUrl,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // the end points are inject from respective slice
  }),
})
