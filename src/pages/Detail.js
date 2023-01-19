import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import ImageModal from '../components/ImageModal'
import { useFetch } from '../hooks/useFetch'
import VanillaTilt from 'vanilla-tilt';
import Loader from '../components/Loader';


function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Detail() {

  const { name } = useParams()
  const BASE_URL = 'https://marvel-sanp-api.vercel.app/card/' + name
  const { data: card, loading, error, action: getCard } = useFetch(BASE_URL)
  const [selectedVariant, setSelectedVariant] = useState('');
  const [imageModal, setImageModal] = useState(null);

  useEffect(() => {
    if (name) {
      getCard()
    }
  }, [name]);

  if (error) {
    return <h1 className='mt-14 text-center text-white text-3xl'>{error}</h1>
  }

  if (loading) {
    return <Loader text={'Loading card info'} />
  }

  return (
    <>
      {
        !card
          ? <Loader text={'Loading card info'} />
          : <div className='container mx-auto flex flex-col lg:flex-row'>
            <Tilt className='lg:w-1/2' options={{
              scale: 1,
              speed: 1000,
              max: 30
            }}>
              <img className='w-full' src={card.image} alt={card.name} />
            </Tilt>
            <div className='lg:w-1/2 flex flex-col mt-8 lg:mt-0'>
              <h1 className='text-white text-4xl font-bold'>{card.name}</h1>
              <div className='mt-3 flex flex-row flex-wrap'>
                {card.abilities.map((ability) => <span className="bg-red-600 text-white text-sm font-medium mt-2 mr-2 px-2 py-1 rounded">{ability}</span>)}
              </div>
              <h3 className='mt-5 text-white text-xl font-medium'>Description</h3>
              <h3 className='mt-2 text-white text-xl font-light'>{card.description}</h3>
              <div className='mt-5 flex flex-row'>
                <div className='flex flex-col items-center mr-6'>
                  <h3 className='text-white text-xl font-medium mb-2'>Cost</h3>
                  <div className='flex font-medium items-center justify-center rounded-full text-4xl w-14 h-14 bg-blue-600 text-white'>
                    {card.cost}
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-white text-xl font-medium mb-2'>Power</h3>
                  <div className='flex font-medium items-center justify-center rounded-full text-4xl w-14 h-14 bg-orange-500 text-white'>
                    {card.power}
                  </div>
                </div>
              </div>
              <h3 className='mt-5 text-white text-xl font-medium'>Source</h3>
              <h3 className='mt-2 text-white text-xl font-light'>{card.source || 'Not avaliable'}</h3>
              {(card.connectedCards && card.connectedCards.length > 0) &&
                <>
                  <h3 className='mt-5 text-white text-xl font-medium'>Related cards</h3>
                  <div className='my-5 h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto'>
                    {card.connectedCards.map((connectedCard) =>
                      <Link key={connectedCard.id} to={`/card/${connectedCard.id}`}>
                        <img className='transition ease-in-out duration-300 hover:scale-110 cursor-pointer' src={connectedCard.image} alt={connectedCard.id} />
                      </Link>)}
                  </div>
                </>
              }
              {(card.variants && card.variants.length > 0) &&
                <>
                  <h3 className='mt-5 text-white text-xl font-medium'>Variants</h3>
                  <div className='my-5 h-full grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto'>
                    {card.variants.map((variant) =>
                      <img
                        key={variant.id}
                        className='transition ease-in-out duration-300 hover:scale-110 cursor-pointer'
                        src={variant.image}
                        alt={variant.id}
                        onClick={() => {
                          setSelectedVariant(variant.image)
                          setImageModal(true)
                        }}
                      />)}
                  </div>
                </>
              }
              <ImageModal
                showModal={imageModal}
                setShowModal={setImageModal}
                content={<img className='relative h-full' src={selectedVariant} alt={'Variant'} />}
              />
            </div>
          </div>
      }
    </>

  )
}
