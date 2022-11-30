import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://tukitakibyrhidy-server.vercel.app/products/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteProduct = (id) => {
        fetch(`https://tukitakibyrhidy-server.vercel.app/products/${id}`, {
            method: 'Delete',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Successfully deleted the product.')
                    refetch();
                }
            })
    }
    const handleAdvertiseProduct = (id) => {
        console.log(id)
        try {
            fetch(`https://tukitakibyrhidy-server.vercel.app/products/advertise/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                })
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1 className='text-center text-2xl text-bold text-primary mt-1'>My products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => {
                                const { mobileName, mobileBrand, mobileImage, mobilePrice, date, sold, _id } = product;
                                return <tr className='hover' key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={mobileImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{mobileName}</div>
                                                <div className="text-sm opacity-50">{mobileBrand}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $ {mobilePrice}
                                        <br />

                                        <span className="badge badge-ghost badge-sm">{date}</span>
                                    </td>
                                    <td>
                                        {sold === 'no' ? "Available" : "Sold"}
                                    </td>
                                    <td>
                                        {
                                            sold === 'no' && <button onClick={() => handleAdvertiseProduct(_id)} className='btn btn-xs btn-primary'>Advertise</button>
                                        }
                                        {
                                            sold === 'yes' && <button className='btn btn-xs' disabled>Advertise</button>
                                        }
                                    </td>

                                    <td><button onClick={() => handleDeleteProduct(_id)} className='btn btn-xs btn-error'>Delete</button></td>

                                </tr>

                            }
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;