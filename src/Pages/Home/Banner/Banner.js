import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/images/Banner/Banner.png'
const Banner = () => {
    return (
        <div className='shadow mt-10 mb-24'>
            <div className="hero h-[700px] bg-accent ">
                <div className="hero-content flex-col lg:flex-row-reverse rounded">
                    <img alt='' src={banner} className="lg:w-3/4 rounded-xl opacity-90" />
                    <div className='text-center'>
                        <h1 className="text-5xl font-bold">Welcome to Tukitaki</h1>
                        <p className="py-6">We connect client and seller in one place for your desired authentic phones. Let's have a cup of Tea by joining us!!! </p>
                        <Link to='/'className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;