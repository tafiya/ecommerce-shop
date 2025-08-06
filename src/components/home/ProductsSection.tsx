"use client";
import React, { useEffect, useRef, useState, useCallback, FC } from "react";
import axios from "axios";
import { IProduct } from "@/types";
import ProductCard from "../products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleFavorite } from "@/redux/favoriteSlice";

const LIMIT = 10;
const ProductsSection: FC = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [skip, setSkip] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");

    // Infinite scroll observer
    const observer = useRef<IntersectionObserver | null>(null);
    const lastProductRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new window.IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    fetchProducts();
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore, skip]
    );

    // Fetch paginated products
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await axios.get<{ products: IProduct[]; total: number }>(
                `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
            );
            setProducts((prev) => {
                const existingIds = new Set(prev.map((p) => p?.id));
                const newProducts = res.data.products.filter((p) => !existingIds.has(p?.id));
                return [...prev, ...newProducts];
            });
            setSkip((prev) => prev + LIMIT);
            setHasMore(products.length + res.data.products.length < res.data.total);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    // Search filter
    const filteredProducts = products?.filter((product: IProduct) =>
        product?.title?.toLowerCase().includes(search.toLowerCase())
    );

    // Favorite toggle
    const handleFavorite = (product: IProduct) => {
        dispatch(toggleFavorite(product));
    };

    // Check if product is favorite
    const isFavorite = (id?: number) => favorites?.some((item) => item.id === id);

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);
console.log(filteredProducts)
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-6">
            {/* Search Bar */}
            <div className="my-8 flex justify-center">
            <div className="max-w-md w-full h-[50px] px-1.5 flex items-center justify-center bg-gradient-to-b from-[#e3d5ff] to-[#ffe7e7] rounded-xl shadow-md cursor-pointer">
                <input
                    type="text"
                    placeholder="Search.."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                        className="max-w-md w-full h-[40px] rounded-xl px-4 text-[13.4px] tracking-[0.8px] text-gray-900 bg-white focus:outline-none caret-orange-500"
                />
            </div>
            </div>


            {/* Product Grid */}
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts?.map((product: IProduct, idx: number) => {
                        if (!product) return null;
                        const isLast = idx === filteredProducts.length - 1;
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isFavorite={isFavorite(product.id)}
                                onFavoriteToggle={handleFavorite}
                                refCallback={isLast ? lastProductRef : undefined}
                            />
                        );
                    })}
                </div>
                {loading && <div className="text-center p-4">Loading more products...</div>}
                {error && <div className="text-center text-red-500 p-4">{error}</div>}
                {!hasMore && !loading && (
                    <div className="text-center p-4 text-gray-500">No more products.</div>
                )}
            </div>
        </main>
    );
};

export default ProductsSection;