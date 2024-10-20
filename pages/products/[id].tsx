import React, { useEffect, useState } from 'react';
import { Tabs, Select, Space } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useFetchApi } from '@/src/Hooks';

interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    isActivated: boolean;
    stock_quantity: number;
    howMany: number;
}

const ProductsDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [getPackages, respose] = useFetchApi<{ products: Product[] }>("/api/products/listproducts/" + id);
    const productData = respose?.products.find((product: Product) => product._id === id);
    const [selectedImage, setSelectedImage] = useState(productData?.image || '/images/products/2.jpg');

    useEffect(() => {
        getPackages();
    }, [id, router]);

    useEffect(() => {
        if (productData) {
            setSelectedImage(productData.image);
        }
    }, [productData]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <div className='mt-24 mb-48 px-4 md:px-16 lg:px-28'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1 h-auto'>
                    <Image src={selectedImage} alt="product" width={500} height={500} className='rounded-lg cursor-pointer max-w-lg w-full h-auto' />

                    <div className='flex gap-x-4 pt-4 pb-5 overflow-x-auto'>
                        <Image src={productData?.image || '/images/products/2.jpg'} alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' onClick={() => handleImageClick(productData?.image || '/images/products/2.jpg')} />
                        <Image src="/images/products/2.jpg" alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' onClick={() => handleImageClick('/images/products/2.jpg')} />
                        <Image src="/images/products/3.jpg" alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' onClick={() => handleImageClick('/images/products/3.jpg')} />
                        <Image src="/images/products/4.jpg" alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' onClick={() => handleImageClick('/images/products/4.jpg')} />
                    </div>
                </div>
                <div className='md:pl-5 flex-1 mr-52 w-full'>
                    <h1 className='text-4xl font-bold pb-3'>{productData?.name}</h1>
                    <p className='text-lg pb-5 text-gray-500'>{productData?.description}</p>
                    <span className='text-4xl'>{productData?.price}$</span>
                    <div>
                        <h2 className='text-2xl font-semibold mt-10'>Renk</h2>
                        <div className='flex gap-x-4 mt-4'>
                            <div className='w-8 h-8 rounded-full bg-red-500 cursor-pointer'></div>
                            <div className='w-8 h-8 rounded-full bg-blue-500 cursor-pointer'></div>
                            <div className='w-8 h-8 rounded-full bg-yellow-500 cursor-pointer'></div>
                            <div className='w-8 h-8 rounded-full bg-green-500 cursor-pointer'></div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold mt-10'>Boyut</h2>
                            <div className='flex gap-x-4 mt-4'>
                                <Space wrap>
                                    <Select
                                        defaultValue="S"
                                        style={{ width: 120 }}
                                        options={[
                                            { value: 'S', label: 'S' },
                                            { value: 'M', label: 'M' },
                                            { value: 'L', label: 'L' },
                                            { value: 'XL', label: 'XL' },
                                        ]}
                                    />
                                </Space>
                            </div>
                        </div>
                        <button className='bg-primary text-white rounded-lg px-4 py-2 mt-20'>Sepete Ekle</button>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <Tabs
                    type="card"
                    items={[
                        {
                            label: 'Ürün Açıklaması',
                            key: '1',
                            children: (
                                <>
                                    <h2 className='text-2xl font-semibold'>Ürün Açıklaması</h2>
                                    <p className='text-lg mt-4 text-gray-500'>{productData?.description}</p>
                                </>
                            ),
                        },
                        {
                            label: 'Yorumlar',
                            key: '2',
                            children: (
                                <>
                                    <h2 className='text-2xl font-semibold'>Yorumlar</h2>
                                    <p className='text-lg mt-4 text-gray-500'>Burada kullanıcı yorumları yer alacak.</p>
                                </>
                            ),
                        },
                        {
                            label: 'Video',
                            key: '3',
                            children: (
                                <>
                                    <h2 className='text-2xl font-semibold'>Video</h2>
                                    <p className='text-lg mt-4 text-gray-500'>Burada ürünle ilgili video yer alacak.</p>
                                </>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default ProductsDetails;
