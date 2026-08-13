import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export default function ComparisonSlider({ beforeImage, afterImage, alt = "Try-On Comparison" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percent = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full rounded-sm overflow-hidden select-none bg-charcoal-950 cursor-ew-resize border border-gold-400/40 shadow-2xl"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After Image (Full Layer with Jewellery) */}
      <img
        src={afterImage}
        alt={`${alt} (With Jewellery)`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Clipped Left Layer without Jewellery) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} (Original)`}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          draggable={false}
        />
        {/* Left Badge */}
        <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-sm text-ivory-200 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-charcoal-700">
          Original Photo
        </div>
      </div>

      {/* Right Badge */}
      <div className="absolute top-4 right-4 bg-gold-950/85 backdrop-blur-sm text-gold-300 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-gold-600/60">
        AI Try-On Applied
      </div>

      {/* Draggable Divider Line & Knob */}
      <div
        className="absolute inset-y-0 w-1 bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.8)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-charcoal-950 border-2 border-gold-400 flex items-center justify-center text-gold-400 shadow-xl">
          <ChevronsLeftRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-ivory-300/80 bg-charcoal-950/60 px-3 py-1 rounded-full backdrop-blur-xs font-mono">
          ← Drag to Compare Before & After →
        </span>
      </div>
    </div>
  );
}
