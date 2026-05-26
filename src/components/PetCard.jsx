import { Avatar, Card } from '@heroui/react';
import React from 'react';

const PetCard = ({ pet }) => {
    return (
        <Card className='group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100'>

            <Card.Header className='w-full overflow-hidden p-0'>
                <Avatar className="h-70 w-full rounded-none">
                    <Avatar.Image
                        alt={pet.name}
                        src={pet.image}
                        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                </Avatar>
            </Card.Header>

            <Card.Content className="mt-1 space-y-3 p-4">

                <div className='flex items-center justify-between'>
                    <p className="text-xl font-semibold text-gray-800">
                        {pet.name}
                    </p>

                    <span className='rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-500'>
                        {pet.type}
                    </span>
                </div>

                <p className='flex gap-2 text-sm text-gray-400'>
                    <span>{pet.age} Years</span>
                    •
                    <span>{pet.gender}</span>
                </p>

                <div className='flex items-center justify-between pt-2'>
                    <p className='text-2xl font-bold text-gray-900'>
                        $ {pet.price}
                    </p>

                    <button className='cursor-pointer rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg'>
                        View Details
                    </button>
                </div>

            </Card.Content>

        </Card>
    );
};

export default PetCard;