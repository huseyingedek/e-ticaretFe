import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BestSellers = () => {
    return (
        <div className='mt-5 mb-5 mx-16'>
            <div className='flex justify-center flex-col items-center mb-4'>
                <h1 className='text-4xl text-teal-600'>En Çok Satanlar</h1>
                <p className='text-base text-teal-800'>En Popüler Ürünlerimiz</p>
            </div>
            <div className='flex justify-center flex-wrap mt-5 mb-7 gap-x-10 gap-y-10'>
                <div className='h-72 min-w-[15%] bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                    <Link href="/products/6">
                        <Image src="/images/products/6.jpg" alt="" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                        <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                        <span>499$</span>
                    </Link>
                </div>
                <div className='h-72 min-w-[15%] bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                    <Link href="/products/5">
                        <Image src="/images/products/5.jpg" alt="" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                        <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                        <span>499$</span>
                    </Link>
                </div>
                <div className='h-72 min-w-[15%] bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                    <Link href="/products/4">
                        <Image src="/images/products/4.jpg" alt="" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                        <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                        <span>499$</span>
                    </Link>
                </div>
                <div className='h-72 min-w-[15%] bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                    <Link href="/products/3">
                        <Image src="/images/products/3.jpg" alt="" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                        <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                        <span>499$</span>
                    </Link>
                </div>
                <div className='h-72 min-w-[15%] bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                    <Link href="/products/2">
                        <Image src="/images/products/2.jpg" alt="" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                        <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                        <span>499$</span>
                    </Link>
                </div>
                <div className='h-72 min-w-[15%] bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                    <Link href="/products/1">
                        <Image src="/images/products/1.jpg" alt="" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                        <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                        <span>499$</span>
                    </Link>
                </div>
                <div className='h-72 min-w-[15%] bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                    <Link href="/products/20">
                        <Image src="/images/products/20.jpg" alt="" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                        <h1 className='pb-2 text-xl cursor-pointer'>NİKE AYAKKABI</h1>
                        <span>499$</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BestSellers;