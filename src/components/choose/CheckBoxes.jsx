import React, { useContext } from 'react'

function CheckBoxes({ThemeContext}) {

  const { theme } = useContext(ThemeContext);

  const descColor = theme === "light" ? "text-gray-700" : "text-gray-400";
  
  return (
    <div className=' mt-20 mb-20 flex justify-center'>
<div className='mr-20 flex flex-col justify-center'>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>State-of-the-art solutions</p>
    </div>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>Fast & Efficient</p>
    </div>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>No extra computation fee</p>
    </div>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>No licensing fee</p>
    </div>
  </div>

  <div className='mt-20 mb-20 flex flex-col justify-center'>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>Lifetime support & upgrades</p>
    </div>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>Plug-and-Play</p>
    </div>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>24x7 Progress Monitoring</p>
    </div>
    <div className={`max-w-2xl ${descColor} mt-2 font-poppins flex items-center  space-x-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>Incremental Updates</p>
    </div>
  </div>

    </div>
    
  
  )
}

export default CheckBoxes
