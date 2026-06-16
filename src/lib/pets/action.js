"use server"

import { headers } from "next/headers";
import { auth } from "../auth";

export const addPet = async (formData) => {
    try {

        const { token } = await auth.api.getToken({
            headers: await headers(),
        });

        if (!token) {
            throw new Error("No token");
        }

        const modifiedData =
            Object.fromEntries(formData.entries());

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/all-pets`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(modifiedData),
            }
        );

        const data =
            await res.json();

        if (!res.ok) {
            throw new Error(
                data?.message ||
                "Failed"
            );
        }

        return data;

    } catch (error) {

        console.log(error);

        return {
            error:
                error.message
        };
    }
};