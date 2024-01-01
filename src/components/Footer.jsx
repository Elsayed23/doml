import React from 'react'

const Footer = () => {

    const cuurrYear = new Date().getFullYear()

    return (
        <footer className='px-4'>
            <div className="container mx-auto">
                <div className='bg-gradient-to-r from-cyan-400 via-indigo-600 to-pink-500 h-[1px] w-full'></div>
                <div className='flex justify-center md:justify-between py-8 flex-wrap gap-3 lg:gap-0 text-center'>
                    <span>Copyright © {cuurrYear} DOML. All rights reserved.</span>
                    <span className='font-bold bg-gradient-to-l from-cyan-400 via-indigo-600 to-pink-500 text-transparent bg-clip-text'>Made with ElsayedKewan</span>
                    <span>Terms of Use & Privacy Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer