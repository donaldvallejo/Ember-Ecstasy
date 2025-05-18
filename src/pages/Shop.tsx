import React, { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Section } from '@/components/Section';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

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
  const shopifyLoaded = useRef(false);

  // Get Eventbrite Event ID from environment variables
  const eventbriteEventId = import.meta.env.VITE_EVENTBRITE_EVENT_ID || '1369825347489';

  // Shopify store information
  const shopifyDomain = 'ember-ecstasy.myshopify.com';
  const shopifyStorefrontAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || 'YOUR_STOREFRONT_ACCESS_TOKEN';
  
  // This useEffect will load scripts when the component mounts
  useEffect(() => {
    // Load Shopify Buy Button SDK
    const shopifyScript = document.createElement('script');
    shopifyScript.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    shopifyScript.async = true;
    
    // Initialize Shopify Buy Button once script loads
    shopifyScript.onload = () => {
      if (window.ShopifyBuy && !shopifyLoaded.current) {
        const client = window.ShopifyBuy.buildClient({
          domain: shopifyDomain,
          storefrontAccessToken: shopifyStorefrontAccessToken
        });
        
        // Create UI for a collection or product
        window.ShopifyBuy.UI.onReady(client).then(ui => {
          // Create a product
          ui.createComponent('collection', {
            id: 'all',
            node: document.getElementById('shopify-collection-component'),
            moneyFormat: '%24%7B%7Bamount%7D%7D', // ${amount}
            options: {
              product: {
                layout: 'grid',
                buttonDestination: 'modal',
                contents: {
                  imgWithCarousel: true,
                  title: true,
                  price: true,
                  options: true,
                  quantity: true,
                  buttonWithQuantity: true,
                  description: true
                },
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0',
                      'margin-bottom': '50px'
                    },
                    'text-align': 'left',
                    'img': {
                      'border-radius': '8px'
                    }
                  },
                  title: {
                    'font-size': '20px',
                    'color': '#ffffff'
                  },
                  button: {
                    'background-color': '#ea384c',
                    'color': '#000',
                    'border-radius': '8px',
                    ':hover': {
                      'background-color': '#d3303e'
                    }
                  },
                  price: {
                    'color': '#ffffff'
                  }
                }
              },
              cart: {
                popup: true,
                contents: {
                  button: true
                },
                styles: {
                  button: {
                    'background-color': '#ea384c',
                    'color': '#000',
                    ':hover': {
                      'background-color': '#d3303e'
                    }
                  }
                }
              },
              modalProduct: {
                contents: {
                  img: true,
                  imgWithCarousel: true,
                  title: true,
                  price: true,
                  options: true,
                  buttonWithQuantity: true,
                  description: true
                }
              }
            }
          });
        });
        
        shopifyLoaded.current = true;
      }
    };
    
    document.body.appendChild(shopifyScript);
    
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
      if (document.body.contains(shopifyScript)) {
        document.body.removeChild(shopifyScript);
      }
    };
  }, [eventbriteEventId, shopifyDomain, shopifyStorefrontAccessToken]);

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
            
            {/* Shopify Buy Button Component */}
            <div id="shopify-collection-component" className="mb-4">
              {/* Shopify products will be loaded here */}
            </div>
            
            {/* Shop directly link */}
            <div className="text-center mt-8">
              <a 
                href={`https://${shopifyDomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Visit Shop
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