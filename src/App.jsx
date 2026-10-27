import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuotationModal from './components/QuotationModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicesPage from './pages/ServicesPage';
import BrandsPage from './pages/BrandsPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import UploadPage from './pages/UploadPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState('');

  const handleOpenQuote = (category = '') => {
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteCategory('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF7EC] text-[#1A1208] selection:bg-[#F45F02] selection:text-white w-full max-w-full relative">
      {/* 1. Page Reload / Initial Entrance Curtain Animation */}
      <PageLoader />

      {/* 2. Top Scroll Progress Line */}
      <ScrollProgress />

      <ScrollToTop />
      
      {/* 3. Global Floating Pill Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* 4. Main Routed Pages */}
      <main className="flex-grow w-full max-w-full">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/products/:id" element={<ProductDetailPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/brands" element={<BrandsPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/gallery" element={<GalleryPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
        </Routes>
      </main>

      {/* 5. Giant Brand Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* 6. Floating Communication Widget */}
      <WhatsAppFloat />

      {/* 7. Universal Quotation Modal */}
      <QuotationModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialCategory={quoteCategory}
      />
    </div>
  );
}
