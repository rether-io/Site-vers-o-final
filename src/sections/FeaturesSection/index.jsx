import React from 'react';

    const features = [
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00FF94"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="black"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
          </svg>
        ),
        title: 'Budgeting',
        description: 'Create and manage your budget with ease.',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16C11.3137 16 14 13.3137 14 10C14 6.68629 11.3137 4 8 4C4.68629 4 2 6.68629 2 10C2 13.3137 4.68629 16 8 16Z" fill="#00FF94"/>
            <path d="M8 14C10.2091 14 12 12.2091 12 10C12 7.79086 10.2091 6 8 6C5.79086 6 4 7.79086 4 10C4 12.2091 5.79086 14 8 14Z" fill="black"/>
            <path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" fill="white"/>
            <path d="M16 18L22 12L16 6V18Z" fill="#00FF94"/>
          </svg>
        ),
        title: 'Expense Tracking',
        description: 'Track your expenses automatically.',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00FF94"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="black"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#00FF94"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="black"/>
          </svg>
        ),
        title: 'Financial Reports',
        description: 'Generate detailed financial reports.',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00FF94"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="black"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
          </svg>
        ),
        title: 'Investment Tracking',
        description: 'Track your investments and portfolio performance.',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16C11.3137 16 14 13.3137 14 10C14 6.68629 11.3137 4 8 4C4.68629 4 2 6.68629 2 10C2 13.3137 4.68629 16 8 16Z" fill="#00FF94"/>
            <path d="M8 14C10.2091 14 12 12.2091 12 10C12 7.79086 10.2091 6 8 6C5.79086 6 4 7.79086 4 10C4 12.2091 5.79086 14 8 14Z" fill="black"/>
            <path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" fill="white"/>
            <path d="M16 18L22 12L16 6V18Z" fill="#00FF94"/>
          </svg>
        ),
        title: 'Personalized Advice',
        description: 'Get personalized financial advice.',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00FF94"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="black"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#00FF94"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="black"/>
          </svg>
        ),
        title: '24/7 Support',
        description: 'Get support anytime you need it.',
      },
    ];

    function FeaturesSection() {
      return (
        <div className="bg-black py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#00FF9D] flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default FeaturesSection;
