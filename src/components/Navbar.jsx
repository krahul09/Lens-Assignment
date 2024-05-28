import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`flex justify-between items-center py-4 px-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex items-center">
      <img src={`https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${theme === 'dark' ? 'newLogo.9985891c.png' : 'nav_logo.e5fb945a.png'}&w=96&q=75`} alt="Logo" className="h-16 mr-4 ml-8" />

      </div>
          <div className="flex items-center mr-8">
              <a href="#" className="mr-4 font-poppins hover:font-semibold">MakeMyWeb</a>
        <a href="#" className="mr-4 font-poppins text-blue-500 hover:font-semibold">Home</a>
        <a href="#" className="mr-4 font-poppins hover:font-semibold">Company</a>
        <a href="#" className="mr-4 font-poppins hover:font-semibold">Blogs</a>
        <button
          className={`rounded-full p-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;