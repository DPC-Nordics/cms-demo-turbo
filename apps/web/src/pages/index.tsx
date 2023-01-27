import { Storyblok, useGetAllStoriesQuery } from '@cms-demo-turbo/api'
import {
  HeroSection, TechBoxSection
} from '@cms-demo-turbo/web-ui'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
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

  const hero = homeStory.content.body.find(
    (item) => item.component === 'Hero',
  ) as Storyblok.Blok.IHero

  const techBoxs = homeStory.content.body.filter(
    (item) => item.component === 'Tech box',
  ) as Array<Storyblok.Blok.ITechBox>

  const techBoxsMapped = techBoxs.map((tb) => ({
    _uid: tb._uid,
    navigateTo: tb.navigateTo.url,
    imgSrc: tb.imgSrc.url,
    isTargetBlank: Boolean(tb.navigateTo.target),
  }))

  return (
    <>
      <HeroSection title={hero.title} subTitle={hero.subTitle} />
      <TechBoxSection techBoxs={techBoxsMapped} />
    </>
  )
}

export default IndexPage
