import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  MapPin, 
  Clock, 
  Calculator, 
  ShieldCheck, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { GOLD_RATES } from '../data/goldRates';
import { useCurrency } from '../context/CurrencyContext';

export default function GoldRatesPage({ onOpenEnquiry }) {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [calcGrams, setCalcGrams] = useState(25);
  const [calcKarat, setCalcKarat] = useState('22K');
  const [makingChargePercent, setMakingChargePercent] = useState(12);
  const { formatPrice } = useCurrency();

  const cityData = GOLD_RATES.cities.find((c) => c.name === selectedCity) || GOLD_RATES.cities[0];
  const ratePerGram = calcKarat === '24K' ? cityData.rate24K : (calcKarat === '22K' ? cityData.rate22K : cityData.rate18K);
  
  const rawMetalValue = ratePerGram * (Number(calcGrams) || 0);
  const makingCharges = rawMetalValue * (Number(makingChargePercent) / 100);
  const gstValue = (rawMetalValue + makingCharges) * 0.03; // 3% GST standard
  const estimatedTotal = rawMetalValue + makingCharges + gstValue;

  return (
    <div className="min-h-screen bg-ivory-50 font-sans pb-24">
      
      {/* Header */}
      <div className="bg-charcoal-950 text-ivory-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-gold-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Bullion & Jewellery Benchmarks</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-ivory-50 font-normal">
            Today's Live Gold Rates
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto font-light">
            Transparent, government-benchmarked rates updated twice daily across all major metropolitan Indian cities.
          </p>

          <div className="pt-2 flex items-center justify-center space-x-4 text-xs text-charcoal-300">
            <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-gold-400" /> {GOLD_RATES.lastUpdated}</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">{GOLD_RATES.trend}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* City Filter Bar */}
        <div className="bg-white border border-gold-200 rounded-sm p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs font-semibold text-charcoal-900 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-gold-600" />
            <span>Select Benchmark City:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {GOLD_RATES.cities.map((city) => (
              <button
                key={city.name}
                onClick={() => setSelectedCity(city.name)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded transition-colors ${
                  selectedCity === city.name
                    ? 'bg-charcoal-950 text-gold-300 shadow-sm'
                    : 'bg-ivory-100 text-charcoal-700 hover:bg-gold-50'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Live Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(GOLD_RATES.rates).map(([key, data]) => {
            const is22K = key === '22K';
            const price = key === '24K' ? cityData.rate24K : (key === '22K' ? cityData.rate22K : (key === '18K' ? cityData.rate18K : data.pricePerGram));

            return (
              <div
                key={key}
                className={`p-6 rounded-sm shadow-sm transition-all flex flex-col justify-between ${
                  is22K
                    ? 'bg-gold-50/90 border-2 border-gold-400 relative'
                    : 'bg-white border border-gold-200'
                }`}
              >
                {is22K && (
                  <span className="absolute -top-2.5 right-4 bg-gold-600 text-ivory-50 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                    Standard Jewellery
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal-500 font-bold block">
                        Purity: {data.purityPercent}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-0.5">
                        {data.name}
                      </h3>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded border border-emerald-200">
                      {data.changeToday}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-500 mt-2 font-light leading-relaxed">
                    {data.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-200/60 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-charcoal-600 font-medium">Rate / 1 Gram</span>
                    <span className="font-serif text-xl font-bold text-charcoal-900">{formatPrice(price)}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-charcoal-500">
                    <span>Rate / 10 Grams</span>
                    <span className="font-semibold text-charcoal-800">{formatPrice(price * 10)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Comprehensive Gold Value Calculator */}
        <div className="bg-white border border-gold-300 rounded-sm p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex items-center space-x-3 border-b border-gold-100 pb-4">
            <div className="p-3 bg-gold-100 border border-gold-300 rounded-full text-gold-800">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl text-charcoal-900 font-semibold">
                Interactive Transparent Jewellery Price Estimator
              </h2>
              <p className="text-xs text-charcoal-500">
                Calculate transparent breakdown: Bullion Gold Cost + Making Charges + 3% GST
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Jewellery Gross Weight (Grams)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={calcGrams}
                    onChange={(e) => setCalcGrams(e.target.value)}
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2.5 text-sm font-bold text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Gold Purity Karat
                  </label>
                  <select
                    value={calcKarat}
                    onChange={(e) => setCalcKarat(e.target.value)}
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2.5 text-sm font-bold text-charcoal-900 focus:outline-none focus:border-gold-600"
                  >
                    <option value="22K">22K (916 BIS Hallmarked Jewellery)</option>
                    <option value="18K">18K (750 Solitaire & Diamond Jewellery)</option>
                    <option value="24K">24K (999 Pure Bullion)</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <label className="uppercase tracking-wider font-semibold text-charcoal-700">
                    Artisan Making Charges (Karigari):
                  </label>
                  <span className="font-bold text-gold-800">{makingChargePercent}%</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="25"
                  value={makingChargePercent}
                  onChange={(e) => setMakingChargePercent(e.target.value)}
                  className="w-full h-2 bg-ivory-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
                />
                <span className="text-[10px] text-charcoal-400 block mt-1">
                  Ranges from 8% (machine chains) to 18–25% (handcrafted jadau & temple antique).
                </span>
              </div>

            </div>

            {/* Calculated Output Breakdown Card */}
            <div className="lg:col-span-5 bg-charcoal-950 text-ivory-100 p-6 rounded-sm border border-gold-700 space-y-4 shadow-xl">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
                Estimated Valuation Breakdown
              </span>

              <div className="space-y-2 text-xs divide-y divide-charcoal-800">
                <div className="flex justify-between pt-1">
                  <span className="text-charcoal-400">Pure Gold ({calcGrams}g @ {formatPrice(ratePerGram)}/g)</span>
                  <span className="font-semibold">{formatPrice(rawMetalValue)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-charcoal-400">Making Charges ({makingChargePercent}%)</span>
                  <span className="font-semibold">{formatPrice(makingCharges)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-charcoal-400">GST (3% Indian Standard)</span>
                  <span className="font-semibold">{formatPrice(gstValue)}</span>
                </div>
                <div className="flex justify-between pt-3 text-sm">
                  <span className="font-serif font-bold text-gold-300">Estimated Total Value</span>
                  <span className="font-serif font-bold text-gold-300 text-lg">{formatPrice(estimatedTotal)}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry({ name: `Custom Order: ${calcGrams}g ${calcKarat} Gold Piece` })}
                  className="w-full py-2.5 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Lock This Rate With Stylist
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 7-Day Historical Trend Table */}
        <div className="bg-white border border-gold-200 rounded-sm p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-charcoal-900">7-Day Bullion Trend History (Mumbai)</h3>
              <p className="text-xs text-charcoal-500">Benchmark variation over the last 7 trading days</p>
            </div>
            <TrendingUp className="w-5 h-5 text-gold-600" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-charcoal-700">
              <thead className="bg-ivory-100 text-charcoal-900 uppercase tracking-wider text-[11px] font-semibold border-y border-gold-200">
                <tr>
                  <th className="py-3 px-4">Date / Day</th>
                  <th className="py-3 px-4">22K Gold (per gram)</th>
                  <th className="py-3 px-4">24K Pure Gold (per gram)</th>
                  <th className="py-3 px-4">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold-100">
                {GOLD_RATES.history7Days.map((item, idx) => (
                  <tr key={idx} className="hover:bg-ivory-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-charcoal-900">{item.day}</td>
                    <td className="py-3 px-4">{formatPrice(item.rate22K)}</td>
                    <td className="py-3 px-4">{formatPrice(item.rate24K)}</td>
                    <td className="py-3 px-4">
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[10px]">
                        Stable / Bullish
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
