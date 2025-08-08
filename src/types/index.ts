export interface IReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface PageProps {
    params: Promise<{ id: string }>;
}
export type FormValues = {
    title: string;
    description: string;
    price: number | null;
    stock: number | null;
    brand: string;
    category: string;
};

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
}
export interface ProductCardProps {
    product: IProduct;
    isFavorite?: boolean;
    onFavoriteToggle?: (product: IProduct) => void;
    refCallback?: (node: HTMLDivElement | null) => void;
}

export interface StarRatingProps {
    rating: number
}