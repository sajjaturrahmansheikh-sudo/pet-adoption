import Link from 'next/link';
import React from 'react';

const FeaturedCard = ({ feature }) => {
    const { _id } = feature;
    return (
        <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="relative overflow-hidden">

                <img
                    src={feature.image}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-1 text-sm font-medium text-white">
                    Featured
                </div>

            </div>



            <div className="p-6">

                <div className="mb-4 flex items-center justify-between">

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                            {feature.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {feature.breed}
                        </p>
                    </div>

                    <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-500">
                        {feature.type}
                    </div>

                </div>



                <p className="mb-5 text-gray-500">
                    {feature.description}
                </p>



                <div className="mb-6 flex items-center justify-between text-sm text-gray-400">

                    <span>{feature.age} Years</span>

                    <span>{feature.gender}</span>

                    <span>{feature.location}</span>

                </div>



                <div className="flex items-center justify-between">

                    <h4 className="text-3xl font-bold text-gray-900">
                        ${feature.price}
                    </h4>

                    <Link href={`/all-pets/${_id}`}>
                        <button className="cursor-pointer rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                            View Details
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default FeaturedCard;