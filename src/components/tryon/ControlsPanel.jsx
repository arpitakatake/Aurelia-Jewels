import React from 'react';
import { Sliders, RotateCcw, Eye, Move, Maximize2, RotateCw, Sun } from 'lucide-react';

export default function ControlsPanel({
  options,
  setOptions,
  onReset,
  isSplitView,
  setIsSplitView
}) {
  const handleChange = (key, val) => {
    setOptions((prev) => ({
      ...prev,
      [key]: parseFloat(val)
    }));
  };

  return (
    <div className="bg-white border border-gold-200 rounded-sm p-4 sm:p-5 shadow-sm space-y-4 font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gold-100 pb-3">
        <div className="flex items-center space-x-2 text-charcoal-900">
          <Sliders className="w-4 h-4 text-gold-600" />
          <h4 className="font-serif text-sm font-semibold">Fine-Tune Alignment</h4>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsSplitView(!isSplitView)}
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border transition-colors ${
              isSplitView 
                ? 'bg-charcoal-900 text-gold-300 border-charcoal-900' 
                : 'bg-ivory-100 text-charcoal-700 border-gold-200 hover:bg-gold-50'
            }`}
          >
            {isSplitView ? 'Before/After: ON' : 'Split View'}
          </button>
          <button
            onClick={onReset}
            className="p-1.5 text-charcoal-400 hover:text-gold-700 rounded hover:bg-gold-50 transition-colors"
            title="Reset to default landmarks"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        
        {/* Vertical Position */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-charcoal-700">
            <span className="flex items-center text-[11px] font-medium">
              <Move className="w-3 h-3 mr-1 text-gold-600" />
              Vertical Height (Y)
            </span>
            <span className="font-mono text-[10px] text-charcoal-500">{options.offsetY}%</span>
          </div>
          <input
            type="range"
            min="20"
            max="80"
            step="1"
            value={options.offsetY}
            onChange={(e) => handleChange('offsetY', e.target.value)}
            className="w-full h-1.5 bg-ivory-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
          />
        </div>

        {/* Scale */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-charcoal-700">
            <span className="flex items-center text-[11px] font-medium">
              <Maximize2 className="w-3 h-3 mr-1 text-gold-600" />
              Jewellery Size (Scale)
            </span>
            <span className="font-mono text-[10px] text-charcoal-500">{options.scale.toFixed(2)}x</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="1.8"
            step="0.05"
            value={options.scale}
            onChange={(e) => handleChange('scale', e.target.value)}
            className="w-full h-1.5 bg-ivory-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
          />
        </div>

        {/* Horizontal Position */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-charcoal-700">
            <span className="flex items-center text-[11px] font-medium">
              <Move className="w-3 h-3 mr-1 text-gold-600" />
              Horizontal Center (X)
            </span>
            <span className="font-mono text-[10px] text-charcoal-500">{options.offsetX}%</span>
          </div>
          <input
            type="range"
            min="-30"
            max="30"
            step="1"
            value={options.offsetX}
            onChange={(e) => handleChange('offsetX', e.target.value)}
            className="w-full h-1.5 bg-ivory-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
          />
        </div>

        {/* Rotation */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-charcoal-700">
            <span className="flex items-center text-[11px] font-medium">
              <RotateCw className="w-3 h-3 mr-1 text-gold-600" />
              Neck Tilt Angle
            </span>
            <span className="font-mono text-[10px] text-charcoal-500">{options.rotation}°</span>
          </div>
          <input
            type="range"
            min="-25"
            max="25"
            step="1"
            value={options.rotation}
            onChange={(e) => handleChange('rotation', e.target.value)}
            className="w-full h-1.5 bg-ivory-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
          />
        </div>

      </div>

    </div>
  );
}
