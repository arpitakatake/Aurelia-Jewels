import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/products';

export default function CategorySection() {
  return (
    <section className="py-20 bg-ivory-50 border-b border-gold-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-semibold block">
            Curated Metiers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
            Discover by Material & Craft
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-3"></div>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Every category represents distinct artistic mastery—from the divine antiquity of temple gold to the icy brilliance of certified solitaires.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative bg-white border border-gold-200/80 rounded-sm overflow-hidden shadow-sm hover:shadow-luxury-hover hover:border-gold-400 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame with Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-ivory-50 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
                    {cat.itemCount}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide mt-1 text-ivory-100 group-hover:text-gold-200 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-ivory-300/80 mt-1 line-clamp-2 font-light">
                    {cat.description}
                  </p>
                  <div className="pt-3 flex items-center text-xs uppercase tracking-widest text-gold-300 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Explore Creations</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
