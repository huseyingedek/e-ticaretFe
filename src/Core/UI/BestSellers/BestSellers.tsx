import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useProducts from '@/src/Hooks/useProducts';

const BestSellers = () => {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!Array.isArray(products)) {
        return <div>Ürünler yüklenemedi.</div>;
    }

    return (
        <div className='mt-5 mb-5 md:mx-16'>
            <div className='flex justify-center text-center flex-col items-center mb-4'>
                <h1 className='text-4xl text-teal-600'>En Çok Satanlar</h1>
                <p className='text-base text-teal-800'>En Popüler Ürünlerimiz</p>
            </div>
            <div className='flex justify-center flex-wrap mt-5 mb-7 gap-5'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className='h-72 w-40 xs:w-1/2 sm:w-1/2 md:w-1/5 lg:w-1/6 bg-white text-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200'>
                            <Link href={`/products/${product._id}`}>
                                <Image src={product.image} alt="görsel yüklenemedi" width={200} height={208} className='pb-5 rounded h-52 w-full cursor-pointer' />
                                <h1 className='pb-2 text-xl cursor-pointer'>{product.name}</h1>
                                <span>{product.price}$</span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div>Ürün bulunamadı.</div>
                )}
            </div>
        </div>
    );
}

export default BestSellers;