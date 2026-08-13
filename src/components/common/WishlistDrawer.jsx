import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Sparkles, Trash2, ArrowRight, Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';

export default function WishlistDrawer({ onOpenEnquiry }) {
  const { wishlist, toggleWishlist, isDrawerOpen, setIsDrawerOpen } = useWishlist();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  const handleTryOn = (productId) => {
    setIsDrawerOpen(false);
    navigate(`/try-on?product=${productId}`);
  };

  const handleEnquireAll = () => {
    setIsDrawerOpen(false);
    if (onOpenEnquiry) {
      onOpenEnquiry({
        name: `Wishlist Set (${wishlist.length} Items)`,
        customMessage: `I am interested in acquiring/viewing these wishlist items: ${wishlist.map(i => i.name).join(', ')}.`
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory-50 shadow-2xl flex flex-col border-l border-gold-200">
          
          {/* Header */}
          <div className="p-6 border-b border-gold-200/70 flex items-center justify-between bg-ivory-100/60">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-gold-600 fill-gold-600" />
              <h2 className="font-serif text-lg font-semibold tracking-wide text-charcoal-900">
                Your Saved Jewels ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-charcoal-500 hover:text-charcoal-900 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-100/60 border border-gold-300/40 flex items-center justify-center mx-auto text-gold-600">
                  <Heart className="w-7 h-7 stroke-1" />
                </div>
                <h3 className="font-serif text-lg text-charcoal-800">Your wishlist is empty</h3>
                <p className="text-xs text-charcoal-500 max-w-xs mx-auto">
                  Save your cherished earrings, necklaces and solitaires to try them on virtually or consult with our stylists.
                </p>
                <div className="pt-2">
                  <Link
                    to="/shop"
                    onClick={() => setIsDrawerOpen(false)}
                    className="inline-flex items-center px-4 py-2.5 bg-charcoal-900 text-gold-200 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-charcoal-800 transition-colors"
                  >
                    Browse Collections
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 p-3 bg-white border border-gold-200/80 rounded shadow-sm hover:border-gold-400 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded bg-ivory-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Link
                            to={`/product/${item.id}`}
                            onClick={() => setIsDrawerOpen(false)}
                            className="font-serif text-xs font-medium text-charcoal-900 hover:text-gold-700 truncate pr-2"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => toggleWishlist(item)}
                            className="text-charcoal-400 hover:text-ruby transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-charcoal-500 block mt-0.5">
                          {item.purity} • {item.weight}
                        </span>
                        <span className="text-xs font-semibold text-charcoal-900 block mt-1">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {/* Item Actions */}
                      <div className="flex items-center space-x-2 pt-2">
                        <button
                          onClick={() => handleTryOn(item.id)}
                          className="flex-1 inline-flex items-center justify-center py-1.5 px-2 bg-gold-100 hover:bg-gold-200 text-gold-900 text-[10px] font-semibold tracking-wider uppercase rounded border border-gold-300 transition-colors"
                        >
                          <Sparkles className="w-3 h-3 mr-1 text-gold-600" />
                          Try On AI
                        </button>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={() => setIsDrawerOpen(false)}
                          className="py-1.5 px-2 text-[10px] text-charcoal-600 hover:text-charcoal-900 uppercase font-semibold"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-gold-200/70 bg-ivory-100/60 space-y-3">
              <button
                onClick={handleEnquireAll}
                className="w-full py-3 bg-charcoal-900 hover:bg-charcoal-800 text-gold-200 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center shadow-gold-sm"
              >
                Enquire for Selected Pieces
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
              <Link
                to="/try-on"
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-2.5 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-charcoal-950" />
                Launch Virtual Try-On Studio
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
