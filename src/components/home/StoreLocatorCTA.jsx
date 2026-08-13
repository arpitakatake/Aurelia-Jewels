import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BOUTIQUES } from '../../data/stores';

export default function StoreLocatorCTA({ onOpenEnquiry }) {
  return (
    <section className="py-24 bg-charcoal-950 text-ivory-100 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block">
              Flagship Sanctuaries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory-50 font-normal leading-tight">
              Experience the Craft in Person.
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed">
              Step into our private bridal suites and high jewellery salons in Mumbai, New Delhi, Bengaluru, Hyderabad, and Chennai. Consult with hereditary master karigars and certified gemologists over bespoke tea and champagne.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/stores"
                className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-[0.18em] rounded-sm transition-all shadow-gold-sm text-center"
              >
                Find Nearest Boutique
              </Link>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(null)}
                className="w-full sm:w-auto px-8 py-3.5 bg-charcoal-900 hover:bg-charcoal-800 text-gold-200 text-xs font-semibold uppercase tracking-[0.18em] rounded-sm border border-gold-700/60 transition-colors text-center"
              >
                Book VIP Private Viewing
              </button>
            </div>
          </div>

          {/* Right Boutique Cards Preview */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BOUTIQUES.slice(0, 2).map((b) => (
              <div
                key={b.id}
                className="bg-charcoal-900 border border-gold-800/60 rounded-sm overflow-hidden p-5 flex flex-col justify-between space-y-4 hover:border-gold-500 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {b.city}
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      Open Today
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-ivory-100">
                    {b.name}
                  </h4>
                  <p className="text-xs text-charcoal-400 leading-relaxed font-light">
                    {b.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between text-xs">
                  <span className="text-charcoal-400 text-[11px]">{b.phone}</span>
                  <Link
                    to="/stores"
                    className="text-gold-400 hover:text-gold-200 font-semibold uppercase tracking-wider text-[11px] flex items-center"
                  >
                    Boutique Info →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
