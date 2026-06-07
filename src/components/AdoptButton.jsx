"use client"

import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdoptButton = ({ pet }) => {
    const { data: session } = useSession();
      const router = useRouter();



    const handleAdopt = async () => {
        const { data: jwtData } = await authClient.token()
        
      

        const token = jwtData?.token;
        if(!token){
            toast.error("authentication failed!")
            return
        }
        const updatedData = {
            userId : session?.user?.id,
            Name : session?.user?.name,
            userEmail: session?.user?.email,
            image: pet?.image,
            breed: pet?.breed,
            location: pet?.location,
            petName: pet?.name,
            price: pet?.price,
            gender: pet?.gender,
            description: pet?.description
        }

    const res =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoption/${pet?._id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body : JSON.stringify(updatedData)
        })
        
        const data = await res.json();

        if(!data){
            toast.error("Something went wrong")
            return
        }

        router.push("/dashboard")
    }   


    return (
        <button onClick={handleAdopt} className="cursor-pointer rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">
            Adopt Now
        </button>
    );
};

export default AdoptButton;