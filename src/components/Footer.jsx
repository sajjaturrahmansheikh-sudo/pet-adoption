import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/pawprint.png'
import { Button } from '@heroui/react';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='py-10'>
            <div className='container mx-auto px-5'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 mb-5'>
                    <div className='space-y-3'>
                        <h3 className='flex gap-2 text-xl font-bold text-orange-400'> <Image src={logo} alt='logo' height={30} width={30}/> PetNest</h3>
                        <p className='text-gray-300'>Connecting pets with <br /> loving families</p>
                        <div className='flex gap-2 mt-3'>
                            <Button isIconOnly variant='tertiary' ><FaFacebookF /></Button>
                            <Button isIconOnly variant='tertiary' ><FaInstagram  /></Button>
                            <Button isIconOnly variant='tertiary' ><FaTwitter  /></Button>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-medium mb-3 text-xl'>Quick Links</h4>
                        <ul className='space-y-2 text-gray-500 font-medium'>
                            <li>Home</li>
                            <li>All Pets</li>
                            <li>Add Pets</li>
                            <li>My Requests</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-medium mb-3 text-xl'>Support</h4>
                        <ul className='space-y-2 text-gray-500 font-medium'>
                            <li>How it works</li>
                            <li>Addoption Process</li>
                            <li>FAQs</li>
                            <li>Tearms & conditions</li>
                            <li>Privacy & Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-medium mb-3 text-xl'>Contact Us</h4>
                        <ul className='space-y-2 text-gray-500 font-medium'>
                            <li className='flex gap-2 items-center'><FaMapMarkerAlt />125 insert , Dhaka </li>
                            <li className='flex items-center gap-2'><FaPhoneAlt /> +880 1352893208</li>
                            <li className='flex items-center gap-2'><MdEmail />sajjaturrahmanshiekh@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className='text-center font-medium text-gray-400 mt-5'>&copy; 2024 Petnest . All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;