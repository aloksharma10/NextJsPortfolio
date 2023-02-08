import Head from 'next/head'
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiFillTwitterCircle } from 'react-icons/ai';
import Link from 'next/link';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home | Welcome to CodeXalok</title>
      </Head>
      <div className="flex dark:border-b border-gray-500 bg-white dark:bg-slate-800 h-96 mx-auto container  ">
        <div className=" flex items-center text-center lg:text-left px-8 lg:px-8 lg:w-3/5">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 md:text-4xl">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500 dark:from-slate-200 dark:to-red-500 ">CodeXalok</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ea vel et rerum libero in iste dolores ut doloribus. Mollitia vitae nisi magnam, reprehenderit quo ab, pariatur animi provident reiciendis repudiandae tenetur sequi dolore illo sunt soluta praesentium laudantium ullam sed velit eos natus odit aliquid, quam molestias. Provident, in.</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <button className="px-3 py-2 lg:px-7 lg:py-3 bg-red-500 text-white text-sm font-bold rounded-full hover:bg-red-400 duration-300">Hire Me</button>

              <button className="px-3 py-2 mx-4 lg:px-6 lg:py-3 bg-gray-300 text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-400 duration-300">Download Resume</button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative" style={{ clipPath: "polygon(12% 0px, 100% 0%, 100% 100%, 0px 100%)" }}>
          <img src={'/hero.jpg'} alt='' />
        </div>
      </div>
      {/* About us */}
      <div className="mx-auto lg:px-5 pt-10 container">
        <div className="md:flex">
          <div className="p-5">
            <span className="font-bold text-red-700 dark:text-red-600 text-xl">ABOUT US</span>
            <h2 className="text-5xl font-semibold">
              Better design,<br />Better experience
            </h2>
            <p className="mt-2 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum
              sit amet.
            </p>
          </div>
          <div className="p-5 w-full md:w-3/4">
            <h3 className="text-3xl font-semibold">Connect With Us</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui ligula, malesuada vel convallis in, tincidunt ut mi.
              Vestibulum sit amet urna placerat, tempor soloa demanium testi lor
              Aliq lorem vitae semper tempor.
            </p>
            <div className='social text-right pt-3 pr-3'>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <Link href={'https://wa.me/917011609262'}>
                  <a className="ml-3 text-red-500 text-xl">
                    <BsWhatsapp />
                  </a>
                </Link>
                <Link href={'https://github.com/aloksharma10'}>
                  <a className="ml-3 text-red-500 text-xl">
                    <AiOutlineGithub />
                  </a>
                </Link>
                <Link href={''}>
                  <a className="ml-3 text-red-500 text-xl">
                    <AiFillTwitterCircle />
                  </a>
                </Link>
                <Link href={'https://www.linkedin.com/in/alok-sharma10'}>
                  <a className="ml-3 text-red-500 text-xl">
                    <FaLinkedinIn />
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className='container mx-auto'>
        <div className="p-5 pb-0 text-center">
          <span className="font-bold text-red-700 dark:text-red-600 text-xl">Recent Post</span>
          <h2 className="text-4xl md:text-5xl font-semibold">
            From The Projects
          </h2>
          <p className="md:w-2/4 mb-5 mx-auto text-center text-base text-gray-600 dark:text-gray-400 leading-7 font-semibold">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="flex flex-wrap justify-center mx-6 ">

          {props.fetchData.data.map((items) => {
            console.log(items.attributes.Image.data.attributes.formats.large.url)
            return (<div key={items.id} className="lg:p-4 md:w-1/3 flex justify-center mb-3 ">
              <div className="max-w-sm rounded-2xl overflow-hidden dark:bg-slate-900 dark:shadow-slate-600 shadow-lg">
                <span className='border-box inline-block overflow-hidden'>
                  {/* <img src={`https://aqueous-crag-08640.herokuapp.com${items.attributes.Image.data.attributes.formats.medium.url}`} alt='' className='lg:h-56' /> */}
                  <img src={`/hero.jpg`} alt='' className='lg:h-56' />
                </span>
                <span className='border-box inline-block overflow-hidden ' >
                </span>
                <div className="px-6 py-4 lg:h-52">
                  <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">Github Project</span>
                  <div className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">{items.attributes.Title}
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 text-base">{items.attributes.Description}</p>
                </div>
                <div className="px-6 pb-2 text-right ">
                  <span className="text-2xl inline-block rounded-full text-red-500 p-2 font-semibold cursor-pointer"><Link href={items.attributes.github}><AiOutlineGithub /></Link></span>
                </div>
              </div>
            </div>)
          })}
        </div >
      </div>

      {/* Resume */}
      <section id="education" className="pt-10 z-5 relative">
        <div className="lg:max-w-screen-lg w-full mx-auto px-4 ">
          <div className="pb-16">
            <div className="flex flex-wrap">
              <div className="text-center mx-auto ">
                <span className="font-bold text-red-700 dark:text-red-600 text-xl  ">
                  Education &amp; Experience
                </span>
                <h2 className="text-5xl font-bold mb-5">My Resume</h2>
                <p className="md:w-2/3 mb-5 mx-auto text-center text-base text-gray-600 dark:text-gray-400 leading-7 font-semibold">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
            <div className='px-4'>
              <div className="relative pt-12">
                <span className="w-px h-full md:left-2/4 bg-red-500 block top-0 absolute"></span>
                <div className="flex flex-wrap -mx-4">
                  <div className="px-4 md:w-2/4">
                    <div className="md:text-right md:px-0 md:mr-5 px-8 pb-12 w-full ml-auto relative">
                      <span className="bg-red-100 -left-2 border-red-400 md:-right-6 md:left-auto w-4 h-4 top-1 border-4 rounded-full absolute"></span>
                      <h3 className="font-semibold leading-7 text-sm">
                        UI/UX Designer
                      </h3>
                      <p className="font-semibold text-sm leading-7 mb-3">
                        Google INC | New York
                      </p>
                      <span className="px-4 py-2 bg-red-500 text-white rounded-full justify-center font-semibold inline-flex text-center mb-5">
                        2022 - 2023
                      </span>
                      <p className="text-sm m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusm tempor incididunt ut labore et dolore magna
                        aliqua Loremipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="px-4 md:w-2/4"></div>
                  <div className="px-4 md:w-2/4"></div>
                  <div className="px-4 md:w-2/4">
                    <div className="md:text-left md:px-0 md:mr-5 px-8 pb-12 w-full ml-auto relative">
                      <span className="bg-red-100 -left-2 border-red-400 md:-left-6 md:right-auto w-4 h-4 top-1 border-4 rounded-full absolute"></span>
                      <h3 className="font-semibold leading-7 text-sm">
                        UI/UX Designer
                      </h3>
                      <p className="font-semibold text-sm leading-7 mb-3">
                        Google INC | New York
                      </p>
                      <span className="px-4  py-2 justify-center rounded-full font-semibold bg-red-500  text-white inline-flex text-center mb-5">
                        2022 - 2023
                      </span>
                      <p className="text-sm m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusm tempor incididunt ut labore et dolore magna
                        aliqua Loremipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex-wrap md:block text-center md:p-10 p-5 text-2xl md:text-5xl leading-11 font-semibold">Want to work together and
        <div className=''>create amazing products with me?</div>
      </div>
      <div className='px-5 md:flex md:justify-center '>
        <input type="email" className='duration-150 text-black bg-gray-200 text-lg focus:outline-none w-52 md:w-60 text-center py-3 px-8 focus:border-red-500 border rounded-full mb-5 md:mb-0' placeholder='Enter Your Email' />
        <button className='font-semibold px-4 py-5 rounded-full bg-red-500 hover:bg-red-400 duration-300 text-sm text-white cursor-pointer'>Get a Quote</button>
      </div>
      <div>
        <section className="text-gray-600 dark:text-gray-200 body-font">
          <div className="container px-5 py-14 mx-auto">
            <h3 className='text-center py-5 font-semibold text-gray-800 dark:text-white text-4xl'>Testimonials</h3>
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center border rounded-lg p-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy  cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard..</p>
              <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 dark:text-gray-200 font-medium title-font tracking-wider text-sm">HIMANSHU GOYAL</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// export async function getServerSideProps(context) {
//   if (typeof window !== 'undefined') {
//     var token = localStorage.getItem('token');
//     console.log(token)
//   }
//   let d1 = await fetch('http://localhost:1337/api/projects?populate=*')
//   let fetchData = await d1.json()
//   return {
//     props: { fetchData },
//   }
// }