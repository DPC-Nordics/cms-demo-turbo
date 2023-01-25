import {
   useGetProductsQuery,
   useGetStoryByIdQuery,
} from '@cms-demo-turbo/api'
import {  PageLayout } from '@cms-demo-turbo/web-ui'
import {  NextPage } from 'next'

const IndexPage: NextPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery()
  const {
    data: storyblokStory,
    isLoading: storyblokStoryIsLoading,
    isError: storyblokStoryIsError,
  } = useGetStoryByIdQuery('storyblok-products')

  if (isLoading || storyblokStoryIsLoading) {
    return <p>Loading...</p>
  }

  if (isError || storyblokStoryIsError) {
    return <p>Error</p>
  }

  return (
    <PageLayout>
      <p className="text-white">{storyblokStory.story.name}</p>
      {storyblokStory.story.content.body.map((b) => (
        <p key={b._uid} className="text-white">
          {b.title}
        </p>
      ))}
      <br />
      <p className="text-white">Contentful products</p>
      {data?.map((product) => (
        <p key={product.name} className="text-white">
          {product.name} - {product.price}
        </p>
      ))}
    </PageLayout>
  )
}

export default IndexPage
