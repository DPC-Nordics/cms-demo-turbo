import { getProduct, useGetProductsQuery } from '@cms-demo-turbo/api'
import { useGetContentstackProductsQuery } from '@cms-demo-turbo/api'
import { PageLayout } from '@cms-demo-turbo/web-ui'
import { Text } from '@cms-demo-turbo/web-ui'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery()
  const { data: data_contentstack } = useGetContentstackProductsQuery()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
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
  )
}

export default IndexPage
