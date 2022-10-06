import Link from 'next/link'
import React, { useState } from 'react'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className=" fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            <div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  Stream<span className="text-blue-500">line</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="home" className="cursor-pointer text-blue-600 px-3 py-2 text-md">Home</Link>
                  <Link href="services" className="cursor-pointer hover:text-blue-600 text-black  px-3 py-2">Services</Link>
                  <Link href="work" className="cursor-pointer hover:text-blue-600 text-black px-3 py-2">Projects</Link>
                  <Link href="Clients" className="cursor-pointer hover:text-blue-600 text-black px-3 py-2">Clients</Link>
                  <Link href="contact" className="cursor-pointer hover:text-blue-600 text-black px-3 py-2">Contact</Link>
                </div>
              </div>

              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-semibold text-lg cursor-pointer hidden md:block">
                  Say <span className="text-blue-500">hi</span>
                </h1>
              </div>
            </div>
            <div className="mr-14 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar