import React from 'react';
    import './UseCasesSection.css';

    const useCases = [
      {
        title: 'Personal Finance',
        description: 'Manage your budget, track expenses, and plan for the future.',
        chat: [
          { speaker: 'user', text: 'What is my current spending?' },
          { speaker: 'bot', text: 'Your current spending is $500 this month.' },
          { speaker: 'user', text: 'Can you show me a breakdown?' },
          { speaker: 'bot', text: 'Sure, here is a breakdown of your spending...' },
        ],
      },
      {
        title: 'Small Business',
        description: 'Automate invoicing, manage cash flow, and generate reports.',
        chat: [
          { speaker: 'user', text: 'Create an invoice for client X' },
          { speaker: 'bot', text: 'Sure, creating an invoice for client X...' },
          { speaker: 'user', text: 'What is my current cash flow?' },
          { speaker: 'bot', text: 'Your current cash flow is $2000.' },
        ],
      },
      {
        title: 'Investment',
        description: 'Get personalized investment advice and track your portfolio.',
        chat: [
          { speaker: 'user', text: 'What are my investment options?' },
          { speaker: 'bot', text: 'Here are some investment options based on your profile...' },
          { speaker: 'user', text: 'How is my portfolio performing?' },
          { speaker: 'bot', text: 'Your portfolio is currently performing at 10%.' },
        ],
      },
    ];

    function UseCasesSection() {
      return (
        <div className="use-cases-section">
          <h2 className="section-title">Use Cases</h2>
          <div className="cards">
            {useCases.map((useCase, index) => (
              <div key={index} className="card">
                <h3 className="card-title">{useCase.title}</h3>
                <p className="card-description">{useCase.description}</p>
                <div className="chat-container">
                  {useCase.chat.map((message, msgIndex) => (
                    <div key={msgIndex} className={`chat-message ${message.speaker}`}>
                      {message.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default UseCasesSection;
