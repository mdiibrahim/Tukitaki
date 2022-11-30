import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../Hooks/useBuyer/useBuyer';
import { BsFillPatchCheckFill } from "react-icons/bs"
const Categories = () => {
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const mobiles = useLoaderData();
    console.log(mobiles[0].mobileBrand)

    console.log(mobiles)

    return (
        <section >
            <h1 className='text-center text-2xl text-bold text-primary mt-1'>Your desired {mobiles[0].mobileBrand}</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-6'>
            {
                mobiles.map((mobile) => {
                    const { date, details, isSellerVerified, mobileBrand, mobileCondition, mobileImage, mobileName, mobilePrice, sellerEmail, sellerLocation, sellerName, sellerNumber, sold, yearOfPurchase, _id, yearOfUse, originalMobilePrice } = mobile;
                    

                    return <div key={_id} >{
                        // only show the available product 
                        sold === 'no' && <div className="card w-full  shadow-lg">
                            <figure><img src={mobileImage} alt=" " className='w-4/6 md:w-full' /></figure>
                            <div className="card-body text-center text-lg">
                                <h2 className="card-title justify-center ">
                                    {mobileName}
                                    <div className="badge badge-secondary">{mobileBrand}</div>
                                </h2>
                                <p>Price: $<span className='font-bold'>{mobilePrice}</span></p>
                                <p>Seller Name: <span className='font-bold'>{sellerName}</span>{isSellerVerified === 'yes' && <BsFillPatchCheckFill className='inline ml-2 text-primary font-bold' />}</p>
                                <p>Mobile Condition: <span className='font-bold'>{mobileCondition}</span></p>
                                <p>Seller Number: <span className='font-bold'>{sellerNumber}</span></p>
                                <p>Meeting Location: <span className='font-bold'>{sellerLocation}</span></p>
                                <p>Purchasing year: <span className='font-bold'>{yearOfPurchase}</span></p>
                                <p>Used: <span className='font-bold'>{ yearOfUse}</span></p>
                                <p>Post Date: <span className='font-bold'>{date}</span></p>
                                <p>Original Price: <span className='font-bold'>{ originalMobilePrice}</span></p>
                                <p><span className='underline'>Detailes about phone:</span> {details}</p>
                                <div className="card-actions justify-between mt-6">
                                    {
                                        isBuyer && <div className="btn btn-primary">Book Now</div>
                                    }

                                    <div className="btn btn-error">Report</div>
                                </div>
                            </div>
                        </div>

                    }

                    </div>
                })
            }
            </div>

            


        </section>
    );
};

export default Categories;