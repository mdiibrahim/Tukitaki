import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/Company/logo.png';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = ()=> {
        logOut()
            .then(() => {toast.success('logged out succesfully') })
        .catch(error=>console.error(error))
    }
    useEffect(() => {
        axios.get('http://localhost:5000/category')
            .then(data => {
                setCategories(data.data);

            });
    }, [])

    const button = <React.Fragment>
        {
            user?.uid ?
                <>
                    <Link to='/login' className="btn btn-sm btn-primary" onClick={handleLogOut}>Log Out</Link>

                </>
                :
                <>
                    <Link to='/login' className="btn btn-sm btn-primary">Log In</Link>
                    <Link to='/register' className="btn btn-sm btn-primary">Register</Link>
                </>

        }
    </React.Fragment>
    const categoryHeader = <React.Fragment>
        <li>{
            categories.map(category => <Link key={category._id} to={`/category/${category.category_id}`}>
                {category.category_name}
            </Link>)
        }</li>
    </React.Fragment>
    const dashboard = <React.Fragment>
        <li> {user?.uid && <Link to='/dashboard'>Dashboard</Link>}</li>
    </React.Fragment>
    return (
        <header className="navbar bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/blog'>Blog</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                {categoryHeader}

                            </ul>
                        </li>
                        {dashboard}
                        <div className="navbar-end sm:hidden p-3">
                            {button}
                        </div>
                    </ul>

                </div>
                <Link to='/' className="btn btn-ghost normal-case text-lg sm:text-2xl"><img className='w-6 sm:w-10' src={logo} alt="" />Tukitaki-টুকিটাকি</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/blog'>Blog</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Categories
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">

                            {categoryHeader}
                        </ul>
                    </li>
                    {dashboard}
                </ul>
            </div>
            <div className="navbar-end hidden sm:flex">
                {button}
            </div>
        </header>
    );
};

export default Header;