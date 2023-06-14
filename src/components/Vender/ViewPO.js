import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ViewPO = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ4MmU2ZTgxNjY1YjNkNmEzZmVlYmMwIiwiaWF0IjoxNjg2MzAxMDY3LCJleHAiOjE2ODY5MDU4Njd9.Vv5r70_zP6Tma8apCnlQ6nIdBIP09TDASzhdF-1NdSs"

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3010/vendor_po', {
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
                <h1 className='h1'>Purchase Order List</h1>
                <div class="md:px-32 py-2 w-full">
                    <div class="shadow overflow-hidden rounded border-b border-gray-200">
                        <table class="min-w-full bg-white">
                            <thead class="bg-gray-500 text-white">
                                <tr>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Product</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Deliver Date</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Purchase Order Copy</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700">
                                {data.map((item) => (
                                    <tr class="bg-gray-100" key={item._id}>
                                        <td class="text-left font-semibold py-3 px-4">{item.product}</td>
                                        <td class="text-left font-semibold text-cyan-600 py-3 px-4">{item.quantity}</td>
                                        <td class="text-left font-semibold text-red-600 py-3 px-4">{item.price}</td>
                                        <td class="text-left font-semibold text-fuchsia-600 py-3 px-4">{item.will_deliver_within}</td>
                                        <td class="text-left font-semibold text-green-600 py-3 px-4">{item.description}</td>
                                        <td class="text-left font-semibold py-3 px-4">{item.po_copy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link to="/VenderPO" className=" text-2xl  text-muted text-blue-400 hover:text-orange-500">
                            Create Purchase Order
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewPO;
