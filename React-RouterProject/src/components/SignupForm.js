import React from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [accountType,SetAccountType] = useState("student")

    const [formData,setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
    });

    const [showPassword,setShowPassword] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);
    
    function changeHandler(event) {
        setFormData( (prevData) => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();

        if(formData.password !== formData.confirmPassword)
        {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");

        const finalData = {
            ...formData,
            accountType
        }

        navigate("/dashboard");
    }

    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-2 rounded-full max-w-max">
                <button className={`${accountType === 'student' ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200` }
                    onClick={() => SetAccountType("student")}>
                        Student
                </button>
                <button className={`${accountType === 'instructor' ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200` }
                    onClick={() => SetAccountType("instructor")}>
                        Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4 mt-[8px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                        <input type="text" value={formData.firstName} name="firstName" onChange={changeHandler} placeholder="Enter First Name" required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]" ></input>
                    </label>
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                        <input type="text" value={formData.lastName} name="lastName" onChange={changeHandler} placeholder="Enter Last Name" required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]" ></input>
                    </label>
                </div>

                <div className="mt-[8px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
                        <input type="email" value={formData.email} name="email" onChange={changeHandler} placeholder="Enter email address" required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]" ></input>
                    </label>
                </div>

                

                <div className="flex gap-x-4 mt-[8px]">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-200">*</sup></p>
                        <input type={showPassword ? ("text") : "password"} value={formData.password} name="password" onChange={changeHandler} placeholder="Enter password" required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"></input>
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer" >
                            {
                                showPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                            }
                        </span>
                    </label>
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-200">*</sup></p>
                        <input type={showPassword2 ? ("text") : "password"} value={formData.confirmPassword} name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password" required
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]" ></input>
                        <span onClick={() => setShowPassword2((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer" >
                            {
                                showPassword2 ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                            }
                        </span>
                    </label>
                </div>
            
                <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Create Account</button>
                
            </form>
        </div>
    )
}

export default SignupForm;