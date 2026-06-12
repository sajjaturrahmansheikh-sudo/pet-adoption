"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );

    const handleSearch = () => {

        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (search.trim()) {
            params.set("search", search);
        } else {
            params.delete("search");
        }

        router.push(`/all-pets?${params.toString()}`);
    };

    return (
        <div className="flex items-center rounded-2xl border bg-white overflow-hidden shadow-sm">

            <div className="px-4 text-gray-400">
                <Search />
            </div>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search pet name or breed..."
                className="flex-1 h-14 outline-none px-2"
            />

            <button
                type="button"
                onClick={handleSearch}
                className="bg-orange-500 px-6 h-14 text-white font-medium hover:bg-orange-600"
            >
                Search
            </button>

        </div>
    );
};

export default SearchBar;