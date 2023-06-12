import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const VenderReqView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ4MmU2ZTgxNjY1YjNkNmEzZmVlYmMwIiwiaWF0IjoxNjg2MzAxMDY3LCJleHAiOjE2ODY5MDU4Njd9.Vv5r70_zP6Tma8apCnlQ6nIdBIP09TDASzhdF-1NdSs"

    const fetchData = async () => {
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
            <div className='vl'>
                <h1 className='h1'>Vendor Requirement</h1>
                <div class="md:px-96 py-2 w-full">
                    <div class="shadow overflow-hidden rounded border-b border-gray-200">
                        <table class="min-w-full bg-white">
                            <thead class="bg-gray-800 text-white">
                                <tr>

                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Product</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Closed On</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700">
                                {data.map((item) => (
                                    <tr class="bg-gray-100" key={item._id}>
                                        <td class="text-left text-cyan-600 py-3 px-4">{item.product}</td>
                                        <td class="text-left text-red-600 py-3 px-4">{item.quantity}</td>
                                        <td class="text-left text-fuchsia-600 py-3 px-4">{item.closedOn}</td>
                                        <td class="text-left text-green-600 py-3 px-4">{item.description}</td>
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
