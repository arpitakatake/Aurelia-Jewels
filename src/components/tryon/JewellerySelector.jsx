import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, Gem, ExternalLink, Info } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCurrency } from '../../context/CurrencyContext';

export default function JewellerySelector({ selectedProduct, onSelectProduct, onOpenEnquiry }) {
  const [filterCategory, setFilterCategory] = useState('all');
  const { formatPrice } = useCurrency();

  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'chokers', label: 'Chokers' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'rings', label: 'Rings & Bangles' }
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'rings') return p.subCategory === 'rings' || p.subCategory === 'bangles';
    return p.subCategory === filterCategory;
  });

  return (
    <div className="bg-white border border-gold-200 rounded-sm p-4 sm:p-5 shadow-sm space-y-4 font-sans flex flex-col h-full">
      
      {/* Category Pills */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold flex items-center">
            <Gem className="w-3.5 h-3.5 mr-1.5 text-gold-600" />
            Jewellery Tray ({filteredProducts.length})
          </span>
          <span className="text-[11px] text-charcoal-400">Click to try on</span>
        </div>

        <div className="flex flex-wrap gap-1.5 pb-2 border-b border-gold-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1 text-[11px] uppercase tracking-wider font-semibold rounded transition-colors ${
                filterCategory === cat.id
                  ? 'bg-charcoal-950 text-gold-300 shadow-xs'
                  : 'bg-ivory-100 text-charcoal-600 hover:bg-gold-50 hover:text-charcoal-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Jewellery Grid List */}
      <div className="flex-1 overflow-y-auto max-h-[380px] pr-1 space-y-2.5 custom-scrollbar">
        {filteredProducts.map((product) => {
          const isSelected = selectedProduct && selectedProduct.id === product.id;
          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className={`p-2.5 rounded border transition-all cursor-pointer flex items-center space-x-3 group relative ${
                isSelected
                  ? 'bg-gold-50/90 border-gold-500 shadow-sm'
                  : 'bg-white border-gold-200/70 hover:border-gold-300 hover:bg-ivory-50/60'
              }`}
            >
              <div className="relative w-14 h-14 rounded overflow-hidden bg-ivory-100 shrink-0 border border-gold-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-gold-600/30 flex items-center justify-center">
                    <Check className="w-5 h-5 text-charcoal-950 font-bold bg-gold-400 rounded-full p-0.5" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-gold-700">
                    {product.purity}
                  </span>
                  <span className="font-serif text-xs font-bold text-charcoal-900">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <h5 className="font-serif text-xs font-semibold text-charcoal-900 truncate mt-0.5 group-hover:text-gold-700">
                  {product.name}
                </h5>
                <span className="text-[11px] text-charcoal-500 block truncate font-light">
                  {product.collection} • {product.weight}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Selected Jewellery Card Info */}
      {selectedProduct && (
        <div className="p-3 bg-ivory-100/90 border border-gold-300/80 rounded space-y-2 mt-auto">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-gold-800 font-bold block">
                Currently On Viewport
              </span>
              <h4 className="font-serif text-xs font-bold text-charcoal-900">
                {selectedProduct.name}
              </h4>
            </div>
            <span className="font-serif text-xs font-bold text-gold-900">
              {formatPrice(selectedProduct.price)}
            </span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Link
              to={`/product/${selectedProduct.id}`}
              target="_blank"
              className="flex-1 py-1.5 px-2 bg-white hover:bg-gold-50 text-charcoal-800 text-[10px] font-semibold uppercase tracking-wider rounded border border-gold-200 flex items-center justify-center transition-colors"
            >
              <span>Specifications</span>
              <ExternalLink className="w-3 h-3 ml-1 text-charcoal-400" />
            </Link>
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(selectedProduct)}
              className="flex-1 py-1.5 px-2 bg-charcoal-950 hover:bg-charcoal-800 text-gold-200 text-[10px] font-semibold uppercase tracking-wider rounded transition-colors"
            >
              Enquire Piece
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
