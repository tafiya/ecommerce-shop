"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import ThemeToggle from "../theme/ThemeToggle";


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
                        E-Commerce Shop
                    </span>
                </Link>

            
<div className=" flex">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-2">
                        <Link
                            href="/favorite"
                            className="block py-2 px-3 dark:text-white"
                        >
                            Favorite
                        </Link>
                        <Link href="/create-product" className="block py-2 px-3">
                            Create Product
                        </Link>
                        <Link href="/services" className="block py-2 px-3">
                            light
                        </Link>

                    </div>
                    <ThemeToggle />
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu size={"4rem"} className="h-20 w-20" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <ul className="space-y-4 mt-4">
                                    <li>
                                        <Link
                                            href="/favorite"
                                            className="block py-2 px-3 dark:text-white"
                                        >
                                            Favorite
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/create-product" className="block py-2 px-3">
                                            Create Product
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="block py-2 px-3">
                                            light
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