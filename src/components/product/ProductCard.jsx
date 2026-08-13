import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Sparkles, Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';

export default function ProductCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  const isSaved = isInWishlist(product.id);
  const secondaryImage = product.gallery && product.gallery[1] ? product.gallery[1] : product.image;

  const handleTryOn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/try-on?product=${product.id}`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div
      className="group relative bg-white border border-gold-200/80 rounded-sm overflow-hidden shadow-sm hover:shadow-luxury-hover hover:border-gold-400/90 transition-all duration-300 flex flex-col font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Viewport */}
      <Link to={`/product/${product.id}`} className="relative aspect-[4/4.5] overflow-hidden bg-ivory-100 block">
        <img
          src={isHovered ? secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Purity & Hallmark Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="bg-charcoal-950/85 backdrop-blur-sm text-gold-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-sm border border-gold-600/40">
            {product.purity}
          </span>
          {product.bestseller && (
            <span className="bg-gold-500 text-charcoal-950 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlist}
          aria-label={isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isSaved
              ? 'bg-ruby/90 text-white shadow-md'
              : 'bg-white/80 text-charcoal-700 hover:bg-white hover:text-ruby shadow-sm'
          }`}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Action Overlay on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleTryOn}
            className="flex-1 py-2 px-3 bg-charcoal-950/90 hover:bg-charcoal-900 text-gold-300 text-[11px] font-semibold uppercase tracking-wider rounded-sm border border-gold-500/50 backdrop-blur-sm shadow-md flex items-center justify-center transition-all hover:shadow-gold-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold-400 animate-pulse-subtle" />
            Try On AI
          </button>
        </div>
      </Link>

      {/* Product Details Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-700 font-semibold block">
            {product.collection}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="font-serif text-sm sm:text-base font-semibold text-charcoal-900 hover:text-gold-700 line-clamp-1 transition-colors mt-0.5"
          >
            {product.name}
          </Link>
          <p className="text-xs text-charcoal-500 line-clamp-1 mt-1 font-light">
            {product.tagline || product.description}
          </p>
        </div>

        {/* Price & Weight Meta */}
        <div className="pt-2 border-t border-gold-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-charcoal-400 block text-[10px] uppercase tracking-wider">
              {product.weight} Gross
            </span>
            <span className="font-serif text-sm sm:text-base font-bold text-charcoal-900">
              {formatPrice(product.price)}
            </span>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="text-[11px] uppercase tracking-widest text-charcoal-800 font-semibold hover:text-gold-600 flex items-center transition-colors"
          >
            Details
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}
