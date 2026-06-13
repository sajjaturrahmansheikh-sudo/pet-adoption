"use client";

import logo from "../../public/assets/pawprint.png";
import { useState, useEffect } from "react";
import {
    LayoutDashboard,
    Menu,
    User,
    X,
    Plus,
    LogOut,
    Settings,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import NavLink from "./NavLink";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function MyNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const router = useRouter();

    const { data: session, isPending } = useSession();


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleLogOut = async () => {
        await signOut();
        router.push("/")
    }



    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-2" : "bg-slate-50 py-4"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div>
                                <Image src={logo} alt="logo" height={30} width={30} />
                            </div>
                            <span className="font-bold text-2xl text-orange-400">
                                PetNest
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex gap-8 items-center">
                        <NavLink href="/" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Home</NavLink>
                        <NavLink href="/all-pets" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">All pets</NavLink>
                        <NavLink href="/add-pet" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">Add Pet</NavLink>
                    </div>

                    <div className="hidden md:flex items-center gap-4">


                        {
                            !isPending && !session ? <>
                                <>
                                    <Link href="/login">
                                        <Button variant="light">Login</Button>
                                    </Link>

                                    <Link href="/register">
                                        <Button
                                            className="
                                            rounded-full
                                            bg-orange-500
                                            px-6
                                            font-semibold
                                            text-white
                                            shadow-lg
                                            shadow-orange-200
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:bg-orange-600
                                        "
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                </>
                            </> :
                                <div className="relative group">

                                    {/* Profile Button */}
                                    <button
                                        className="
            flex items-center gap-3 rounded-full border border-transparent
            bg-white/60 px-2 py-1.5
            transition-all duration-300
            hover:border-orange-200
            hover:bg-orange-50
            hover:shadow-lg hover:shadow-orange-100
        "
                                    >
                                        <Image
                                            src={
                                                session?.user?.image ||
                                                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                                            }
                                            alt="avatar"
                                            width={44}
                                            height={44}
                                            className="
                h-11 w-11 rounded-full object-cover
                ring-2 ring-orange-100
                transition-all duration-300
                group-hover:ring-orange-300
            "
                                        />

                                        <div className="hidden text-left lg:block">
                                            <p className="max-w-[140px] truncate text-sm font-semibold text-slate-800">
                                                {session?.user?.name}
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                Pet Lover 
                                            </p>
                                        </div>
                                    </button>

                                    {/* Dropdown */}
                                    <div
                                        className="
            invisible absolute right-0 top-16 z-50 w-72
            translate-y-3 opacity-0
            overflow-hidden rounded-3xl
            border border-orange-100
            bg-white/95 backdrop-blur-xl
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            transition-all duration-300
            group-hover:visible
            group-hover:translate-y-0
            group-hover:opacity-100
        "
                                    >

                                        {/* Top Profile */}
                                        <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-5 text-white">

                                            <div className="flex items-center gap-3">

                                                <Image
                                                    src={
                                                        session?.user?.image ||
                                                        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                                                    }
                                                    alt="avatar"
                                                    width={50}
                                                    height={50}
                                                    className="rounded-full border-2 border-white object-cover"
                                                />

                                                <div>
                                                    <h3 className="font-semibold">
                                                        {session?.user?.name}
                                                    </h3>

                                                    <p className="max-w-[180px] truncate text-xs text-orange-100">
                                                        {session?.user?.email}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                        {/* Menu */}
                                        <div className="p-2">

                                            <Link
                                                href="/dashboard"
                                                className="
                    flex items-center gap-3 rounded-2xl px-4 py-3
                    text-sm font-medium text-slate-700
                    transition-all duration-200
                    hover:bg-orange-50 hover:text-orange-600
                "
                                            >
                                                <LayoutDashboard size={18} />
                                                Dashboard
                                            </Link>

                                            <Link
                                                href="/add-pet"
                                                className="
                    flex items-center gap-3 rounded-2xl px-4 py-3
                    text-sm font-medium text-slate-700
                    transition-all duration-200
                    hover:bg-orange-50 hover:text-orange-600
                "
                                            >
                                                <Plus size={18} />
                                                Add Pet
                                            </Link>

                                            <Link
                                                href="/settings"
                                                className="
                    flex items-center gap-3 rounded-2xl px-4 py-3
                    text-sm font-medium text-slate-700
                    transition-all duration-200
                    hover:bg-orange-50 hover:text-orange-600
                "
                                            >
                                                <Settings size={18} />
                                                Settings
                                            </Link>

                                            <div className="my-2 border-t border-slate-100"></div>

                                            <button
                                                onClick={handleLogOut}
                                                className="
                    flex w-full items-center gap-3 rounded-2xl px-4 py-3
                    text-sm font-medium text-red-500
                    transition-all duration-200
                    hover:bg-red-50
                "
                                            >
                                                <LogOut size={18} />
                                                Logout
                                            </button>

                                        </div>
                                    </div>

                                </div>
                        }






                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {
                isMenuOpen && (
                    <div className="border-t bg-white p-5 md:hidden">
                        <div className="flex flex-col gap-2">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/all-pets">All Pets</NavLink>
                            <NavLink href="/my-requests">My Requests</NavLink>
                            <NavLink href="/add-pet">Add Pet</NavLink>
                        </div>

                        <div className="mt-5">
                            {session ? (
                                <Button
                                    onClick={handleLogOut}
                                    className="w-full bg-red-500 text-white"
                                >
                                    Logout
                                </Button>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link href="/login">
                                        <Button variant="bordered" className="w-full">
                                            Login
                                        </Button>
                                    </Link>

                                    <Link href="/register">
                                        <Button className="w-full bg-orange-500 text-white">
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )};
        </nav >
    );
}