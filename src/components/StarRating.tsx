"use client"
import { Rating } from "react-simple-star-rating"

interface StarRatingProps {
    rating: number
}

export const StarRating = ({ rating }: StarRatingProps) => {
    return (
        <div className="flex items-center gap-1">
            <Rating
                initialValue={rating}
                size={16}
                readonly
                SVGstyle={{ display: "inline" }}
                allowFraction // allows decimal ratings like 4.5
            />
            <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
        </div>
    )
}

