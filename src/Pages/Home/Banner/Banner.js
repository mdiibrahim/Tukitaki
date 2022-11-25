import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/images/Banner/Banner.png'
const Banner = () => {
    return (
        <div>
            <div className="hero h-[700px] bg-accent">
                <div className="hero-content flex-col lg:flex-row-reverse rounded">
                    <img alt='' src={banner} className="lg:w-3/4 rounded-xl shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to Tukitaki</h1>
                        <p className="py-6">We connect customer and seller in one place for your desired authentic phones. Let's have a cup og Tea by joining us!!! </p>
                        <Link to='/register'className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;