'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-6 lg:right-8 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-10 flex flex-col">
          <div className="flex justify-between items-center p-3 bg-slate-900 text-white shrink-0">
            <h3 className="font-semibold text-sm">Chat with AI</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-slate-200 focus:outline-none transition-colors"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex-1 relative bg-gray-50">
            <iframe 
              src="https://www.chatbase.co/chatbot-iframe/6VKRq3zLfyemDNtc7SJaG" 
              width="100%" 
              height="100%"
              style={{ border: 'none' }}
              title="Chatbot"
            ></iframe>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-4 md:right-6 lg:right-8 z-50 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600/30 flex items-center justify-center bottom-20 md:bottom-24 lg:bottom-28 ${
          isOpen ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        title={isOpen ? "Close chat" : "Chat with AI"}
      >
        {!isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        )}
      </button>
    </>
  );
}
