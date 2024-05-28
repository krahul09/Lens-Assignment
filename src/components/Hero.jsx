import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);

  const backgroundUrl =
    theme === "dark"
      ? "https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
      : "https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {theme === "dark" ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={backgroundUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundUrl}
          alt="Background"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-white text-6xl font-bold md:text-8xl font-raleway">
            We are at the forefront of AI
          </h1>
          <div className="flex flex-col items-center space-y-5">
            <p className="text-white text-xl md:text-xl font-raleway">
              From Conserving Wildlife to Automatically Generating Caricatures
            </p>
            <span className="text-white text-xl font-bold md:text-xl font-raleway">
              – We Do It All
            </span>
            <button
              href="/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
