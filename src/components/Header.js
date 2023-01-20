import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='h-20 flex items-center justify-center mt-4 mb-14 '>
      <Link to={'/'} >
          <img className='h-28 transition ease-in-out duration-300 hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.2)] hover:scale-105 cursor-pointer' src={require('../images/Logo.png')} alt='Marvel Snap Logo' />
      </Link>
    </div>
  )
}
