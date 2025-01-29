import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/Section';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { ConceptSection } from '@/components/sections/ConceptSection';
import { UpdatesSection } from '@/components/sections/UpdatesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/70">
      <Navigation />
      <Hero />
      
      <Section id="about" title="" spacing="pb-8">
        <AboutSection />
      </Section>

      <Section id="concept" title="" spacing="pt-0">
        <ConceptSection />
      </Section>

      <Section id="updates" title="">
        <UpdatesSection />
      </Section>

      <Section id="contact" title="">
        <ContactSection />
      </Section>

      <Footer />

      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black/30 hover:bg-[#ea384c] backdrop-blur-sm border-2 border-primary/5 rounded-full p-3 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;