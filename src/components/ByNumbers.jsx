import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ByNumbers() {

    const { theme } = useContext(ThemeContext);

    const bgColor =
    theme === "light"
      ? "bg-gradient-to-r from-green-400 to-blue-400"
      : "bg-black";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const descColor = theme === "light" ? "text-gray-700" : "text-gray-400";


  return (
    <div className={`${bgColor} py-8`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className={`text-white text-3xl font-bold text-center mb-6 font-raleway p-16 ${textColor}`}>By the numbers</h2>
      <div className="flex justify-between">
        <div className="text-center">
          <h3 className={`text-white text-4xl font-bold ${textColor}`}>15+</h3>
          <p className={`${descColor}`}>Solutions for Global crises</p>
        </div>
        <div className="text-center">
          <h3 className={`text-white text-4xl font-bold ${textColor}`}>10+</h3>
          <p className={`${descColor}`}>University Collaborations</p>
        </div>
        <div className="text-center">
          <h3 className={`text-white text-4xl font-bold ${textColor}`}>25+</h3>
          <p className={`${descColor}`}>Employees Worldwide</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ByNumbers
