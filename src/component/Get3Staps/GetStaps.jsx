import React from 'react';
import cardImage from "../../assets/user.png"
import cardImagerocket from "../../assets/rocket.png"
import cardImagepackage from "../../assets/package.png"
const GetStaps = () => {
    return (
        <>
            <div className='container mx-auto mb-12'>
                <div className='text-center'>
                <h2 className='text-4xl font-extrabold mt-8'>Get Started in 3 Steps</h2>
                <p className='text-lg text-gray-400 mb-10'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex gap-4'>
                <div className='shadow-2xl text-center p-10'>
                    <h1 className='bg-[#4F39F6] text-white h-10 w-10 rounded-full ml-auto flex justify-center items-center'>01</h1>
                    <img className='mx-auto' src={cardImage} alt="" />
                    <h2 className='text-lg '>Create Account</h2>
                    <p className='text-lg text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='shadow-2xl text-center p-10'>
                   <h1 className='bg-[#4F39F6] text-white h-10 w-10 rounded-full ml-auto flex justify-center items-center'>01</h1>
                    <img className='mx-auto' src={cardImagepackage} alt="" />
                    <h2 className='text-lg '>Create Account</h2>
                    <p className='text-lg text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='shadow-2xl text-center p-10'>
                   <h1 className='bg-[#4F39F6] text-white h-10 w-10 rounded-full ml-auto flex justify-center items-center'>01</h1>
                    <img className='mx-auto' src={cardImagerocket} alt="" />
                    <h2 className='text-lg '>Create Account</h2>
                    <p className='text-lg text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
            </div>
        </>

    );
};

export default GetStaps;