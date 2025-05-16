import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t-2 border-t-primary/5 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif text-primary mb-4">About Us</h3>
            <p className="text-gray-300">Creating unique experiences where passion meets tradition.</p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-primary mb-4">Contact</h3>
            <p className="text-gray-300">emberandecstasy@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-primary mb-4">Follow Us</h3>
            <p className="text-gray-300">Stay updated on our social media</p>
          </div>
        </div>
      </div>
    </footer>
  );
};