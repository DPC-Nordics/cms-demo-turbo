import { exampleApiSlice } from '@cms-demo-turbo/example-api'
import { contentfulApiSlice } from '@cms-demo-turbo/contentful-api'
import { contentstackApiSlice } from '@cms-demo-turbo/contentstack-api'
import exampleSlice from './example/exampleSlice'

/**
 * Add all reducers here
 */
export const reducers = {
  example: exampleSlice.reducer,
  products: contentfulApiSlice.reducer,

  //-----------------------------------------------------------
  // Add all api slices
  //-----------------------------------------------------------
  [exampleApiSlice.reducerPath]: exampleApiSlice.reducer,
  [contentfulApiSlice.reducerPath]: contentfulApiSlice.reducer,
  [contentstackApiSlice.reducerPath]: contentstackApiSlice.reducer,
}

//-----------------------------------------------------------
// add all api middlewares here
//-----------------------------------------------------------
export const extra_midlewares = [exampleApiSlice.middleware, contentfulApiSlice.middleware, contentstackApiSlice.middleware];
