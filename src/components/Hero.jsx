import React from 'react'
import Navbar from './Navbar'
import earth from '../assets/images/earth.png'
import SecButton from './SecButton'

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-84.8px)] px-4 py-16 xl:py-0 flex items-center">
                <div className="flex gap-7 xl:justify-between flex-col-reverse justify-center xl:flex-row items-center container mx-auto">
                    <div className="flex flex-col xl:items-start items-center gap-5 xl:gap-9 text-center xl:text-left">
                        <div className='leading-tight text-[44.871px] xl:text-[72.621px]'>
                            <h1 className='bg-gradient-to-l from-cyan-400 via-indigo-600 to-pink-500 text-transparent bg-clip-text'>AI Marketing.</h1>
                            <h1>Optimized Reach.</h1>
                        </div>
                        <p className='text-lg'>Our vision is to revolutionize the way brands and advertisers target, reach</p>
                        <div className='bg-gradient-to-r from-cyan-400 via-indigo-600 to-pink-500 h-[1px] w-full'></div>
                        <div className="h-[1px] bg-gradient-to-l from-cyan-400 via-indigo-600 to-pink-500"></div>
                        <SecButton text='Get Started' />
                    </div>
                    <img src={earth} alt="earth" className='animate-pulse-slow' />
                </div>
            </div>
        </>
    )
}

export default Hero