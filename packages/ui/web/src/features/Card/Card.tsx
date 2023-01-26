import React from 'react'

export interface ICardProps {
  image?: string
  title: string
  subtitle: string
  description: string
}

export const Card: React.FC<ICardProps> = ({
  title,
  image,
  description,
  subtitle,
}) => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" />

      <div className="swap-off">
        <div className="card card w-96 bg-base-100 shadow-xl g">
          <figure className="px-10 pt-10">
            <img className="max-h-20 min-h-20" src={image} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{subtitle}</p>

          </div>
        </div>
      </div>

      <div className="swap-on">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="max-h-20 min-h-20"  src={image} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </label>
  )
}
