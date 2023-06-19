import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const VenderReqView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        handleAxios();
    }, []);

    const token = localStorage.getItem('token')

    const handleAxios = async () => {
        try {
            const response = await axios.get('http://localhost:3010/publish_requirements', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='vender-login'>
                <h1 className='h1'>Vendor Requirement</h1>
                <div className="md:px-96 py-2 w-full">
                    <div className="shadow overflow-hidden rounded border-b border-gray-200">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Product</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Closed On</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {data.map((item) => (
                                    <tr className="bg-gray-100" key={item._id}>
                                        <td className="text-left text-cyan-600 py-3 px-4">{item.product}</td>
                                        <td className="text-left text-red-600 py-3 px-4">{item.quantity}</td>
                                        <td className="text-left text-fuchsia-600 py-3 px-4">{item.closedOn}</td>
                                        <td className="text-left text-green-600 py-3 px-4">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link to="/ViewPO" className=" text-2xl text-blue-400 hover:text-orange-500">
                            View Purchase order
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VenderReqView;
