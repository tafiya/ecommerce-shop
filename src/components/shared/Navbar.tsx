"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <nav className="bg-white fixed w-full z-10 border-gray-200 dark:bg-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
                >
                    <Image src="/logo.png" alt="Flowbite Logo" width={32} height={32} />
                    <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                        E-Commerce
                    </span>
                </Link>

                <div className="flex items-center md:space-x-6 space-x-1">
                    {/* CSR Links */}
                    <NavLinks />

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <RiMenu3Fill size={"2.5rem"} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <ul className="space-y-4 mt-4">
                                    <li>
                                        <Link
                                            href="/create-product"
                                            className="block py-2 hover:text-[#5a3e52] dark:hover:text-gray-200 px-3 text-lg font-medium"
                                        >
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