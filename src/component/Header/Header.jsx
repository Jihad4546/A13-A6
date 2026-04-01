import React from 'react';
import HeaderImage from "../../assets/banner.png"
const Header = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={HeaderImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <p className='bg-[#E1E7FF] py-2 px-2 w-75 text-center rounded-2xl '>
                            <span className=' bg-linear-to-bl from-[#4F39F6] to-[#9514FA] w-3 h-3 rounded-full inline-block mr-3'></span>
                            <span className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-none text-[16px] font-semiboldZ'>New: AI-Powered Tools Available</span></p>
                        <h1 className="text-3xl sm:text-6xl font-bold">Supercharge Your <br></br> Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity<br></br>
                            software—all in one place. Start creating faster today.<br></br>
                            Explore Products
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;