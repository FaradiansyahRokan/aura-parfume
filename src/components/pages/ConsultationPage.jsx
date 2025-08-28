// src/components/pages/ConsultationPage.jsx
import React, { useState } from 'react';
import { askAI } from '../../API/aiService';
import Icon from '../Icon';

const ConsultationPage = () => {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Selamat datang di Aethera. Saya siap membantu Anda menemukan aroma yang sempurna.' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    const aiResponseText = await askAI(input);
    const aiMessage = { sender: 'ai', text: aiResponseText };
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 fade-in pt-32">
      <div className="w-full max-w-2xl h-[70vh] flex flex-col bg-white border-2 border-black">
        <div className="p-4 border-b-2 border-black">
          <h2 className="text-2xl font-semibold font-serif text-black text-center tracking-widest">AI SOMMELIER</h2>
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/50 font-sans">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-3 ${msg.sender === 'user' ? 'bg-black text-white' : 'bg-white text-black border border-gray-300'}`}>
                <p className="text-base">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && <div className="flex justify-start"><div className="bg-white text-black px-4 py-3 border border-gray-300">...</div></div>}
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t-2 border-black flex items-center bg-white">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Katakan sesuatu..." className="flex-1 bg-gray-100 border border-gray-300 text-black py-3 px-5 text-base focus:outline-none focus:border-black transition-colors font-sans" disabled={isLoading} />
          <button type="submit" className="ml-4 bg-black text-white p-3 hover:bg-gray-800 disabled:bg-gray-400 transition-colors" disabled={isLoading}><Icon name="Send" /></button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage;