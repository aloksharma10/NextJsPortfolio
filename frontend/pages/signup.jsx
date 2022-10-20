import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  let a = email.split('@')
  console.log()

  const handleChange = (e) => {
    if (e.target.name == "name") { setName(e.target.value) }
    if (e.target.name == "email") { setEmail(e.target.value) }
    if (e.target.name == "password") { setPassword(e.target.value) }
    if (e.target.name == "cpassword") { setCpassword(e.target.value) }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password != cpassword) {
      toast.error('Password and Confirm Password must be same!', {
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
    else if (password.length < 6) {
      toast.error('Password must be 6 characters', {
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
    else {
      let data = {
        Name: name, username: a[0], email, password
      }
      let res = await fetch("http://localhost:1337/api/users", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
          Authorization: '45b0d659dc449d7ec17a1f3a9de4c64a25b316d36b105123c208acc9bf49cd363ecc42c41367a2d49bf2ed9ca19d415ce8f21bec008db3ec4fee48c728c265943b8a8a2e6aca978b648a2de07ffa68aa29ea1a86ef9ca84aa4e73674e7f56a168a99fc0536b9fb28ea6bf4065e787e58252298d53fb58f2fbbe88d397382121a'
        },
        body: JSON.stringify(data)
      })
      let resData = await res.json()
      console.log(resData)
      if (resData.email == email || resData.data != null) {
        toast.success('Your account has been created successfully.', {
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
      else {
        toast.error(resData.error.message, {
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
      setName('')
      setEmail('')
      setPassword('')
      setCpassword('')
    }

  }
  return (
    <>
      <Head><title>Signup | CodeXalok</title></Head>
      <div>
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
      </div>
      <section className="bg-gray-50 min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-5">
          <div className="px-0 lg:pl-4 flex items-center lg:mx-4 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500 text-3xl font-bold my-5">
            <Link href="/">Welcome to CodeXalok</Link>
          </div>
          <div className="w-full bg-red-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                Sign Up | CodeXalok
              </h1>
              <form onSubmit={handleSubmit} action="/" method="post">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-black ">Name</label>
                  <input onChange={handleChange} value={name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="Your Name" required="" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">Email</label>
                  <input onChange={handleChange} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black ">Password</label>
                  <input onChange={handleChange} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required="" />
                </div>
                <div>
                  <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-black ">Confirm Password</label>
                  <input onChange={handleChange} value={cpassword} type="password" name="cpassword" id="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required="" />
                </div>
                <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup