import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-screen overflow-hidden border-b-2 border-primary/5">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/4565de67-e127-4f19-93df-adf3be955d96.png"
          alt="Bird Cages on Fire - Ember & Ecstasy"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};