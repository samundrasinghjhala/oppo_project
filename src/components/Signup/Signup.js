import axios from "axios";
import { useEffect, useState } from "react";
import validation from "./SignupValidation";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [errors, setErrors] = useState({});
    const [checking, setChecking] = useState(false);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        confirm_password: "",
        phone: "",
        address: "",

    });

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    function handleValidation(e) {
        e.preventDefault();
        setChecking(true);
        setErrors(validation(values));
    }
    useEffect(() => {
        if (checking && Object.keys(errors).length === 0) {
            fetchData();
        }
    }, [errors]);


    const fetchData = async () => {
        setChecking(false);
        console.log(values);
        await axios
            .post(
                "http://localhost:3010/users",
                {
                    name: values.name,
                    email: values.email,
                    gender: values.gender,
                    password: values.password,
                    phone: values.phone,
                    address: values.address,
                },
            )
            .then((result) => {
                console.log(result.data);
                alert("New user created successfully");
                navigate("/");
            })
            .catch((error) => {
                console.log("User created Axios error");
                console.log(error);
            });
    };

    return (
        <>
            <title>Sign Up</title>
            <div className="login">
                <div className="min-h-screen sm:flex sm:flex-row justify-center">
                    <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col text-white"></div>
                    </div>
                    <div className="flex justify-center self-center z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-center text-gray-800">
                                    Sign Up
                                </h3>
                                <p className="text-gray-500 text-center">
                                    Create an User account.
                                </p>
                            </div>

                            <form onSubmit={handleValidation}>
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                                            Name
                                        </label>
                                        <input
                                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="text"
                                            name="name"
                                            onChange={handleInput}
                                            placeholder="Enter full name"
                                        ></input>
                                        {errors.name && (
                                            <p style={{ color: "red" }}>{errors.name}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                                            Email
                                        </label>
                                        <input
                                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="email"
                                            name="email"
                                            onChange={handleInput}
                                            placeholder="mail@gmail.com"
                                        ></input>
                                        {errors.email && (
                                            <p style={{ color: "red" }}>{errors.email}</p>
                                        )}
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-gray-700">Gender</span>
                                        <div className="mt-2">
                                            <label className="inline-flex items-center">
                                                <input type="radio" className="form-radio" name="gender" onChange={handleInput} value="male" />
                                                <span className="ml-2">Male</span>
                                            </label>
                                            <label className="inline-flex items-center ml-6">
                                                <input type="radio" className="form-radio" name="gender" onChange={handleInput} value="female" />
                                                <span className="ml-2">Female</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                            Password
                                        </label>
                                        <input
                                            className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="password"
                                            name="password"
                                            onChange={handleInput}
                                            placeholder="Enter your password"
                                        ></input>
                                        {errors.password && (
                                            <p style={{ color: "red" }}>{errors.password}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                            Password Confirmation
                                        </label>
                                        <input
                                            className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="password"
                                            name="confirm_password"
                                            placeholder="Enter your password again"
                                            onChange={handleInput}
                                        ></input>
                                        {errors.confirm_password && (
                                            <p style={{ color: "red" }}>{errors.confirm_password}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                        <input type="text" name="phone" id="phone" onChange={handleInput}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="+91-" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                                            Address
                                        </label>
                                        <input
                                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="text"
                                            name="address"
                                            onChange={handleInput}
                                            placeholder="Enter Address"
                                        ></input>  {errors.address && (
                                            <p style={{ color: "red" }}>{errors.address}</p>
                                        )}

                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            onClick={handleValidation}
                                            className="w-full flex justify-center bg-blue-400  hover:bg-orange-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-400"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © 2023-2024_
                                    <a
                                        href="https://codepen.io/uidesignhub"
                                        className="text-green hover:text-green-500 "
                                    >
                                        Hoicko
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
