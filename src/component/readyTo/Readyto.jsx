import React from 'react';

const Readyto = () => {
    return (
        <div className='bg-linear-to-bl from-[#4F39F6] to-[#9514FA] mt-10'>
            <div className="hero container mx-auto text-white">
                <div className="hero-content text-center">
                    <div className="py-12">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Ready to Transform Your Workflow?</h1>
                        <p className="py-6">
                            Join thousands of professionals who are already using Digitools to work smarter.
                            <br></br>Start your free trial today.
                        </p>
                        <button className="btn btn-primary mx-3">Get Started</button>
                        <button className="btn btn-outline btn-primary border-white hover:border-[#4f39f6] text-white">Primary</button>
                        <p className='mt-3'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Readyto;