import React from 'react';
import logo from '../../assets/logo2.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='bg-[#8B5A8C] text-[.7rem] text-[#ffffff] py-10 px-[8%] flex flex-col gap-8'>
            {/* Main Footer Content */}
            <div className='flex flex-wrap justify-between gap-8'>
                {/* Column 1 */}
                <div className='flex flex-col gap-4 min-w-[200px]'>
                    <div className='flex flex-col gap-2'>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>LearnFlow</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Teach on LearnFlow</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Manage Cookie Preferences</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Partners</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Directory</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>About LearnFlow Course</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Contact us</NavLink>
                    </div>
                </div>

                {/* Column 2 */}
                <div className='flex flex-col gap-4 min-w-[200px]'>
                    <div className='flex flex-col gap-2'>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Careers</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Blog</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Tech Blog</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Manage Cookie Preferences</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Directory</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Professional Certificates</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Investors</NavLink>
                    </div>
                </div>

                {/* Column 3 */}
                <div className='flex flex-col gap-4 min-w-[200px]'>
                    <div className='flex flex-col gap-2'>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Terms</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Privacy policy</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Social impact</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Accreditation</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Cookie settings</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Privacy</NavLink>
                        <NavLink to='#' className='text-white hover:text-gray-200 transition-colors'>Discover Careers</NavLink>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pt-8 border-t border-white/20'>
                {/* Left Side - Logo and Support Links */}
                <div className='flex flex-col gap-4'>
                    <div className='flex items-start gap-6'>
                        {/* Logo */}
                        <div className='flex items-center gap-2 w-[50px]'>
                            <img src={logo} alt="logo" />
                        </div>

                        {/* Support Links */}
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
                                </svg>
                                <NavLink to='' className='text-white hover:text-gray-200 transition-colors'>Customer Support</NavLink>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                                </svg>
                                <NavLink to='' className='text-white hover:text-gray-200 transition-colors'>FAQs</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className='flex gap-4 mt-4'>
                        <NavLink to='' className='text-blue-400 hover:text-gray-200 transition-colors'>
                            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                            </svg>
                        </NavLink>
                        <NavLink to='' className='text-blue-300 hover:text-gray-200 transition-colors'>
                            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                            </svg>
                        </NavLink>
                        <NavLink className='text-pink-500 hover:text-gray-200 transition-colors'>
                            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                            </svg>
                        </NavLink>
                        <NavLink to='' className='text-blue-500 hover:text-gray-200 transition-colors'>
                            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                            </svg>
                        </NavLink>
                    </div>
                </div>

                {/* Right Side - App Store Buttons and Rating */}
                <div className='flex flex-col items-start lg:items-end gap-4'>
                    <div className='text-left'>
                        <div className='text-white font-semibold mb-2'>Rated</div>
                        <div className='flex gap-3'>
                            <button className='bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors'>
                                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                                </svg>
                                <div className='text-left'>
                                    <div className='text-xs'>Download on the</div>
                                    <div className='text-sm font-semibold'>App Store</div>
                                </div>
                            </button>
                            <button className='bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors'>
                                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
                                </svg>
                                <div className='text-left'>
                                    <div className='text-xs'>GET IT ON</div>
                                    <div className='text-sm font-semibold'>Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='text-center text-sm text-gray-300 pt-4 border-t border-white/20'>
                © LearnFlow 2024 • Privacy Policy • Terms
            </div>
        </div>
    );
}