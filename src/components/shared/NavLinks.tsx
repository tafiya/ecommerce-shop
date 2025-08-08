"use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ThemeToggle from "../theme/ThemeToggle";

const NavLinks = () => {
    const favoriteCount = useSelector((state: RootState) => state.favorites.items.length)

    return (
        <>
            <div className="hidden md:flex smd:space-x-4">
                <Link
                    href="/create-product"
                    className="block py-2 hover:text-[#5a3e52] dark:hover:text-gray-200 px-3 text-lg font-medium"
                >
                    Create Product
                </Link>
            </div>

            <Link
                href="/favorite"
                className="block py-2 px-3 dark:text-white"
            >
                <div className="relative mx-auto w-fit">
                    <Heart
                        size={"1.7rem"}
                        className="hover:text-[#5a3e52] dark:hover:text-gray-200"
                    />
                    {favoriteCount > 0 && (
                        <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">
                            {favoriteCount}
                        </span>
                    )}
                </div>
            </Link>

            <ThemeToggle />
        </>
    );
};

export default NavLinks;
