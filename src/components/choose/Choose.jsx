import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import CheckBoxes from './CheckBoxes';

function Choose() {

  const { theme } = useContext(ThemeContext);


  const features = useMemo(() => [
    {
      title: 'Exclusive Rights',
      description: 'Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property',
      icon: '🔒',
      image: "https://whitenappsolutions.com/assets/images/design-services/two.webp"
    },
    {
      title: 'Research Driven',
      description: 'We regularly benchmark our solutions via comparing industry-wide evaluations so our partners',
      icon: '📊',
      image:"https://cdn1.iconfinder.com/data/icons/scenes-9/1000/Success_Social_media___achievement_woman_trophy_award_reward_win_competition-512.png"
    },
    {
      title: 'Plug-and-Play',
      description: 'We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device',
      icon: '⚡',
      image:"https://www.shutterstock.com/shutterstock/photos/2200208041/display_1500/stock-vector-feminism-fists-protest-and-revolution-feminist-struggle-vector-cartoon-with-flat-hands-feminism-2200208041.jpg"
    },
    {
      title: 'Lifetime Support',
      description: 'Should you face any issues, we are always at your service. We provide lifetime technical support & upgrades.',
      icon: '🛠',
      image:"https://img.freepik.com/premium-vector/sending-email-concept-illustration_598748-354.jpg?w=740"
    },
  ], []);

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [features.length]);

  const bgColor = theme === 'light' ? 'bg-gradient-to-r from-blue-400 to-green-400' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const cardColor = theme === 'light' ? 'bg-white' : 'bg-gray-500';

  return (
    <div className={`${bgColor} py-16 min-h-screen`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className={`${textColor} text-xl sm:text-4xl font-poppins`}>
          WHY CHOOSE LENS
        </h1>
        <h2 className={`${textColor} text-6xl font-bold font-poppins mt-20 text-gray`}>
          AI-driven solutions backed by science
        </h2>
        <p className="max-w-2xl mx-auto mt-20 font-poppins">
          Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
        </p>
        <CheckBoxes ThemeContext={ThemeContext}/>
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none cursor-pointer">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col justify-between rounded-lg shadow-lg overflow-hidden group relative h-full min-h-80 ${cardColor} hover:bg-red-400`}
            onMouseEnter={() => setVisibleIndex(index)}
            // style={{ height: '435px', width: '320px' }}
          > 
            <div className="px-6 py-8 sm:p-10 sm:pb-6 relative h-full">
              <h3 className="text-center text-lg mb-6 leading-6 font-medium">{feature.title}</h3>
              <div className="flex items-center justify-center">
                <img
                  src={feature.image}
                  alt=""
                  className={`transition-opacity duration-300 ${visibleIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              <div className="mt-6 text-center relative z-10">
                <p className="mt-2 text-base">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Choose


