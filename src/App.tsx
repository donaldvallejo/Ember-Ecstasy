import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Index from '@/pages/Index';
import Shop from '@/pages/Shop';
import { initGA, trackPageView } from '@/lib/analytics';

// Get Google Analytics measurement ID from environment variables with fallback
// Using the actual ID from your .env file as a fallback to ensure it works
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-P903WM2ELG';

// Log all environment variables for debugging
console.log('All env vars:', import.meta.env);
console.log('GA Measurement ID (after fallback):', GA_MEASUREMENT_ID);

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
    // Always initialize GA with our measurement ID or fallback
    console.log('Initializing GA with ID:', GA_MEASUREMENT_ID);
    initGA(GA_MEASUREMENT_ID);
  }, []);

  return (
    <Router>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;