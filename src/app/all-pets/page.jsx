import PetCard from "@/components/PetCard";
import SearchBar from "@/components/SearchBar";
import { fetchPets } from "@/lib/pets/data";

const AllPets = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params?.search || "";

    const pets = await fetchPets(search);

    return (
        <div className="container mx-auto px-5 py-16 space-y-5">

            <SearchBar />

            {
                search && (
                    <p className="mt-6 mb-8">
                        Showing result for:
                        <span className="text-orange-500 font-bold">
                            {` "${search}" `}
                        </span>
                    </p>
                )
            }

            {
                pets?.length > 0 ? (

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {
                            pets.map((pet) => (
                                <PetCard
                                    key={pet._id}
                                    pet={pet}
                                />
                            ))
                        }

                    </div>

                ) : (

                    <div className="text-center py-20">

                        <h2 className="text-3xl font-bold">
                            No Pets Available
                        </h2>

                        <p className="mt-3 text-gray-500">
                            No result found for {` "${search}" `}
                        </p>

                    </div>

                )
            }

        </div>
    );
};

export default AllPets;