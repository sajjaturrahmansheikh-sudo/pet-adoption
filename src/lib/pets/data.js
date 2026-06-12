export const fetchPets = async (search = "") => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/all-pets?search=${search}`,
        {
            cache: "no-store"
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch pets");
    }

    return await res.json();
};
export const fetchFeaturedPets = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/featured`,
        {
            cache: "no-store",
        }
    );

    const data = await res.json();
    return data || [];
};