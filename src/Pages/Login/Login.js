import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import useToken from '../../Hooks/useToken/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn, registerWithGoogle } = useContext(AuthContext);
    const [loginEmail, setLoginEmail] = useState('');
    const [logInError, setLogInError] = useState('');
    const [token] = useToken(loginEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';



    const onSubmit = (data, event) => {
        event.preventDefault();
        setLogInError('');
        logIn(data.email, data.password)
            .then(result => {
                setLoginEmail(data.email)
                toast.success('Logged In successfully')
            })
            .catch(error => {
                console.error(error.message)
                setLogInError(error.message);
            });

    }
    const handleLogInWithGoogle = () => {
        setLogInError('');
        registerWithGoogle()
            .then(result => {
                const user = result.user;
                saveUserInDB(user.displayName, user.email, 'buyer');

                toast.success('Successfully You entered.')

            })
            .catch(error => {
                setLogInError(error.message)
            });

    }
    const saveUserInDB = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://tukitakibyrhidy-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(() => {
                setLoginEmail(email)
            })
            .catch((err) => {
                console.error(err);
            })
    }
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <section className='min-h-[600px] mx-auto my-20 '>
            <div className='bg-accent mx-auto sm:w-2/4 p-16 shadow rounded-lg'>
                <h3 className='text-center text-bold text-3xl'>Log In</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

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
                    <input className='btn btn-primary w-full mt-4 mb-2' type="submit" value='log in' />
                    {logInError && <small className='text-error mt-2' >{logInError}</small>}
                </form>
                <p>Don't have an account? <Link className='text-primary' to="/register">Please Register Now</Link></p>
                <div className="divider"></div>
                <button className='btn btn-primary w-full' onClick={handleLogInWithGoogle}>Log in with google</button>
            </div>
        </section>
    );
};

export default Login;