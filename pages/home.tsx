import React from 'react'
import { StoreSection, Carousel } from '@/src/Core/index';
import BestSellers from '@/src/Core/UI/BestSellers/BestSellers';
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