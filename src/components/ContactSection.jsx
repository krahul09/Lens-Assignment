import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function ContactSection() {

    const { theme } = useContext(ThemeContext);

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const cardColor = theme === 'light' ? 'bg-blue-500' : 'bg-blue-800';
  const buttonColor = theme === 'light' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-800 hover:bg-gray-900';

  const inputTextColor = theme === 'light' ? 'text-black' : 'text-white';

  const imageSrc =
    theme === 'light'
      ? 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75'
      : 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMap.1a735ef7.png&w=750&q=75';


  return (
    <div className={`${bgColor} py-12`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className={`text-center md:text-left mb-8 md:mb-0 ${textColor}`}>
          <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
          <p className="text-gray-400 mb-6">Send your enquiry now!</p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter email address"
              className={`py-2 px-4 rounded-l-md focus:outline-none ${inputTextColor} ${bgColor}`}
            />
            <button className={`${buttonColor} text-white py-2 px-4 rounded-r-md`}>
              Request Demo
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={imageSrc}
            alt="World Map"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
