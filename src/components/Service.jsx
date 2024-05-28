import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Service() {
  const { theme } = useContext(ThemeContext);

  const services = useMemo(
    () => [
      {
        index: "01",
        title: "Biometrics",
        description:
          "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
      },
      {
        index: "02",
        title: "Image Analysis",
        description:
          "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
      },
      {
        index: "03",
        title: "Cross-Media Translation",
        description:
          "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
      },
      {
        index: "04",
        title: "3D Modeling and Design",
        description:
          "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
      },
    ],
    []
  );

  const bgColor =
    theme === "light"
      ? "bg-gradient-to-r from-green-400 to-blue-400"
      : "bg-black";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const cardBgColor = theme === "light" ? "bg-white" : "bg-gray-800";

  return (
    <div className={`${bgColor} py-16 min-h-screen`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className={`${textColor} text-xl sm:text-4xl font-poppins`}>
          SERVICES
        </h1>
        <h2 className={`${textColor} text-6xl font-bold font-poppins mt-20`}>
          We provide Artificial Intelligence Services
        </h2>
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none cursor-pointer">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col justify-between rounded-lg shadow-lg overflow-hidden group relative h-full min-h-80 ${cardBgColor} hover:bg-red-400 `}
          > 
            <div className="px-6 py-8 sm:p-10 sm:pb-6 relative h-full">
              <h3 className={`text-center text-lg mb-6 leading-6 font-medium ${textColor} hover:underline-offset-4`}>{service.title}</h3>
              <div className="mt-6 text-center relative z-10">
                <p className={`mt-2 text-base ${textColor}`}>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Service;
