import React from 'react'
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';
import Head from 'next/head';

function Contact() {
  return (
    <>
    <Head><title>Contact | CodeXalok</title></Head>
    <div className='bg-gray-50 lg:flex p-8 justify-between'>
      <div className='text-center m-auto'>
        <div className='text-2xl md:text-4xl font-bold'>Feel free to contact us</div>
        <div className='py-3'>
          <img src="/contact.jpg" width={150} className="mx-auto my-5 rounded-full" alt="" />
        </div>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mx-auto">
          <Link href={'https://wa.me/917011609262'}>
            <a className="ml-3 text-red-600 text-2xl">
              <BsWhatsapp />
            </a>
          </Link>
          <Link href={'https://github.com/aloksharma10'}>
            <a className="ml-3 text-red-600 text-2xl">
              <AiOutlineGithub />
            </a>
          </Link>
          <Link href={''}>
            <a className="ml-3 text-red-600 text-2xl">
              <AiFillTwitterCircle />
            </a>
          </Link>
          <Link href={'https://www.linkedin.com/in/alok-sharma10'}>
            <a className="ml-3 text-red-600 text-2xl">
              <FaLinkedinIn />
            </a>
          </Link>
        </span>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex-wrap">
          <div className="text-center">
            <span className="font-semibold text-lg block mb-2  ">
              Contact With Me
            </span>
            <h2 className="md:text-5xl text-4xl font-bold mb-5">Have a Project in Mind?</h2>
          </div>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600"></label>
              <input type="text" id="name" name="name" className="w-full md:my-1 bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" placeholder='Name' />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600"></label>
              <input type="text" id="email" name="email" className="w-full md:my-1 bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out " placeholder='Company Name' />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600"></label>
              <input type="email" id="name" name="name" className="w-full md:my-1 bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600"></label>
              <input type="email" id="email" name="email" className="w-full md:my-1 bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" placeholder='Phone Number' />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600"></label>
              <textarea id="message" name="message" className="w-full bg-gray-100 my-1 bg-opacity-50 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Message'></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-red-500 border-0 py-3 md:px-4 px-4 rounded-full focus:outline-none hover:bg-red-600 text-sm md:text-base">Connect</button>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Contact