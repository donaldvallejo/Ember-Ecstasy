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
    
    eventbriteScript.onload = () => {
      if (window.EBWidgets) {
        const widgetOptions = {
          widgetType: 'ticket',
          eventId: eventbriteEventId,
          modal: false,
          modalTriggerElementId: 'eventbrite-widget-modal-trigger',
          onOrderComplete: () => console.log('Order complete!')
        };
        
        window.EBWidgets.createWidget({
          widgetType: widgetOptions.widgetType,
          eventId: widgetOptions.eventId,
          iframeContainerId: 'eventbrite-widget-container',
          iframeHeight: 750
        });
      }
    };
    
    document.body.appendChild(eventbriteScript);
    
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
          <p className="text-foreground/80 text-xl mb-12">Festival Tickets & Merchandise</p>
        </div>
      </div>
      
      <Section id="tickets" title="Festival Tickets" spacing="pt-8 pb-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-primary/10 p-6 rounded-lg">
            
            {/* Eventbrite Widget Container */}
            <div id="eventbrite-widget-container" className="mb-4 rounded-lg overflow-hidden min-h-[700px] w-full">
              {/* The Eventbrite widget will be loaded here */}
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