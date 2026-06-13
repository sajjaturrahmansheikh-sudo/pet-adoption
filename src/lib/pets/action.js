"use server"

import { headers } from "next/headers";
import { auth } from "../auth";

export const addPet = async (formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const modifiedData = Object.fromEntries(formData.entries());
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(modifiedData),
    });
    if (!res.ok) return null;
    const data = await res.json();

    return data;
};