import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, RefreshCw, Gem, Sparkles, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HeritageTrustSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% BIS Hallmarked Purity",
      subtitle: "Government-Certified Laser Engraving",
      description: "Every single creation undergoes strict Bureau of Indian Standards (BIS) hallmarking, verifying 91.6% purity for 22K and 75.0% for 18K gold."
    },
    {
      icon: Gem,
      title: "Ethically Sourced Natural Diamonds",
      subtitle: "GIA & IGI Laser Inscribed",
      description: "We work exclusively with conflict-free, natural diamonds sourced in accordance with the Kimberley Process, hand-selected for optimal cut and brilliance."
    },
    {
      icon: Award,
      title: "Master Karigar Legacy",
      subtitle: "Centuries of Kundan & Nakshi Craft",
      description: "Our high jewellery is handcrafted by hereditary royal karigars in Jaipur, Mumbai, and Thanjavur using ancient lost-wax casting and jadau techniques."
    },
    {
      icon: RefreshCw,
      title: "Guaranteed Lifetime Exchange",
      subtitle: "100% Metal Buyback Transparency",
      description: "Enjoy complete peace of mind with our transparent lifetime exchange policy, allowing you to upgrade your jewellery collection at benchmark bullion rates anytime."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gold-200/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-700 font-semibold block">
            The Aurelia Covenant
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
            A Legacy of Absolute Purity & Artistry
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-3"></div>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Behind every Aurelia creation is a commitment to uncompromising purity, ethical integrity, and generational trust.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-ivory-50 border border-gold-200/80 rounded-sm hover:border-gold-400 hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100/80 border border-gold-300 flex items-center justify-center text-gold-700 group-hover:bg-charcoal-950 group-hover:text-gold-300 group-hover:border-gold-500 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-charcoal-900 mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold-200/50 flex items-center text-[11px] font-semibold text-gold-800 group-hover:text-gold-600 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                  Guaranteed Certificate
                </div>
              </div>
            );
          })}
        </div>

        {/* Heritage Story Callout Box */}
        <div className="mt-16 bg-ivory-100 p-8 sm:p-12 rounded-sm border border-gold-300/80 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
              Heritage Chronicles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal">
              Preserving India's Royal Goldsmithing Traditions
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              Read how our master artisans carry forward 400 years of Nizami jadau, Thanjavur repoussé, and Cuttack filigree in our bespoke ateliers.
            </p>
          </div>

          <Link
            to="/our-story"
            className="px-8 py-3.5 bg-charcoal-950 hover:bg-charcoal-800 text-gold-200 text-xs uppercase tracking-[0.18em] font-semibold rounded-sm border border-gold-600/40 shadow-sm transition-all duration-200 flex items-center shrink-0"
          >
            <span>Discover Our Heritage</span>
            <ArrowRight className="w-4 h-4 ml-2 text-gold-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
