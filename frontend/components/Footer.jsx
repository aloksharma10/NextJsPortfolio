import Link from 'next/link';
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';


function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500 text-2xl dark:from-slate-200 dark:to-red-500 ">CodeXalok</span>
        </Link>
        <p className="text-sm text-grey dark:text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyright © 2022
          <Link href={'/'} className="text-gray-500  ml-1" rel="noopener noreferrer" target="_blank"> CodeXalok.io</Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={'https://wa.me/917011609262'}>
            <a className="ml-3 text-red-600 text-xl">
              <BsWhatsapp />
            </a>
          </Link>
          <Link href={'https://github.com/aloksharma10'}>
            <a className="ml-3 text-red-600 text-xl">
              <AiOutlineGithub />
            </a>
          </Link>
          <Link href={''}>
            <a className="ml-3 text-red-600 text-xl">
              <AiFillTwitterCircle />
            </a>
          </Link>
          <Link href={'https://www.linkedin.com/in/alok-sharma10'}>
            <a className="ml-3 text-red-600 text-xl">
              <FaLinkedinIn />
            </a>
          </Link>
        </span>
      </div>
    </footer >
  )
}

export default Footer