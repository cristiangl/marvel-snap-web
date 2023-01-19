import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link to={'/'} className='h-28 flex items-center justify-center mb-14 sticky top-0 z-5'>
        <img className='h-28' src={require('../images/Logo.png')} alt='Marvel Snap Logo' />
    </Link>
  )
}
