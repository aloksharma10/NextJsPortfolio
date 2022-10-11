import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Notes() {
  return (
    <> <Head><title>Notes | CodeXalok</title></Head>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <div className="p-6 flex justify-center">
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="flex flex-col items-center p-6 ">
            <Image  width={100} height={100} className="mb-3  rounded-full shadow-lg" src="/alok.jpg" alt=""/>
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">C Notes</h5>
              <span className="text-sm text-gray-500 ">Download Notes Here</span>
              <div className="grid  mt-4  ">
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