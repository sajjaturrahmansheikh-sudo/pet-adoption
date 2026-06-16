"use client"

import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdoptButton = ({ pet }) => {
    const { data: session } = useSession();
    const router = useRouter();



    const handleAdopt = async () => {
        try {

            if (!session?.user) {
                toast.error("Login First");
                return;
            }

            const { data } = await authClient.token();

            console.log("TOKEN:", data);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/adoption/${pet._id}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${data?.token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: session.user.id,
                        userEmail: session.user.email,
                        name: session.user.name,
                        ...pet
                    })
                }
            );

            console.log(res);

            const result = await res.json();

            console.log(result);

            if (!res.ok) {
                throw new Error(result.message);
            }

            toast.success("Adoption Success");

            router.push("/dashboard");

        }
        catch (err) {
            console.log("ERROR:", err);

            toast.error(err.message || "Request Failed");
        }
    };


    return (
        <button onClick={handleAdopt} className="cursor-pointer rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">
            Adopt Now
        </button>
    );
};

export default AdoptButton;