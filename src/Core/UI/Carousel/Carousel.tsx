import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '340px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Slider: React.FC = () => (
    <Carousel autoplay>
        <div>
            <img
                style={contentStyle}
                src="/images/slider/5.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src="/images/slider/6.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src="/images/slider/7.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </div>
    </Carousel>
);

export default Slider;