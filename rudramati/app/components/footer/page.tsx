import React from "react";

function page() {
  return (
    <footer className=" body-font bg-black text-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              About Us
            </h2>
            <div className=" ">
              Rotaractor belong from age 18-30yrs for Rotary Movement,Social
              Service, Professional Development and Fellowship under Rotaract
              District 3292 Nepal& Bhutan
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Services
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Club Service</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Community Service
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Professional Service
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  International Service
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Contact Us
            </h2>
            <div className="flex flex-col">
              Phone Number:
              <span> +977-9864404745 (President)</span>
              <span>+977-9767277790 (Secretary)</span>
            </div>
            <div className="  ">
             Email:{' '}
              <span>sandeeprtr3292@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222222]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="/whitelogo.png" width={200} height={200} />
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 Rudramati —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-white ml-1"
              target="_blank"
            >
              @sandeep
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default page;
