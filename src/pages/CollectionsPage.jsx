import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Gem, ShieldCheck } from 'lucide-react';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-ivory-50 font-sans pb-24">
      
      {/* Header */}
      <div className="bg-charcoal-950 text-ivory-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gold-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block">
            Thematic Archives & Lookbooks
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory-50 font-normal">
            Aurelia Signature Collections
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto font-light leading-relaxed">
            From the Nizami royal treasuries of Hyderabad to the sacred Dravidian temples of the South, explore our timeless thematic series.
          </p>
        </div>
      </div>

      {/* Collections Lookbook Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {COLLECTIONS.map((col, idx) => {
          const colProducts = PRODUCTS.filter((p) => p.collection === col.name);
          const isReversed = idx % 2 !== 0;

          return (
            <section key={col.id} className="space-y-10">
              
              {/* Editorial Feature Banner */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-gold-200 rounded-sm overflow-hidden shadow-sm p-6 sm:p-10 ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Image */}
                <div className={`lg:col-span-6 relative aspect-[4/3] rounded overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={col.bannerImage}
                    alt={col.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-300">
                      Craft Note
                    </span>
                    <p className="font-serif text-xs text-ivory-100 italic">{col.artisanNote}</p>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block">
                      {col.subtitle}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-normal mt-1">
                      {col.name}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {col.story}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block">
                      Key Metier Highlights:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {col.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gold-50 border border-gold-300 text-gold-900 text-xs rounded-full font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap gap-4">
                    <Link
                      to="/try-on"
                      className="inline-flex items-center px-6 py-2.5 bg-charcoal-950 hover:bg-charcoal-800 text-gold-300 text-xs font-semibold uppercase tracking-wider rounded border border-gold-500/40 transition-colors shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
                      Try In AI Studio
                    </Link>
                  </div>

                </div>

              </div>

              {/* Product Row for this collection */}
              {colProducts.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-900">
                      Pieces from {col.name}
                    </h3>
                    <Link
                      to="/shop"
                      className="text-xs uppercase tracking-widest text-gold-800 hover:text-gold-600 font-semibold flex items-center"
                    >
                      View All in Catalogue →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {colProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              )}

            </section>
          );
        })}
      </div>

    </div>
  );
}
