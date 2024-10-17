import React from 'react';

const BestSellers = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className='flex justify-center flex-col items-center mb-4'>
                <h1 className='text-3xl'>En Çok Satanlar</h1>
                <p className='text-base'>En Popüler Ürünlerimiz</p>
            </div>
            <div className=' flex justify-center flex-wrap mt-5 mb-7 gap-x-10 gap-y-10'>
                <div className='h-72 min-w-[15%] bg-white  text-center'>
                    <img src="https://picsum.photos/200/200" alt="" className='pb-5 rounded h-52 w-full cursor-pointer' />
                    <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                    <span>499$</span>
                </div>
                <div className='h-72 min-w-[15%] bg-white  text-center'>
                    <img src="https://picsum.photos/200/200" alt="" className='pb-5 rounded h-52 w-full cursor-pointer' />
                    <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                    <span>499$</span>
                </div>
                <div className='h-72 min-w-[15%] bg-white  text-center'>
                    <img src="https://picsum.photos/200/200" alt="" className='pb-5 rounded h-52 w-full cursor-pointer' />
                    <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                    <span>499$</span>
                </div>
            </div>
        </div>
    );
}

export default BestSellers;
