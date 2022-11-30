import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const ReportedItems = () => {

    const { data: reportedItems = [], refetch } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reported-items');
            const data = await res.json();
            console.log(data)
            return data;
        }
    });
    const handleDeleteReportedItem =(id, _id) => {
        try {
            
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'Delete',
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted the reported product.')
                        refetch();
                    }
                })
        }
        catch (error) {
            console.error(error)
        }
        try {
            
            fetch(`http://localhost:5000/reported-items/${ _id}`, {
                method: 'Delete',
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted product.')
                        refetch();
                    }
                })
        }
        catch (error) {
            console.error(error)
        }
    }
    refetch();
    return (
        <div>
            <h1 className='text-center text-2xl text-bold text-primary mt-1'>Reported Items</h1>
            <div className="overflow-x-auto ">
                <table className="table w-full bg-color " >

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Seller Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedItems.map((reportedItem, index) => <tr className='hover' key={reportedItem._id}>
                                <th>{index + 1}</th>
                                <td>{reportedItem.reportedMobileName}</td>
                                <td>{reportedItem.reportedMobileBrand}</td>
                                <td>{reportedItem.reportedMobileSellerEmail}</td>

                                <td><button onClick={() => handleDeleteReportedItem(reportedItem.reportedMobileId, reportedItem._id)} className='btn btn-xs btn-error'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;