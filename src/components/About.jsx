import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function About() {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'bg-white p-14 cursor-pointer' : 'bg-black p-14 cursor-pointer'}>
      <h1 className={theme === 'light' ? 'text-black text-6xl flex items-center justify-center pb-8 font-raleway font-bold border-b-blue-100' : 'text-white text-6xl flex items-center justify-center pb-8 font-raleway font-bold border-b-blue-100'}>
        About Us
      </h1>
      <div className={theme === 'light' ? 'bg-blue-100 text-black px-8 py-12 rounded-lg flex items-center justify-center w-[90%] m-auto' : 'bg-gray-800 text-white px-8 py-12 rounded-lg flex items-center justify-center w-[90%] m-auto'}>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 ">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Company</h2>
            <p className="text-lg mb-6">
              We are passionate about designing and developing custom AI-powered solutions for your business needs.
            </p>
            <button className={theme === 'light' ? 'bg-black hover:bg-black text-white font-bold py-2 px-4 rounded' : 'bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded'}>
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
              alt="Team"
              className="rounded-lg w-[430px] h-[395px] border-solid border-4 border-white hover:border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
