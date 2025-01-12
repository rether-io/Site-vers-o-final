import React, { useState } from 'react';

    const faqData = [
      {
        question: 'What can Penny help me with?',
        answer:
          'Penny can help you with budgeting, expense tracking, financial reporting, investment tracking, and provide personalized financial advice.',
      },
      {
        question: 'Is Penny free to use?',
        answer: 'Penny offers a free tier with basic features. Premium features are available with a subscription.',
      },
      {
        question: 'How does Penny provide personalized financial advice?',
        answer:
          'Penny uses advanced AI algorithms to analyze your financial data and provide personalized recommendations based on your goals and risk tolerance.',
      },
      {
        question: 'Can I track multiple savings goals with Penny?',
        answer: 'Yes, Penny allows you to track multiple savings goals and provides progress updates.',
      },
      {
        question: 'Is my financial data safe with Penny?',
        answer:
          'Yes, Penny uses advanced encryption and security protocols to protect your financial data. Your data is safe and secure with Penny.',
      },
      {
        question: 'Does Penny offer educational resources?',
        answer:
          'Yes, Penny provides access to a library of educational resources to help you improve your financial literacy.',
      },
    ];

    function FAQSection() {
      const [openIndex, setOpenIndex] = useState(null);

      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      return (
        <div className="bg-black py-12">
          <div className="container mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="badge mb-4">
                <span className="badge-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#4D4D4D"/>
                    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#1A1A1A"/>
                    <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="#666666"/>
                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"/>
                  </svg>
                </span>
                FAQ
              </div>
              <h2 className="text-4xl font-semibold text-white mb-2">Got Questions?</h2>
              <p className="text-gray-300 text-xl mb-8">We've Got Answers!</p>
            </div>
            <div className="w-full max-w-3xl mx-auto">
              {faqData.map((item, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="bg-[#1a1a1a] p-4 rounded-md flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-white font-medium">{item.question}</h3>
                    <span className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4.16663V15.8333M4.16663 10H15.8333" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="bg-[#333] p-4 rounded-md mt-2">
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default FAQSection;
