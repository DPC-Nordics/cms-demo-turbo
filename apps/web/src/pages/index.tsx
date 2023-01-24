import { getProduct, useGetProductsQuery } from '@cms-demo-turbo/api'
import { useGetContentstackProductsQuery } from '@cms-demo-turbo/api'
import { PageLayout } from '@cms-demo-turbo/web-ui'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery( );
  const { data:data_contentstack } = useGetContentstackProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <PageLayout>
      <div>
      {data_contentstack?.map((product) => <p key={product.name} className='text-white'>{product.name} - {product.price}</p>)}
        </div>
      {data?.map((product) => <p key={product.name} className='text-white'>{product.name} - {product.price}</p>)}
    </PageLayout>
  )
}

export default IndexPage
