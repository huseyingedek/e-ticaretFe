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
                src="https://picsum.photos/1100/700"
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src="https://picsum.photos/1100/700"
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src="https://picsum.photos/1100/700"
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src="https://picsum.photos/1100/700"
                alt="image 1"
                className="h-full w-full object-cover"
            />
        </div>
    </Carousel>
);

export default Slider;