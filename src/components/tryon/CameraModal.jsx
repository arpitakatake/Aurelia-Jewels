import React, { useState, useRef, useEffect } from 'react';
import { Camera, X, RefreshCw, Check, AlertCircle, Sparkles } from 'lucide-react';

export default function CameraModal({ isOpen, onClose, onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  useEffect(() => {
    if (isOpen && !capturedPhoto) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => stopCamera();
  }, [isOpen, capturedPhoto]);

  const startCamera = async () => {
    setError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        },
        audio: false
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Camera access error:", err);
      setError("Camera access was not granted. Please ensure your browser has camera permissions or upload a portrait photo instead.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const takeSnapshot = () => {
    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          performCapture();
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const performCapture = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 800;
    canvas.height = video.videoHeight || 1000;
    const ctx = canvas.getContext('2d');
    
    // Draw mirrored selfie for natural feel
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
    setCapturedPhoto(dataUrl);
    stopCamera();
  };

  const handleConfirm = () => {
    if (capturedPhoto) {
      onCapture(capturedPhoto);
      onClose();
    }
  };

  const handleRetake = () => {
    setCapturedPhoto(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 sm:p-6 md:p-10 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-charcoal-950 border border-gold-600/60 rounded-sm shadow-2xl overflow-hidden z-10 text-ivory-100">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-charcoal-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <h3 className="font-serif text-lg font-semibold text-ivory-50">
              Live Camera Selfie Snapshot
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-charcoal-400 hover:text-ivory-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewport Area */}
        <div className="relative aspect-[4/5] bg-charcoal-900 flex items-center justify-center overflow-hidden">
          {error ? (
            <div className="p-6 text-center space-y-4 max-w-sm">
              <AlertCircle className="w-12 h-12 text-ruby mx-auto" />
              <p className="text-xs text-charcoal-300 leading-relaxed">{error}</p>
              <button
                onClick={startCamera}
                className="px-4 py-2 bg-gold-500 text-charcoal-950 text-xs font-semibold uppercase tracking-wider rounded"
              >
                Retry Camera
              </button>
            </div>
          ) : capturedPhoto ? (
            <img
              src={capturedPhoto}
              alt="Captured Portrait"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover transform -scale-x-100"
              />

              {/* Facial & Neckline Guide Oval */}
              <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                <div className="w-56 h-72 border-2 border-dashed border-gold-400/60 rounded-full flex items-center justify-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-300/80 bg-charcoal-950/60 px-2 py-0.5 rounded -mt-20">
                    Align Face & Neckline
                  </span>
                </div>
              </div>

              {/* Countdown Overlay */}
              {countdown && (
                <div className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-xs flex items-center justify-center">
                  <span className="font-serif text-8xl font-bold text-gold-400 animate-ping">
                    {countdown}
                  </span>
                </div>
              )}
            </>
          )}

          {/* Hidden Canvas for capture processing */}
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {/* Action Controls */}
        <div className="p-4 sm:p-5 border-t border-charcoal-800 bg-charcoal-900/60 flex items-center justify-between">
          <span className="text-[11px] text-charcoal-400 font-light">
            Tip: Keep your neck clear and look straight for optimal necklace fitting.
          </span>

          <div className="flex items-center space-x-3">
            {capturedPhoto ? (
              <>
                <button
                  onClick={handleRetake}
                  className="px-4 py-2 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-200 text-xs font-semibold uppercase tracking-wider rounded flex items-center"
                >
                  <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                  Retake
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-5 py-2 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-wider rounded flex items-center"
                >
                  <Check className="w-4 h-4 mr-1.5" />
                  Use Photo
                </button>
              </>
            ) : (
              <button
                disabled={!!error || countdown !== null}
                onClick={takeSnapshot}
                className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-charcoal-950 text-xs font-bold uppercase tracking-widest rounded flex items-center shadow-gold-sm transition-all"
              >
                <Camera className="w-4 h-4 mr-2" />
                Capture Selfie
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
