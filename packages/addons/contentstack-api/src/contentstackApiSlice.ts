// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const stack_api_key = String(process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY)
const delivery_token = String(process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN)

export const contentstackBaseUrl = `https://cdn.contentstack.io/v3`;

// Define our single API slice object
export const contentstackApiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'contentstackApi',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: contentstackBaseUrl,
    prepareHeaders: (headers) => {
      headers.set('api_key', stack_api_key)
      headers.set('access_token', delivery_token)
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
