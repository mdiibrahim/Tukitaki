import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useContext(AuthContext);
     const onSubmit = (data) => {
        registerUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                
            })
            .catch(error => {
                console.error(error)
            });
    }
    return (
        <section className='min-h-[600px] mx-auto my-20 '>
            <div className='bg-accent mx-auto w-4/6 p-16 shadow rounded-lg'>
                <h3 className='text-center text-bold text-3xl'>Register</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* name field */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your name?</span>
                        </label>
                        <input type="name" placeholder='ex: Ibrahim' {...register("name", { required: 'required', minLength: {value: 4, message: "your name is too short" } })} className="input input-primary input-bordered w-full" />
                        {errors.name && <small className='text-error mt-1' >{errors.name.message}</small>}
                    </div>
                    {/* email field */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your email?</span>
                        </label>
                        <input type="email" placeholder='ex: ex@example.com' {...register("email", { required: 'required' })} className="input input-primary input-bordered w-full" />
                        {errors.email && <small className='text-error mt-1' >{errors.email.message}</small>}
                    </div>

                    {/* password field */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your password?</span>
                        </label>
                        <input type="password" placeholder='password' className="input input-primary input-bordered w-full" {...register("password", { required: "required", pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: "For security, password should contain Capital letters and numbers" }, minLength: { value: 6, message: "your password should be at least 6 characters long" } })}
                        />
                        {errors.password && <small className='text-error mt-1' >{errors.password.message}</small>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Join us by a....?</span>
                        </label>
                        <select className="select select-primary select-bordered" {...register("role", { required: 'required' })}>
                            <option value='seller' >Seller</option>
                            <option value='buyer' selected>Buyer</option>
                        </select>
                        {errors.role && <small className='text-error mt-1' >{errors.role.message}</small>}
                    </div>
                    <input className='btn btn-primary w-full mt-4 mb-2' type="submit" value='register' />
                </form>
                <p>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></p>
                <div className="divider"></div>
                <button className='btn btn-primary w-full'>Register with google</button>
            </div>
        </section>
    );
};

export default Register;