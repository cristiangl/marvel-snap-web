import React from 'react'

export default function Search({value, onChange}) {
    return (
        <div className='px-4 w-full lg:w-1/2'>
            <input autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} type="text" id="first_name" className="w-full font-bold p-1 bg-transparent border-b focus:outline-none text-white placeholder:text-white placeholder:font-light text-3xl" placeholder="Search your card" required />
        </div>
    )
}
