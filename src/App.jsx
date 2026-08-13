import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext';
import { CurrencyProvider } from './context/CurrencyContext';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WishlistDrawer from './components/common/WishlistDrawer';
import SearchModal from './components/common/SearchModal';
import EnquiryModal from './components/common/EnquiryModal';
import Toast from './components/common/Toast';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TryOnPage from './pages/TryOnPage';
import CollectionsPage from './pages/CollectionsPage';
import GoldRatesPage from './pages/GoldRatesPage';
import StoresPage from './pages/StoresPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';

// Scroll to Top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  const handleOpenEnquiry = (product = null) => {
    setEnquiryProduct(product);
    setEnquiryOpen(true);
  };

  return (
    <CurrencyProvider>
      <WishlistProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-ivory-100 text-charcoal-900 selection:bg-gold-200">
            
            {/* Main Navbar */}
            <Navbar
              onOpenSearch={() => setSearchOpen(true)}
              onOpenEnquiry={handleOpenEnquiry}
            />

            {/* Main Application Routes */}
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:category" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/try-on" element={<TryOnPage onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/gold-rates" element={<GoldRatesPage onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/stores" element={<StoresPage />} />
                <Route path="/our-story" element={<OurStoryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Fallback route */}
                <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
              </Routes>
            </div>

            {/* Global Modals & Drawers */}
            <WishlistDrawer onOpenEnquiry={handleOpenEnquiry} />
            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <EnquiryModal
              isOpen={enquiryOpen}
              onClose={() => setEnquiryOpen(false)}
              productData={enquiryProduct}
            />
            <Toast />

            {/* Luxury Footer */}
            <Footer />

          </div>
        </BrowserRouter>
      </WishlistProvider>
    </CurrencyProvider>
  );
}
