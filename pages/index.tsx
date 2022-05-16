import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center w-full max-w-screen-xl py-64 mx-auto bg-black" />
      <div className="bg-blue-50">
        <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl tracking-tight text-gray-900 md:text-4xl">
              Service, Safety and On-time Delivery
            </h2>
            <p>
              We are a dynamic transportation provider committed to meeting your
              needs
            </p>
          </div>

          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-sm shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-sm hover:bg-blue-700"
              >
                Customer Login
              </a>
            </div>
            <div className="inline-flex ml-8 rounded-sm shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-blue-600 bg-white border border-transparent rounded-sm hover:bg-blue-50"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
