import React, { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/Section';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp, ShoppingBag } from 'lucide-react';

// Add TypeScript declarations
declare global {
  interface Window {
    ShopifyBuy?: any;
    EBWidgets?: {
      createWidget: (config: any) => void;
    };
  }
}

const Shop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Reference to manage widget loading
  const eventbriteLoaded = useRef(false);

  // Get Eventbrite Event ID from environment variables
  const eventbriteEventId = import.meta.env.VITE_EVENTBRITE_EVENT_ID || '1369825347489';

  // Shopify store information
  const shopifyDomain = 'ember-ecstasy.myshopify.com';
  
  // This useEffect will load Eventbrite SDK
  useEffect(() => {
    // Load Eventbrite Widget SDK
    if (!eventbriteLoaded.current) {
      const eventbriteScript = document.createElement('script');
      eventbriteScript.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
      eventbriteScript.async = true;
      
      // Initialize the widget once script loads
      eventbriteScript.onload = () => {
        if (window.EBWidgets) {
          window.EBWidgets.createWidget({
            // Widget type - for interactive ticket selection
            widgetType: 'checkout',
            eventId: eventbriteEventId,
            // Target the DOM element that will contain the widget
            iframeContainerId: 'eventbrite-widget-container',
            // Additional parameters for responsive sizing
            iframeHeight: 750,
            iframeAutoAdaptHeight: true,
            iframeResizeDebounceMilliseconds: 200
          });
          
          eventbriteLoaded.current = true;
        }
      };
      
      document.body.appendChild(eventbriteScript);
    }
    
    // Cleanup function
    return () => {
      // No cleanup needed for Eventbrite script as it needs to remain loaded
    };
  }, [eventbriteEventId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/70">
      <Navigation />
      
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif italic font-bold mb-4 text-primary">Shop</h1>
          <p className="text-foreground/80 text-xl mb-12">Festival Tickets & Merchandise</p>
        </div>
      </div>
      
      <Section id="tickets" title="Festival Tickets" spacing="pt-8 pb-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-primary/10 p-6 rounded-lg">
            
            {/* Eventbrite Widget Container */}
            <div id="eventbrite-widget-container" className="mb-4 rounded-lg overflow-hidden w-full min-h-[750px]">
              {/* Eventbrite widget will be loaded here */}
            </div>
            
            {/* Alternative button that links directly to Eventbrite */}
            <div className="text-center mt-8">
              <a 
                href={`https://www.eventbrite.com/e/${eventbriteEventId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                View on Eventbrite
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="merchandise" title="Festival Merchandise" spacing="pb-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-primary/10 p-6 rounded-lg">
            <h3 className="text-2xl font-serif italic mb-4">Official Merchandise</h3>
            <p className="mb-6">Support our festival and take home a piece of the experience with our exclusive merchandise.</p>
            
            {/* Merchandise display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/30 backdrop-blur-sm border border-primary/10 p-4 rounded-lg">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/merch-hoodie.jpg" 
                    alt="Festival Hoodie" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback image if the hoodie image is not found
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x400/1a1a1a/ea384c?text=Hoodie";
                    }}
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">Festival Hoodie</h4>
                <p className="text-foreground/70 mb-3">Stay warm in style with our premium festival hoodie.</p>
                <p className="text-lg font-bold mb-4">$50.00 USD</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-primary/10 p-4 rounded-lg">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/merch-tshirt.jpg" 
                    alt="Festival T-Shirt" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback image if the t-shirt image is not found
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x400/1a1a1a/ea384c?text=T-Shirt";
                    }}
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">Festival T-Shirt</h4>
                <p className="text-foreground/70 mb-3">Classic festival tee featuring our iconic logo.</p>
                <p className="text-lg font-bold mb-4">$35.00 USD</p>
              </div>
            </div>
            
            {/* Shop directly link - made more prominent */}
            <div className="text-center py-8">
              <p className="mb-4 text-foreground/80">Browse our full collection and checkout securely on our online store.</p>
              <a 
                href={`https://${shopifyDomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-md text-black bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="mr-2 h-6 w-6" />
                Shop Now
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