import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  SlidersHorizontal, 
  Sparkles, 
  X, 
  Search, 
  ChevronDown, 
  Gem, 
  ArrowUpDown,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ShopPage() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync category param from URL
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [category]);

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Main Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // 2. Subcategory filter
      if (selectedSubCategory !== 'all' && product.subCategory !== selectedSubCategory) {
        return false;
      }
      // 3. Collection filter
      if (selectedCollection !== 'all' && product.collection !== selectedCollection) {
        return false;
      }
      // 4. Material filter
      if (selectedMaterial !== 'all' && !product.material.toLowerCase().includes(selectedMaterial.toLowerCase())) {
        return false;
      }
      // 5. Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches = 
          product.name.toLowerCase().includes(q) ||
          product.material.toLowerCase().includes(q) ||
          product.collection.toLowerCase().includes(q) ||
          product.purity.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [selectedCategory, selectedSubCategory, selectedMaterial, selectedCollection, sortBy, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubCategory('all');
    setSelectedMaterial('all');
    setSelectedCollection('all');
    setSortBy('featured');
    setSearchQuery('');
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedSubCategory !== 'all' || 
    selectedMaterial !== 'all' || 
    selectedCollection !== 'all' || 
    searchQuery !== '';

  return (
    <div className="min-h-screen bg-ivory-100/60 font-sans pb-24">
      
      {/* Category Banner / Header */}
      <div className="bg-charcoal-950 text-ivory-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-gold-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-3 relative z-10">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold">
            <Link to="/" className="hover:text-gold-200">Home</Link>
            <span>/</span>
            <span>Shop</span>
            {activeCategoryMeta && (
              <>
                <span>/</span>
                <span className="text-ivory-200">{activeCategoryMeta.name}</span>
              </>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ivory-50 font-normal">
            {activeCategoryMeta ? activeCategoryMeta.name : 'The Aurelia Haute Joaillerie Catalogue'}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto font-light">
            {activeCategoryMeta 
              ? activeCategoryMeta.description 
              : 'Explore handcrafted 22K gold chokers, certified solitaire diamonds, temple jewellery, and precious gemstones ready for AI Virtual Try-On.'}
          </p>

          {/* AI Try-On Banner Callout */}
          <div className="pt-3">
            <Link
              to="/try-on"
              className="inline-flex items-center px-4 py-2 bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/50 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
              Try Any Piece in Virtual Studio →
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Filter & Sort Bar */}
        <div className="bg-white border border-gold-200 rounded-sm p-4 mb-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Category Navigation Quick Links */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <Link
              to="/shop"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-charcoal-950 text-gold-300'
                  : 'bg-ivory-100 text-charcoal-700 hover:bg-gold-50'
              }`}
            >
              All ({PRODUCTS.length})
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop/${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-charcoal-950 text-gold-300'
                    : 'bg-ivory-100 text-charcoal-700 hover:bg-gold-50'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Right: Search, Sort & Mobile Filter Trigger */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
            
            {/* Search Input */}
            <div className="relative flex-1 md:w-48">
              <Search className="w-3.5 h-3.5 text-charcoal-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter jewellery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-ivory-50 border border-gold-200 rounded pl-8 pr-3 py-1.5 text-xs text-charcoal-900 focus:outline-none focus:border-gold-500 placeholder:text-charcoal-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-ivory-50 border border-gold-200 rounded px-3 py-1.5 text-xs text-charcoal-800 font-semibold focus:outline-none focus:border-gold-500"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden p-2 bg-ivory-100 text-charcoal-800 border border-gold-200 rounded"
              title="Filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Left Filter Sidebar */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border border-gold-200 rounded-sm p-6 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-gold-100 pb-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal-900 flex items-center">
                  <Filter className="w-3.5 h-3.5 mr-1.5 text-gold-600" />
                  Refine Creations
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[11px] text-gold-700 hover:text-gold-900 flex items-center"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Reset
                  </button>
                )}
              </div>

              {/* SubCategory Filter */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-700 block">
                  Category Style
                </span>
                <div className="space-y-1.5 text-xs text-charcoal-600">
                  {[
                    { id: 'all', label: 'All Styles' },
                    { id: 'chokers', label: 'Chokers' },
                    { id: 'necklaces', label: 'Necklaces & Haar' },
                    { id: 'earrings', label: 'Earrings & Chandbalis' },
                    { id: 'rings', label: 'Solitaire Rings' },
                    { id: 'bangles', label: 'Kadas & Bangles' }
                  ].map((sub) => (
                    <label key={sub.id} className="flex items-center cursor-pointer hover:text-gold-800 py-0.5">
                      <input
                        type="radio"
                        name="subcategory"
                        checked={selectedSubCategory === sub.id}
                        onChange={() => setSelectedSubCategory(sub.id)}
                        className="text-gold-600 focus:ring-gold-500 mr-2.5"
                      />
                      <span>{sub.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Collections Filter */}
              <div className="space-y-2 pt-4 border-t border-gold-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-700 block">
                  Heritage Collection
                </span>
                <div className="space-y-1.5 text-xs text-charcoal-600">
                  {[
                    { id: 'all', label: 'All Collections' },
                    { id: 'Royal Nizam Heritage', label: 'Royal Nizam Heritage' },
                    { id: 'Vedic Temple Gold', label: 'Vedic Temple Gold' },
                    { id: 'Aethel Solitaires', label: 'Aethel Solitaires' },
                    { id: 'Noor Modern Diamond', label: 'Noor Modern Diamond' },
                    { id: 'Aura Everyday 18K', label: 'Aura Everyday 18K' }
                  ].map((col) => (
                    <label key={col.id} className="flex items-center cursor-pointer hover:text-gold-800 py-0.5">
                      <input
                        type="radio"
                        name="collection"
                        checked={selectedCollection === col.id}
                        onChange={() => setSelectedCollection(col.id)}
                        className="text-gold-600 focus:ring-gold-500 mr-2.5"
                      />
                      <span className="truncate">{col.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Purity & Metal Filter */}
              <div className="space-y-2 pt-4 border-t border-gold-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-700 block">
                  Metal & Purity
                </span>
                <div className="space-y-1.5 text-xs text-charcoal-600">
                  {[
                    { id: 'all', label: 'All Metals' },
                    { id: '22K', label: '22K Gold (BIS 916)' },
                    { id: '18K', label: '18K Gold (White / Rose / Yellow)' },
                    { id: 'Silver', label: '925 Sterling Silver' }
                  ].map((met) => (
                    <label key={met.id} className="flex items-center cursor-pointer hover:text-gold-800 py-0.5">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === met.id}
                        onChange={() => setSelectedMaterial(met.id)}
                        className="text-gold-600 focus:ring-gold-500 mr-2.5"
                      />
                      <span>{met.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* AI Try-On Promo in Sidebar */}
              <div className="p-4 bg-gold-50 border border-gold-300 rounded space-y-2 text-center">
                <Sparkles className="w-5 h-5 text-gold-600 mx-auto" />
                <h5 className="font-serif text-xs font-bold text-charcoal-900">Virtual Fitting Studio</h5>
                <p className="text-[11px] text-charcoal-600 leading-relaxed font-light">
                  Want to see how these designs drape on you?
                </p>
                <Link
                  to="/try-on"
                  className="inline-block w-full py-2 bg-charcoal-950 text-gold-200 text-[10px] uppercase tracking-widest font-semibold rounded hover:bg-charcoal-800 transition-colors"
                >
                  Open Try-On Studio
                </Link>
              </div>

            </div>
          </aside>

          {/* Right Product Grid */}
          <main className="lg:col-span-9">
            
            {/* Results Count & Active Tags */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-charcoal-500">
                Showing <strong className="text-charcoal-900 font-semibold">{filteredProducts.length}</strong> creations
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-gold-700 hover:text-gold-900 font-medium underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-gold-200 rounded-sm p-16 text-center space-y-4 shadow-sm">
                <Gem className="w-12 h-12 text-gold-400 mx-auto stroke-1" />
                <h3 className="font-serif text-xl text-charcoal-900">No creations match your current filters</h3>
                <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
                  Try clearing your search query or choosing another material or collection.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-charcoal-950 text-gold-200 text-xs font-semibold uppercase tracking-wider rounded"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
}
