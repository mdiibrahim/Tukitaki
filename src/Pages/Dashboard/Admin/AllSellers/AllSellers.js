import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import './AllSeller.css'
const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;
        }
    });
    /* const handleVerifySeller = id => {
        fetch(`http://localhost:5000/users/sellers/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body : {verified: 'yes'} 
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Successfully verified the seller.')
                refetch();
            }
        })
    }
     onClick={() => handleVerifySeller(seller._id)} 
     
    */
    const handleDeleteSeller = id => {
        fetch(`http://localhost:5000/users/sellers`, {
            method: 'Delete', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Successfully deleted the seller.')
                refetch();
            }
        })
    }

    return (
        <div>
            <h1 className='text-center text-3xl text-bold text-primary mt-2'>All seller </h1>
            <div className="overflow-x-auto ">
                <table className="table w-full bg-color " >

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, index) => <tr className='hover' key='user._id'>
                                <th>{index + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-xs btn-primary'>Verify</button></td>
                                <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;