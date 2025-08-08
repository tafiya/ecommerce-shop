"use client"
import { StarRatingProps } from "@/types"
import { Rating } from "react-simple-star-rating"
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
            <span className="text-sm text-gray-600 ml-1 dark:text-white">{rating.toFixed(1)}</span>
        </div>
    )
}

