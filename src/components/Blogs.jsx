import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Blogs() {
  const { theme } = useContext(ThemeContext);

  const blogData = [
    {
      title: "How AI is Optimizing Your Taxi Rides",
      description:
        "Discover how Artificial Intelligence is revolutionising the taxi app landscape, leading to improved efficiency, shorter wait times, and a more satisfying user experience....",
    },
    {
      title: "How AI is Revolutionizing Your Shopping Experience",
      description:
        "From personalized recommendations to frictionless checkout, AI is transforming the way you shop.Discover the future of retail and how AI is making shopping faster, easier, and more enjoyable....",
    },
    {
      title: "Generative AI",
      description:
        "In today data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....",
    },
  ];

  const bgColor =
    theme === "light"
      ? "bg-gradient-to-r from-blue-400 to-green-400"
      : "bg-black";
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <div className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-xl sm:text-4xl font-poppins ${textColor}`}>
            OUR BLOGS
          </h1>
          <h2 className={`text-6xl font-bold font-poppins mt-20 ${textColor}`}>
            Inhouse Mindscape
          </h2>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:max-w-none cursor-pointer">
          {blogData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden group relative h-full bg-gray-900"
            >
              <div className="flex flex-col px-6 py-8 sm:p-10 sm:pb-6 relative flex-1">
                <h3 className="text-center text-lg mb-6 leading-6 font-medium text-white">
                  {data.title}
                </h3>
                <div className="bg-gray-700 p-6 mt-6 text-center relative z-10 flex-1 rounded-lg shadow-lg group-hover:bg-gray-800">
                  <p className="mt-2 text-base text-gray-300">
                    {data.description}
                  </p>
                </div>
                {/* Read more link */}
                <a
                  href="#"
                  className=" mt-5 text-center block bg-red-600 px-4 py-2 text-white rounded-lg transition-opacity opacity-0 group-hover:opacity-100"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center p-14">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Explore More
          </button>
        </div>
        <p className="p-12 font-raleway font-semibold text-4xl flex items-center justify-center">
          We Work With Amazing Clients
        </p>
      </div>
    </div>
  );
}

export default Blogs;
