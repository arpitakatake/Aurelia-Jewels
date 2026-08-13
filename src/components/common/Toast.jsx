import React from 'react';
import { Sparkles, X } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

export default function Toast() {
  const { toastMessage, setToastMessage } = useWishlist();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up font-sans">
      <div className="bg-charcoal-950 text-ivory-100 border border-gold-400 px-4 py-3 rounded shadow-2xl flex items-center space-x-3 max-w-md">
        <Sparkles className="w-4 h-4 text-gold-400 shrink-0 animate-pulse" />
        <p className="text-xs font-medium text-ivory-100 flex-1">{toastMessage}</p>
        <button
          onClick={() => setToastMessage(null)}
          className="text-charcoal-400 hover:text-ivory-100 p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
