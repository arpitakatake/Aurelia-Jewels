import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Upload, 
  Camera, 
  Layers, 
  RotateCcw, 
  Sliders, 
  Check, 
  Info, 
  Image as ImageIcon,
  UserCheck,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { PRESET_MODELS } from '../data/tryOnModels';
import { processVirtualTryOn } from '../services/virtualTryOn';
import TryOnCanvas from '../components/tryon/TryOnCanvas';
import JewellerySelector from '../components/tryon/JewellerySelector';
import CameraModal from '../components/tryon/CameraModal';
import ControlsPanel from '../components/tryon/ControlsPanel';

export default function TryOnPage({ onOpenEnquiry }) {
  const [searchParams] = useSearchParams();
  const initialProductId = searchParams.get('product');

  // Active Product Selection
  const [selectedProduct, setSelectedProduct] = useState(() => {
    if (initialProductId) {
      const found = PRODUCTS.find((p) => p.id === initialProductId);
      if (found) return found;
    }
    return PRODUCTS[0]; // Default to Maharani Nizam Polki Choker
  });

  // Active Model / User Image
  const [selectedModel, setSelectedModel] = useState(PRESET_MODELS[0]);
  const [userImage, setUserImage] = useState(PRESET_MODELS[0].image);
  const [compositeUrl, setCompositeUrl] = useState(null);

  // Studio Processing State
  const [isProcessing, setIsProcessing] = useState(false);
  const [progressInfo, setProgressInfo] = useState({ step: 1, message: '', progress: 0 });
  const [isSplitView, setIsSplitView] = useState(false);

  // Modals
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const fileInputRef = useRef(null);

  // Fine-tuning alignment parameters
  const [options, setOptions] = useState({
    scale: 1.05,
    offsetY: 48,
    offsetX: 0,
    rotation: 0
  });

  // Sync initial product if changed via URL
  useEffect(() => {
    if (initialProductId) {
      const found = PRODUCTS.find((p) => p.id === initialProductId);
      if (found) {
        setSelectedProduct(found);
        resetOptionsForProduct(found);
      }
    }
  }, [initialProductId]);

  const resetOptionsForProduct = (prod) => {
    const cfg = prod.tryOnConfig || {};
    setOptions({
      scale: cfg.defaultScale || 1.0,
      offsetY: cfg.defaultOffsetY || 50,
      offsetX: cfg.defaultOffsetX || 0,
      rotation: 0
    });
  };

  // Trigger AI Virtual Try-On Synthesis when product, image, or options change
  useEffect(() => {
    let isCancelled = false;

    async function runTryOn() {
      if (!userImage || !selectedProduct) return;
      setIsProcessing(true);

      try {
        const result = await processVirtualTryOn({
          userImageUrl: userImage,
          product: selectedProduct,
          options,
          onProgress: (info) => {
            if (!isCancelled) setProgressInfo(info);
          }
        });

        if (!isCancelled && result.success) {
          setCompositeUrl(result.resultImageUrl);
        }
      } catch (err) {
        console.error("Virtual Try-On Processing Error:", err);
      } finally {
        if (!isCancelled) setIsProcessing(false);
      }
    }

    runTryOn();

    return () => {
      isCancelled = true;
    };
  }, [userImage, selectedProduct, options.scale, options.offsetY, options.offsetX, options.rotation]);

  // Handle Product Switch
  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    resetOptionsForProduct(prod);
  };

  // Handle Preset Model Switch
  const handleSelectPresetModel = (model) => {
    setSelectedModel(model);
    setUserImage(model.image);
  };

  // Handle Custom Photo File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setUserImage(event.target.result);
        setSelectedModel(null);
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle Camera Capture
  const handleCameraCapture = (capturedDataUrl) => {
    setUserImage(capturedDataUrl);
    setSelectedModel(null);
  };

  const handleResetControls = () => {
    if (selectedProduct) {
      resetOptionsForProduct(selectedProduct);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory-100 font-sans pb-24">
      
      {/* Studio Header Banner */}
      <div className="bg-charcoal-900 border-b border-gold-800/60 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-950/80 border border-gold-600/50 text-gold-300 text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>AI Haute Joaillerie Studio</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory-50 font-normal">
              Virtual Try-On Experience
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-400 font-light max-w-xl">
              Preview necklaces, chokers, chandbalis, and solitaires draped naturally over your portrait with real-time anatomical landmark alignment.
            </p>
          </div>

          {/* Quick Photo Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Upload Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-5 py-2.5 bg-charcoal-800 hover:bg-charcoal-700 text-gold-300 text-xs font-semibold uppercase tracking-wider rounded border border-gold-700/60 transition-colors flex items-center shadow-sm"
            >
              <Upload className="w-4 h-4 mr-2 text-gold-400" />
              Upload Photo
            </button>

            {/* Camera Button */}
            <button
              onClick={() => setIsCameraOpen(true)}
              className="px-5 py-2.5 bg-charcoal-800 hover:bg-charcoal-700 text-gold-300 text-xs font-semibold uppercase tracking-wider rounded border border-gold-700/60 transition-colors flex items-center shadow-sm"
            >
              <Camera className="w-4 h-4 mr-2 text-gold-400" />
              Camera Selfie
            </button>

          </div>

        </div>
      </div>

      {/* Model Selector Bar */}
      <div className="bg-charcoal-900/50 border-b border-charcoal-800 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center space-x-2 text-charcoal-400">
            <UserCheck className="w-4 h-4 text-gold-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">Choose Portrait Preset:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {PRESET_MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => handleSelectPresetModel(model)}
                className={`px-3 py-1.5 rounded text-xs font-medium border transition-all flex items-center space-x-2 ${
                  selectedModel?.id === model.id
                    ? 'bg-gold-950 border-gold-500 text-gold-300 shadow-sm'
                    : 'bg-charcoal-900 border-charcoal-700 text-charcoal-300 hover:border-charcoal-600'
                }`}
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>{model.name.split(' ')[0]}</span>
              </button>
            ))}

            {!selectedModel && (
              <span className="px-3 py-1.5 bg-gold-600 text-charcoal-950 font-bold rounded text-xs">
                Custom Upload Photo
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Main Studio Interactive Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left / Center: Main Studio Canvas Viewport */}
          <div className="lg:col-span-7 space-y-6">
            
            <TryOnCanvas
              userImage={userImage}
              selectedProduct={selectedProduct}
              options={options}
              compositeUrl={compositeUrl}
              isProcessing={isProcessing}
              progressInfo={progressInfo}
              isSplitView={isSplitView}
              onOpenUpload={() => fileInputRef.current?.click()}
              onOpenCamera={() => setIsCameraOpen(true)}
              onOpenEnquiry={onOpenEnquiry}
            />

            {/* Fine-Tuning Alignment Controls */}
            <ControlsPanel
              options={options}
              setOptions={setOptions}
              onReset={handleResetControls}
              isSplitView={isSplitView}
              setIsSplitView={setIsSplitView}
            />

          </div>

          {/* Right Column: Jewellery Selection Tray & Active Details */}
          <div className="lg:col-span-5">
            <JewellerySelector
              selectedProduct={selectedProduct}
              onSelectProduct={handleSelectProduct}
              onOpenEnquiry={onOpenEnquiry}
            />
          </div>

        </div>
      </div>

      {/* Camera Capture Modal */}
      <CameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCameraCapture}
      />

    </div>
  );
}
