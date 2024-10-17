import React from 'react'
import { StoreSection, Carousel, BestSellers } from '@/src/Core/index';

const HomePage = () => {
    return (
        <div className='mt-24'>
            <StoreSection />
            <Carousel />
            <BestSellers />
        </div>
    )
}

export default HomePage;