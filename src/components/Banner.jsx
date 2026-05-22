import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import banner from "../../public/assets/banner.png";
const Banner = () => {
    return (
        <div className='bg-orange-50'>
            <div className='container mx-auto py-20 px-10'>

                <div className='md:flex justify-between'>
                    <div className='space-y-3'>
                        <h1 className='text-5xl font-bold'>
                            Find Your Perfect Furry <br /> Companion
                        </h1>
                        <p className='text-gray-400 font-medium'>
                            Adopt loving pets and give <br /> them a forever home , safe , trusted and <br /> heartwarming adoption experience.
                        </p>
                        <div className='flex gap-2'>
                            <Button className={"rounded-md bg-orange-400 text-white"}>Adopt Now</Button>
                            <Button className={"rounded-md bg-indigo-800"}>Explore Pets</Button>
                        </div>
                    </div>
                    <div>
                        <Image src={banner} alt='banner' width={600} height={600} />
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Banner;