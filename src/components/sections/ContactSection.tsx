import React from 'react';
import { ContactForm } from '@/components/ContactForm';

export const ContactSection = () => {
  return (
    <div className="space-y-4">
      <div className="bg-black/20 border-2 border-primary/5 backdrop-blur-sm p-0 rounded-lg">
        <h2 className="text-4xl font-serif italic font-bold mb-8 text-primary">Get in Touch</h2>
        <ContactForm />
      </div>
    </div>
  );
};