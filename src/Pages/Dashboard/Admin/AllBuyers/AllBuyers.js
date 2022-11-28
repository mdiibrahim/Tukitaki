import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import './AllBuyers.css'
const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteBuyer = id => {
        fetch(`http://localhost:5000/users/buyers/${id}`, {
            method: 'Delete', 
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Successfully deleted the Buyer.')
                refetch();
            }
        })
    }
    return (
        
            <div>
            <h1 className='text-center text-3xl text-bold text-primary mt-2'>All Buyer </h1>
            <div className="overflow-x-auto ">
                <table className="table w-full bg-color " >

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, index) => <tr className='hover' key='user._id'>
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                
                                <td><button onClick={() => handleDeleteBuyer(buyer._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default AllBuyers;