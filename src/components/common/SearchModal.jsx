import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Sparkles, ArrowRight, Gem } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCurrency } from '../../context/CurrencyContext';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = PRODUCTS.filter((p) => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subCategory.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.purity.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (url) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative max-w-2xl mx-auto bg-ivory-50 border border-gold-300 rounded-sm shadow-2xl overflow-hidden animate-slide-up">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gold-200 flex items-center bg-white">
          <Search className="w-5 h-5 text-gold-600 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search necklaces, polki chokers, solitaires, 22K gold..."
            className="w-full bg-transparent text-sm sm:text-base text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-charcoal-400 hover:text-charcoal-700 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-charcoal-500 uppercase tracking-widest font-semibold hover:text-charcoal-900 border border-ivory-300 rounded"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="p-5 bg-ivory-100/50">
            <span className="text-[11px] uppercase tracking-widest text-charcoal-500 font-semibold block mb-2.5">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {["Polki Choker", "Solitaire Diamond", "Temple Gold", "22K Necklace", "Chandbali", "Zambian Emerald"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 bg-white hover:bg-gold-50 border border-gold-200 text-xs text-charcoal-800 rounded-full transition-colors flex items-center"
                >
                  <Gem className="w-3 h-3 mr-1.5 text-gold-600" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-96 overflow-y-auto p-4 divide-y divide-gold-100">
            {results.length === 0 ? (
              <div className="py-12 text-center text-charcoal-500 text-sm">
                No jewels found matching "<span className="font-semibold text-charcoal-800">{query}</span>".
                <p className="text-xs text-charcoal-400 mt-1">
                  Try searching by metal (e.g. "22K Gold"), gemstone ("Emerald"), or style ("Choker").
                </p>
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  className="py-3 flex items-center justify-between hover:bg-gold-50/70 p-2 rounded transition-colors group cursor-pointer"
                  onClick={() => handleSelect(`/product/${product.id}`)}
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded bg-ivory-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-charcoal-900 group-hover:text-gold-700 truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-charcoal-500 mt-0.5">
                        {product.purity} • {product.collection}
                      </p>
                      <span className="text-xs font-semibold text-charcoal-900">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0 pl-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(`/try-on?product=${product.id}`);
                      }}
                      className="hidden sm:inline-flex items-center px-2.5 py-1 bg-gold-100 hover:bg-gold-200 text-gold-900 text-[10px] font-semibold tracking-wider uppercase rounded border border-gold-300 transition-colors"
                    >
                      <Sparkles className="w-3 h-3 mr-1 text-gold-600" />
                      Try On AI
                    </button>
                    <ArrowRight className="w-4 h-4 text-charcoal-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}
