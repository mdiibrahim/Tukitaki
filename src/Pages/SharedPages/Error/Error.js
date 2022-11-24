import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const  error  = useRouteError();
    return (
        <div className='items-center justify-center'>
            <p>Something went wrong.......!!</p>
            <p className='text-error'>{error.statusText || error.message}</p>
        </div>
    );
};

export default Error;