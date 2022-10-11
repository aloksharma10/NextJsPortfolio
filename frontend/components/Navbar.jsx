import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState("hidden")
  const toggleNav = () => {
    if (nav == "hidden") {
      setNav("block")
    }
    else {
      setNav("hidden")
    }
  }
  return (
    <nav className="w-full z-10 sticky bg-white top-0 border-b border-grey-light shadow-md">
      <div className="w-full flex flex-wrap items-center lg:justify-between mt-0 py-4">
        <div className="px-0 lg:pl-4 flex items-center lg:mx-4 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500 text-xl font-bold mx-7">
          <Link href="/">CodeXalok</Link>
        </div>
        <button onClick={() => toggleNav()} className="md:hidden text-white bg-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 absolute right-3 md:right-12">Menu
          {nav == "hidden" ? <AiFillCaretDown /> : <AiFillCaretUp />}
        </button>
        <div className="w-full flex-grow-5 md:flex md:flex-1 md:content-center md:justify-end md:w-auto h-0 md:h-auto overflow-hidden mt-2 md:mt-0 z-20 transition-all">
          <ul className="flex items-center md:flex-row">
            <li className="mx-2 my-2 text-black hover:border-b-2 hover:border-red-600">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2 my-2 text-black hover:border-b-2 hover:border-red-600">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-2 my-2 text-black hover:border-b-2 hover:border-red-600">
              <Link href="/notes">Notes</Link>
            </li>
            <li className="mx-2 my-2 text-black hover:border-b-2 hover:border-red-600">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="text-center my-2 pr-4 pl-2">
            <Link href={"/login"}>
              <button className="text-white bg-red-600 hover:bg-red-400 duration-300 focus:ring-2 focus:ring-red-600 font-medium rounded-lg text-sm px-3 py-2 text-center  items-center mx-1">Login</button>
            </Link>
            <Link href={"/signup"}>
              <button className="text-white bg-red-600 hover:bg-red-400 duration-300 focus:ring-2 focus:ring-red-600 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Signup</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`bg-red-100 text-center py-3 shadow-lg absolute w-full ${nav} md:hidden`}>
        <ul>
          <div className="text-center my-2 pr-4 pl-2">
            <Link href={"/login"}>
              <button className="text-white bg-red-600 hover:bg-red-400 duration-300 focus:ring-2 focus:ring-red-600 font-medium rounded-lg text-sm px-3 py-2 text-center  items-center mx-1">Login</button>
            </Link>
            <Link href={"/signup"}>
              <button className="text-white bg-red-600 hover:bg-red-400 duration-300 focus:ring-2 focus:ring-red-600 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Signup</button>
            </Link>
          </div>
          <li className="pt-4 text-red-600 font-bold ">
            <Link href="/">Home</Link>
          </li>
          <li className="pt-4 text-red-600 font-bold"><Link href="/blog/">Blog</Link>
          </li>
          <li className="pt-4 text-red-600 font-bold"><Link href="/notes/">Notes</Link>
          </li>
          <li className="pt-4 text-red-600 font-bold"><Link href="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar