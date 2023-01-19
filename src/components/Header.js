import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='h-20 flex items-center justify-center mt-4 mb-14'>
      <Link to={'/'} >
          <img className='h-28' src={require('../images/Logo.png')} alt='Marvel Snap Logo' />
      </Link>
    </div>
  )
}
