import React from 'react'
import partnersLogos from '../partnersLogos'
const Partners = () => {

    const partnersData = partnersLogos.map(logo => {
        return <div key={logo.id} className="flex justify-center items-center">
            <img src={logo.imgUrl} alt="partner_logo" />
        </div>
    })

    return (
        <div className='py-14 container mx-auto px-4'>
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 grid-rows-2 mb-16">
                {partnersData}
            </div>
            <p className='text-center'>Trusted by the world’s most ambitious teams.</p>
        </div>
    )
}

export default Partners