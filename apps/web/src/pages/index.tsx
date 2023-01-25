import { useGetAllStoriesQuery, useGetContentstackProductsQuery, useGetProductsQuery } from '@cms-demo-turbo/api'
import { Navbar, PageLayout, Text } from '@cms-demo-turbo/web-ui'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery()
  const { data: data_contentstack } = useGetContentstackProductsQuery()
  const {
    data: allStories,
    isLoading: allStoriesLoading,
    isError: allStoriesError,
  } = useGetAllStoriesQuery()

  if (isLoading || allStoriesLoading) {
    return <p>Loading...</p>
  }

  if (isError || allStoriesError) {
    return <p>Error</p>
  }

  const homeStory = allStories.stories.find((story) => story.slug === 'home')
  const homeNav = {
    label: homeStory.name,
    navigateTo: '/',
  }

  const navItems = allStories.stories
    .filter((story) => story.slug !== 'home')
    .map((story) => ({
      label: story.name,
      navigateTo: story.slug,
    }))

  return (
    <>
      <Navbar homeNav={homeNav} items={navItems} />
      <PageLayout>
        <div className="card-body">
          <Text type="h3">Contentstack products</Text>
          {data_contentstack?.map((product) => (
            <div key={product.name}>
              <Text type="body">
                {product.name} - {product.price}
              </Text>
            </div>
          ))}
        </div>
        <div className="card-body">
          <Text type="h3">Contentful products</Text>
          {data?.map((product) => (
            <div key={product.name}>
              <Text type="body">
                {product.name} - {product.price}
              </Text>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  )
}

export default IndexPage
