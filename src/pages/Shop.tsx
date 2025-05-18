import React, { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/Section';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

// Add TypeScript declaration for Eventbrite
declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (config: any) => void;
    };
    ShopifyBuy?: any;
  }
}

const Shop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get Eventbrite Event ID from environment variables
  const eventbriteEventId = import.meta.env.VITE_EVENTBRITE_EVENT_ID || '1369825347489';

  // This useEffect will load Shopify and Eventbrite scripts when the component mounts
  useEffect(() => {
    // Load Shopify Buy Button SDK
    const shopifyScript = document.createElement('script');
    shopifyScript.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    shopifyScript.async = true;
    document.body.appendChild(shopifyScript);
    
    // Direct Eventbrite embed approach
    const container = document.getElementById('eventbrite-iframe-container');
    if (container) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.eventbrite.com/checkout-external?eid=${eventbriteEventId}`;
      iframe.style.width = '100%';
      iframe.style.height = '700px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '8px';
      container.innerHTML = ''; // Clear existing content
      container.appendChild(iframe);
    }
    
    // Cleanup function to remove scripts when component unmounts
    return () => {
      if (document.body.contains(shopifyScript)) {
        document.body.removeChild(shopifyScript);
      }
    };
  }, [eventbriteEventId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/70">
      <Navigation />
      
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif italic font-bold mb-4 text-primary">Shop</h1>
          <p className="text-foreground/80 text-xl mb-12">Festival Merchandise and Tickets</p>
        </div>
      </div>
      
      <Section id="merchandise" title="Festival Merchandise" spacing="pb-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-primary/10 p-6 rounded-lg">
            <h3 className="text-2xl font-serif italic mb-4">Official Merchandise</h3>
            <p className="mb-6">Support our festival and take home a piece of the experience with our exclusive merchandise.</p>
            
            {/* Shopify Buy Button Placeholder */}
            <div id="product-component-placeholder" className="mb-4">
              <div className="p-8 border border-dashed border-primary/30 rounded-lg text-center">
                <p className="text-foreground/60">Shopify products will appear here</p>
                <p className="text-sm text-foreground/40 mt-2">Connect your Shopify store to display products</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="tickets" title="Festival Tickets" spacing="pt-8 pb-16">
        <div className="grid grid-cols-1 gap-8">
          {/* Styled container with theme-matching overlay */}
          <div className="relative bg-black/30 backdrop-blur-sm border border-primary/10 p-6 rounded-lg overflow-hidden">
            {/* Top edge glow effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ea384c] to-transparent opacity-70"></div>
            
            {/* Side edge glow effects */}
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#ea384c] to-transparent opacity-30"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#ea384c] to-transparent opacity-30"></div>
            
            <h3 className="text-2xl font-serif italic mb-4 text-primary">Get Your Tickets</h3>
            <p className="mb-6">Secure your spot at the festival with our various ticket options.</p>
            
            {/* Ticket widget container with theme-matching frame */}
            <div className="relative rounded-lg overflow-hidden">
              {/* The iframe container */}
              <div id="eventbrite-iframe-container" className="relative z-10 min-h-[700px] w-full backdrop-blur-sm">
                {/* iframe will be injected here via JavaScript */}
              </div>
              
              {/* Overlay frame corners - top left */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#ea384c] rounded-tl-lg z-20 pointer-events-none"></div>
              
              {/* Overlay frame corners - top right */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#ea384c] rounded-tr-lg z-20 pointer-events-none"></div>
              
              {/* Overlay frame corners - bottom left */}
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#ea384c] rounded-bl-lg z-20 pointer-events-none"></div>
              
              {/* Overlay frame corners - bottom right */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#ea384c] rounded-br-lg z-20 pointer-events-none"></div>
            </div>
            
            {/* Bottom edge glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ea384c] to-transparent opacity-70"></div>
            
            {/* Alternative button that links directly to Eventbrite */}
            <div className="text-center mt-8">
              <a 
                href={`https://www.eventbrite.com/e/${eventbriteEventId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-[#ea384c] text-base font-medium rounded-md text-white bg-black/50 hover:bg-[#ea384c]/20 transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(234,56,76,0.5)]"
              >
                View Full Event Page
              </a>
            </div>
          </div>
        </div>
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

export default Shop; 