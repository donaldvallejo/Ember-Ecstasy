import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
export const initGA = (measurementId: string) => {
  try {
    console.log('Initializing GA4 with measurement ID:', measurementId);
    ReactGA.initialize(measurementId);
    console.log('GA4 initialized successfully');
    
    // Test pageview to verify initialization
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    console.log('Test pageview sent');
  } catch (error) {
    console.error('Error initializing GA4:', error);
  }
};

// Track page views
export const trackPageView = (path: string) => {
  try {
    console.log('Tracking pageview:', path);
    ReactGA.send({ hitType: 'pageview', page: path });
  } catch (error) {
    console.error('Error tracking pageview:', error);
  }
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  try {
    console.log('Tracking event:', { category, action, label, value });
    ReactGA.event({
      category,
      action,
      label,
      value
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}; 