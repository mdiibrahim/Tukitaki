import React from 'react';
import Banner from './Banner/Banner';
import BuySection from './BuySection/BuySection';
import SellSection from './SellSection/SellSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-3xl font-bold text-center -mb-10 text-primary'>Our Moto:</h1>
            <SellSection></SellSection>
            <BuySection></BuySection>
        </div>
    );
};

export default Home;