import { Hero } from 'features'

export interface IHeroSection {
  title: string
  subTitle: string
}

export const HeroSection = (props: IHeroSection) => {
  const { subTitle, title } = props

  return (
    <section
      className="bg-gradient-to-t  via-fuchsia-500 to-transparent from-transparent"
      style={{ height: '79vh' }}
    >
      <Hero title={title} subTitle={subTitle} />
    </section>
  )
}
