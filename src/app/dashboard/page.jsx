
import Image from 'next/image';
import { Button, Chip } from '@heroui/react';

import Link from 'next/link';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export default async function DashboardPage() {

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user || !token) {
        redirect("/login")
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoption/${session?.user?.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: "no-store"
    })
    const adoptions = await res.json() || [];


    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile */}
                <div className="w-full md:w-1/4">
                    <div className="p-6 bg-white border rounded-2xl">
                        <Image
                            src={
                                session?.user?.image ||
                                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                            }
                            alt={session?.user?.name}
                            width={96}
                            height={96}
                            className="w-24 h-24 rounded-full"
                        />

                        <h2 className="text-xl font-bold mt-4">{session?.user?.name}</h2>
                        <p className="text-sm text-slate-500">{session?.user?.email}</p>
                    </div>
                </div>

                {/* Enrollments */}
                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold mb-6">My Adopted Pets</h1>

                    {adoptions?.length === 0 ? (
                        <div className="p-12 text-center bg-slate-50 border rounded-2xl">
                            <p className="mb-4">No courses yet</p>

                            <Link href="/courses">
                                <Button>Browse Courses</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {adoptions?.map((adoption) => (
                                <div
                                    key={adoption?._id}
                                    className="flex flex-col md:flex-row gap-6 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Pet Image */}
                                    <div className="relative w-full md:w-56 h-56">
                                        <Image
                                            src={adoption?.image}
                                            alt={adoption?.petName}
                                            fill
                                            className="rounded-xl object-cover"
                                        />
                                    </div>

                                    {/* Pet Info */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800">
                                                    {adoption?.petName}
                                                </h2>

                                                <p className="text-gray-500">
                                                    • {adoption?.breed}
                                                </p>
                                            </div>

                                            <Chip color="success" variant="flat">
                                                Available
                                            </Chip>
                                        </div>

                                        {/* Details */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                                            <div>
                                                <p className="text-sm text-gray-500">Age</p>
                                                <p className="font-semibold">{adoption?.age} Years</p>
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500">Gender</p>
                                                <p className="font-semibold">{adoption?.gender}</p>
                                            </div>


                                            <div>
                                                <p className="text-sm text-gray-500">Location</p>
                                                <p className="font-semibold">
                                                    {adoption?.location}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500">Adoption Fee</p>
                                                <p className="font-bold text-orange-500 text-lg">
                                                    ${adoption?.price}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="mt-5">
                                            <p className="text-sm text-gray-500 mb-1">
                                                Description
                                            </p>

                                            <p className="text-gray-700 line-clamp-3">
                                                {adoption?.description}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-slate-500">{new Date(adoption?.adoptAt).toDateString()}</p>
                                        </div>
                                        {/* Actions */}
                                        <div className="flex gap-3 mt-6">


                                            <button className="px-5 py-2 rounded-xl border border-red-300 text-red-500 font-medium hover:bg-red-50 transition">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


const NotFound = () => {
    return (
        <div className="p-12 text-center bg-slate-50 border rounded-2xl">
            <p className="mb-4">No courses yet</p>

            <Link href="/courses">
                <Button>Browse Courses</Button>
            </Link>
        </div>
    );
}