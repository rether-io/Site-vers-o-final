import React from 'react';
    import './App.css';
    import { tabData } from './data';
    import UseCasesSection from './sections/UseCasesSection';
    import FeaturesSection from './sections/FeaturesSection';
    import FAQSection from './sections/FAQSection';
    import DemoSection from './sections/DemoSection';

    function App() {
      return (
        <div className="app">
          <HeroSection />
          <ProblemSection />
          <UseCasesSection />
          <FeaturesSection />
          <FAQSection />
          <DemoSection />
        </div>
      );
    }

    function HeroSection() {
      return (
        <div className="hero-section relative pt-24 flex items-center justify-center min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black/80 pointer-events-none" style={{
            background: 'radial-gradient(circle at center, transparent 20%, black 80%)'
          }}></div>
          <nav className="top-nav fixed w-full z-50 top-0">
            <div className="container mx-auto max-w-5xl rounded-full bg-zinc-900/50 px-6 py-3 flex justify-between items-center">
              <div className="logo">
                <span className="logo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00FF94"/>
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="black"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
                  </svg>
                </span>
              </div>
              <ul className="menu flex space-x-6">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">Support</a></li>
              </ul>
              <a href="https://wa.me/5511972247344" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-[#22c55e] transition-colors duration-300">
                WhatsApp
              </a>
            </div>
          </nav>
          <div className="content flex flex-col items-center justify-center">
            <div className="badge bg-[#1a1a1a]/70 rounded-full px-4 py-2 inline-flex items-center mb-6">
              <span className="badge-icon mr-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6667 5.33333H1.33333C0.790833 5.33333 0.333333 5.79083 0.333333 6.33333V13.6667C0.333333 14.2092 0.790833 14.6667 1.33333 14.6667H14.6667C15.2092 14.6667 15.6667 14.2092 15.6667 13.6667V6.33333C15.6667 5.79083 15.2092 5.33333 14.6667 5.33333ZM14.6667 6.33333V13.6667H1.33333V6.33333H14.6667ZM8 10.6667C8.884 10.6667 9.66667 9.884 9.66667 9C9.66667 8.116 8.884 7.33333 8 7.33333C7.116 7.33333 6.33333 8.116 6.33333 9C6.33333 9.884 7.116 10.6667 8 10.6667ZM1.33333 4.33333C0.790833 4.33333 0.333333 4.79083 0.333333 5.33333V3.33333C0.333333 2.79083 0.790833 2.33333 1.33333 2.33333H14.6667C15.2092 2.33333 15.6667 2.79083 15.6667 3.33333V5.33333C15.6667 4.79083 15.2092 4.33333 14.6667 4.33333H1.33333Z" fill="#34D399"/>
                </svg>
              </span>
              Smart Financial Assistant
            </div>
            <h1 className="title text-6xl font-light mb-6 leading-tight">
              <span className="text-white font-light block">Your Personal</span>
              <span className="text-gray-400 font-medium block">Finance Expert</span>
            </h1>
            <p className="description text-gray-300 mb-8 max-w-2xl mx-auto">
              Penny is your friendly AI chatbot, simplifying budgeting, saving, and investing with personalized support.
            </p>
            <div className="buttons flex justify-center gap-4">
              <button className="action-button primary bg-[#00FF94] text-black font-semibold py-3 px-6 rounded-md hover:bg-[#00cc7a] transition-colors duration-300">Get Started</button>
              <button className="action-button secondary bg-[#333] text-white py-3 px-6 rounded-md hover:bg-[#555] transition-colors duration-300">Key Features</button>
            </div>
          </div>
        </div>
      );
    }

    function ProblemSection() {
      const [activeTab, setActiveTab] = React.useState(tabData[0].id);

      const handleTabClick = (id) => {
        setActiveTab(id);
      };

      return (
        <div className="problem-section">
          <div className="problem-header">
            <div className="badge">
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
          <div className="problem-content">
            <div className="tab-list">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {tabData.map((tab) => {
                if (tab.id === activeTab) {
                  return (
                    <div key={tab.id} className="tab-panel">
                      <h3 className="tab-title">{tab.title}</h3>
                      <p className="tab-text">{tab.content}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="problem-stats">
            <div className="stat-item">
              <span className="stat-value">95%</span>
              <span className="stat-label">Results Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">5X</span>
              <span className="stat-label">Faster Decision-Making</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Instant Availability</span>
            </div>
          </div>
        </div>
      );
    }

    export default App;
