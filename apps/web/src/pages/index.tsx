import { useGetContentstackProductsQuery, useGetProductsQuery, useGetStoryByIdQuery } from '@cms-demo-turbo/api'
import { Navbar, PageLayout, Text } from '@cms-demo-turbo/web-ui'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery()
  const { data: data_contentstack } = useGetContentstackProductsQuery()
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

  const homeNav = {
    label: 'DPC Turbo',
    navigateTo: '/',
  }

  const navItems = [
    {
      label: 'Contentful',
      navigateTo: '/contentful',
    }, 
    {
      label: 'Contentstack',
      navigateTo: '/contentstack',
    },
    {
      label: 'Storyblok',
      navigateTo: '/storyblok',
    },
  ]

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
        <div className="card-body">
          <Text type="h3">Storyblok products</Text>
          {storyblokStory.story.content.body.map((b) => (
            <p key={b._uid} className="text-white">
              {b.title}
            </p>
          ))}
        </div>
      </PageLayout>
    </>
  )
}

export default IndexPage
