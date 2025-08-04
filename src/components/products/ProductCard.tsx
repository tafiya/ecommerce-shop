import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Camera, Heart, ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

const ProductCard = () => {
    return (
        <Card className="w-[350px] rounded-2xl shadow-md overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-[200px]">
                <Image
                    src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" // replace with actual image path
                    alt="Red Hat"
                    fill
                    className="object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-gray-100 text-gray-800">
                    Clothing
                </Badge>
            </div>

            {/* Card Content */}
            <CardHeader>
                <div className=' flex justify-between items-center'>
                    <h3 className="text-lg font-bold">Red Hat</h3>
                    <span className="text-xl font-bold">$28.99</span>
                </div>

                <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star size={16} className="text-gray-300" />
                    <span className="text-sm text-gray-600 ml-1">(4.5)</span>
                </div>

            </CardHeader>

            <CardContent>
                <div className="flex items-center justify-between">
                   
                    <Badge variant="outline" className="text-green-600 border-green-600">
                        In Stock
                    </Badge>
                </div>
            </CardContent>

            {/* Footer Section */}
            <CardFooter className="flex gap-3">
             
                {/* <div className="flex gap-3"> */}
                    <Button variant="outline" size="icon" className="rounded-lg">
                        <Heart size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-lg">
                        <Camera size={18} />
                    </Button>
                {/* </div> */}
                <Button className=" flex gap-2">
                    <ShoppingCart size={16} /> Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;