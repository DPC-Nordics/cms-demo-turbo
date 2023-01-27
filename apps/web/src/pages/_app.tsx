import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { wrapper } from '@cms-demo-turbo/store'
import { Navbar } from '@cms-demo-turbo/web-ui'
import { useGetAllStoriesQuery } from '@cms-demo-turbo/api'

if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === '1') {
  require('@cms-demo-turbo/api-mocks')
}

const DPCNextRtkQStartPage = ({ Component, pageProps }: AppProps) => {
  const {
    data: allStories,
    isLoading: allStoriesLoading,
    isError: allStoriesError,
  } = useGetAllStoriesQuery()

  if (allStoriesLoading) {
    return <p>Loading...</p>
  }

  if (allStoriesError) {
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
      <Head>
        <title>DPC Next Basic Application</title>
      </Head>

      <Navbar homeNav={homeNav} items={navItems} />
      <Component {...pageProps} />
    </>
  )
}
export default wrapper.withRedux(DPCNextRtkQStartPage)
