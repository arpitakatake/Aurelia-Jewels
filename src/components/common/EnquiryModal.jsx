import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageCircle, ShieldCheck, Calendar } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, productData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    consultationType: 'boutique_visit',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Aurelia Jewels Concierge! I am interested in inquiring about: ${
        productData ? productData.name : 'Bespoke Custom Jewellery & Virtual Try-On Collection'
      }. Please share appointment availability and specifications.`
    );
    window.open(`https://wa.me/912268904400?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 sm:p-6 md:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-charcoal-950/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-ivory-50 border border-gold-300 rounded-sm shadow-2xl overflow-hidden animate-slide-up z-10">
        
        {/* Modal Header */}
        <div className="p-6 bg-charcoal-950 text-ivory-100 flex items-center justify-between border-b border-gold-900">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold block">
              Aurelia VIP Concierge
            </span>
            <h3 className="font-serif text-xl font-semibold text-ivory-50 mt-0.5">
              {productData ? `Enquire: ${productData.name}` : 'Private Jewellery Consultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-ivory-400 hover:text-ivory-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center mx-auto text-gold-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-charcoal-900 font-semibold">
                Consultation Request Confirmed
              </h4>
              <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Your private luxury stylist will connect with you via Phone/WhatsApp within 2 business hours.
              </p>
              <div className="p-4 bg-gold-50 border border-gold-300 rounded max-w-xs mx-auto">
                <span className="text-[11px] text-charcoal-500 uppercase tracking-widest block">VIP Reference</span>
                <span className="font-mono text-base font-bold text-gold-800">{refNumber}</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp Now
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-charcoal-900 text-gold-200 text-xs font-semibold uppercase tracking-wider rounded hover:bg-charcoal-800 transition-colors"
                >
                  Return to Boutique
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product context pill if provided */}
              {productData && (
                <div className="p-3 bg-gold-50/90 border border-gold-200 rounded flex items-center space-x-3">
                  {productData.image && (
                    <img
                      src={productData.image}
                      alt={productData.name}
                      className="w-12 h-12 object-cover rounded bg-white shrink-0 border border-gold-300/40"
                    />
                  )}
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold block">Selected Piece</span>
                    <h5 className="font-serif text-xs font-semibold text-charcoal-900 truncate">{productData.name}</h5>
                    <span className="text-[11px] text-charcoal-600">{productData.purity || 'Bespoke Haute Joaillerie'}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maharani Radhika"
                    className="w-full bg-white border border-gold-300/80 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-gold-300/80 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-white border border-gold-300/80 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                    City / Boutique Location
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-gold-300/80 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  >
                    <option value="Mumbai">Mumbai (Colaba Flagship)</option>
                    <option value="Delhi">New Delhi (Mehrauli Maison)</option>
                    <option value="Bengaluru">Bengaluru (UB City)</option>
                    <option value="Hyderabad">Hyderabad (Jubilee Hills)</option>
                    <option value="Chennai">Chennai (Nungambakkam)</option>
                    <option value="International">International / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                  Preferred Experience
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`border p-2.5 rounded text-xs cursor-pointer flex items-center transition-colors ${formData.consultationType === 'boutique_visit' ? 'bg-gold-100/70 border-gold-500 font-semibold' : 'bg-white border-gold-200'}`}>
                    <input
                      type="radio"
                      name="consultationType"
                      value="boutique_visit"
                      checked={formData.consultationType === 'boutique_visit'}
                      onChange={() => setFormData({ ...formData, consultationType: 'boutique_visit' })}
                      className="mr-2 text-gold-600 focus:ring-gold-500"
                    />
                    <span>Private Boutique Visit</span>
                  </label>
                  <label className={`border p-2.5 rounded text-xs cursor-pointer flex items-center transition-colors ${formData.consultationType === 'virtual_call' ? 'bg-gold-100/70 border-gold-500 font-semibold' : 'bg-white border-gold-200'}`}>
                    <input
                      type="radio"
                      name="consultationType"
                      value="virtual_call"
                      checked={formData.consultationType === 'virtual_call'}
                      onChange={() => setFormData({ ...formData, consultationType: 'virtual_call' })}
                      className="mr-2 text-gold-600 focus:ring-gold-500"
                    />
                    <span>Virtual Video Stylist</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1">
                  Notes / Custom Sizing / Try-On Feedback
                </label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention desired delivery date, ring size, customized gemstones or bridal styling preferences..."
                  className="w-full bg-white border border-gold-300/80 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600 placeholder:text-charcoal-400"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-charcoal-900 hover:bg-charcoal-800 text-gold-200 text-xs uppercase tracking-widest font-semibold rounded-sm shadow-gold-sm transition-all flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5 mr-2" />
                  Submit VIP Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  WhatsApp
                </button>
              </div>

              <p className="text-[10px] text-center text-charcoal-500 flex items-center justify-center pt-1">
                <ShieldCheck className="w-3 h-3 mr-1 text-gold-600" />
                Your consultation is 100% confidential under Aurelia Private Client Services.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
