import { exampleApiSlice } from '@cms-demo-turbo/example-api'
import { contentfulApiSlice } from '@cms-demo-turbo/contentful-api'
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
}

//-----------------------------------------------------------
// add all api middlewares here
//-----------------------------------------------------------
export const extra_midlewares = [exampleApiSlice.middleware, contentfulApiSlice.middleware];
