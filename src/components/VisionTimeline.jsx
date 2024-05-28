import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import "./styleFile/VisionTimeline.css";
import timelineIcon1 from "../assets/timeline-icon1.webp";
import timelineIcon2 from "../assets/timeline-icon2.png";
import timelineIcon3 from "../assets/timeline-icon3.jpg";

const features = [
  {
    title: "Diversity & Fairness",
    description:
      "When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.",
    image: timelineIcon1,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.",
    image: timelineIcon2,
  },
  {
    title: "Code of Ethics",
    description:
      "LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.",
    image: timelineIcon3,
  },
];

function VisionTimeline() {
    const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 10000);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const bgColor =
    theme === "light"
      ? "bg-gradient-to-r from-green-400 to-blue-400"
      : "bg-black";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const descColor = theme === "light" ? "text-gray-700" : "text-gray-400";

  return (
    // <div className="flex flex-col md:flex-row md:items-center md:justify-center">
    //   <div className="w-full mx-auto">
    //     <div className="relative wrap overflow-hidden p-10 h-full">
    //       <div className="timeline-line"></div>

    //       <div
    //         aria-label="item"
    //         className={`mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline ${isVisible ? 'animate-slide-left' : ''}`}
    //         ref={timelineRef}
    //       >
    //         <div className="order-1 w-5/12"></div>
    //         <div className="timeline-connector left-timeline"></div> {/* Connector Line */}
    //         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
    //           <img src={timelineIcon1} alt="Timeline Icon" className="mx-auto w-6 h-6 timeline-connector left-timeline" />
    //         </div>
    //         <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
    //           <h3 className="mb-3 font-bold text-white text-xl">Regulatory Compliance</h3>
    //           <p className="text-sm font-medium leading-snug tracking-wide text-gray-500 text-opacity-100">
    //           Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.
    //           </p>
    //         </div>
    //       </div>

    //       <div
    //         aria-label="item"
    //         className={`mb-8 flex justify-between items-center w-full right-timeline ${isVisible ? 'animate-slide-right' : ''}`}
    //       >
    //         <div className="order-1 w-5/12"></div>
    //         <div className="timeline-connector right-timeline"></div> {/* Connector Line */}
    //         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
    //           <img src={timelineIcon2} alt="Timeline Icon" className="mx-auto w-6 h-6 timeline-connector right-timeline" />
    //         </div>
    //         <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
    //           <h3 className="mb-3 font-bold text-white text-xl">
    //           Diversity & Fairness
    //           </h3>
    //           <p className="text-sm font-medium leading-snug tracking-wide text-gray-500 text-opacity-100">
    //           When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.
    //           </p>
    //         </div>
    //       </div>

    //       <div
    //         aria-label="item"
    //         className={`mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline ${isVisible ? 'animate-slide-left' : ''}`}
    //       >
    //         <div className="order-1 w-5/12"></div>
    //         <div className="timeline-connector left-timeline"></div> {/* Connector Line */}
    //         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
    //           <img src={timelineIcon3} alt="Timeline Icon" className="mx-auto w-6 h-6 timeline-connector left-timeline" />
    //         </div>
    //         <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
    //           <h3 className="mb-3 font-bold text-white text-xl">Code of Ethics</h3>
    //           <p className="text-sm font-medium leading-snug tracking-wide text-gray-500 text-opacity-100">
    //           LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
<div className={`${bgColor} p-20`}>
      <div className="text-center">
        <h1 className={`text-xl sm:text-4xl font-poppins ${textColor}`}>
          OUR VISION
        </h1>
        <h2 className={`text-6xl font-bold font-poppins mt-20 ${textColor}`}>
          AI for Social Good
        </h2>
        <p className={`max-w-2xl mx-auto mt-20 font-poppins ${descColor}`}>
          Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.
        </p>
      </div>

      <div className="flex justify-center items-center mt-36">
        <div className="border-l border-dashed w-fit  ">
          {features?.map((feature, index) => {
            return (
              <div key={index} className=" h-40 relative">
                <div className={`w-10 h-10 border border-white flex justify-center items-center  rounded-full -ml-5 ${descColor}`}>
                  <img src={feature.image} alt=""/>
                </div>
                <div
                  className={` w-96 top-0 ${
                    index % 2 === 0
                      ? " absolute right-full mr-8"
                      : " absolute left-full ml-5"
                  }`}
                >
                  <h2 className={` mb-6 ${textColor}`}>{feature.title}</h2>
                  <span className={` ${textColor}`}>{feature.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VisionTimeline;
