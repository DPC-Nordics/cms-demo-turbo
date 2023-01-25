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
    <label className="swap swap-flip">
      <input type="checkbox" />

      <div className="swap-off">
        <div className="card card w-96 bg-base-100 shadow-xl g">
          <figure>
            <img src={image} alt="Shoes" />
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
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
