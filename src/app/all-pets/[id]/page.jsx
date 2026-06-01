import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
    FaArrowLeft,
    FaLocationDot,
    FaMars,
    FaVenus,
    FaShieldDog,
    FaPaw,
    FaHeart,
} from "react-icons/fa6";


const fetchSinglePet = async (id, token) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/all-pets/${id}`,
        {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }
    );

    return res.json();
};



const PetDetails = async ({ params }) => {
    const { id } = await params;
    const tokenData = await auth.api.getToken({
        headers: await headers()
    });

    const pet = await fetchSinglePet(id, tokenData.token);


    return (
        <section className="min-h-screen bg-gradient-to-b from-orange-50/40 to-white py-20">

            <div className="container mx-auto px-5">

                {/* Back Button */}
                <Link
                    href="/all-pets"
                    className="mb-10 inline-flex items-center gap-3 rounded-2xl border border-orange-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-orange-500"
                >
                    <FaArrowLeft />
                    Back To Pets
                </Link>



                {/* Main Card */}
                <div className="grid overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-2xl shadow-orange-100 lg:grid-cols-2">

                    {/* Image Section */}
                    <div className="relative min-h-[500px] overflow-hidden">

                        <Image
                            src={pet.image}
                            alt={pet.name}
                            fill
                            quality={100}
                            priority
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />

                        {/* Badge */}
                        <div className="absolute left-6 top-6 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                            Featured Pet
                        </div>

                    </div>



                    {/* Content Section */}
                    <div className="flex flex-col justify-between p-8 lg:p-12">

                        <div>

                            {/* Category */}
                            <div className="mb-5 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-500">

                                <FaPaw className="mr-2" />

                                {pet.type}

                            </div>



                            {/* Name & Price */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>

                                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                                        {pet.name}
                                    </h1>

                                    <p className="mt-2 text-lg text-gray-500">
                                        {pet.breed}
                                    </p>

                                </div>

                                <div className="rounded-2xl bg-orange-500 px-6 py-4 text-2xl font-bold text-white shadow-lg">
                                    ${pet.price}
                                </div>

                            </div>



                            {/* Info Cards */}
                            <div className="mt-10 grid gap-5 sm:grid-cols-2">

                                {/* Age */}
                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">

                                    <p className="text-sm font-medium text-gray-400">
                                        Age
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                                        {pet.age} Years
                                    </h3>

                                </div>



                                {/* Gender */}
                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">

                                    <p className="text-sm font-medium text-gray-400">
                                        Gender
                                    </p>

                                    <h3 className="mt-2 flex items-center gap-2 text-2xl font-bold text-gray-900">

                                        {
                                            pet.gender === "Male"
                                                ? <FaMars className="text-blue-500" />
                                                : <FaVenus className="text-pink-500" />
                                        }

                                        {pet.gender}

                                    </h3>

                                </div>



                                {/* Location */}
                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">

                                    <p className="text-sm font-medium text-gray-400">
                                        Location
                                    </p>

                                    <h3 className="mt-2 flex items-center gap-2 text-xl font-bold text-gray-900">

                                        <FaLocationDot className="text-orange-500" />

                                        {pet.location}

                                    </h3>

                                </div>



                                {/* Vaccinated */}
                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">

                                    <p className="text-sm font-medium text-gray-400">
                                        Vaccination
                                    </p>

                                    <h3 className="mt-2 flex items-center gap-2 text-xl font-bold">

                                        <FaShieldDog
                                            className={
                                                pet.vaccinated
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        />

                                        <span
                                            className={
                                                pet.vaccinated
                                                    ? "text-green-600"
                                                    : "text-red-500"
                                            }
                                        >
                                            {
                                                pet.vaccinated
                                                    ? "Vaccinated"
                                                    : "Not Vaccinated"
                                            }
                                        </span>

                                    </h3>

                                </div>

                            </div>



                            {/* Description */}
                            <div className="mt-10">

                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    About {pet.name}
                                </h2>

                                <p className="leading-relaxed text-gray-500">
                                    {pet.description}
                                </p>

                            </div>

                        </div>



                        {/* Buttons */}
                        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                            <button className="cursor-pointer rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">
                                Adopt Now
                            </button>

                            <button className="cursor-pointer flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:border-orange-400 hover:text-orange-500">

                                <FaHeart />

                                Save Pet

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default PetDetails;