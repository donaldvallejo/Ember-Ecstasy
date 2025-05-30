import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  spacing?: string;
}

export const Section = ({ id, title, children, className = '', spacing = 'py-16' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative ${spacing} ${className}`}
    >
      <div className="container mx-auto px-4">
        <div>
          {title && (
            <h2 className="text-4xl font-serif italic font-bold mb-8 text-primary relative">
              {title}
            </h2>
          )}
          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:italic">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};