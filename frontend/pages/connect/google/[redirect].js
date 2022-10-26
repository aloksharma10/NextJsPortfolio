import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Redirect() {
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            console.log(router.query.access_token)
            let res = await fetch(`http://localhost:1337/api/auth/google/callback?access_token=${router.query.access_token ? router.query.access_token : "0"}`)
            let rData = await res.json()
            if (rData.jwt) {
                localStorage.setItem('token', rData.jwt);
                localStorage.setItem('user', rData.user.username);
                setTimeout(() => (router.push('/'), 1500));
            }
            else {
                console.log("internal server error ")
            }
        }
        fetchData()
    }, [router]);
    return (
        <section class="text-gray-600 body-font min-h-screen">
            <div class="container px-5 py-24 mx-auto">
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
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                    <div class="leading-relaxed text-lg mb-10">
                        <h2 className="text-3xl font-semibold mb-5 text-gray-800 md:text-4xl">
                            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500">CodeXalok</span>
                        </h2>
                        <font  style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>Thank you for joining with us!</font>
                            <div style={{ verticalAlign: "inherit" }}>We are fetching your detail please wait...<img src='/assests/spinner.gif' className='w-10 mx-auto' alt=''/></div>
                        </font>
                    </div>
                    <span class="inline-block h-1 w-10 rounded bg-red-500 my-2"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>CodeXalok</font>
                        </font>
                    </h2>
                </div>
            </div>
        </section>)
}

export default Redirect

