import React from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Concept', href: '#concept' },
  { name: 'Updates', href: '#updates' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/5 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-foreground/90 hover:text-primary transition-all duration-300 text-lg font-medium backdrop-blur-sm relative
                    after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
                    after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 
                    hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};