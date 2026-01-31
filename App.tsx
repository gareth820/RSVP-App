
import React, { useState } from 'react';
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
      <div className="min-h-screen bg-brand-beige flex flex-col items-center justify-center p-6 text-center animate-fadeIn relative overflow-hidden selection:bg-brand-purple/10">
        {/* Background decorative atmosphere */}
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-brand-green opacity-[0.03] rounded-full blur-[150px] animate-drift"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-brand-purple opacity-[0.03] rounded-full blur-[150px] animate-drift-reverse"></div>
        
        <Header />
        
        <div className="max-w-xl z-10 px-4 relative">
          {/* Wax Seal Animation */}
          <div className="flex justify-center mb-12 animate-seal">
            <div className="w-20 h-20 bg-[#B22222] rounded-full flex items-center justify-center shadow-lg relative group">
              <div className="absolute inset-0 rounded-full border-4 border-[#8B0000] opacity-50"></div>
              <span className="text-brand-beige font-serif text-4xl opacity-80 select-none">R&S</span>
              {/* Seal Flourish */}
              <div className="absolute -inset-2 border border-[#B22222] border-opacity-10 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          <h2 className="font-script text-8xl md:text-9xl mb-8 text-brand-green animate-fadeIn" style={{ animationDelay: '0.4s' }}>it is settled</h2>
          
          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <p className="font-serif text-3xl md:text-4xl text-brand-purple italic leading-snug">
              {rsvpData.attendance === Attendance.ACCEPT 
                ? `Lady Whistledown herself shall note your presence, ${rsvpData.name.split(' ')[0]}.`
                : `A loss to the season, ${rsvpData.name.split(' ')[0]}.`}
            </p>
            
            <div className="max-w-md mx-auto py-8 border-y border-brand-purple border-opacity-10">
              <p className="text-brand-purple opacity-70 leading-relaxed text-lg font-serif italic">
                {rsvpData.attendance === Attendance.ACCEPT 
                  ? "The couple is overjoyed to receive your confirmation. Formal travel arrangements and social protocols shall follow via electronic mail."
                  : "The union shall be slightly less bright without your presence. We thank you most sincerely for your prompt reply."}
              </p>
            </div>
          </div>

          <div className="mt-16 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
            <button 
              onClick={() => setSubmitted(false)}
              className="group flex flex-col items-center mx-auto space-y-3"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-brand-purple opacity-40 group-hover:opacity-100 transition-opacity font-serif">Return</span>
              <div className="w-12 h-[1px] bg-brand-purple opacity-20 group-hover:w-24 group-hover:opacity-100 transition-all duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-brand-beige selection:bg-brand-purple/20">
      <Header />
      <main>
        <Hero />
        <div className="py-12 bg-white flex justify-center opacity-5">
           <svg width="200" height="40" viewBox="0 0 200 40">
             <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M0,20 C50,0 150,40 200,20" />
           </svg>
        </div>
        <RSVPForm onSuccess={handleRSVPSuccess} />
      </main>
      <footer className="py-32 px-6 text-center border-t border-brand-purple border-opacity-5 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <p className="font-serif italic text-brand-purple opacity-50 text-xl mb-8">
            Yours Truly, Rachel & Steven
          </p>
          <div className="flex justify-center items-center space-x-6 opacity-20 mb-10">
            <span className="w-24 h-[0.5px] bg-brand-purple"></span>
            <div className="flex space-x-3">
              <div className="w-2 h-2 rounded-full bg-brand-green"></div>
              <div className="w-3 h-3 rounded-full bg-brand-purple"></div>
              <div className="w-2 h-2 rounded-full bg-brand-green"></div>
            </div>
            <span className="w-24 h-[0.5px] bg-brand-purple"></span>
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.6em] opacity-30 text-brand-purple font-serif">
            The Season of 2025
          </p>
        </div>
        {/* Subtle footer flourish */}
        <div className="absolute bottom-0 right-0 p-10 opacity-[0.03] text-brand-purple pointer-events-none">
           <svg width="300" height="300" viewBox="0 0 100 100">
             <path fill="none" stroke="currentColor" strokeWidth="0.2" d="M10,10 Q50,100 90,10 T50,50 Z" />
           </svg>
        </div>
      </footer>
    </div>
  );
};

export default App;
