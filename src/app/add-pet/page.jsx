
import { addPet } from "@/lib/pets/action";
import { Button, Input, ListBox, Select, ListBoxItem, SelectIndicator, SelectPopover, SelectTrigger, SelectValue, TextArea } from "@heroui/react";

import {
    PawPrint,
    MapPin,
    HeartPulse,
    Syringe,
    DollarSign,
    ImageIcon,
    Dog,
    Calendar,
    Venus,
    Clock,
    List,
    BookPlus,
} from "lucide-react";
import { redirect } from "next/navigation";

const CATEGORIES = [
    "Dog",
    "Cat",
    "Bird",
    "Rabbit",
    "Fish",
    "Other"
];

const GENDERS = [
    "Male",
    "Female"
];

const LOCATIONS = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Sylhet",
    "Barisal"
];

const AddPetForm = () => {

    const handleAddPet = async (formData) => {
        "use server"
        const data = await addPet(formData)
        if (data?.insertedId) {
            redirect("/all-pets")
        }
    }




    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-10">
                <div className="space-y-2 text-center">

                    <h1 className="text-4xl font-black text-slate-900">
                        Add {' '}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-600 to-orange-800">Pet</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Share your knowledge with the world</p>
                </div>

                <form
                    action={handleAddPet}
                    className="space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:col-span-2 space-y-2">
                            <label
                                htmlFor="title"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Pet Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                required
                                placeholder="Name"
                                className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label
                                htmlFor="breed"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Breed
                            </label>
                            <Input
                                id="breed"
                                name="breed"
                                required
                                placeholder="Breed"
                                className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label
                                htmlFor="age"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Age
                            </label>
                            <Input
                                id="age"
                                name="age"
                                required
                                placeholder="Age"
                                type="number"
                                min={0}
                                className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        {/* Gender */}

                        <div className="space-y-2 md:col-span-2">

                            <label
                                htmlFor="gender"
                                className="text-sm font-bold text-slate-700 ml-1">
                                Gender
                            </label>

                            <Select
                                id="gender"
                                name="gender"
                                selectionMode="single"
                                placeholder="Select Gender"
                                disallowEmptySelection
                            >

                                <SelectTrigger className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none">

                                    <SelectValue />

                                    <SelectIndicator />

                                </SelectTrigger>

                                <SelectPopover>

                                    <ListBox>

                                        {
                                            GENDERS.map((item) => (

                                                <ListBoxItem key={item}>
                                                    {item}
                                                </ListBoxItem>

                                            ))
                                        }

                                    </ListBox>

                                </SelectPopover>

                            </Select>

                        </div>

                        {/* Location */}

                        <div className="space-y-2 md:col-span-2">

                            <label className="text-sm font-bold text-slate-700 ml-1">
                                Location
                            </label>

                            <Select
                                id="location"
                                name="location"
                                selectionMode="single"
                                placeholder="Select Location"
                            >

                                <SelectTrigger className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none">

                                    <SelectValue />

                                    <SelectIndicator />

                                </SelectTrigger>

                                <SelectPopover>

                                    <ListBox>

                                        {
                                            LOCATIONS.map((item) => (

                                                <ListBoxItem
                                                    key={item}
                                                    id={item}
                                                >
                                                    {item}
                                                </ListBoxItem>

                                            ))
                                        }

                                    </ListBox>

                                </SelectPopover>

                            </Select>

                        </div>





                        <div className="space-y-2">
                            <label
                                htmlFor="image"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Image URL
                            </label>
                            <Input
                                id="image"
                                name='image'
                                required
                                type="url"
                                placeholder="https://images.unsplash.com/..."
                                startContent={<ImageIcon className="w-5 h-5 text-slate-400" />}
                                className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        {/* Category */}

                        <div className="space-y-2">

                            <label className="text-sm font-bold text-slate-700 ml-1">
                                Category
                            </label>

                            <Select
                                id="category"
                                required
                                name="category"
                                placeholder="Select Category"
                            >

                                <SelectTrigger className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none">

                                    <SelectValue />

                                    <SelectIndicator />

                                </SelectTrigger>

                                <SelectPopover>

                                    <ListBox>

                                        {
                                            CATEGORIES.map((item) => (

                                                <ListBoxItem
                                                    key={item}
                                                    id={item}
                                                >
                                                    {item}
                                                </ListBoxItem>

                                            ))
                                        }

                                    </ListBox>

                                </SelectPopover>

                            </Select>

                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="price"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Price ($)
                            </label>
                            <Input
                                id="price"
                                name="price"
                                required
                                type="number"
                                placeholder="0.00"
                                startContent={<DollarSign size={18} className="w-5 h-5 text-slate-400" />}

                                className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        {/* vaccination status  */}

                        <div className="space-y-2">

                            <label className="text-sm font-bold">
                                Vaccination Status
                            </label>

                            <Select
                                name="vaccinated"
                                placeholder="Select status"
                            >

                                <SelectTrigger className="w-full h-14 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none">
                                    <SelectValue />
                                </SelectTrigger>

                                <SelectPopover>

                                    <ListBox>

                                        <ListBoxItem key="Yes">
                                            Vaccinated
                                        </ListBoxItem>

                                        <ListBoxItem key="No">
                                            Not Vaccinated
                                        </ListBoxItem>

                                    </ListBox>

                                </SelectPopover>

                            </Select>

                        </div>
                        {/* Description */}
                        <div className="md:col-span-2 space-y-2">
                            <label
                                htmlFor="description"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Description
                            </label>
                            <TextArea
                                id="description"
                                required
                                name="description"
                                placeholder="What are you think about pets?"
                                className="w-full h-32 border-2 border-slate-200 hover:border-orange-600/50 focus-within:border-orange-600 rounded-2xl bg-white transition-all duration-300 shadow-none resize-none"
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <Button
                            variant="flat"
                            size="lg"
                            className="flex-1 font-bold rounded-2xl h-14"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            size="lg"
                            className="flex-2 font-black rounded-2xl h-14 shadow-xl bg-orange-600 shadow-orange-600/20"
                        >
                            Add Pet
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPetForm;