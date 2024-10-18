import React from 'react';
import { Tabs, Select, Space } from 'antd';
import Image from 'next/image';

const ProductsDetails = () => {
    return (
        <div className='mt-24 mb-48 px-4 md:px-16 lg:px-28'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1 h-auto'>
                <img src='/images/products/5.jpg' alt='product' className='rounded-lg cursor-pointer max-w-lg w-full h-auto' />

                    <div className='flex gap-x-4 pt-4 pb-5 overflow-x-auto'>
                        <Image src="/images/products/1.jpg" alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' />
                        <Image src="/images/products/2.jpg" alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' />
                        <Image src="/images/products/3.jpg" alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' />
                        <Image src="/images/products/4.jpg" alt="product" width={500} height={500} className='rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 w-20 h-20' />
                    </div>
                </div>
                <div className='md:pl-5 flex-1 mr-52 w-full'>
                    <h1 className='text-4xl font-bold pb-3'>İPHONE 16</h1>
                    <p className='text-lg pb-5 text-gray-500'>Lorem ipsum dolor a vel minima, neque, in esse nobis quibusdam accusamus culpa, nemo voluptatibus?</p>
                    <span className='text-4xl'>300$</span>
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
                                    <p className='text-lg mt-4 text-gray-500'>Burada ürünün uzun açıklaması yer alacak. Ürün özellikleri, avantajları ve kullanım detayları hakkında bilgi verilebilir.</p>
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
