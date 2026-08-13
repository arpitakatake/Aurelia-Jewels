import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function FeaturedSection() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Featured' },
    { id: 'chokers', label: 'Royal Chokers' },
    { id: 'necklaces', label: 'Heritage Necklaces' },
    { id: 'earrings', label: 'Earrings & Chandbalis' },
    { id: 'rings', label: 'Solitaires & Rings' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return p.featured || p.bestseller;
    return p.subCategory === activeTab;
  }).slice(0, 4);

  return (
    <section className="py-20 bg-ivory-100/70 border-b border-gold-200/40 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-semibold block">
              High Jewellery Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
              Signature Masterpieces
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              Crafted in limited quantities by master artisans in Mumbai, Jaipur, and Geneva. Ready for immediate virtual try-on.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-charcoal-950 text-gold-300 shadow-sm border border-gold-600/40'
                    : 'bg-white text-charcoal-700 hover:bg-gold-50 border border-gold-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-3.5 bg-transparent hover:bg-gold-500 hover:text-charcoal-950 text-charcoal-900 border border-charcoal-900 hover:border-gold-500 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-sm"
          >
            <span>View Complete Catalogue ({PRODUCTS.length} Creations)</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
