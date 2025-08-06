"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import ThemeToggle from "../theme/ThemeToggle";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Image
                        src="/logo.png"
                        alt="Flowbite Logo"
                        width={32}
                        height={32}
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        E-Commerce 
                    </span>
                </Link>


                <div className=" flex items-center md:space-x-6 space-x-2">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">

                        <Link href="/create-product" className="block py-2 hover:text-[#5a3e52] dark:hover:text-gray-200 px-3 text-lg font-medium">
                            Create Product
                        </Link>


                    </div>
                    <Link
                        href="/favorite"
                        className="block py-2 px-3 dark:text-white"
                    >
                        <div className="relative mx-auto w-fit">
                            <Heart size={"2rem"} className="hover:text-[#5a3e52] dark:hover:text-gray-200  "></Heart>
                            <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">12</span>
                        </div>
                    </Link>
                    <ThemeToggle />
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <RiMenu3Fill size={"2.5rem"} />
                                    {/* <Menu size={"4rem"} className="h-20 w-20" /> */}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <ul className="space-y-4 mt-4">
                                    <li>
                                        <Link href="/create-product" className="block py-2 hover:text-[#5a3e52] dark:hover:text-gray-200 px-3 text-lg font-medium">
                                            Create Product
                                        </Link>
                                    </li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;