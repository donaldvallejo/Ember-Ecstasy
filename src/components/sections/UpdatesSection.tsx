import React from 'react';
import { UpdatesBoard } from '@/components/UpdatesBoard';

export const UpdatesSection = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border-2 border-primary/5 bg-black/20 backdrop-blur-sm p-8 shadow-lg 
          transform transition-all duration-500 hover:bg-black/30">
        <h2 className="text-4xl font-serif italic font-bold mb-8 text-primary">Updates</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img 
            src="/lovable-uploads/8840a9c9-089c-4827-ae3a-ce09d677b6ed.png" 
            alt="Ember and Ecstasy Themed Image" 
            className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] mb-8 border-2 border-primary/5"
          />
          <UpdatesBoard />
        </div>
      </div>
    </div>
  );
};