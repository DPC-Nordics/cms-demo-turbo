// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const spaceId = String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
const environment = String(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT);
const accessToken = String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);

export const contentfulBaseUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}`;

// Define our single API slice object
export const contentfulApiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'contentfulApi',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: contentfulBaseUrl,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${accessToken}`)
      return headers
    },
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
