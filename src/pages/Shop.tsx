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
    
    // Load Eventbrite Widget SDK
    const eventbriteScript = document.createElement('script');
    eventbriteScript.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
    eventbriteScript.async = true;
    document.body.appendChild(eventbriteScript);
    
    // Initialize Eventbrite widget once script loads
    eventbriteScript.onload = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: eventbriteEventId,
          modal: true,
          modalTriggerElementId: 'buy-tickets-button',
          iframeContainerId: `eventbrite-widget-container-${eventbriteEventId}`
        });
      }
    };
    
    // Cleanup function to remove scripts when component unmounts
    return () => {
      if (document.body.contains(shopifyScript)) {
        document.body.removeChild(shopifyScript);
      }
      if (document.body.contains(eventbriteScript)) {
        document.body.removeChild(eventbriteScript);
      }
    };
  }, [eventbriteEventId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/70">
      <Navigation />
      
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif italic font-bold mb-4 text-primary">Shop</h1>
          <p className="text-foreground/80 text-xl mb-12">Festival Merchandise and Tickets coming soon!</p>
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
            
            {/* Shopify Buy Button Script would go here in production */}
            {/* 
            <div id="product-component-UNIQUE_ID"></div>
            <script>
              // Shopify Buy Button script would go here
            </script>
            */}
          </div>
        </div>
      </Section>
      
      <Section id="tickets" title="Festival Tickets" spacing="pt-8 pb-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-primary/10 p-6 rounded-lg">
            <h3 className="text-2xl font-serif italic mb-4">Get Your Tickets</h3>
            <p className="mb-6">Secure your spot at the festival with our various ticket options.</p>
            
            {/* Eventbrite Widget Container */}
            <div id={`eventbrite-widget-container-${eventbriteEventId}`} className="mb-4">
              <div className="p-8 border border-dashed border-primary/30 rounded-lg text-center">
                <p className="text-foreground/60">Eventbrite tickets will load here</p>
                <p className="text-sm text-foreground/40 mt-2">Click the button below to view tickets</p>
                
                {/* Button for Eventbrite modal trigger */}
                <button 
                  id="buy-tickets-button" 
                  type="button"
                  className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Buy Tickets
                </button>
              </div>
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