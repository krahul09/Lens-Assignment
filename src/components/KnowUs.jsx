import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext'

function KnowUs() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const { theme } = useContext(ThemeContext);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: 'Do I need to sign a contract?',
      answer:
        'We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.',
    },
    {
      question: 'What services do we offer?',
      answer:
        'We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.',
    },
    {
      question: 'How do we ensure quality of deliverables?',
      answer: 'We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.',
    },
    {
      question: 'How do you ensure user privacy?',
      answer: 'We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.',
    },
    {
      question: 'How do I begin collaboration?',
      answer: 'Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs.',
    },
    {
      question: 'How can I pay for the services?',
      answer: 'We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.',
    },
  ];


  const bgColor =
  theme === "light"
    ? "bg-gradient-to-r from-blue-400 to-green-400"
    : "bg-black";
const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <div className={`${bgColor} py-12`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-white text-3xl font-bold text-center mb-8 ${textColor}`}>
          GET TO KNOW US
        </h2>
        <h3 className={`text-white text-2xl font-bold text-center mb-6 ${textColor}`}>
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <button
                className="w-full px-4 py-3 text-left text-white font-bold flex justify-between items-center"
                onClick={() => toggleDropdown(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`h-6 w-6 transition-transform ${
                    openDropdownIndex === index ? 'transform rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openDropdownIndex === index && (
                <div className={`px-4 py-3 ${textColor}`}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KnowUs;
