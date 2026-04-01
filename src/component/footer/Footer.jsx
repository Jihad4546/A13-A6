import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto'>
                <footer className="footer sm:footer-horizontal  text-white p-10">
                    <div>
                        <h2 className=''>DigiTools</h2>
                        <p>Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter <br></br>with our suite of powerful tools.</p>
                    </div>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a>

                                <FiYoutube className='text-3xl' />
                            </a>
                            <a>

                                <CiTwitter className='text-3xl border-white' />
                            </a>
                        </div>
                    </nav>
                </footer><hr className="bg-white w-full h-[1px] border-none" />
                <footer className="footer sm:footer-horizontal footer-center  text-white p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;