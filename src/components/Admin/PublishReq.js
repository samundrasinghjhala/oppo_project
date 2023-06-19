import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublishReq = ({ alert }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        product: "",
        quantity: "",
        closedOn: "",
        description: "",
    });

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    function handleValidation(e) {
        e.preventDefault();
        publishData();
    }

    const token = localStorage.getItem('token')

    const publishData = async () => {
        console.log(values);
        await axios
            .post(
                "http://localhost:3010/publish_requirements",
                {
                    product: values.product,
                    quantity: values.quantity,
                    closedOn: values.closedOn,
                    description: values.description,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((result) => {
                console.log(result.data);
                alert("Publish successfully");
                navigate("/AdminPage");
            })
            .catch((error) => {
                alert(" Publish Unsuccessfully!", "error");
                console.log(error);
            });
    };

    return (
        <>
            <div className="h-screen flex w-full">
                <div className="hidden lg:flex w-full login_img_section justify-center items-center">
                    <div className=" bg-black opacity-20 inset-0 z-0">
                    </div>
                    <form className="bg-white rounded-3xl shadow-2xl p-11 pt-5">
                        <h1 className="text-gray-800 text-center font-bold text-2xl mb-1">Publish Requirement</h1><br /><br />
                        <div className="space-y-2">
                            <label className="text-md font-medium text-gray-700 tracking-wide">
                                Product Name
                            </label>
                            <input
                                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                type="text"
                                name="product"
                                onChange={handleInput}
                                placeholder="Enter Product Name"
                            ></input>
                        </div>
                        <br />
                        <div className="space-y-2">
                            <label className="mb-5 text-md font-medium text-gray-700 tracking-wide">
                                Quantity
                            </label>
                            <input
                                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                type="number"
                                name="quantity"
                                placeholder="Enter Quantity"
                                onChange={handleInput}
                            ></input>
                        </div><br />
                        <div className="space-y-2">
                            <label className="mb-5 text-md font-medium text-gray-700 tracking-wide">
                                Closed On
                            </label><br />
                            <input type="date" id="myDate" name="closedOn" min="2020-01-01" max="2025-12-31" onChange={handleInput} />
                        </div><br />
                        <div>
                            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Description</label>
                            <input type="text"
                                name="description"
                                onChange={handleInput}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <div className=' flex justify-center'>
                            <button type="submit" onClick={handleValidation} className="hover:bg-indigo-700 hover:text-orange-600  hover:-translate-y-1 transition-all duration-500 bg-indigo-800 text-white mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default PublishReq;

