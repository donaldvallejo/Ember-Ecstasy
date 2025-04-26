import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Index from '@/pages/Index';
import { initGA, trackPageView } from '@/lib/analytics';

// Get Google Analytics measurement ID from environment variables
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Component to handle page view tracking
function PageViewTracker() {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  
  return null;
}

function App() {
  useEffect(() => {
    // Initialize Google Analytics tester
    if (GA_MEASUREMENT_ID) {
      initGA(GA_MEASUREMENT_ID);
    } else {
      console.warn('Google Analytics Measurement ID is not defined in environment variables');
    }
  }, []);

  return (
    <Router>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;