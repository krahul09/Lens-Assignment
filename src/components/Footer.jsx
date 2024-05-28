import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import aaplicationImg from '../assets/application.png'
import linkedInImg from '../assets/linkedin.png'
import githubImg from '../assets/github.png'

function Footer() {

    const { theme } = useContext(ThemeContext);

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const linkColor = theme === 'light' ? 'text-gray-400 hover:text-black' : 'text-gray-400 hover:text-white';
  const logoSrc = theme === 'light' ? 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75' : 'https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75';


  return (
    <footer className={`${bgColor} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <img
              src={logoSrc}
              alt="LENS"
              className="h-8 mr-4"
            />
            <h1 className={`${textColor} text-xl font-bold`}>Tomorrow's Vision, Today!</h1>
          </div>
          <div className="flex items-center mt-4 justify-between">
            <a
              href="https://portfolio-website-flame-alpha.vercel.app/"
              className={linkColor}
            >
              <img
                src={aaplicationImg}
                alt=""
                className="h-8 w-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-kumar-068726199/"
              className={linkColor}
            >
              <img
                src={linkedInImg}
                alt=""
                className="h-8 w-8"
              />
            </a>
            <a
              href="https://github.com/krahul09"
              className={linkColor}
            >
              <img
                src={githubImg}
                alt=""
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <div className="mr-8 text-center md:text-left">
            <h2 className={`${textColor} text-sm font-bold mb-2`}>SITEMAP</h2>
            <ul className={`${textColor}`}>
              <li>MakeMyWeb.</li>
              <li>Services</li>
              <li>Products</li>
              <li>Blogs</li>
              <li>Life at LENS</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className={`${textColor} text-sm font-bold mb-2`}>CONNECT</h2>
            <p className={`${textColor}`}>+1-517-9300-792</p>
            <p className={`${textColor}`}>+91-9990-736-796</p>
            <p className={`${textColor}`}>solutions@lenscorp.ai</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center mt-4">
        <p className={`${textColor}`}>&copy; 2023 LENS, Inc. All rights reserved.</p>
        <div className="flex">
          <a href="#" className={`${textColor} hover:text-white mr-4`}>
            Code of conduct
          </a>
          <a href="#" className={`${textColor} hover:text-white`}>
            Sustainability Goals
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
