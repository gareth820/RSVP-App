
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* Left side flourish or empty */}
        <div className="hidden md:block opacity-10 animate-pulse text-brand-green">
           <svg width="40" height="40" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
           </svg>
        </div>
        
        <div className="font-serif text-2xl tracking-widest-extra pointer-events-auto text-brand-purple animate-fadeIn">
          R<span className="opacity-20 mx-2">&mdash;</span>S
        </div>
      </div>
    </header>
  );
};

export default Header;
