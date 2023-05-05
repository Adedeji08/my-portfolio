import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useEffect, useState } from 'react';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <div className='fixed w-full shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
          <Image
          src='/../public/assets/Eben-medias.png'
          alt='/'
          width='80'
          height='50'
          />
          <div>
            <ul  style={{  }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
            </ul>
            <div  className='md:hidden' onClick={handleNav}>
             <AiOutlineMenu className='cursor-pointer' size={25} />
          </div>
          </div>
        </div>
        <div  className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>
          <div   className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
               <div>
                <div className='flex w-full items-center justify-between' >
                <Image
                  src='/../public/assets/Eben-medias.png'
                  alt='/'
                  width='40'
                  height='35'
                />
                <div onClick={handleNav}  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose className='cursor-pointer'/>
                </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                  <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary togther!</p>
                </div>
               </div>
               <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
                </ul>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>
                      Let's Connect
                    </p>
                    <div className='flex items-center justify-between py-4 w-full sm:w-[80%]'>
                    <Link href='https://www.linkedin.com/in/oluwadamilola-adedeji-aa9a34167/'  target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                    </Link>
                    <Link href='https://github.com/Adedeji08'  target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub />
                    </div>
                    </Link>
                    <Link href='https://mail.google.com/mail/u/0/#inbox'  target='_blank' rel='noreferrer'>                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                    </Link>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                    </div>
                </div>
               </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar