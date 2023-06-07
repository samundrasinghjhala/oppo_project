import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const ProductForm = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        sku_product_id: "",
        model_name: "",
        color: "",
        price: "",
        quantity: "",
        description: "",
        photos: "",

    });

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    function handleValidation(e) {
        e.preventDefault();
        fetchData();
    }
    useEffect(() => {

    }, []);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ3ZWM2MDUxYWUyMGYwYTBiNzc3NDA2IiwiaWF0IjoxNjg2MTM3ODMxLCJleHAiOjE2ODY3NDI2MzF9.6kTXuncU2FR31qFVIh9DWgtlMasM8oub-dRYR5-Ip0I"

    const fetchData = async () => {
        console.log(values);
        await axios
            .post(
                "http://localhost:3010/products",
                {
                    sku_product_id: values.sku_product_id,
                    model_name: values.model_name,
                    color: values.color,
                    price: values.price,
                    quantity: values.quantity,
                    description: values.description,
                    photos: values.photos,
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
                alert("Product Upload successfully");
                navigate("/");
            })
            .catch((error) => {
                console.log("Product Not Uploaded!");
                console.log(error);
            });
    };

    return (
        <div>
            <div className="h-screen flex">
                <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
                    <div className=" bg-black opacity-20 inset-0 z-0">
                    </div>
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <h1 className="text-white font-bold text-4xl font-sans">SAMSUNG GALAXY</h1>
                        <p className="text-white mt-1">Welcome to Samsung World</p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a href="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="flex lg:w-1/2 justify-center items-center bg-slate-400 space-y-8">
                    <div className=" w-full px-8 md:px-32 lg:px-24">

                        <form className="bg-white rounded-3xl shadow-2xl p-11 pt-5">
                            <h1 className="text-gray-800 text-center font-bold text-2xl mb-1">Product Detail</h1>
                            <div className="space-y-2">
                                <label className="text-md font-medium text-gray-700 tracking-wide">
                                    Product Code
                                </label>
                                <input
                                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="text"
                                    name="sku_product_id"
                                    onChange={handleInput}
                                    placeholder="Enter Product code"
                                ></input>
                            </div>
                            <div className="space-y-2">
                                <label className="text-md font-medium text-gray-700 tracking-wide">
                                    Model Name
                                </label>
                                <input
                                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="text"
                                    name="model_name"
                                    onChange={handleInput}
                                    placeholder="Enter Model Name"
                                ></input>
                            </div>
                            <div className="mt-4">
                                <span className="text-md font-medium text-gray-700 tracking-wide">Color</span>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="color" onChange={handleInput} value="red" />
                                        <span className="ml-2 text-red-700 font-bold">Red</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="color" onChange={handleInput} value="green" />
                                        <span className="ml-2  text-green-700 font-bold">Green</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="color" onChange={handleInput} value="blue" />
                                        <span className="ml-2  text-blue-700 font-bold">Blue</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="color" onChange={handleInput} value="gray" />
                                        <span className="ml-2  text-gray-700 font-bold">Gray</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="color" onChange={handleInput} value="black" />
                                        <span className="ml-2  text-black-700 font-bold">Black</span>
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-md font-medium text-gray-700 tracking-wide">
                                    Price
                                </label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="number"
                                    name="price"
                                    onChange={handleInput}
                                    placeholder="Enter Price"
                                ></input>

                            </div>
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

                            </div>
                            <div>
                                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Description</label>
                                <input type="text"
                                    name="description"
                                    onChange={handleInput}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-md font-medium text-gray-700 tracking-wide">
                                    Photos
                                </label>
                                <input
                                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="file"
                                    id="updoadimage"
                                    name="photos"
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div className=' flex justify-center'>
                                <button type="submit" onClick={handleValidation} className="hover:bg-indigo-700 hover:text-orange-600  hover:-translate-y-1 transition-all duration-500 bg-indigo-800 text-white mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Submit Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductForm;
