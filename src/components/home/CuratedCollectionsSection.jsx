import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS } from '../../data/collections';

export default function CuratedCollectionsSection() {
  return (
    <section className="py-24 bg-ivory-50 border-b border-gold-200/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-semibold block">
              Thematic Archives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
              Featured Collections
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              Distinctive design stories woven across eras—each collection curated for milestone celebrations.
            </p>
          </div>

          <Link
            to="/collections"
            className="inline-flex items-center text-xs uppercase tracking-widest text-charcoal-900 hover:text-gold-700 font-semibold transition-colors group"
          >
            <span>Explore All Lookbooks</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Collections Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COLLECTIONS.slice(0, 3).map((col, idx) => (
            <div
              key={col.id}
              className="bg-white border border-gold-200 rounded-sm overflow-hidden shadow-sm hover:shadow-luxury-hover hover:border-gold-400 transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory-100">
                <img
                  src={col.bannerImage}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-bold block">
                    {col.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-ivory-50 mt-0.5">
                    {col.name}
                  </h3>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  {col.tagline}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {col.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-gold-50 border border-gold-200 text-charcoal-700 px-2 py-0.5 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gold-100 flex items-center justify-between">
                    <span className="text-[11px] text-charcoal-500 italic">
                      {col.artisanNote}
                    </span>
                    <Link
                      to="/collections"
                      className="text-xs uppercase tracking-widest text-gold-800 hover:text-gold-600 font-semibold flex items-center"
                    >
                      View Story
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
