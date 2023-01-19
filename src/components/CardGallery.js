import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

export default function CardGallery({ cards, error, loading }) {


    if (loading) {
        return <Loader text={'Loading cards'} />
    }

    if (error) {
        return <h1 className='mt-14 text-center text-white text-3xl'>{error}</h1>
    }

    return (
        <>
            {(cards && cards.length) > 0
                ? <div className='my-10 px-2 lg:px-5 h-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto'>
                    {cards.map((card) => {
                        return (
                            <Link to={`/card/${card.CardDefId}`} key={card.name}>
                                <img className='transition ease-in-out duration-300 hover:scale-110 cursor-pointer' src={card.image} alt={card.name} />
                                {/* <h2 className='mt-3 text-center text-white text-xl'>{card.name}</h2> */}
                            </Link>
                        )
                    }
                    )}
                </div>
                : <div className='w-full flex items-center mt-8'>

                    <h1 className='text-white text-3xl text-center mt-8 w-full'>Keep trying</h1>
                </div>
            }
        </>
    )
}
