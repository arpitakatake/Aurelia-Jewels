import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Award, HeartHandshake, ArrowRight, Gem } from 'lucide-react';

export default function OurStoryPage() {
  const milestones = [
    {
      year: "1924",
      title: "Royal Courts of Hyderabad",
      text: "The foundation of our master guild began crafting bespoke polki ornaments for the Nizam's noble families in the Deccan."
    },
    {
      year: "1978",
      title: "The Mumbai Atelier",
      text: "Establishment of our flagship artisan workshop in Colaba, perfecting 22K lost-wax casting and hand-carved temple repoussé."
    },
    {
      year: "2010",
      title: "Global Certification Purity Standard",
      text: "Pioneering 100% laser-inscribed GIA diamonds and strict BIS 916 hallmarking across every single jewel."
    },
    {
      year: "2024",
      title: "The AI Virtual Try-On Revolution",
      text: "Launching the Aurelia AI Studio, allowing patrons worldwide to preview heavy bridal necklaces and solitaires with anatomical realism."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-50 font-sans pb-24">
      
      {/* Header */}
      <div className="bg-charcoal-950 text-ivory-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gold-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block">
            Generations of Haute Joaillerie
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory-50 font-normal">
            The Aurelia Legacy
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto font-light leading-relaxed">
            Where centuries of sacred Indian goldsmithing meet the modern frontier of artificial intelligence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        
        {/* Story Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">
              The Artisan Soul
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal leading-tight">
              Jewellery Handcrafted for Royalty, Preserved for Generations.
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              At Aurelia Jewels, every piece begins with a sketch drawn by generational masters in our Mumbai and Jaipur ateliers. We honor the timeless techniques of <strong className="text-charcoal-900 font-medium">Jadau</strong>, where uncut polki diamonds are set in 24K pure gold foil, and <strong className="text-charcoal-900 font-medium">Nakshi</strong> temple sculpting, where divine motifs are hammered in deep relief.
            </p>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              We believe luxury should never be shrouded in mystery. That is why we pair our heritage craftsmanship with complete price transparency and our breakthrough AI Virtual Try-On studio.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden border border-gold-300 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80"
              alt="Aurelia Master Karigar Workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Metier Techniques Grid */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">
              Our 4 Royal Metiers
            </span>
            <h2 className="font-serif text-3xl text-charcoal-900 font-normal">
              Centuries of Goldsmithing Wisdom
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kundan Jadau",
                region: "Jaipur & Hyderabad",
                desc: "Uncut syndicate polki diamonds embedded in hyper-refined 24K gold foil without glue or prong mechanics."
              },
              {
                title: "Nakshi Temple Carving",
                region: "Thanjavur Guilds",
                desc: "Sculpting high-relief gold deities, elephants, and sacred lotuses with ancient chisels and repoussé hammers."
              },
              {
                title: "Meenakari Enamel",
                region: "Jaipur Royalty",
                desc: "Hand-painted mineral glass powder fired at 850°C on the reverse of gold jewellery to protect skin."
              },
              {
                title: "Cuttack Filigree",
                region: "Odisha Masters",
                desc: "Fine silver and gold wires hand-twisted like spider silk to create featherweight royal ornaments."
              }
            ].map((m, i) => (
              <div key={i} className="p-6 bg-white border border-gold-200 rounded-sm space-y-3 shadow-sm hover:border-gold-400 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-gold-700 font-bold block">{m.region}</span>
                <h3 className="font-serif text-lg font-semibold text-charcoal-900">{m.title}</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white border border-gold-200 rounded-sm p-8 sm:p-12 shadow-sm space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">Milestones</span>
            <h2 className="font-serif text-3xl text-charcoal-900 font-normal">A Century of Heritage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="space-y-2 relative border-l-2 md:border-l-0 md:border-t-2 border-gold-300 pl-4 md:pl-0 md:pt-4">
                <span className="font-serif text-2xl font-bold text-gold-800 block">{m.year}</span>
                <h4 className="font-serif text-sm font-semibold text-charcoal-900">{m.title}</h4>
                <p className="text-xs text-charcoal-500 font-light leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-charcoal-950 text-ivory-100 p-8 sm:p-12 rounded-sm border border-gold-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl text-ivory-50">Experience the Collection in AI</h3>
            <p className="text-xs text-charcoal-400 font-light">Preview how these 100-year-old traditions drape on your portrait.</p>
          </div>
          <Link
            to="/try-on"
            className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-[0.2em] rounded shrink-0 shadow-gold-sm transition-colors"
          >
            Launch Try-On Studio
          </Link>
        </div>

      </div>
    </div>
  );
}
