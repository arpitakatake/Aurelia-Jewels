import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Gem, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-ivory-100 flex items-center overflow-hidden border-b border-gold-200/50">
      
      {/* Subtle Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
      
      {/* Soft Ambient Gold Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Super Header Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-100/90 border border-gold-300/80 text-gold-900 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-pulse-subtle" />
              <span>AI-Powered Haute Joaillerie</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-charcoal-900 leading-[1.12]">
              Jewellery That <br />
              <span className="italic font-normal font-serif text-gold-700">Becomes</span> Yours.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience centuries of Indian royal goldsmithing married with modern artificial intelligence. Upload your portrait, preview certified 22K polki necklaces and solitaires in real-time, and discover heirlooms tailored for eternity.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              {/* Virtual Try-On CTA */}
              <Link
                to="/try-on"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-charcoal-950 hover:bg-charcoal-800 text-gold-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-sm border border-gold-500/50 shadow-gold-md hover:shadow-gold-lg transition-all duration-300 group"
              >
                <Sparkles className="w-4 h-4 mr-2 text-gold-400 group-hover:rotate-12 transition-transform" />
                Try Jewellery Virtually
              </Link>

              {/* Explore Collection CTA */}
              <Link
                to="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gold-50 text-charcoal-900 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-sm border border-gold-300 hover:border-gold-400 shadow-sm transition-all duration-200"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 ml-2 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

            {/* Trust Markers Minimal Row */}
            <div className="pt-6 border-t border-gold-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold text-charcoal-900 block">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-500">BIS Hallmarked</span>
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold text-charcoal-900 block">GIA / IGI</span>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-500">Natural Diamonds</span>
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold text-charcoal-900 block">AI Neural</span>
                <span className="text-[11px] uppercase tracking-wider text-gold-700 font-semibold">Live Try-On</span>
              </div>
            </div>

          </div>

          {/* Right Visual Editorial Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Editorial Image Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Border */}
              <div className="absolute -inset-3 border border-gold-300/80 rounded-sm transform rotate-1 pointer-events-none hidden sm:block"></div>
              
              <div className="relative bg-white p-2.5 sm:p-3.5 shadow-2xl rounded-sm border border-gold-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="Aurelia Nizam Polki Emerald Choker"
                  className="w-full h-[420px] sm:h-[480px] object-cover rounded-sm filter contrast-105"
                />

                {/* Floating Interactive Try-On Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-ivory-50/95 backdrop-blur-md p-4 rounded border border-gold-300 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-bold block">
                      Featured Creation
                    </span>
                    <h4 className="font-serif text-sm font-bold text-charcoal-900">
                      Maharani Nizam Polki Choker
                    </h4>
                    <span className="text-xs text-charcoal-600 font-medium">
                      22K BIS Gold • Syndicate Uncut Polki
                    </span>
                  </div>
                  <Link
                    to="/try-on?product=aj-nk-01"
                    className="p-2.5 bg-charcoal-900 text-gold-300 rounded hover:bg-charcoal-800 transition-colors shadow-sm"
                    title="Try this piece in AI"
                  >
                    <Sparkles className="w-4 h-4 text-gold-400" />
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
