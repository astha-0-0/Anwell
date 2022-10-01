import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function Login() {
    var navigate = useNavigate();
    const handleSubmit = () => {
        var role="admin";
        // eslint-disable-next-line default-case
        switch(role){
            case "admin":
                navigate("/admin");
                break;
            case "caretaker":
                navigate("/caretaker");
                break;
            default:
                navigate("/login");
        }
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-600/40 ring ring-2 bg-lime-200 lg:max-w-xl">
             
                    <div className="mb-2">
                        <label
                            for="text"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide font-bold text-black hover:text-white transition-colors duration-200 transform bg-lime-200 rounded-md hover:bg-slate-600 focus:outline-none " onClick={() => handleSubmit()}>
                            Login
                        </button>
                    </div>

            </div>
        </div>
    );
}