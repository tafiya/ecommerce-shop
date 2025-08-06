import React from 'react';
import { Card } from '../ui/card';
import { Palette, Star } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="relative w-full rounded-2xl bg-[linear-gradient(140deg,_rgba(7,7,7,1),_rgba(90,62,82,1)_47%,_rgba(7,7,7,1))] p-8 flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="flex flex-col justify-center flex-1 space-y-6">
                <p className="uppercase tracking-widest text-white/70 font-medium">
                    Live for Fashion
                </p>
                <h1 className="text-5xl font-bold text-white leading-tight">
                    Fashion Up <br /> Your Look
                </h1>
                <p className="text-gray-300 max-w-md">
                    Influential, innovative and progressive, Versace is reinventing a
                    wholly modern approach to fashion to help you look unique.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <Button className="bg-white text-black hover:bg-gray-100">
                        Shop now
                    </Button>
                    <Button variant="ghost" className="text-white underline hover:no-underline">
                        What&apos;s Trending?
                    </Button>
                </div>
            </div>

            {/* Model Image */}
            <div className="relative flex-1">
                <Image
                    src="/Smile.png" // replace with your image path
                    alt="Fashion Model"
                    width={500}
                    height={500}
                    className="object-cover"
                />
            </div>

            {/* Right Side Cards */}
            <div className="flex flex-col gap-4">
                <Card className="px-4 py-3 rounded-xl flex items-center gap-3">
                    <Star className="text-yellow-500" />
                    <span className="font-semibold">Favourites</span>
                </Card>

                <Card className="px-4 py-3 rounded-xl flex items-center gap-3">
                    <Palette className="text-black" />
                    <span className="font-semibold">Lifestyle</span>
                </Card>

                <Card className="p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                        <Palette className="text-black" />
                        <span className="font-semibold">Lifestyle</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        Design is a part of the
                    </p>
                    <Button size="sm" className="bg-black text-white hover:bg-gray-900">
                        Read now
                    </Button>
                </Card>
            </div>
        </section>
    );
};

export default Banner;