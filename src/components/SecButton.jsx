import React from 'react'

const SecButton = ({ text }) => {
    return (
        <button className='py-3 px-8 Montserrat rounded-full flex items-center gap-3 w-full justify-center xl:justify-start xl:w-fit gradientBorder bg-black relative before:absolute before:rounded-full before:-inset-[1px] before:-z-10'>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                <path d="M3.29785 10.2985H15.7234M10.2872 4.8623L15.7234 10.2985L10.2872 15.7346" stroke="url(#paint0_linear_16_631)" strokeWidth="1.55319" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_16_631" x1="15.0425" y1="2.22659" x2="0.590441" y2="3.08382" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00F0FF" />
                        <stop offset="0.482483" stopColor="#5200FF" />
                        <stop offset="1" stopColor="#FF2DF7" />
                    </linearGradient>
                </defs>
            </svg>
        </button>
    )
}

export default SecButton