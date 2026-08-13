import React, { useRef, useEffect, useState } from 'react';
import { 
  Sparkles, 
  Download, 
  Share2, 
  Camera, 
  Upload, 
  MessageCircle, 
  Check, 
  Maximize2, 
  RefreshCw,
  Layers,
  Info,
  ShieldCheck
} from 'lucide-react';
import ComparisonSlider from './ComparisonSlider';

export default function TryOnCanvas({
  userImage,
  selectedProduct,
  options,
  compositeUrl,
  isProcessing,
  progressInfo,
  isSplitView,
  onOpenUpload,
  onOpenCamera,
  onOpenEnquiry
}) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Handle Save / Download Look
  const handleSaveLook = () => {
    if (!compositeUrl && !userImage) return;
    setDownloading(true);
    const link = document.createElement('a');
    link.download = `Aurelia-TryOn-${selectedProduct ? selectedProduct.name.replace(/\s+/g, '-') : 'Look'}.jpg`;
    link.href = compositeUrl || userImage;
    link.click();
    setTimeout(() => setDownloading(false), 1000);
  };

  // Handle Share Look
  const handleShareLook = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Aurelia Jewels - AI Try-On: ${selectedProduct?.name || 'Look'}`,
          text: `Check out how this ${selectedProduct?.purity || '22K'} ${selectedProduct?.name} looks on me using Aurelia Jewels AI Virtual Try-On!`,
          url: window.location.href,
        });
      } catch (e) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-charcoal-950 border border-gold-600/50 rounded-sm overflow-hidden shadow-2xl flex flex-col font-sans">
      
      {/* Viewport Top Bar */}
      <div className="p-3 sm:p-4 bg-charcoal-900 border-b border-charcoal-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs uppercase font-mono tracking-widest text-gold-300">
            Aurelia AI Studio
          </span>
          {selectedProduct && (
            <span className="hidden sm:inline text-xs text-charcoal-400">
              • {selectedProduct.purity}
            </span>
          )}
        </div>

        {/* Change Photo / Camera Quick Triggers */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenCamera}
            className="px-2.5 py-1 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-200 text-xs font-semibold rounded flex items-center transition-colors border border-charcoal-700"
            title="Use Live Camera"
          >
            <Camera className="w-3.5 h-3.5 mr-1 text-gold-400" />
            <span className="hidden sm:inline">Camera</span>
          </button>
          <button
            onClick={onOpenUpload}
            className="px-2.5 py-1 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-200 text-xs font-semibold rounded flex items-center transition-colors border border-charcoal-700"
            title="Upload New Photo"
          >
            <Upload className="w-3.5 h-3.5 mr-1 text-gold-400" />
            <span className="hidden sm:inline">Upload</span>
          </button>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="relative aspect-[4/5] bg-charcoal-950 flex items-center justify-center overflow-hidden">
        
        {/* Processing State Overlay */}
        {isProcessing && (
          <div className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 text-center space-y-5 animate-fade-in">
            
            {/* Animated Gold Ring Spinner */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-2 border-gold-900 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-gold-400 rounded-full border-t-transparent animate-spin"></div>
              <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-gold-400 animate-pulse" />
            </div>

            {/* Neural Stage Messaging */}
            <div className="space-y-2 max-w-sm">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
                {progressInfo?.step ? `NEURAL PIPELINE STEP ${progressInfo.step} OF 5` : 'AI SYNTHESIS IN PROGRESS'}
              </span>
              <h4 className="font-serif text-lg text-ivory-100 font-medium">
                {progressInfo?.message || "Analyzing facial landmarks and lighting..."}
              </h4>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1.5 bg-charcoal-800 rounded-full overflow-hidden border border-gold-900">
              <div
                className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-all duration-300"
                style={{ width: `${progressInfo?.progress || 40}%` }}
              />
            </div>
            
          </div>
        )}

        {/* Viewport Display: Split View or Full Result */}
        {isSplitView && compositeUrl ? (
          <ComparisonSlider
            beforeImage={userImage}
            afterImage={compositeUrl}
            alt={selectedProduct?.name}
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={compositeUrl || userImage}
              alt="Virtual Try-On Result"
              className="w-full h-full object-cover"
            />
            {/* Watermark Crest */}
            <div className="absolute bottom-4 left-4 bg-charcoal-950/70 backdrop-blur-sm px-2.5 py-1 rounded border border-gold-800/60 pointer-events-none">
              <span className="font-serif text-[11px] font-semibold text-gold-300 uppercase tracking-widest">
                Aurelia AI Studio
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Action Bar */}
      <div className="p-4 sm:p-5 bg-charcoal-900 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Active Product Meta */}
        <div className="text-center sm:text-left min-w-0">
          <span className="text-[10px] uppercase font-mono text-gold-400 tracking-wider block">
            {selectedProduct?.collection || 'Haute Joaillerie'}
          </span>
          <h4 className="font-serif text-sm font-semibold text-ivory-100 truncate">
            {selectedProduct?.name || 'Select Jewellery to Try On'}
          </h4>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto">
          
          {/* Save Look Button */}
          <button
            onClick={handleSaveLook}
            disabled={!compositeUrl && !userImage}
            className="px-4 py-2.5 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider rounded border border-charcoal-600 transition-colors flex items-center"
            title="Download this composite image"
          >
            <Download className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
            Save Look
          </button>

          {/* Share Button */}
          <button
            onClick={handleShareLook}
            className="px-4 py-2.5 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider rounded border border-charcoal-600 transition-colors flex items-center"
            title="Share with friends or family"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                Copied Link
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
                Share
              </>
            )}
          </button>

          {/* Enquire About Look CTA */}
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry(selectedProduct)}
            className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-widest rounded shadow-gold-sm transition-all flex items-center"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
            Enquire This Look
          </button>

        </div>

      </div>

    </div>
  );
}
