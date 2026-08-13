import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Search, 
  Menu, 
  X, 
  TrendingUp, 
  MapPin, 
  BookOpen, 
  ShoppingBag,
  ChevronDown
} from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';

export default function Navbar({ onOpenSearch, onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const { count, setIsDrawerOpen } = useWishlist();
  const { currency, toggleCurrency } = useCurrency();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Heritage Gold Rates Notice Bar */}
      <div className="bg-charcoal-950 text-gold-200 text-xs py-1.5 px-4 tracking-widest uppercase border-b border-gold-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center space-x-4">
            <span className="flex items-center text-gold-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
              Live 22K Gold: ₹6,645/g
            </span>
            <span className="text-charcoal-400">|</span>
            <span className="text-ivory-300">100% BIS Hallmarked & GIA Certified Solitaires</span>
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6 text-[11px]">
            <Link to="/gold-rates" className="hover:text-gold-accent transition-colors flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-gold-400" />
              Check Today's Gold Rates
            </Link>
            <div className="flex items-center space-x-3">
              <button 
                onClick={toggleCurrency} 
                className="text-ivory-300 hover:text-gold-300 font-medium px-2 py-0.5 border border-gold-800/60 rounded text-[10px] tracking-wider transition-colors"
                title="Toggle Currency"
              >
                {currency === 'INR' ? '₹ INR' : '$ USD'}
              </button>
              <button 
                onClick={() => onOpenEnquiry && onOpenEnquiry(null)}
                className="text-gold-400 hover:text-gold-200 underline underline-offset-2"
              >
                VIP Concierge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-gold-200/50 py-3.5'
            : 'bg-ivory-100 border-b border-gold-200/30 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-charcoal-800 hover:text-gold-600 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <button
                onClick={onOpenSearch}
                className="p-2 ml-1 text-charcoal-800 hover:text-gold-600 focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-1 lg:flex-initial text-center lg:text-left">
              <Link to="/" className="inline-flex flex-col items-center lg:items-start group">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-charcoal-900 font-semibold uppercase group-hover:text-gold-600 transition-colors">
                  Aurelia
                </span>
                <span className="text-[9px] tracking-[0.35em] text-gold-600 uppercase font-medium -mt-1">
                  Haute Joaillerie
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] font-medium text-charcoal-800">
              
              {/* Shop Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `flex items-center py-2 transition-colors hover:text-gold-600 ${
                      isActive ? 'text-gold-700 font-semibold border-b-2 border-gold-500' : ''
                    }`
                  }
                >
                  Shop
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${shopDropdownOpen ? 'rotate-180 text-gold-600' : ''}`} />
                </NavLink>

                {/* Dropdown Menu */}
                {shopDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-ivory-50 shadow-xl border border-gold-200 rounded-sm py-3 px-2 z-50 animate-fade-in">
                    <div className="space-y-1">
                      <Link
                        to="/shop"
                        className="block px-4 py-2 text-[11px] text-charcoal-800 hover:bg-gold-50 hover:text-gold-700 rounded transition-colors"
                      >
                        All Creations
                      </Link>
                      <Link
                        to="/shop/gold"
                        className="block px-4 py-2 text-[11px] text-charcoal-800 hover:bg-gold-50 hover:text-gold-700 rounded transition-colors"
                      >
                        22K & 24K Gold Jewellery
                      </Link>
                      <Link
                        to="/shop/diamond"
                        className="block px-4 py-2 text-[11px] text-charcoal-800 hover:bg-gold-50 hover:text-gold-700 rounded transition-colors"
                      >
                        Certified Solitaire Diamonds
                      </Link>
                      <Link
                        to="/shop/silver"
                        className="block px-4 py-2 text-[11px] text-charcoal-800 hover:bg-gold-50 hover:text-gold-700 rounded transition-colors"
                      >
                        925 Sterling Silver
                      </Link>
                      <Link
                        to="/shop/gemstones"
                        className="block px-4 py-2 text-[11px] text-charcoal-800 hover:bg-gold-50 hover:text-gold-700 rounded transition-colors"
                      >
                        Precious Gemstones & Polki
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/collections"
                className={({ isActive }) =>
                  `py-2 transition-colors hover:text-gold-600 ${
                    isActive ? 'text-gold-700 font-semibold border-b-2 border-gold-500' : ''
                  }`
                }
              >
                Collections
              </NavLink>

              {/* AI Virtual Try-On Highlight Link */}
              <NavLink
                to="/try-on"
                className={({ isActive }) =>
                  `relative flex items-center py-2 px-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gold-500 text-ivory-50 shadow-gold-sm' 
                      : 'bg-gold-100/70 text-charcoal-900 hover:bg-gold-200 border border-gold-300/60'
                  }`
                }
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold-600 animate-pulse-subtle" />
                <span className="font-semibold tracking-[0.12em]">Virtual Try-On</span>
                <span className="ml-1.5 bg-charcoal-900 text-gold-300 text-[9px] px-1.5 py-0.2 rounded uppercase font-bold tracking-normal">
                  AI
                </span>
              </NavLink>

              <NavLink
                to="/gold-rates"
                className={({ isActive }) =>
                  `py-2 transition-colors hover:text-gold-600 ${
                    isActive ? 'text-gold-700 font-semibold border-b-2 border-gold-500' : ''
                  }`
                }
              >
                Gold Rates
              </NavLink>

              <NavLink
                to="/our-story"
                className={({ isActive }) =>
                  `py-2 transition-colors hover:text-gold-600 ${
                    isActive ? 'text-gold-700 font-semibold border-b-2 border-gold-500' : ''
                  }`
                }
              >
                Our Story
              </NavLink>

              <NavLink
                to="/stores"
                className={({ isActive }) =>
                  `py-2 transition-colors hover:text-gold-600 ${
                    isActive ? 'text-gold-700 font-semibold border-b-2 border-gold-500' : ''
                  }`
                }
              >
                Stores
              </NavLink>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              
              {/* Desktop Search Button */}
              <button
                onClick={onOpenSearch}
                className="hidden lg:flex items-center text-charcoal-700 hover:text-gold-600 transition-colors p-1.5"
                title="Search Creations"
                aria-label="Search jewellery"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-1.5 text-charcoal-800 hover:text-gold-600 transition-colors"
                title="Your Wishlist"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-600 text-ivory-50 text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-ivory-100">
                    {count}
                  </span>
                )}
              </button>

              {/* Primary Try-On CTA Button */}
              <Link
                to="/try-on"
                className="hidden sm:inline-flex items-center justify-center bg-charcoal-900 hover:bg-charcoal-800 text-gold-300 text-xs font-medium uppercase tracking-[0.15em] px-4 py-2.5 rounded-sm border border-gold-500/40 shadow-sm transition-all duration-200 hover:shadow-gold-sm"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
                Try In AI
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[102px] bg-ivory-50 border-b border-gold-200 shadow-2xl py-6 px-6 z-40 max-h-[80vh] overflow-y-auto animate-fade-in">
            <nav className="flex flex-col space-y-4 text-sm uppercase tracking-widest font-medium text-charcoal-800">
              <Link to="/try-on" className="flex items-center justify-between p-3 bg-gold-100/80 rounded border border-gold-300 text-gold-900 font-semibold">
                <span className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-gold-600" />
                  AI Virtual Try-On
                </span>
                <span className="bg-charcoal-900 text-gold-300 text-[10px] px-2 py-0.5 rounded uppercase">
                  Studio
                </span>
              </Link>
              <Link to="/shop" className="py-2 border-b border-ivory-200 flex justify-between">
                <span>Catalogue & All Jewellery</span>
                <span className="text-xs text-gold-600 font-normal">Explore →</span>
              </Link>
              <div className="pl-4 space-y-2 text-xs text-charcoal-600 normal-case tracking-normal">
                <Link to="/shop/gold" className="block py-1">22K & 24K Gold Jewellery</Link>
                <Link to="/shop/diamond" className="block py-1">Certified Solitaire Diamonds</Link>
                <Link to="/shop/silver" className="block py-1">925 Sterling Silver</Link>
                <Link to="/shop/gemstones" className="block py-1">Precious Gemstones & Polki</Link>
              </div>
              <Link to="/collections" className="py-2 border-b border-ivory-200">
                Collections & Lookbook
              </Link>
              <Link to="/gold-rates" className="py-2 border-b border-ivory-200 flex items-center justify-between">
                <span>Today's Gold Rates</span>
                <span className="text-xs text-emerald-600 font-medium">₹6,645/g (22K)</span>
              </Link>
              <Link to="/our-story" className="py-2 border-b border-ivory-200">
                Brand Heritage & Craft
              </Link>
              <Link to="/stores" className="py-2 border-b border-ivory-200 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gold-600" />
                Find Boutiques
              </Link>
              <Link to="/contact" className="py-2">
                Bespoke Enquiry & Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
