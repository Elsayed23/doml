import React from 'react'
import img from '../assets/images/man.jpg'
import dis from '../assets/images/discord.png'

const Rectangle = () => {
    return (
        <div className="px-4">
            <div className='container mx-auto p-8 xl:p-24 rounded-lg bg-gradient-to-l from-cyan-400 via-indigo-600 to-pink-500'>
                <div className="flex items-center gap-3 xl:gap-12 flex-col xl:flex-row">
                    <img src={img} alt="img" className='w-[210px] h-[210px] rounded-[50px] border-2 border-[#00F0FF] object-cover shadow-2xl' />
                    <div>
                        <p className='font-bold Montserrat leading-[196.9%] xl:text-lg mb-3'>It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.</p>
                        <h2 className='font-bold text-2xl mb-2'>Amaka Micheal</h2>
                        <h5 className='mb-2'>Media Executive, Buying & Control</h5>
                        <img src={dis} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rectangle