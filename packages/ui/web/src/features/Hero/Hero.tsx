export interface IHero {
  title: string
  subTitle: string
}

export const Hero = (props: IHero) => {
  const { title, subTitle } = props

  return (
    <div className="hero min-h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subTitle}</p>
        </div>
      </div>
    </div>
  )
}
