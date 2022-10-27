import Head from 'next/head'
import React from 'react'

function Notes() {
  return (
    <> <Head><title>Notes | CodeXalok</title></Head>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <div className="p-6  flex justify-center">
        <div className="w-full dark:bg-slate-900 max-w-sm rounded-lg shadow-lg">
          <div className="flex flex-col items-center p-6 ">
            <img  width={100} className="mb-3 h-24 rounded-full shadow-lg" src="/alok.jpg" alt=""/>
              <h5 className="mb-1 text-xl font-medium  ">C Notes</h5>
              <span className="text-sm  ">Download Notes Here</span>
              <div className="grid mt-4  ">
                <a className="inline-block text-white bg-red-600 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-red-900 text-center" href=""><button>PDF Notes</button></a>
                <a className="inline-block text-white bg-red-600 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-red-900 text-center" href=""><button>Github Codes</button></a>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Notes