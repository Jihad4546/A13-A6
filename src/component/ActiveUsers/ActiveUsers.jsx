import React from 'react';

const ActiveUsers = () => {
    return (
        <div className=''>
            <div className="flex text-center  justify-between items-center shadow  bg-linear-to-bl from-[#4F39F6] to-[#9514FA] py-12 max-w-full">
                <div className="sm:start  container mx-auto">
                    <div className="stat-figure text-secondary">
                    </div>
                    
                    <div className="stat-value text-white font-extrabold text-3xl md:text-6xl">50K+</div>
                    <div className="stat-title font-medium text-white text-xl">Active Users</div>
                </div>
                    <div className="stat text-center">
                    <div className="stat-figure text-secondary">
                    </div>
                    
                    <div className="stat-value text-white font-extrabold text-3xl md:text-6xl">200+</div>
                    <div className="stat-title font-medium text-white text-xl">Premium Tools</div>
                </div><div className="stat text-center">
                    <div className="stat-figure text-secondary">
                    </div>
                    
                    <div className="stat-value text-white font-extrabold text-3xl md:text-6xl">4.9</div>
                    <div className="stat-title font-medium text-white text-xl">Rating</div>
                </div>
        
            </div>
        </div>
    );
};

export default ActiveUsers;