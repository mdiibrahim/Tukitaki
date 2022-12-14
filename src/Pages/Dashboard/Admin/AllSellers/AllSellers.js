import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import './AllSeller.css'
const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://tukitakibyrhidy-server.vercel.app/users/sellers');
            const data = await res.json();
            return data;
        }
    });


    /* const handleVerifySeller = email => {
          console.log(email)
         fetch(`https://tukitakibyrhidy-server.vercel.app/users/sellers/verify/${email}`, {
             method: 'PUT', 
             headers: {
                 // authorization: `bearer ${localStorage.getItem('accessToken')}`
                 'Content-Type': 'application/json'
                 
             },
             body: JSON.stringify({
                 verified: 'yes'
             }) 
         })
         .then(res => res.json())
         .then(data => {
             if(data.modifiedCount > 0){
                 toast.success('Successfully verified the seller.')
                 refetch();
             }
         })
     }*/
    const handleVerifySeller = (id) => {
        try {
            axios.put(`https://tukitakibyrhidy-server.vercel.app/users/sellers/verify/${id}`, {
                verified: 'yes'
            })
                .then(res => {
                    console.log(res)

                    if (res.data.matchedCount > 0) {
                        refetch();
                        toast.success('Successfully verified the seller.')
                    }

                })
        } catch (error) {
            console.log(error)
        }

    }

    const handleUnverifySeller = id => {
        // fetch(`https://tukitakibyrhidy-server.vercel.app/users/sellers/unverify/${email}`, {
        //     method: 'PUT', 
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body: JSON.stringify({verified: 'no'}) 
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.modifiedCount > 0){
        //         toast.success('Successfully Unverified the seller.')
        //         refetch();
        //     }
        // })
        try {
            axios.put(`https://tukitakibyrhidy-server.vercel.app/users/sellers/unverify/${id}`, {
                verified: 'no'
            })
                .then(res => {
                    console.log(res)

                    if (res.data.matchedCount > 0) {
                        refetch();
                        toast.success('Successfully Unverified the seller.')
                    }

                })
        } catch (error) {
            console.log(error)
        }
    }
    refetch();



    const handleDeleteSeller = id => {
        fetch(`https://tukitakibyrhidy-server.vercel.app/users/sellers/${id}`, {
            method: 'Delete',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Successfully deleted the seller.')
                }
            })
    }

    return (
        <div>
            <h1 className='text-center text-2xl text-bold text-primary mt-1'>All seller </h1>
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
                            sellers.map((seller, index) => <tr className='hover' key={seller._id}>
                                <th>{index + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    {
                                        seller.verified === 'no' && <button onClick={() => handleVerifySeller(seller._id)} className='btn btn-xs btn-primary'>Verify</button>
                                    }
                                    {
                                        seller.verified === 'yes' && <button onClick={() => handleUnverifySeller(seller._id)} className='btn btn-xs btn-primary'>Unverify</button>
                                    }
                                </td>

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