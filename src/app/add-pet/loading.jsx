import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Spinner size='lg' color="warning" />
        </div>
    );
};

export default loading;