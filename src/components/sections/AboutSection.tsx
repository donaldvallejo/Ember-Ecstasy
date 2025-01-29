import React from 'react';

export const AboutSection = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-xl md:text-2xl text-white/90 font-serif italic text-center">
          "To reignite a sense of wonder through the passionate celebration of imagination"
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-start">
        <div className="md:col-span-2 relative z-10">
          <div className="rounded-xl bg-black/10 backdrop-blur-sm px-6 py-4 shadow-lg 
            transform transition-all duration-500 hover:bg-black/20">
            <h2 className="text-4xl font-serif italic font-bold mb-4 text-primary">About</h2>
            <p className="text-lg leading-relaxed text-white/90">
              We are creating a unique festival that brings together diverse communities through a playful, inclusive, and interactive experience. This event will feature three main themed towns — Fire/Flow Arts, Kink/BDSM, Fantasy/Roleplay — a multi-communal effort designed to converge in one fairground space, encouraging participants to explore and engage in all aspects of the communities.
            </p>
          </div>
        </div>
        <div className="md:col-span-3 -mx-4 md:-mx-8 lg:-mx-12">
          <div className="relative group">
            <img 
              src="/lovable-uploads/c8c77f5d-c6f0-4ce0-9369-6e7f7b854449.png"
              alt="Main Stage Car"
              className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] border-2 border-primary/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};