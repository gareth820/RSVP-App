
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
      <div className="min-h-screen bg-brand-beige flex flex-col items-center justify-center p-6 text-center animate-fadeIn relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-green opacity-5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple opacity-5 rounded-full blur-[120px]"></div>
        
        <Header />
        <div className="max-w-xl z-10 px-4">
          <h2 className="font-script text-8xl md:text-9xl mb-12 text-brand-green">thank you</h2>
          <div className="space-y-6">
            <p className="font-serif text-3xl md:text-4xl text-brand-purple">
              {rsvpData.attendance === Attendance.ACCEPT 
                ? `We are overjoyed, ${rsvpData.name.split(' ')[0]}!`
                : `We will miss you, ${rsvpData.name.split(' ')[0]}.`}
            </p>
            <p className="text-brand-purple opacity-70 leading-relaxed text-lg max-w-md mx-auto">
              {rsvpData.attendance === Attendance.ACCEPT 
                ? "Your confirmation is noted. Further details regarding travel and accommodation will be sent to your inbox soon."
                : "While we're sorry you can't make it, we sincerely appreciate the update. We'll celebrate together another time."}
            </p>
          </div>
          <div className="mt-16">
            <button 
              onClick={() => setSubmitted(false)}
              className="group flex items-center mx-auto text-[10px] uppercase tracking-widest text-brand-purple hover:text-brand-green transition-all"
            >
              <span className="border-b border-brand-purple group-hover:border-brand-green pb-1">Return to invitation</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-brand-beige selection:bg-brand-green/20">
      <Header />
      <main>
        <Hero />
        <RSVPForm onSuccess={handleRSVPSuccess} />
      </main>
      <footer className="py-24 px-6 text-center border-t border-brand-purple border-opacity-5 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-serif italic text-brand-purple opacity-50 text-base mb-6">
            With Love, Rachel & Steven
          </p>
          <div className="flex justify-center items-center space-x-3 opacity-20">
            <span className="w-12 h-[1px] bg-brand-purple"></span>
            <div className="flex space-x-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
            </div>
            <span className="w-12 h-[1px] bg-brand-purple"></span>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] opacity-30 text-brand-purple">
            Est. October 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
