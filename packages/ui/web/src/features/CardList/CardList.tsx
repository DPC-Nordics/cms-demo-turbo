import React from 'react'
import { Card } from '../Card'

export interface ICardListProps {
  cards: any[] //TODO:fix type
}

export const CardList: React.FC<ICardListProps> = ({
cards
}) => {
  return (
    <div className='flex flex-wrap gap-4'>
    {cards?.map((card, idx) => <div key={idx}>
      <Card title={card.title} description={card.description} image={card.image} subtitle={card.subtitle} />
    </div>)}
    </div>
  )
}
