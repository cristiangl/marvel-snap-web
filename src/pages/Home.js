import React, {useState, useEffect} from 'react'
import CardGallery from '../components/CardGallery';
import Search from '../components/Search'
import { BASE_API_URL } from '../constants';
import { useFetch } from '../hooks/useFetch';

const filterCards = (cards, keyword) => {
  cards = cards.filter(card => card.collectible)
  if (keyword)
    return cards.filter((c) => c.name.toLowerCase().includes(keyword.toLowerCase()))
  
  return cards
}

export default function Home() {

    const [cardName, setCardName] = useState('');
    const ALL_CARDS_BASE_URL = BASE_API_URL + '/cards'
    const { data, loading, error, action: getAllCards } = useFetch(ALL_CARDS_BASE_URL)

    const cards = data ? filterCards(data, cardName) : []

    useEffect(() => {
      getAllCards()
    }, []);

  return (
    <div className='container mx-auto'>
        <div className='flex items-center flex-col'>
          <Search value={cardName} onChange={(val) => setCardName(val)} />
          {cards && <CardGallery cards={cards} error={error} loading={loading} />}
        </div>
      </div>
  )
}
