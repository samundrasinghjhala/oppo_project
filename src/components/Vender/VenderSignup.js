import axios from "axios";
import { useEffect, useState } from "react";
import validation from "./VanderSignupValidation";
import { useNavigate } from "react-router-dom";


const VenderSignup = () => {

    const [errors, setErrors] = useState({});
    const [checking, setChecking] = useState(false);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        gstNo: "",
        company_name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "",

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
                "http://localhost:3010/vendors",
                {
                    gstNo: values.gstNo,
                    company_name: values.company_name,
                    email: values.email,
                    password: values.password,
                    phone: values.phone,
                    address: values.address,
                    role: values.role,
                },
            )
            .then((result) => {
                console.log(result.data);
                alert("Created successfully");
                navigate("/VenderLogin");
            })
            .catch((error) => {
                console.log("User Not Created!");
                console.log(error);
            });
    };
    return (
        <>
            <div className='max-w-md mx-auto'>
                <h2 className='mb-4 text-2xl font-bold text-center'>Create an Account</h2>
                <form action='' onSubmit={handleValidation} className='border p-7'>
                    <div className='mb-4'>
                        <label className='block mb-1 font-bold' >GST No.</label>
                        <input type='text'
                            name="gstNo"
                            className='w-full p-2 border border-gray-300 rounded'
                            onChange={handleInput} placeholder="Enter GST Number" />{errors.gstNo && (
                                <p style={{ color: "red" }}>{errors.gstNo}</p>
                            )}
                    </div>

                    <div className='mb-4'>
                        <label className='block mb-1 font-bold'>Compnay Name</label>
                        <input type='text'
                            name="company_name"
                            className='w-full p-2 border border-gray-300 rounded'
                            onChange={handleInput} /> {errors.companyName && (
                                <p style={{ color: "red" }}>{errors.companyName}</p>
                            )}
                    </div>

                    <div className='mb-4'>
                        <label className='block mb-1 font-bold'>Email</label>
                        <input type='email'
                            name="email"
                            className='w-full p-2 border border-gray-300 rounded'
                            onChange={handleInput} />
                        {errors.email && (
                            <p style={{ color: "red" }}>{errors.email}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label className='block mb-1 font-bold'>Password</label>
                        <input type='password'
                            name="password"
                            className='w-full p-2 border border-gray-300 rounded'
                            onChange={handleInput} />  {errors.password && (
                                <p style={{ color: "red" }}>{errors.password}</p>
                            )}
                    </div>

                    <div className='mb-4'>
                        <label className='block mb-1 font-bold'>Phone No.</label>
                        <input type='tel'
                            name="phone"
                            className='w-full p-2 border border-gray-300 rounded'
                            onChange={handleInput} />
                        {errors.phone && (
                            <p style={{ color: "red" }}>{errors.phone}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label className='block mb-1 font-bold' >Address</label>
                        <input type='text'
                            name="address"
                            className='w-full p-2 border border-gray-300 rounded'
                            onChange={handleInput} />
                        {errors.address && (
                            <p style={{ color: "red" }}>{errors.address}</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <span className='block mb-1 font-bold'>Role</span>

                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="role" onChange={handleInput} value="vendor" />
                            <span className="ml-2">Vender</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input type="radio" className="form-radio" name="role" onChange={handleInput} value="dealer" />
                            <span className="ml-2">Dealer</span>
                        </label>

                    </div><br />
                    <div className='flex justify-center'>
                        <button type='submit' onClick={handleValidation} className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Sign Up</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default VenderSignup;