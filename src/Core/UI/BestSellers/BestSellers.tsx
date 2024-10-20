import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFetchApi } from '@/src/Hooks';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const BestSellers = () => {
    let [fetchProducts, response] = useFetchApi("/api/products/listproducts");
    let products = response?.products;

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='mt-5 mb-5 md:mx-16'>
            <div className='flex justify-center text-center flex-col items-center mb-4'>
                <h1 className='text-4xl text-teal-600'>En Çok Satanlar</h1>
                <p className='text-base text-teal-800'>En Popüler Ürünlerimiz</p>
            </div>
            <div className='flex justify-center flex-wrap mt-5 mb-7 gap-5'>
                {products && products.length > 0 ? (
                    products.map((product: { _id: React.Key | null | undefined; image: string | StaticImport; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
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