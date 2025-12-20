import React from 'react'
const Hero = ({ title = 'title', subtitle = 'subtitle' }) => {
    return (
        <section className='bg-indigo-700 py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-3xl font-extrabold text-white md:text-5xl'>
                        {title}
                    </h1>
                    <p className='my-4 text-xl md:text-3xl text-white'>
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Hero