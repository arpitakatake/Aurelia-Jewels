import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Award, RefreshCw, Gem, Phone, Mail, MapPin, ArrowRight, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-300 pt-16 pb-12 border-t border-gold-900/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-charcoal-800/80 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="p-3 bg-gold-950/70 border border-gold-800/50 rounded-full text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-ivory-100 font-serif text-sm font-semibold tracking-wide">100% BIS Hallmarked</h4>
              <p className="text-xs text-charcoal-400 mt-0.5">Government certified 22K & 18K gold purity</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="p-3 bg-gold-950/70 border border-gold-800/50 rounded-full text-gold-400">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-ivory-100 font-serif text-sm font-semibold tracking-wide">IGI & GIA Certified</h4>
              <p className="text-xs text-charcoal-400 mt-0.5">Conflict-free natural solitaire diamonds</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="p-3 bg-gold-950/70 border border-gold-800/50 rounded-full text-gold-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-ivory-100 font-serif text-sm font-semibold tracking-wide">Lifetime Exchange</h4>
              <p className="text-xs text-charcoal-400 mt-0.5">Guaranteed buyback & upgrade policy</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="p-3 bg-gold-950/70 border border-gold-800/50 rounded-full text-gold-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-ivory-100 font-serif text-sm font-semibold tracking-wide">Heritage Karigari</h4>
              <p className="text-xs text-charcoal-400 mt-0.5">Generational royal artisan goldsmithing</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.18em] text-ivory-50 font-semibold uppercase block">
                Aurelia
              </span>
              <span className="text-[10px] tracking-[0.35em] text-gold-400 uppercase font-medium">
                Haute Joaillerie
              </span>
            </Link>
            <p className="text-xs text-charcoal-400 leading-relaxed max-w-sm">
              Weaving centuries of royal Indian goldsmithing with contemporary design and AI technology. Every jewel is crafted to become an heirloom that transcends generations.
            </p>
            
            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-gold-300 font-medium block mb-2">
                Aurelia Private Salon Newsletter
              </span>
              {subscribed ? (
                <div className="flex items-center text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded border border-emerald-800/40">
                  <Check className="w-4 h-4 mr-2" />
                  Thank you. Your exclusive privilege invitation has been sent.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-charcoal-900 border border-gold-800/60 text-ivory-100 px-3.5 py-2 text-xs rounded-l focus:outline-none focus:border-gold-400 flex-1 placeholder:text-charcoal-500"
                  />
                  <button
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-r transition-colors flex items-center"
                  >
                    Join
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links: Creations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300 font-semibold mb-4">
              Creations
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-400">
              <li>
                <Link to="/shop/gold" className="hover:text-gold-300 transition-colors">
                  22K & 24K Gold Jewellery
                </Link>
              </li>
              <li>
                <Link to="/shop/diamond" className="hover:text-gold-300 transition-colors">
                  Solitaire Diamonds
                </Link>
              </li>
              <li>
                <Link to="/shop/silver" className="hover:text-gold-300 transition-colors">
                  925 Sterling Silver
                </Link>
              </li>
              <li>
                <Link to="/shop/gemstones" className="hover:text-gold-300 transition-colors">
                  Polki & Zambian Emeralds
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-gold-300 transition-colors">
                  The Nizam Bridal Trousseau
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold-300 transition-colors">
                  Explore Full Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Innovation & Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300 font-semibold mb-4">
              Experiences
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-400">
              <li>
                <Link to="/try-on" className="text-gold-400 hover:text-gold-200 transition-colors flex items-center font-medium">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-gold-400" />
                  AI Virtual Try-On Studio
                </Link>
              </li>
              <li>
                <Link to="/gold-rates" className="hover:text-gold-300 transition-colors">
                  Live Gold Rates Calculator
                </Link>
              </li>
              <li>
                <Link to="/stores" className="hover:text-gold-300 transition-colors">
                  Book Boutique Appointment
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-gold-300 transition-colors">
                  The Karigar Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">
                  Bespoke High Jewellery Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Boutiques & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300 font-semibold mb-4">
              Boutiques
            </h4>
            <div className="space-y-3 text-xs text-charcoal-400">
              <p className="flex items-start">
                <MapPin className="w-3.5 h-3.5 mr-2 text-gold-400 mt-0.5 shrink-0" />
                <span>Colaba Heritage, Mumbai<br />Mehrauli Couture, New Delhi<br />UB City, Bengaluru</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-gold-400 shrink-0" />
                <span>+91 22 6890 4400</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-gold-400 shrink-0" />
                <span>concierge@aureliajewels.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & BIS Hallmark Signoff */}
        <div className="pt-8 border-t border-charcoal-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-charcoal-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Aurelia Jewels Private Limited. All rights reserved. Handcrafted in India.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-gold-500/80">BIS Certificate No: HM/C-728190</span>
            <Link to="/our-story" className="hover:text-gold-400 transition-colors">Ethical Sourcing</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Privacy & Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
