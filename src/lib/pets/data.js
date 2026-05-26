export const fetchPets = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/all-pets`,
        {
            cache: "no-store",
        }
    );

    const data = await res.json();
    return data || [];
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