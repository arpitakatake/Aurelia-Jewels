import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import FeaturedSection from '../components/home/FeaturedSection';
import TryOnPromoSection from '../components/home/TryOnPromoSection';
import GoldRateBar from '../components/home/GoldRateBar';
import HeritageTrustSection from '../components/home/HeritageTrustSection';
import CuratedCollectionsSection from '../components/home/CuratedCollectionsSection';
import StoreLocatorCTA from '../components/home/StoreLocatorCTA';

export default function HomePage({ onOpenEnquiry }) {
  return (
    <main className="min-h-screen">
      {/* 1. Large Editorial Hero Section */}
      <HeroSection />

      {/* 2. Jewellery Category Section */}
      <CategorySection />

      {/* 3. Featured Signature Jewellery Collection */}
      <FeaturedSection />

      {/* 4. Dedicated AI Virtual Try-On Promotional Section */}
      <TryOnPromoSection />

      {/* 5. Today's Gold Rates & Calculator Bar */}
      <GoldRateBar />

      {/* 6. Heritage & Trust Craftsmanship Pillars */}
      <HeritageTrustSection />

      {/* 7. Curated Collections Lookbook */}
      <CuratedCollectionsSection />

      {/* 8. Store Locator CTA */}
      <StoreLocatorCTA onOpenEnquiry={onOpenEnquiry} />
    </main>
  );
}
