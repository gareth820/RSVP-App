
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RSVPForm from './components/RSVPForm';
import { RSVPData, Attendance } from './types';

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rsvpData, setRsvpData] = useState<RSVPData | null>(null);

  const handleRSVPSuccess = (data: RSVPData) => {
    setRsvpData(data);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted && rsvpData) {
    return (
      <div className="min-h-screen bg-beige flex flex-col items-center justify-center p-6 text-center animate-fadeIn relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green opacity-5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple opacity-5 rounded-full blur-[100px]"></div>
        
        <Header />
        <div className="max-w-lg z-10">
          <h2 className="font-script text-7xl md:text-8xl mb-8 text-green">Thank you</h2>
          <p className="font-serif text-2xl md:text-3xl mb-4 text-purple">
            {rsvpData.attendance === Attendance.ACCEPT 
              ? `We're thrilled you can join us, ${rsvpData.name.split(' ')[0]}!`
              : `We'll miss you, ${rsvpData.name.split(' ')[0]}.`}
          </p>
          <p className="text-purple opacity-60 leading-relaxed mb-12">
            {rsvpData.attendance === Attendance.ACCEPT 
              ? "Your response has been recorded. We'll send more details to your email soon. We can't wait to celebrate with you!"
              : "Thank you for letting us know. We hope to celebrate with you another time soon."}
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[10px] uppercase tracking-widest border-b border-purple pb-1 hover:text-green hover:border-green transition-all text-purple"
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-beige">
      <Header />
      <main>
        <Hero />
        <RSVPForm onSuccess={handleRSVPSuccess} />
      </main>
      <footer className="py-20 px-6 text-center border-t border-purple border-opacity-5 bg-white">
        <p className="font-serif italic text-purple opacity-40 text-sm">
          With Love, Rachel & Steven
        </p>
        <div className="flex justify-center mt-4 space-x-2">
           <div className="w-1.5 h-1.5 rounded-full bg-green opacity-20"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-purple opacity-20"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-green opacity-20"></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
