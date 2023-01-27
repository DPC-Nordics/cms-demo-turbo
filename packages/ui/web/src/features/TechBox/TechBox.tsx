export interface ITechBox {
  imgSrc: string
  alt: string
  navigateTo: string
  isTargetBlank: boolean
}

export const TechBox = (props: ITechBox) => {
  const { imgSrc, alt, navigateTo, isTargetBlank } = props

  return (
    <a
      href={navigateTo}
      target={isTargetBlank ? '_blank' : undefined}
      rel={isTargetBlank ? 'noreferrer' : undefined}
      className='hover:animate-spin'
    >
      <div className="bg-slate-800 rounded-box p-8 w-36 h-36 flex justify-center">
        <img src={imgSrc} alt={alt} />
      </div>
    </a>
  )
}
