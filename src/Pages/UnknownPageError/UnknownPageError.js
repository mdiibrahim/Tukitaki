import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Assets/images/404/404.jpg'
const UnknownPageError = () => {
    return (
        <div>
            <div className="card card-compact sm:w-1/2 w-3/4 mx-auto my-40">
                <figure><img src={error} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Sorrryyyy!</h2>
                    <p className='text-lg'>The page cannot found.</p>
                    <div className="card-actions justify-end">
                        <Link to='/' className="btn btn-primary">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnknownPageError;