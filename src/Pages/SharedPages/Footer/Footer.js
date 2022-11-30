import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/Company/logo.png'
const Footer = () => {
    return (
        <section className='min-h-screen relative'>
            <div className=' absolute bottom-0 w-full'>

                <footer className="footer footer-center p-10 bg-secondary  rounded">
                    <div className="grid grid-flow-col gap-4">
                        <Link to='' className="link link-hover">About us</Link>
                        <Link to='/blog' className="link link-hover">Blog</Link>
                        <Link to='/login' className="link link-hover">Log In</Link>
                        <Link to="/register" className="link link-hover">Register</Link>
                    </div>
                    <div>
                        <img className='w-32 -mt-5 mb-4' src={logo} alt="" />
                        <p className="font-bold">
                            Tukitaki-টুকিটাকি Ltd.
                            <br />Bringing people in One platform
                        </p>
                    </div>
                    <div>
                        <p>Copyright © 2022 - All right reserved by Tukitaki-টুকিটাকি Ltd.</p>
                    </div>
                </footer>
            </div>

        </section>
    );
};

export default Footer;