import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide drop-shadow-sm leading-tight">
          Unique SMM panels Platform
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl font-light">
          An overall remedy for reselling.
        </p>
        
        <button className="bg-transparent border border-white text-white hover:bg-white hover:text-teal-500 px-8 py-3 rounded-full font-medium transition-all duration-300 text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};
