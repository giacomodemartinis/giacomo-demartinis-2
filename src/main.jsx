import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './common/ThemeContext.jsx';
import ScrollToTop from './common/ScrollToTop.jsx'; // 👈 new import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* 👈 add here */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);



