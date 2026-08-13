import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Camera, Upload, Layers, ArrowRight, ShieldCheck, CheckCircle2, Sliders } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export default function TryOnPromoSection() {
  const [activeJewelIndex, setActiveJewelIndex] = useState(0);
  const [showComposite, setShowComposite] = useState(true);

  const demoJewels = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[3]]; // Choker, Temple Necklace, Chandbali
  const currentJewel = demoJewels[activeJewelIndex];

  return (
    <section className="py-24 bg-charcoal-950 text-ivory-100 relative overflow-hidden border-y border-gold-800/50 font-sans">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Explanation Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-950 border border-gold-700/60 text-gold-300 text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Aurelia Neural Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory-50 font-medium leading-tight">
              Virtual Try-On, <br />
              <span className="italic font-serif text-gold-400">Reimagined</span> with AI.
            </h2>

            <p className="text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              No guesswork. No waiting. Preview how royal polki chokers drape on your neckline, or how handcrafted chandbalis frame your face—before you step into our boutique.
            </p>

            {/* 3 Steps Visual Flow */}
            <div className="space-y-6 pt-2 text-left">
              
              {/* Step 1 */}
              <div className="flex items-start space-x-4 p-3.5 bg-charcoal-900/60 rounded border border-gold-900/50 hover:border-gold-700/80 transition-colors">
                <div className="p-2.5 bg-gold-950 border border-gold-700/50 rounded text-gold-400 shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-gold-500 font-bold">STEP 01</span>
                    <h3 className="font-serif text-sm font-semibold text-ivory-100">Upload Photo or Use Camera</h3>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Take a quick selfie, upload a portrait, or choose from our diverse high-definition model presets.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 p-3.5 bg-charcoal-900/60 rounded border border-gold-900/50 hover:border-gold-700/80 transition-colors">
                <div className="p-2.5 bg-gold-950 border border-gold-700/50 rounded text-gold-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-gold-500 font-bold">STEP 02</span>
                    <h3 className="font-serif text-sm font-semibold text-ivory-100">Choose Jewellery from Catalogue</h3>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Explore 22K gold necklaces, solitaires, and earrings with instantaneous 1-click swapping.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 p-3.5 bg-charcoal-900/60 rounded border border-gold-900/50 hover:border-gold-700/80 transition-colors">
                <div className="p-2.5 bg-gold-950 border border-gold-700/50 rounded text-gold-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-gold-500 font-bold">STEP 03</span>
                    <h3 className="font-serif text-sm font-semibold text-ivory-100">See Your Realistic Royal Look</h3>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Our synthesis engine maps ambient skin lighting, drop shadows, and 24K gold reflections naturally.
                  </p>
                </div>
              </div>

            </div>

            {/* Launch CTA */}
            <div className="pt-2">
              <Link
                to="/try-on"
                className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-gold-md hover:shadow-gold-lg"
              >
                <Sparkles className="w-4 h-4 mr-2 text-charcoal-950" />
                Launch Virtual Try-On Studio
              </Link>
            </div>

          </div>

          {/* Right Interactive Try-On Mini Simulator */}
          <div className="lg:col-span-6">
            <div className="bg-charcoal-900 border border-gold-700/60 rounded-sm p-4 sm:p-6 shadow-2xl space-y-5">
              
              {/* Studio Header Bar */}
              <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gold-300">
                    Live Neural Viewport
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <button
                    onClick={() => setShowComposite(!showComposite)}
                    className={`px-3 py-1 rounded text-[11px] font-medium border transition-colors ${
                      showComposite 
                        ? 'bg-gold-500/20 text-gold-300 border-gold-500/50' 
                        : 'bg-charcoal-800 text-charcoal-400 border-charcoal-700'
                    }`}
                  >
                    {showComposite ? 'With Jewellery (On)' : 'Original Portrait (Off)'}
                  </button>
                </div>
              </div>

              {/* Viewport Canvas Simulation */}
              <div className="relative aspect-[4/5] rounded overflow-hidden bg-charcoal-950 border border-gold-900/60 flex items-center justify-center">
                {/* Model Base Image */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                  alt="Portrait Model Try-On"
                  className="w-full h-full object-cover"
                />

                {/* Overlaid Jewellery Asset */}
                {showComposite && (
                  <div
                    className="absolute inset-x-0 pointer-events-none transition-all duration-300 flex items-center justify-center"
                    style={{
                      top: currentJewel.tryOnType === 'earrings' ? '28%' : '52%',
                    }}
                  >
                    <div className="relative">
                      <img
                        src={currentJewel.tryOnAsset || currentJewel.image}
                        alt={currentJewel.name}
                        className={`transition-all duration-500 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] filter contrast-110 ${
                          currentJewel.tryOnType === 'earrings' ? 'w-36 h-36 object-contain' : 'w-64 h-64 object-contain'
                        }`}
                      />
                      {/* Ambient Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/20 to-transparent mix-blend-overlay animate-pulse-subtle pointer-events-none" />
                    </div>
                  </div>
                )}

                {/* Landmark HUD Overlay points */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-3 h-3 border border-gold-400 rounded-full animate-ping"></div>
                  <div className="absolute top-[32%] left-[28%] w-2 h-2 bg-gold-400 rounded-full"></div>
                  <div className="absolute top-[32%] right-[28%] w-2 h-2 bg-gold-400 rounded-full"></div>
                </div>

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-4 inset-x-4 bg-charcoal-950/90 backdrop-blur-md p-3 rounded border border-gold-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-gold-400 uppercase font-mono tracking-widest block">Active Overlay</span>
                    <span className="font-serif text-sm font-semibold text-ivory-100">{currentJewel.name}</span>
                  </div>
                  <Link
                    to={`/try-on?product=${currentJewel.id}`}
                    className="px-3 py-1.5 bg-gold-500 text-charcoal-950 rounded text-[11px] font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors"
                  >
                    Full Studio →
                  </Link>
                </div>

              </div>

              {/* Quick Jewellery Switcher Bar */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-charcoal-400 font-semibold block">
                  Click to Test Instant Swapping:
                </span>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {demoJewels.map((jewel, idx) => (
                    <button
                      key={jewel.id}
                      onClick={() => {
                        setActiveJewelIndex(idx);
                        setShowComposite(true);
                      }}
                      className={`p-2 rounded flex items-center space-x-2 border transition-all text-left ${
                        activeJewelIndex === idx
                          ? 'bg-gold-950/80 border-gold-500 text-gold-200'
                          : 'bg-charcoal-950 border-charcoal-800 text-charcoal-400 hover:border-charcoal-700'
                      }`}
                    >
                      <img
                        src={jewel.image}
                        alt={jewel.name}
                        className="w-8 h-8 rounded object-cover shrink-0 bg-charcoal-900"
                      />
                      <div className="min-w-0">
                        <span className="font-serif text-[11px] font-medium block truncate text-ivory-100">
                          {jewel.subCategory}
                        </span>
                        <span className="text-[10px] text-charcoal-400 block truncate">{jewel.purity}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
