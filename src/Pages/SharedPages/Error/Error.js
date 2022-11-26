import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const  error  = useRouteError();
    return (
        <div className='flex flex-col items-center justify-center my-20'>
            <p>Something went wrong.......!!</p>
            <p className='text-error'>{error.statusText || error.message}</p>
        </div>
    );
};

export default Error;