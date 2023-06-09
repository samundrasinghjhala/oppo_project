import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const DealerReqView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ4MTliNWY4Mjk3YmExNDg3MDljMzcyIiwiaWF0IjoxNjg2Mjg4NDk0LCJleHAiOjE2ODY4OTMyOTR9.UbE0Yr1EzXThA0jSKQCxwTDm9d_blzByvBdVVM1HPfM"

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3010/req_dealer', {
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
            <h1 className='h1'>Dealer Requirement</h1>
            <div>
                <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Product Name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Model No.</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Color</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.product}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.model_name}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.color}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.quantity}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><br />
                    <Link to="/" className=" text-2xl  text-muted text-blue-400 hover:text-orange-500">
                        Log Out
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DealerReqView;
