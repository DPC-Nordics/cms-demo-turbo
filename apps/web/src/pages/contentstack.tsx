import { CardList, PageLayout } from '@cms-demo-turbo/web-ui'
import { NextPage } from 'next'
import { useGetContentstackCardsQuery, useGetAllStoriesQuery } from '@cms-demo-turbo/api'

const IndexPage: NextPage = () => {
  const { data: data_contentstack, isLoading } = useGetContentstackCardsQuery()

  const cards = data_contentstack
  return (
    <>
      <PageLayout>
        <CardList cards={cards} />
      </PageLayout>
    </>
  )
}

export default IndexPage
