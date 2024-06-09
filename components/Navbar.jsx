'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    {/*State for Mobile Navbar*/}
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [navColor, setNavColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleMobileNav = () => {
        setShowMobileNav(!showMobileNav)
    }

    useEffect(() => {
        const changeNavColor = () => {
            if(window.scrollY >= 90) {
                setNavColor('white');
                setTextColor('black');
            } else {
                setNavColor('transparent');
                setTextColor('white');
            }
        }
        window.addEventListener('scroll', changeNavColor);
    }, []);

{/*Co Pilot Reccomendations: style={{color: ${textColor}}}*/}
    return (
        <div style={{backgroundColor: navColor}} className='fixed left-0 top 0 w-full z-10 ease-in duration-300'>
            {/*Desktop Navbar elements*/}   
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-white'>
                <Link href='/'>
                    <h1 style={{color: textColor}} className='font-bold text-3xl border p-3'>SFR</h1>
                </Link>
                <ul style={{color: textColor}} className='hidden sm:flex'>
                    <li className='p-3'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-3'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='p-3'>
                        <Link href='/testimonials'>Testimonials</Link>
                    </li>
                    <li className='p-3'>
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                </ul>
            
                {/* NavBar For Mobile and handling*/}
                <div onClick={handleMobileNav} className='block sm:hidden z-[10]'> 
                    {showMobileNav 
                    ? <AiOutlineClose size={30} style={{color: textColor}} /> 
                    : <AiOutlineMenu size={30} style={{color: textColor}} /> 
                    }
                </div>

                {/*Mobile Navbar Elements*/}
                <div className={
                    showMobileNav 
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                }>
                    <ul>
                        <li className='p-3 text-4xl hover:text-blue-600'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-3 text-4xl hover:text-blue-600'>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='p-3 text-4xl hover:text-blue-600'>
                            <Link href='/testimonials'>Testimonials</Link>
                        </li>
                        <li className='p-3 text-4xl hover:text-blue-600'>
                            <Link href='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;