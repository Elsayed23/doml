import React from 'react'
import SecButton from './SecButton'

const AnyName = ({ paragraph, imgUrl, reverse }) => {
    return (
        <div className='px-4 py-8'>
            <div className={`flex gap-7 ${reverse && 'xl:flex-row-reverse'} text-center xl:text-left xl:justify-between flex-col-reverse justify-center xl:flex-row items-center container mx-auto`}>
                <div className='flex flex-col gap-6 flex-1'>
                    <div className='mb-3 text-4xl'>
                        <h1 className='bg-gradient-to-l from-cyan-400 via-indigo-600 to-pink-500 text-transparent bg-clip-text'>AI Marketing.</h1>
                        <h1>Optimized Reach</h1>
                    </div>
                    <p>{paragraph}</p>
                    <div className='bg-gradient-to-r from-cyan-400 via-indigo-600 to-pink-500 h-[1px] w-full'></div>
                    <SecButton text='Learn more' />
                </div>
                <img src={imgUrl} alt="img" className='flex-1' />
            </div>
        </div>
    )
}

export default AnyName