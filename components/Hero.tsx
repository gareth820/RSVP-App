
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 overflow-hidden bg-beige">
      <div className="w-full md:w-1/2 z-10 text-center md:text-left mb-12 md:mb-0">
        <p className="font-serif italic text-xl mb-4 text-green opacity-80">We're</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tight mb-4 text-purple">
          Tying <br /> The Knot
        </h1>
        <div className="font-script text-4xl md:text-6xl mt-4 text-green">
          Rachel & Steven
        </div>
        <div className="mt-12 md:mt-16">
          <p className="font-serif text-3xl md:text-4xl tracking-widest text-purple opacity-90">05.10.2025</p>
          <div className="mt-6 space-y-2 text-sm md:text-base text-purple opacity-80 max-w-md mx-auto md:mx-0">
            <p>Have the honour of announcing their marriage.</p>
            <p>You're joyfully invited to celebrate our marriage.</p>
            <p className="pt-4 border-t border-purple border-opacity-10">We can't wait to live this moment with you. Use the form below to confirm presence on our special day.</p>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh]">
        {/* Decorative elements in theme colors */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple opacity-5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 bg-gray-100 rounded-sm overflow-hidden shadow-2xl transform md:rotate-2 border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
            alt="Wedding Table" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="hidden lg:block absolute -bottom-12 -left-20 w-64 h-80 bg-white p-2 rounded-sm shadow-xl transform -rotate-6">
           <img 
            src="https://images.unsplash.com/photo-1519225495810-75178319a13a?q=80&w=2070&auto=format&fit=crop" 
            alt="Wedding Flowers" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-[0.4em] mb-2 text-purple">Scroll</span>
        <div className="w-[1px] h-12 bg-purple"></div>
      </div>
    </section>
  );
};

export default Hero;
