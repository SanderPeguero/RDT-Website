import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify"
const LogIn = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history = useNavigate();

    const LogInHandler = async (e) => {
        e.preventDefault();

        if ([email, password].includes("")) {


            {
                theme: "dark"
            }


            return
        } else {
            if (password.length < 3) {




                return
            } else {
               
                history('/Admin');
                // if(email=="admin" && password=="admin")
                // {
                //     localStorage.setItem('D', "email");
                // }

            }
        }
    }
    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>



                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form onSubmit={LogInHandler}>
                        <div className="px-5 py-7">

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            />

                            <button

                                to={"/Home"}
                                onClick={LogInHandler}
                                type="submit"
                                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">Login</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 inline-block"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>

                        </div>
                    </form>

                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center">
                                {/* Don't have an account? <to="/signln" className="text-sky-600 font-medium hover:underline transition-all">Sign In  </Link> */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default LogIn;