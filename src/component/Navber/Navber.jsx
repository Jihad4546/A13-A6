import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
const Navber = ({ productAdd }) => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Products</a></li>
                            <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Features</a></li>
                            <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Pricing</a></li>
                            <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Testimonials</a></li>
                            <li><a className='text-[#101727] font-semibold text-[16px]' href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn text-3xl font-bold bg-linear-to-bl from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-none">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Products</a></li>
                        <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Features</a></li>
                        <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Pricing</a></li>
                        <li><a className='text-[#101727] font-semibold text-[16px]' href="#">Testimonials</a></li>
                        <li><a className='text-[#101727] font-semibold text-[16px]' href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <FaCartArrowDown />
                    <h1 className={`
                    -mt-4 px-1 -ml-2 rounded 
                     ${productAdd.length > 0 ? "bg-red-500 text-white" : ""}
                            `}>
                        {productAdd.length > 0 && productAdd.length}
                    </h1>
                    <a className="btn border-none">Login</a>
                    <a className="btn  bg-linear-to-bl from-[#4F39F6] to-[#9514FA] rounded-2xl text-white text-[16px]">Get Started</a>
                </div>
            </div>
        </>

    );
};

export default Navber;