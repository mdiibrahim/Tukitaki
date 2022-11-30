import React from 'react';
import AdvertiseItems from './Advertiseitems/AdvertiseItems';
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
            <h1 className='text-3xl font-bold text-center -mb-10 text-primary'>Seggested items for you:</h1>
            <AdvertiseItems></AdvertiseItems>
        </div>
    );
};

export default Home;