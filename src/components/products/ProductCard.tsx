import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Camera, Heart, ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { IProduct } from '@/types';
import Link from 'next/link';
import { StarRating } from '../StarRating';

interface ProductCardProps {
    product: IProduct;
    isFavorite?: boolean;
    onFavoriteToggle?: (product: IProduct) => void;
    refCallback?: (node: HTMLDivElement | null) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
    product,
    isFavorite,
    onFavoriteToggle,
    refCallback,
}) => {

    return (
        <Card ref={refCallback}
            className="rounded-2xl shadow-md overflow-hidden group cursor-pointer hover:shadow-lg transition  py-0 pb-6">
            <Link href={`/product/${product?.id}`}>
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] ">
                    <Image
                        src={product?.thumbnail} // replace with actual image path
                        alt={product?.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 right-3 border border-[#b8a2b1] bg-[#ded5da] text-[#5a3e52]">
                        {product?.category?.charAt(0).toUpperCase() + product?.category?.slice(1)}
                    </Badge>
                </div>

                {/* Card Content */}
                <CardHeader className="w-full">
                    <div className="w-[98%]"> {/* set fixed width as per card */}
                        <h3 className="text-lg text-start font-bold truncate">
                            {product?.title}
                        </h3>
                    </div>

                    <StarRating rating={product?.rating || 0} />
                    <span className="text-xl font-bold">{product?.price}</span>
                </CardHeader>

            </Link>
            {/* Footer Section */}
            <CardFooter className="flex gap-3">

                {onFavoriteToggle && (
                    <div className="p-4 pt-0">
                        <Button
                            variant={isFavorite ? "destructive" : "outline"}
                            className="w-full flex items-center gap-2"
                            onClick={e => {
                                e.preventDefault();
                                onFavoriteToggle(product);
                            }}
                        >
                            <Heart
                                size={18}
                                fill={isFavorite ? "red" : "none"}
                                color={isFavorite ? "white" : "currentColor"}
                                className="transition-colors"
                            />
                            {isFavorite ? "Unfavorite" : "Favorite"}
                        </Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default ProductCard;