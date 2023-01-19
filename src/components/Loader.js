import React from 'react'

export default function Loader({text}) {
    return (
        <div className='flex flex-col justify-center items-center mt-24'>
            <span className="loader"></span>
            <h3 className='text-white text-3xl mt-4'>{text}</h3>
        </div>
    )
}
