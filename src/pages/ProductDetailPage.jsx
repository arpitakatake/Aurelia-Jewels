import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Award, 
  RefreshCw, 
  Check, 
  MessageCircle, 
  ChevronRight, 
  ArrowLeft,
  Gem,
  Truck,
  FileCheck
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetailPage({ onOpenEnquiry }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);
  const [activeTab, setActiveTab] = useState('specifications');
  const [copied, setCopied] = useState(false);

  // Update active image when product changes
  useEffect(() => {
    setActiveImage(product.gallery?.[0] || product.image);
    window.scrollTo(0, 0);
  }, [id, product]);

  const isSaved = isInWishlist(product.id);

  // Suggested matching pieces
  const matchingPieces = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection)
  ).slice(0, 3);

  const handleTryOn = () => {
    navigate(`/try-on?product=${product.id}`);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-ivory-50 font-sans pb-24">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-ivory-100/70 border-b border-gold-200/50 py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-charcoal-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <Link to="/" className="hover:text-gold-700 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-gold-400" />
            <Link to="/shop" className="hover:text-gold-700 transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3 text-gold-400" />
            <Link to={`/shop/${product.category}`} className="hover:text-gold-700 capitalize transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3 text-gold-400" />
            <span className="text-charcoal-900 font-semibold truncate">{product.name}</span>
          </div>

          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center text-xs text-charcoal-600 hover:text-gold-700 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Back to Catalogue
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Active Image Viewport */}
            <div className="relative aspect-[4/4.5] bg-white border border-gold-200 rounded-sm overflow-hidden shadow-sm group">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-charcoal-950/85 backdrop-blur-sm text-gold-300 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded border border-gold-600/40">
                  {product.purity}
                </span>
                {product.bestseller && (
                  <span className="bg-gold-500 text-charcoal-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Share & Wishlist Floating Triggers */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 bg-white/80 backdrop-blur-md rounded-full text-charcoal-700 hover:text-gold-700 shadow-sm transition-colors"
                  title="Share Piece"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2.5 backdrop-blur-md rounded-full shadow-sm transition-colors ${
                    isSaved ? 'bg-ruby text-white' : 'bg-white/80 text-charcoal-700 hover:text-ruby'
                  }`}
                  title="Add to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Instant Virtual Try-On Banner on Image */}
              <div className="absolute bottom-4 inset-x-4">
                <button
                  onClick={handleTryOn}
                  className="w-full py-3 px-4 bg-charcoal-950/90 hover:bg-charcoal-950 text-gold-300 text-xs font-bold uppercase tracking-[0.18em] rounded border border-gold-500/60 shadow-xl backdrop-blur-md transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                  <span>Preview This Creation In AI Virtual Try-On Studio</span>
                </button>
              </div>

            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded border-2 overflow-hidden shrink-0 transition-all ${
                      activeImage === img ? 'border-gold-500 ring-2 ring-gold-200' : 'border-gold-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Heritage Authenticity Callout */}
            <div className="p-4 bg-ivory-100 border border-gold-200/80 rounded flex items-center justify-between text-xs text-charcoal-700">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
                <span>BIS Hallmarked • 100% Certified Natural Diamonds • Insured Shipping</span>
              </div>
              <Link to="/our-story" className="text-gold-800 font-semibold underline shrink-0 ml-2">
                Learn More
              </Link>
            </div>

          </div>

          {/* Right Column: Product Meta & Action CTAs */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">
                {product.collection}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal-900 mt-1 leading-tight">
                {product.name}
              </h1>
              <p className="text-xs text-charcoal-500 mt-2 font-light leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Price & Purity Tag */}
            <div className="p-5 bg-white border border-gold-200 rounded-sm shadow-sm space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-400 block">
                    MRP (Inclusive of all taxes & 3% GST)
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold block">
                    {product.availability}
                  </span>
                  <span className="text-[11px] text-charcoal-500 block mt-1">
                    Gross Wt: <strong className="text-charcoal-900">{product.weight}</strong>
                  </span>
                </div>
              </div>

              {/* Price Breakdown Micro-table */}
              <div className="pt-3 border-t border-gold-100 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-ivory-50 rounded">
                  <span className="text-[10px] text-charcoal-400 block uppercase">Gold Metal</span>
                  <span className="font-semibold text-charcoal-800">{product.goldWeight || product.weight}</span>
                </div>
                <div className="p-2 bg-ivory-50 rounded">
                  <span className="text-[10px] text-charcoal-400 block uppercase">Stones / Polki</span>
                  <span className="font-semibold text-charcoal-800">{product.stoneWeight || 'N/A'}</span>
                </div>
                <div className="p-2 bg-ivory-50 rounded">
                  <span className="text-[10px] text-charcoal-400 block uppercase">Making / Karigari</span>
                  <span className="font-semibold text-gold-700">Included</span>
                </div>
              </div>
            </div>

            {/* THREE MANDATORY CTAs */}
            <div className="space-y-3 pt-2">
              
              {/* CTA 1: Try It On (Primary Highlight) */}
              <button
                onClick={handleTryOn}
                className="w-full py-4 bg-charcoal-950 hover:bg-charcoal-800 text-gold-300 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-sm border border-gold-500/50 shadow-gold-md hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                <span>✨ Try It On</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                
                {/* CTA 2: Add to Wishlist */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`py-3.5 px-4 rounded-sm border text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 ${
                    isSaved
                      ? 'bg-ruby/10 border-ruby text-ruby'
                      : 'bg-white hover:bg-gold-50 border-gold-300 text-charcoal-800'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-ruby' : 'text-charcoal-600'}`} />
                  <span>{isSaved ? 'Saved in Wishlist' : '♡ Add to Wishlist'}</span>
                </button>

                {/* CTA 3: Enquire Now */}
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(product)}
                  className="py-3.5 px-4 bg-gold-500 hover:bg-gold-400 text-charcoal-950 rounded-sm text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-charcoal-950" />
                  <span>Enquire Now</span>
                </button>

              </div>

            </div>

            {/* Specifications & Description Accordion / Tabs */}
            <div className="bg-white border border-gold-200 rounded-sm overflow-hidden shadow-sm">
              
              {/* Tab Header */}
              <div className="flex border-b border-gold-200 text-xs uppercase tracking-wider font-semibold">
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`flex-1 py-3 px-4 text-center transition-colors ${
                    activeTab === 'specifications'
                      ? 'bg-ivory-50 text-gold-800 border-b-2 border-gold-600 font-bold'
                      : 'text-charcoal-500 hover:text-charcoal-900'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('description')}
                  className={`flex-1 py-3 px-4 text-center transition-colors ${
                    activeTab === 'description'
                      ? 'bg-ivory-50 text-gold-800 border-b-2 border-gold-600 font-bold'
                      : 'text-charcoal-500 hover:text-charcoal-900'
                  }`}
                >
                  Craft & Story
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`flex-1 py-3 px-4 text-center transition-colors ${
                    activeTab === 'shipping'
                      ? 'bg-ivory-50 text-gold-800 border-b-2 border-gold-600 font-bold'
                      : 'text-charcoal-500 hover:text-charcoal-900'
                  }`}
                >
                  Assurance
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 text-xs text-charcoal-700">
                {activeTab === 'specifications' && (
                  <div className="divide-y divide-gold-100 space-y-2">
                    {product.specifications ? (
                      Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="pt-2 first:pt-0 flex justify-between">
                          <span className="text-charcoal-500 font-medium">{key}</span>
                          <span className="font-semibold text-charcoal-900 text-right">{value}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex justify-between py-1">
                          <span className="text-charcoal-500">Purity</span>
                          <span className="font-semibold text-charcoal-900">{product.purity}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-charcoal-500">Gross Weight</span>
                          <span className="font-semibold text-charcoal-900">{product.weight}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-charcoal-500">Metal Composition</span>
                          <span className="font-semibold text-charcoal-900">{product.material}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {activeTab === 'description' && (
                  <div className="space-y-3 leading-relaxed font-light">
                    <p>{product.description}</p>
                    <p className="text-gold-800 font-medium italic">
                      Every piece is stamped with the official Aurelia maker's hallmark and BIS laser verification.
                    </p>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2.5">
                      <Truck className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-charcoal-900 block">Insured Vault Delivery</strong>
                        <span className="text-charcoal-500 text-[11px]">Free tamper-proof armoured courier shipping across India within 3–5 business days.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <RefreshCw className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-charcoal-900 block">15-Day Inspection & Lifetime Exchange</strong>
                        <span className="text-charcoal-500 text-[11px]">Complimentary ring resizing, lifetime cleaning, and gold exchange guarantee.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Complete the Look Section */}
        {matchingPieces.length > 0 && (
          <div className="mt-20 pt-16 border-t border-gold-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">Curated Pairings</span>
                <h3 className="font-serif text-2xl text-charcoal-900 font-normal">Complete the Ensemble</h3>
              </div>
              <Link to="/shop" className="text-xs uppercase tracking-widest text-charcoal-800 font-semibold hover:text-gold-700">
                View All Pairings →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {matchingPieces.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
