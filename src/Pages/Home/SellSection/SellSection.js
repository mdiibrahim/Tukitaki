import React from 'react';
import { Link } from 'react-router-dom';
import sell from '../../../Assets/images/Extra/sell.png'
const SellSection = () => {
    return (
        <section>
            <div className="card md:card-side my-16 shadow-sm">
                <figure><img src={sell} alt="Album" className='w-96 md:w-full'  /></figure>
                <div className="card-body my-auto">
                    <h2 className="card-title text-5xl">Wanna Make Money!</h2>
                    <p>Sell your mobile phones within a short term without any hassle at any place in the country.</p>
                    <div className="card-actions justify-end">
                        <Link to='' className="btn btn-primary btn-lg">Add your Items</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellSection;