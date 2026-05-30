'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    FaEnvelope,
    FaLock,
    FaPaw,
    FaUser,
    FaGoogle,
    FaGithub,
} from "react-icons/fa6";

const RegisterPage = () => {
    const router = useRouter()

    const handleRegister = async (e) => {


        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const registerData = Object.fromEntries(formData.entries());



        const { data, error } = await authClient.signUp.email({
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
        });

        if (error) {
            console.log(error);
            toast.error(error.message || "Registration Failed");
            return;
        }

        console.log(data);
        toast.success("Account Created Successfully");

        router.push("/")
    };



    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">

            {/* Background Blur */}
            <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-orange-200 opacity-30 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300 opacity-20 blur-3xl"></div>



            <div className="container relative z-10 mx-auto flex min-h-screen items-center justify-center px-5 py-16">

                <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-2xl shadow-orange-100 lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="relative hidden flex-col justify-between bg-orange-500 p-12 text-white lg:flex">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

                                    <FaPaw className="text-2xl" />

                                </div>

                                <h2 className="text-3xl font-bold">
                                    PetNest
                                </h2>

                            </div>



                            <h1 className="max-w-md text-5xl font-bold leading-tight">
                                Find Your Perfect Pet Companion
                            </h1>

                            <p className="mt-6 max-w-lg text-lg text-orange-100">
                                Join PetNest and connect with adorable pets
                                waiting for their forever home.
                            </p>

                        </div>


                    </div>



                    {/* Right Side */}
                    <div className="p-8 md:p-12 lg:p-16">

                        {/* Header */}
                        <div className="mb-10">

                            <h2 className="text-4xl font-bold text-gray-900">
                                Create Account
                            </h2>

                            <p className="mt-3 text-gray-500">
                                Join PetNest and start your adoption journey.
                            </p>

                        </div>



                        {/* Form */}
                        <form onSubmit={handleRegister} className="space-y-6">

                            {/* Name */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>

                                <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-orange-400 focus-within:bg-white">

                                    <FaUser className="text-gray-400" />

                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="h-full w-full bg-transparent px-3 outline-none"
                                    />

                                </div>

                            </div>



                            {/* Email */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>

                                <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-orange-400 focus-within:bg-white">

                                    <FaEnvelope className="text-gray-400" />

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-full w-full bg-transparent px-3 outline-none"
                                    />

                                </div>

                            </div>

                            {/* Image URL */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Image URL
                                </label>

                                <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-orange-400 focus-within:bg-white">

                                    <FaUser className="text-gray-400" />

                                    <input
                                        name="image"
                                        type="url"
                                        placeholder="Enter your profile image URL"
                                        className="h-full w-full bg-transparent px-3 outline-none"
                                    />

                                </div>

                            </div>

                            {/* Password */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Password
                                </label>

                                <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-orange-400 focus-within:bg-white">

                                    <FaLock className="text-gray-400" />

                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Create password"
                                        className="h-full w-full bg-transparent px-3 outline-none"
                                    />

                                </div>

                            </div>




                            {/* Button */}
                            <button type="submit" className=" cursor-pointer flex h-14 w-full items-center justify-center rounded-2xl bg-orange-500 text-lg font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">

                                Create Account

                            </button>

                        </form>



                        {/* Divider */}
                        <div className="my-8 flex items-center">

                            <div className="h-[1px] flex-1 bg-gray-200"></div>

                            <p className="px-4 text-sm text-gray-400">
                                Or continue with
                            </p>

                            <div className="h-[1px] flex-1 bg-gray-200"></div>

                        </div>



                        {/* Social Login */}
                        <div className="grid gap-4 sm:grid-cols-2">

                            <button className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white font-medium text-gray-700 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50">

                                <FaGoogle className="text-lg" />

                                Google

                            </button>



                            <button className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white font-medium text-gray-700 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50">

                                <FaGithub className="text-lg" />

                                GitHub

                            </button>

                        </div>



                        {/* Footer */}
                        <p className="mt-8 text-center text-gray-500">

                            Already have an account?

                            <Link
                                href="/login"
                                className="ml-2 font-semibold text-orange-500 hover:text-orange-600"
                            >
                                Login
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default RegisterPage;