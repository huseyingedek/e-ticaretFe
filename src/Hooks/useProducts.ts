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
}

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<{ products: Product[] }>(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/products/listproducts`
                );
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Bir hata oluştu. Lütfen tekrar deneyiniz.");
                message.error("Bir hata oluştu. Lütfen tekrar deneyiniz.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};

export default useProducts;
