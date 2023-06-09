import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminViewPO = () => {
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
            <h1 className='h1'>Purchase Order List</h1>
            <div>
                <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Product</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Deliver Date</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Purchase Order Copy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.product}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.quantity}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.price}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.will_deliver_within}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.description}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.po_copy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
};

export default AdminViewPO;
