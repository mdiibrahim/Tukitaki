import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const { seller } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        try {

            axios.get('https://tukitakibyrhidy.web.app/category')
                .then(data => {
                    setCategories(data.data);

                });
        }
        catch (error) {
            console.error(error)
        }
    }, [])
    const selectCategory = <React.Fragment>
        <select className="select select-primary select-bordered" {...register("mobileBrand", { required: 'required' })}>{
            categories.map(category =>
                <option key={category._id} value={category.category_name}>
                    {category.category_name}
                </option>)
        }</select>
    </React.Fragment>

    const onSubmit = (data, event) => {
        event.preventDefault();
        const { mobileBrand, details, mobileCondition, mobileName, mobilePrice, sellerLocation, sellerNumber, yearOfPurchase, yearOfUse, originalMobilePrice } = data;
        const date = new Date().toLocaleDateString();



        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        try {

            fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api_key}`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        console.log(imgData.data.url);
                        const mobile = {
                            mobileName,
                            mobileBrand,
                            mobilePrice,
                            mobileCondition,
                            sellerEmail: seller.email,
                            sellerName: seller.name,
                            verified: seller.verified,
                            sellerNumber,
                            sellerLocation,
                            yearOfPurchase,
                            details,
                            date,
                            mobileImage: imgData.data.url,
                            sold: 'no',
                            originalMobilePrice,
                            yearOfUse

                        }
                        try {

                            fetch('https://tukitakibyrhidy.web.app/products', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                                },
                                body: JSON.stringify(mobile)
                            })
                                .then(res => res.json())
                                .then(result => {
                                    console.log(result);
                                    toast.success('Your mobile is added successfully');
                                    navigate('/dashboard/my-products')
                                })
                        }
                        catch (error) {
                            console.error(error)
                        }
                    }
                })
        }
        catch (error) {
            console.error(error)
        }
    }
    // if (isSellerLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h1 className='text-center text-2xl text-bold text-primary mt-1'>Add a mobile </h1>
            <section className='min-h-[600px] my-2 '>
                <div className='bg-accent mx-auto lg:w-4/6 p-16 w-full shadow rounded-lg'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name field */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your mobile name?</span>
                            </label>
                            <input type="name" {...register("mobileName", { required: 'required' })} className="input input-primary input-bordered w-full" />
                            {errors.mobileName && <small className='text-error mt-1' >{errors.mobileName.message}</small>}
                        </div>
                        {/* price field */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your expected price?</span>
                            </label>
                            <input type="number"  {...register("mobilePrice", { required: 'required' })} className="input input-primary input-bordered w-full" />
                            {errors.mobilePrice && <small className='text-error mt-1' >{errors.mobilePrice.message}</small>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter the original price?</span>
                            </label>
                            <input type="number"  {...register("originalMobilePrice", { required: 'required' })} className="input input-primary input-bordered w-full" />
                            {errors.originalMobilePrice && <small className='text-error mt-1' >{errors.originalMobilePrice.message}</small>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Select your mobile brand....?</span>
                            </label>
                            {selectCategory}
                            {errors.mobileBrand && <small className='text-error mt-1' >{errors.mobileBrand.message}</small>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Select your mobile condition....?</span>
                            </label>
                            <select className="select select-primary select-bordered" {...register("mobileCondition", { required: 'required' })}>
                                <option value='excellent'>
                                    Excellent
                                </option>
                                <option value='good'>
                                    Good
                                </option>
                                <option value='fair'>
                                    Fair
                                </option>
                            </select>
                            {errors.mobileCondition && <small className='text-error mt-1' >{errors.mobileCondition.message}</small>}
                        </div>
                        {/* seller contact number */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your contact number?</span>
                            </label>
                            <input type="name" {...register("sellerNumber", { required: 'required' })} className="input input-primary input-bordered w-full" />
                            {errors.sellerNumber && <small className='text-error mt-1' >{errors.sellerNumber.message}</small>}
                        </div>

                        {/* seller location */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your meeting location?</span>
                            </label>
                            <input type="name" {...register("sellerLocation", { required: 'required' })} className="input input-primary input-bordered w-full" />
                            {errors.sellerLocation && <small className='text-error mt-1' >{errors.sellerLocation.message}</small>}
                        </div>
                        {/* Year of purchase */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your mobile purchasing date?</span>
                            </label>
                            <input type="name" {...register("yearOfPurchase", { required: 'required' })} className="input input-primary input-bordered w-full" />
                            {errors.yearOfPurchase && <small className='text-error mt-1' >{errors.yearOfPurchase.message}</small>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">How many days use this mobile?</span>
                            </label>
                            <input type="name" {...register("yearOfUse", { required: 'required' })} className="input input-primary input-bordered w-full" placeholder='ex: 2 years/ 5 days' />
                            {errors.yearOfUse && <small className='text-error mt-1' >{errors.yearOfUse.message}</small>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Enter your selling mobile Photo...?</span></label>
                            <input type="file" alt=' ' {...register("image", {
                                required: "required"
                            })} className="input input-bordered input-primary w-full " />
                            {errors.image && <small className='text-error mt-1' >{errors.image.message}</small>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details about your mobile phone?</span>
                            </label>
                            <textarea type="name" {...register("details", { required: 'required' })} className="textarea textarea-primary textarea-bordered h-32 w-full">

                            </textarea>

                            {errors.details && <small className='text-error mt-1' >
                                {errors.details.message}</small>}
                        </div>

                        <input className='btn btn-primary w-full mt-4 mb-2' type="submit" value='Add' />


                    </form>

                    <div className="divider"></div>

                </div>
            </section>

        </div>
    );
};

export default AddProduct;