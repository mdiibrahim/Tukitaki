import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken/useToken';

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, editUserName, registerWithGoogle } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [registeredEmail, setRegisteredEmail] = useState('')
    const [token] = useToken(registeredEmail);
    if (token) {
        navigate('/');
    }
    const onSubmit = (data) => {
        
        setRegisterError('');
        registerUser(data.email, data.password)
        
            .then(result => {
                const user = result.user;

                
                editUserName({ displayName: data.name })
                    .then(() => {
                        saveUserInDB(data.name, data.email, data.role);
                        
                    })
                    .catch(err => console.error(err));
                toast.success('Successfully Your registration done.')

            })
            .catch(error => {
                setRegisterError(error.message)
            });
            
        
    }
    const handleLogInWithGoogle = () => {
        setRegisterError('');
        registerWithGoogle()
            .then(result => {
                const user = result.user;
                saveUserInDB(user.displayName, user.email, 'buyer');
                
                toast.success('Successfully Your registration done.')

            })
            .catch(error => {
                setRegisterError(error.message)
            });
            
    }
    const saveUserInDB = (name, email, role) => {
        const user = { name, email, role, verified: 'no' };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(() =>{
                setRegisteredEmail(email)
                
            })
            .catch((err) => {
                console.error(err);
            })
    }
   
    
    return (
        <section className='min-h-[600px] mx-auto my-20 '>
            <div className='bg-accent mx-auto sm:w-2/4 p-16 shadow rounded-lg'>
                <h3 className='text-center text-bold text-3xl'>Register</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* name field */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your name?</span>
                        </label>
                        <input type="name" placeholder='ex: Ibrahim' {...register("name", { required: 'required', minLength: { value: 2, message: "your name is too short" } })} className="input input-primary input-bordered w-full" />
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
                            <option value='buyer'>Buyer</option>
                            <option value='seller' >Seller</option>
                        </select>
                        {errors.role && <small className='text-error mt-1' >{errors.role.message}</small>}
                    </div>

                    <input className='btn btn-primary w-full mt-4 mb-2' type="submit" value='register' />
                    {
                        { registerError } && <small className='text-error mt-1' >{registerError}</small>
                    }

                </form>
                <p>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></p>
                <div className="divider"></div>
                <button className='btn btn-primary w-full' onClick={handleLogInWithGoogle}>Register with google</button>
            </div>
        </section>
    );
};

export default Register;