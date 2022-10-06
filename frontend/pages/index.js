import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div class="flex bg-white h-96 container mx-auto">
      <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
            Welcome to
            <span class="text-yellow-600"> CodeXalok</span>
          </h2>
          <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ea vel et rerum libero in iste dolores ut doloribus. Mollitia vitae nisi magnam, reprehenderit quo ab, pariatur animi provident reiciendis repudiandae tenetur sequi dolore illo sunt soluta praesentium laudantium ullam sed velit eos natus odit aliquid, quam molestias. Provident, in.</p>
          <div class="flex justify-center lg:justify-start mt-6">
            <button class="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:text-white hover:bg-gray-800">Free Courses</button>
            <button class="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">Explore Blog</button>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2">
        <div class="h-full overflow-y-auto" style={{ backgroundImage: `url("/hero.jpg")` }}>
          <div class="h-full bg-black opacity-25">
          </div>
        </div>
      </div>
    </div>
  )
}
