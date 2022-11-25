import React from 'react';
import { Link } from 'react-router-dom';
import buy from '../../../Assets/images/Extra/buy.png'
const BuySection = () => {
    return (
        <section>
            <div className="card md:card-side my-16 shadow-sm">
                <figure><img src={buy} alt="Album" className='w-96 md:w-full '/></figure>
                <div className="card-body my-auto">
                    <h2 className="card-title text-5xl">Explore Desired Phones!</h2>
                    <p className='text-xl'>Buy authentic phones from verified seller without any problem at anywhere</p>
                    <div className="card-actions md:justify-end justify-center my-5">
                        <Link to='' className="btn btn-primary btn-lg">Explore</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuySection;