import React, { useState } from 'react'
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [companyName, setCompanyName] = useState('')
  const handleChange = (e) => {
    if (e.target.name == "name") { setName(e.target.value) }
    if (e.target.name == "email") { setEmail(e.target.value) }
    if (e.target.name == "phone") { setPhone(e.target.value) }
    if (e.target.name == "message") { setMessage(e.target.value) }
    if (e.target.name == "companyName") { setCompanyName(e.target.value) }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length > 3 && email.length > 3 && phone.length > 9 && message.length > 5) {
      toast.success(`Thank you for contacting us, We'll reach you soon!`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setCompanyName('')
    }
    else {
      toast.error('Please enter the valid detail', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
      <Head><title>Contact | CodeXalok</title></Head>
      <div className=' lg:flex p-8 justify-between'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
          <form onSubmit={handleSubmit} >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600"></label>
                  <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full md:my-1 bg-gray-200 bg-opacity-80 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-black py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" placeholder='Name' />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="companyNane" className="leading-7 text-sm text-gray-600"></label>
                  <input onChange={handleChange} value={companyName} type="text" id="companyName" name="companyName" className="w-full md:my-1 bg-gray-200 bg-opacity-80 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-black py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out " placeholder='Company Name' />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600"></label>
                  <input required onChange={handleChange} value={email} type="email" id="name" name="email" className="w-full md:my-1 bg-gray-200 bg-opacity-80 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-black py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600"></label>
                  <input required onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="w-full md:my-1 bg-gray-200 bg-opacity-80 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-black py-1 md:py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" placeholder='Phone Number' />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600"></label>
                  <textarea required onChange={handleChange} value={message} id="message" name="message" className="w-full bg-gray-200 bg-opacity-80 my-1 rounded-lg border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Message'></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type='submit' className="flex mx-auto text-white bg-red-500 border-0 py-3 md:px-4 px-4 rounded-full focus:outline-none hover:bg-red-600 text-sm md:text-base">Connect</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Contact