import React from 'react'

export default function CustomInput({ label, identifier, ...props }) {
    return (
        <div className='flex flex-col items-start'>
            <label htmlFor={identifier} className='block mb-1 font-roboto text-[0.5rem] font-bold uppercase'> {label}</label>
            <input id={identifier} type="number"  {...props} required className='w-full p-2 border border-solid border-[76c0ae] rounded-[4px] bg-transparent text-base focus:outline-blue-500' />
        </div>
    )
}
