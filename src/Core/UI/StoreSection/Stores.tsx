import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StoreSection = () => {
    const stores = [
        { name: 'Mağaza 1', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 2', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 3', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 4', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 5', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 6', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 7', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 8', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 9', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 10', imgSrc: 'https://picsum.photos/200/300' },
        { name: 'Mağaza 11', imgSrc: 'https://picsum.photos/200/300' },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='slider-container px-7 md:px-40'>
            <Slider {...settings}>
                {stores.map((store, index) => (
                    <div key={index} className='flex flex-col items-center pb-3'>
                        <img
                            src={store.imgSrc}
                            alt={store.name}
                            className='rounded-full w-16 h-16 md:w-24 md:h-24'
                        />
                        <span className='mt-1 text-sm md:text-base'>{store.name}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default StoreSection;
