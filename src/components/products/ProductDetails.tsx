"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import axios from "axios";
import { AlertDialog, AlertDialogTrigger, AlertDialogDescription, AlertDialogTitle, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "../ui/alert-dialog";
import { IProduct } from "@/types";
import { RootState } from "@/redux/store";
import { toggleFavorite } from "@/redux/favoriteSlice";
import { EditProductModal } from "./EditProductModal";


const ProductDetails = ({ product }: { product: IProduct }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);

    const [currentProduct, setCurrentProduct] = useState<IProduct>(product);
    const [deleting, setDeleting] = useState<boolean>(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const getFavoriteProduct = (product: IProduct): IProduct => ({
        ...product,
        id: product.id,
        title: product.title,
        price: product.price,
        rating: product.rating,
        category: product.category ?? "",
        thumbnail: product.images?.[0] ?? "",
    });

    const isFavorite = favorites.some((item) => item.id === currentProduct?.id);

    const handleFavorite = () => {
        dispatch(toggleFavorite(getFavoriteProduct(currentProduct)));
    };

    const handleDelete = async () => {
        setDeleting(true);
        setDeleteError(null);
        try {
            await axios.delete(`https://dummyjson.com/products/${currentProduct.id}`);
            router.push("/");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setDeleteError(err.response?.data?.message || err.message);
            } else {
                setDeleteError("Failed to delete product.");
            }
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto h-full flex items-center justify-center ">

            <div className="flex gap-6  flex-col md:flex-row">
                <div className="flex-shrink-0 border">
                    <Image
                        src={currentProduct?.images[0]}
                        alt={currentProduct?.title}
                        width={300}
                        height={300}
                        className="rounded object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{currentProduct?.title}</h1>
                    <p className="text-sm text-gray-500 mb-4">{currentProduct?.description}</p>
                    <p className="text-lg font-semibold mb-2">Price: ${currentProduct?.price}</p>
                    <p className="mb-1">Brand: {currentProduct?.brand}</p>
                    <p className="mb-1">Stock: {currentProduct?.stock}</p>
                    <p className="mb-1">Rating: {currentProduct?.rating}</p>

                    {currentProduct?.images.length > 1 && (
                        <div className="mt-4 flex gap-2 flex-wrap">
                            {currentProduct.images.slice(1).map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`${currentProduct.title} ${idx + 2}`}
                                    width={80}
                                    height={80}
                                    className="rounded object-cover border"
                                />
                            ))}
                        </div>
                    )}

                    <div className="flex gap-3 mt-6">
                        <Button
                            variant={isFavorite ? "outline" : "outline"}
                            className={`flex items-center hover:text-red-600 hover:border-red-600 gap-2 ${isFavorite ? " border-red-600 text-red-600 bg-red-50" : ""}`}
                            onClick={handleFavorite}

                        >
                            <Heart
                                size={18}
                                fill={isFavorite ? "red" : "none"}
                                color={isFavorite ? "white" : "currentColor"}
                                className="transition-colors"
                            />
                            {isFavorite ? "Unfavorite" : "Favorite"}
                        </Button>

                        <EditProductModal
                            product={currentProduct}
                            onProductUpdate={setCurrentProduct}
                        />

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button
                                    variant="destructive"
                                    className="flex items-center gap-2"
                                    disabled={deleting}
                                >
                                    <Trash2 size={18} />
                                    {deleting ? "Deleting..." : "Delete"}
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete this product.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel disabled={deleting}>No</AlertDialogCancel>
                                    <AlertDialogAction asChild disabled={deleting}>
                                        <Button
                                            variant="destructive"
                                            onClick={handleDelete}
                                            disabled={deleting}
                                        >
                                            Yes
                                        </Button>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                                {deleteError && (
                                    <div className="text-red-600 mt-2">{deleteError}</div>
                                )}
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;