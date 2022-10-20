import { redirect } from 'next/dist/server/api-utils';
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  let a = email.split('@')

  const handleChange = (e) => {
    if (e.target.name == "email") { setEmail(e.target.value) }
    if (e.target.name == "password") { setPassword(e.target.value) }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      identifier: email, password
    }
    let res = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let resData = await res.json()
    if (resData.data == null && resData.jwt == null ) {
      toast.error('Invalid Credential!', {
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
    else if (resData.user.email==email) {
      toast.success('You are logged in!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("token", resData.jwt);
      setTimeout(() => {
        Router.push("http://localhost:3000")
      }, [1000]);
      setEmail('')
      setPassword('')
    }
  }


  return (
    <>
      <Head><title>Login | CodeXalok</title></Head>
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
      <section className=" bg-gray-50 min-h-screen ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-5">
          <div className="px-0 lg:pl-4 flex items-center lg:mx-4 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500 text-3xl font-bold my-5">
            <Link href="/">Welcome to CodeXalok</Link>
          </div>
          <div className="w-full bg-red-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} method="post">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">Your email</label>
                  <input onChange={handleChange} type="email" name="email" value={email} id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black ">Password</label>
                  <input onChange={handleChange} type="password" name="password" value={password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required="" />
                </div>
                <div className="md:flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                    </div>
                    <div className="text-sm">
                      <p className="text-sm font-light text-black">
                        Don’t have an account yet? <a href="#" className="font-medium text-red-600 hover:underline ">Sign up</a>
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-red-600 hover:underline ">Forgot password?</a>
                </div>
                <button type="submit" className="w-full mt-6 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login