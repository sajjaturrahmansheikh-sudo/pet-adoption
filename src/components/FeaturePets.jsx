import { fetchFeaturedPets } from '@/lib/pets/data';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import FeaturedCard from './FeaturedCard';

const FeaturePets = async () => {

    const featured = await fetchFeaturedPets();

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 to-white py-24">

            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40"></div>

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200 blur-3xl opacity-30"></div>



            <div className="container relative z-10 mx-auto px-5">

                {/* Header */}
                <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-2xl">

                        <p className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-500">
                            Featured Companions
                        </p>

                        <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                            Meet Our Most
                            <span className="text-orange-500">
                                {" "}Adorable Pets
                            </span>
                        </h2>

                        <p className="mt-5 text-lg leading-relaxed text-gray-500">
                            Explore loving pets carefully selected for you.
                            Give them a forever home and make your family complete.
                        </p>

                    </div>



                    {/* View All Button */}
                    <Link
                        href="/all-pets"
                        className="group inline-flex items-center justify-center gap-3 rounded-2xl text-orange-500 px-7 py-4 font-semibold shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:text-orange-600"
                    >

                        View All Pets

                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

                    </Link>

                </div>



                {/* Featured Grid */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {
                        featured?.map((feature) => (
                            <FeaturedCard
                                key={feature?._id}
                                feature={feature}
                            />
                        ))
                    }

                </div>



                {/* Bottom CTA */}
                <div className="mt-20 rounded-[2rem] border border-orange-100 bg-white p-10 text-center shadow-xl shadow-orange-50">

                    <h3 className="text-3xl font-bold text-gray-900">
                        Ready to Adopt Your New Best Friend?
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                        Browse through hundreds of adorable pets and
                        find the perfect companion for your family.
                    </p>

                    <Link
                        href="/all-pets"
                        className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-xl"
                    >
                        Explore All Pets

                        <FaArrowRight />
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default FeaturePets;