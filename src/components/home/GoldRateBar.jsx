import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Calculator, ArrowRight, MapPin, Clock } from 'lucide-react';
import { GOLD_RATES } from '../../data/goldRates';
import { useCurrency } from '../../context/CurrencyContext';

export default function GoldRateBar() {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [grams, setGrams] = useState(10);
  const [karat, setKarat] = useState("22K");
  const { formatPrice } = useCurrency();

  const cityData = GOLD_RATES.cities.find((c) => c.name === selectedCity) || GOLD_RATES.cities[0];
  const ratePerGram = karat === "24K" ? cityData.rate24K : (karat === "22K" ? cityData.rate22K : cityData.rate18K);
  const totalValue = ratePerGram * (Number(grams) || 0);

  return (
    <section className="py-16 bg-ivory-50 border-b border-gold-200/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Transparent Daily Bullion Rates</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal mt-1">
              Today's Live Gold Benchmark
            </h2>
          </div>

          <div className="flex items-center space-x-4 text-xs text-charcoal-600">
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-gold-600" />
              <span>{GOLD_RATES.lastUpdated}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-gold-600" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-white border border-gold-300 rounded px-2.5 py-1 text-xs text-charcoal-900 font-semibold focus:outline-none focus:border-gold-600"
              >
                {GOLD_RATES.cities.map((c) => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* 24K Card */}
          <div className="p-6 bg-white border border-gold-200 rounded-sm shadow-sm hover:border-gold-400 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block">Bullion / Pure</span>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">24 Karat (999)</h3>
              </div>
              <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded border border-emerald-200">
                +₹35/g
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-gold-100 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-charcoal-500">Per 1 Gram</span>
                <span className="font-serif text-xl font-bold text-charcoal-900 block">{formatPrice(cityData.rate24K)}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-charcoal-500">10 Grams</span>
                <span className="font-serif text-sm font-semibold text-charcoal-700 block">{formatPrice(cityData.rate24K * 10)}</span>
              </div>
            </div>
          </div>

          {/* 22K Card (Standard Jewellery) */}
          <div className="p-6 bg-gold-50/80 border-2 border-gold-400 rounded-sm shadow-sm relative">
            <span className="absolute -top-2.5 right-4 bg-gold-600 text-ivory-50 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
              Standard Jewellery
            </span>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gold-800 font-semibold block">BIS 916 Hallmarked</span>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">22 Karat (916)</h3>
              </div>
              <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded border border-emerald-200">
                +₹32/g
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-gold-200 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-charcoal-600 font-medium">Per 1 Gram</span>
                <span className="font-serif text-xl font-bold text-gold-900 block">{formatPrice(cityData.rate22K)}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-charcoal-600 font-medium">10 Grams</span>
                <span className="font-serif text-sm font-semibold text-charcoal-800 block">{formatPrice(cityData.rate22K * 10)}</span>
              </div>
            </div>
          </div>

          {/* 18K Card */}
          <div className="p-6 bg-white border border-gold-200 rounded-sm shadow-sm hover:border-gold-400 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block">Diamond Jewellery</span>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">18 Karat (750)</h3>
              </div>
              <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded border border-emerald-200">
                +₹26/g
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-gold-100 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-charcoal-500">Per 1 Gram</span>
                <span className="font-serif text-xl font-bold text-charcoal-900 block">{formatPrice(cityData.rate18K)}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-charcoal-500">10 Grams</span>
                <span className="font-serif text-sm font-semibold text-charcoal-700 block">{formatPrice(cityData.rate18K * 10)}</span>
              </div>
            </div>
          </div>

          {/* Silver Card */}
          <div className="p-6 bg-white border border-gold-200 rounded-sm shadow-sm hover:border-gold-400 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block">Pure Silver 999</span>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">Sterling Silver</h3>
              </div>
              <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded border border-emerald-200">
                +₹0.60/g
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-gold-100 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-charcoal-500">Per 1 Gram</span>
                <span className="font-serif text-xl font-bold text-charcoal-900 block">{formatPrice(88.5)}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-charcoal-500">1 Kg (1000g)</span>
                <span className="font-serif text-sm font-semibold text-charcoal-700 block">{formatPrice(88500)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Quick Price Calculator Bar */}
        <div className="p-6 bg-white border border-gold-300 rounded-sm shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-charcoal-900">
            <div className="p-2.5 bg-gold-100 border border-gold-300 rounded text-gold-800">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold">Quick Gold Value Calculator</h4>
              <p className="text-xs text-charcoal-500">Estimate current pure metal value at today's {selectedCity} rate</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center bg-ivory-100 border border-gold-300 rounded px-3 py-1.5">
              <label className="text-xs text-charcoal-500 mr-2 font-medium">Weight:</label>
              <input
                type="number"
                min="1"
                max="500"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                className="w-16 bg-transparent text-xs font-bold text-charcoal-900 focus:outline-none"
              />
              <span className="text-xs text-charcoal-600 font-semibold">grams</span>
            </div>

            <select
              value={karat}
              onChange={(e) => setKarat(e.target.value)}
              className="bg-ivory-100 border border-gold-300 rounded px-3 py-1.5 text-xs text-charcoal-900 font-bold focus:outline-none"
            >
              <option value="24K">24K (999 Pure)</option>
              <option value="22K">22K (916 Jewellery)</option>
              <option value="18K">18K (750 Diamond)</option>
            </select>

            <div className="px-4 py-1.5 bg-gold-50 border border-gold-400 rounded">
              <span className="text-[10px] uppercase tracking-wider text-gold-800 font-semibold block">Estimated Value</span>
              <span className="font-serif text-base font-bold text-charcoal-900">{formatPrice(totalValue)}</span>
            </div>

            <Link
              to="/gold-rates"
              className="px-4 py-2 bg-charcoal-950 text-gold-300 text-xs font-semibold uppercase tracking-wider rounded hover:bg-charcoal-800 transition-colors flex items-center shrink-0"
            >
              Full Rates & History
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
