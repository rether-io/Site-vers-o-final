import React, { useState } from 'react';
    import './ProblemSection.css';

    const tabData = [
      {
        id: 'efficiency',
        label: 'Efficiency',
        title: 'Automate Financial Tasks',
        content:
          'Penny automates tasks like invoicing, expense tracking, and report generation, allowing your team to focus on strategic activities. Say goodbye to manual work — just ask Penny for instant results, saving hours. With Penny managing repetitive tasks, your team can drive financial growth more efficiently.',
      },
      {
        id: 'accessibility',
        label: 'Accessibility',
        title: 'Access Your Data Anywhere',
        content:
          'Access your financial data from any device, anywhere in the world. Penny is designed to be accessible and user-friendly, ensuring that you can manage your finances on the go.',
      },
      {
        id: 'security',
        label: 'Security',
        title: 'Secure Your Financial Data',
        content:
          'Penny uses advanced encryption and security protocols to protect your financial data. Your data is safe and secure with Penny.',
      },
      {
        id: 'accuracy',
        label: 'Accuracy',
        title: 'Ensure Accurate Financial Reporting',
        content:
          'Penny ensures accurate financial reporting, reducing the risk of errors and discrepancies. With Penny, you can trust that your financial data is accurate and reliable.',
      },
      {
        id: 'scalability',
        label: 'Scalability',
        title: 'Scale Your Financial Operations',
        content:
          'Penny is designed to scale with your business, ensuring that you can manage your finances efficiently as your business grows. Penny is the perfect solution for businesses of all sizes.',
      },
    ];

    function ProblemSection() {
      const [activeTab, setActiveTab] = useState(tabData[0].id);

      const handleTabClick = (id) => {
        setActiveTab(id);
      };

      return (
        <div className="problem-section relative py-12 bg-gradient-to-b from-zinc-900/50 via-zinc-900/70 to-zinc-900 rounded-3xl">
          <div className="container mx-auto text-center relative z-10">
            <div className="badge inline-flex items-center mb-4">
              <span className="badge-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#4D4D4D"/>
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#1A1A1A"/>
                  <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="#666666"/>
                  <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"/>
                </svg>
              </span>
              Benefits
            </div>
            <h2 className="problem-title">Reap the Rewards of Using Penny</h2>
          </div>
          <div className="container mx-auto max-w-6xl flex justify-center mt-8">
            <div className="flex flex-col gap-8 w-1/4">
              <div className="flex justify-between">
                <div className="text-3xl font-semibold text-[#34D399]">95%</div>
                <div className="text-gray-400 text-sm">Results Accuracy</div>
              </div>
              <div className="flex justify-between">
                <div className="text-3xl font-semibold text-[#34D399]">5X</div>
                <div className="text-gray-400 text-sm">Faster Decision-Making</div>
              </div>
              <div className="flex justify-between">
                <div className="text-3xl font-semibold text-[#34D399]">24/7</div>
                <div className="text-gray-400 text-sm">Instant Availability</div>
              </div>
              <div className="flex flex-col mt-8">
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button text-left py-3 px-4 rounded-md transition-colors duration-200 ${activeTab === tab.id ? 'bg-[#333] border-l-2 border-[#34D399] text-white' : 'text-gray-300 hover:bg-[#1a1a1a]'}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-3/4 ml-8">
              {tabData.map((tab) => {
                if (tab.id === activeTab) {
                  return (
                    <div key={tab.id} className="bg-[#1a1a1a] p-6 rounded-md border border-[#34D399]/20">
                      <h3 className="text-2xl font-medium text-gray-200 mb-4">{tab.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{tab.content}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      );
    }

    export default ProblemSection;
