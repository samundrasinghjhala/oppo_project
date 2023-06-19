import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const DealerReqView = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        dealerDataGet();
    }, []);

    const token = localStorage.getItem('token')

    const dealerDataGet = async () => {
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
    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate("/VenderLogin");
    }

    return (
        <>
            <div className='vender-login'>
                <h1 className='h1'>Dealer Requirement</h1>
                <div className="md:px-96 py-2 w-full">
                    <div className="shadow overflow-hidden rounded border-b border-gray-200">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Product Name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Model No.</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Color</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {data.map((item) => (
                                    <tr className="bg-gray-100" key={item._id}>
                                        <td className="text-left text-cyan-600 py-3 px-4">{item.product}</td>
                                        <td className="text-left text-red-600 py-3 px-4">{item.model_name}</td>
                                        <td className="text-left text-fuchsia-600 py-3 px-4">{item.color}</td>
                                        <td className="text-left text-green-600 py-3 px-4">{item.quantity}</td>
                                        <td className="text-left text-fuchsia-600 py-3 px-4">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div><br />
                            <button
                                type="submit"
                                onClick={handleLogOut}
                                className="w-44 flex justify-center bg-blue-400  hover:bg-orange-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-400">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DealerReqView;
