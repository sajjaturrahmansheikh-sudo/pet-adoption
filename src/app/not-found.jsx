"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { PawPrint, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">
            <div className="max-w-2xl text-center">

                {/* Icon */}
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-orange-100 shadow-lg">
                    <PawPrint className="h-16 w-16 text-orange-500" />
                </div>

                {/* 404 */}
                <h1 className="mt-8 text-8xl font-extrabold text-orange-500">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800">
                    Oops! Lost Pet Found 🐾
                </h2>

                {/* Description */}
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                    The page you are looking for seems to have wandered away.
                    Do not worry, our furry friends are helping us search for it.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="bg-orange-500 text-white hover:bg-orange-600 px-8"
                        >
                            Back Home
                        </Button>
                    </Link>

                    <Link href="/all-pets">
                        <Button
                            size="lg"
                            variant="bordered"
                            className="border-orange-300 text-orange-500 px-8"
                        >
                            <ArrowLeft size={18} />
                            Browse Pets
                        </Button>
                    </Link>
                </div>

                {/* Decorative Paw Prints */}
                <div className="mt-16 flex justify-center gap-6 opacity-20">
                    <PawPrint className="h-8 w-8 rotate-12" />
                    <PawPrint className="h-10 w-10 -rotate-12" />
                    <PawPrint className="h-8 w-8 rotate-6" />
                    <PawPrint className="h-10 w-10 -rotate-6" />
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;