import React from 'react';

    function DemoSection() {
      return (
        <div className="bg-black py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold text-white mb-4">Try It Now</h2>
            <p className="text-gray-300 text-xl mb-8">
              Schedule a demo and see how Penny can transform your financial management.
            </p>
            <div className="max-w-md mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#333] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#333] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="bg-[#333] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
                <button
                  type="submit"
                  className="bg-[#00FF9D] text-black font-semibold py-3 rounded-md hover:bg-[#00cc7a] transition-colors duration-300"
                >
                  Schedule a Demo
                </button>
              </form>
              <div className="mt-6 flex flex-col items-center">
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-white">Value Proposition:</span> Setup in 24 hours
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Customer Satisfaction:</span> 98%
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default DemoSection;
