import PetCard from "@/components/PetCard";
import { fetchPets } from "@/lib/pets/data";
import {
    Button,
    SearchField
} from "@heroui/react";


const AllPets = async () => {

    const pets = await fetchPets();

    return (
        <div className="container mx-auto px-5 py-16">

            {/* Header Section */}
            <div className="mb-10 flex flex-col items-center justify-center text-center">

                <p className="mb-3 rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-500">
                    Find Your Perfect Companion
                </p>

                <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    Explore All Pets
                </h1>

                <p className="mt-4 max-w-2xl text-gray-500">
                    Browse adorable pets looking for a loving home.
                    Filter, search, and discover your next furry friend.
                </p>
            </div>



            {/* Filter & Search Section */}
            <div className="mb-12 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    {/* Search */}
                    <div className="lg:col-span-2">

                        <SearchField name="search">

                            <SearchField.Group className="h-12 rounded-2xl border border-gray-200 bg-white shadow-sm">

                                <SearchField.SearchIcon />

                                <SearchField.Input
                                    placeholder="Search pets by name or breed..."
                                    className="text-sm"
                                />

                                <SearchField.ClearButton />

                            </SearchField.Group>

                        </SearchField>

                    </div>


                </div>


            </div>



            {/* Results */}
            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        Available Pets
                    </h2>

                    <p className="text-sm text-gray-500">
                        Showing {pets?.length} pets
                    </p>

                </div>



                <Button
                    variant="bordered"
                    radius="full"
                >
                    Reset Filters
                </Button>

            </div>



            {/* Pets Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {
                    pets?.map((pet) => (
                        <PetCard
                            key={pet?._id}
                            pet={pet}
                        />
                    ))
                }

            </div>



            {/* Empty State */}
            {
                pets?.length === 0 && (

                    <div className="mt-20 flex flex-col items-center justify-center text-center">

                        <h3 className="text-2xl font-bold text-gray-700">
                            No Pets Found
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Try adjusting your search or filters.
                        </p>

                    </div>

                )
            }

        </div>
    );
};

export default AllPets;