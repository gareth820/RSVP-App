import React from 'react';

const Petal = ({ delay, left, size }: { delay: string, left: string, size: string }) => (
  <div 
    className="absolute pointer-events-none animate-petal-fall z-0"
    style={{ 
      left, 
      animationDelay: delay,
      width: size,
      height: size,
    }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-brand-purple opacity-20">
      <path d="M12 2C12 2 15 7 15 11C15 15 12 22 12 22C12 22 9 15 9 11C9 7 12 2 12 2Z" />
    </svg>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 overflow-hidden bg-brand-beige">
      {/* Falling Petals */}
      <Petal delay="0s" left="10%" size="14px" />
      <Petal delay="2s" left="30%" size="18px" />
      <Petal delay="4s" left="70%" size="12px" />
      <Petal delay="6s" left="85%" size="20px" />
      <Petal delay="8s" left="50%" size="16px" />

      <div className="w-full md:w-1/2 z-10 text-center md:text-left mb-12 md:mb-0 px-4 md:px-0">
        <div className="overflow-hidden">
          <p className="font-serif italic text-xl mb-4 text-brand-green animate-fadeIn" style={{ animationDelay: '0.2s' }}>Dearest Guests,</p>
        </div>
        <div className="overflow-hidden mb-4">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tight text-brand-purple animate-reveal">
            Tying <br /> The Knot
          </h1>
        </div>
        <div className="font-script text-5xl md:text-7xl mt-4 text-brand-green animate-fadeIn" style={{ animationDelay: '1s' }}>
          Rachel & Steven
        </div>
        <div className="mt-12 md:mt-16 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
          <p className="font-serif text-3xl md:text-4xl tracking-widest text-brand-purple opacity-90 relative inline-block">
            05.10.2025
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-brand-purple opacity-20"></span>
          </p>
          <div className="mt-8 space-y-3 text-sm md:text-base text-brand-purple opacity-80 max-w-sm mx-auto md:mx-0 font-serif italic">
            <p>You are cordially invited to witness the season's most celebrated union.</p>
            <p className="pt-4 border-t border-brand-purple border-opacity-10 leading-relaxed">
              We entreat you to share in our joy. Kindly use the parchment below to send your reply.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] flex items-center justify-center">
        {/* Floating Frames */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-brand-purple border-opacity-10 pointer-events-none animate-drift"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-brand-green border-opacity-10 pointer-events-none animate-drift-reverse"></div>
        
        <div className="relative w-full h-full max-w-md animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 bg-white rounded-sm overflow-hidden shadow-2xl transform md:rotate-3 border-[12px] border-white z-10">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
              alt="Wedding Aesthetics" 
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-16 -left-24 w-72 h-96 bg-white p-3 rounded-sm shadow-xl transform -rotate-12 z-20">
             <img 
              src="https://images.unsplash.com/photo-1519225495810-75178319a13a?q=80&w=2070&auto=format&fit=crop" 
              alt="Bridal Bouquet" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
          {/* Flourish SVG */}
          <div className="absolute -top-10 -right-10 text-brand-green opacity-30 animate-drift">
            <svg width="100" height="100" viewBox="0 0 100 100">
              {/* Fix: Removed duplicate 'fill' attribute from the flourish path element */}
              <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="10" cy="50" r="2" />
              <circle cx="90" cy="50" r="2" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-[0.5em] mb-4 text-brand-purple font-serif">Enter</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-purple to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;