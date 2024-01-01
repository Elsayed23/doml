import React from 'react'
import img from '../assets/images/5.png'
import SecButton from './SecButton'

const Rectangle2 = () => {
    return (
        <div className="px-4 my-16">
            <div className="container mx-auto py-24 px-4 2xl:py-0 relative before:bottom-0 before:absolute z-10 before:-z-10 before:rounded-lg rounded-lg before:bg-gradient-to-l before:w-full before:h-[75%] 2xl:before:h-full before:left-0 before:right-0 before:from-cyan-400 before:via-indigo-600 before:to-pink-500">
                <div className="flex items-center gap-3 flex-col 2xl:flex-row px-5">
                    <img src={img} alt="img" className='2xl:max-w-[589px]' />
                    <div>
                        <div className="font-semibold leading-tight text-2xl 2xl:text-5xl mb-7 text-center 2xl:text-left">
                            <h1>Get exponential reach</h1>
                            <h1>via AI Marketing</h1>
                        </div>
                        <div className="flex gap-4 items-center flex-col md:flex-row">
                            <input type="text" name="email" className='rounded-full focus:outline-none w-full md:w-[399px]' placeholder='Enter your work email' />
                            <SecButton text='Get in touch' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rectangle2