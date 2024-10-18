"use strict";
import axios from "axios";
import { useState, useEffect } from "react";
import { message } from "antd";

interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    isActivated: boolean;
    stock_quantity: number;
    howMany: number;
    createdAt: string;
    updatedAt: string;
}

const useProductsDetail = () => {
    const [productsDetail, setProductsDetail] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProductDetails = async (productId: string) => {
        setLoading(true);
        setError(null);
        try {
            console.log(`Fetching product details for ID: ${productId}`);
            const response = await axios.get<{ products: Product[] }>(`${process.env.NEXT_PUBLIC_API_URL}/api/products/listproducts/${productId}`);
            console.log('API response:', response.data);
            const product = response.data.products.find(p => p._id === productId);
            setProductsDetail(product || null);
            return product;
        } catch (error) {
            console.error(error);
            setError("Ürün detayları alınırken bir hata oluştu. Lütfen tekrar deneyiniz.");
            message.error("Ürün detayları alınırken bir hata oluştu. Lütfen tekrar deneyiniz.");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { productsDetail, loading, error, fetchProductDetails };
}

export default useProductsDetail;