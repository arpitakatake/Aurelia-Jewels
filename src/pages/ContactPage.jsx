import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'bespoke_design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/912268904400?text=Hello%20Aurelia%20Jewels%20Concierge,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20jewellery%20order.', '_blank');
  };

  const faqs = [
    {
      q: "How does the AI Virtual Try-On work?",
      a: "Our AI Virtual Try-On uses anatomical landmark detection to align jewellery geometry with your neck, collarbones, and ears. Ambient lighting and reflections are calibrated to match your photo naturally."
    },
    {
      q: "Are all gold and diamond pieces certified?",
      a: "Yes. Every single piece is 100% BIS Hallmarked (22K 916 or 18K 750) with government laser engraving. All solitaire diamonds are certified by GIA or IGI and laser-inscribed with unique serials."
    },
    {
      q: "Can I commission a customized bridal jewellery set?",
      a: "Absolutely. Our master karigars collaborate with you to create bespoke heirloom trousseaus. You can upload reference images or select elements from our Virtual Try-On catalogue to start."
    },
    {
      q: "What is your lifetime exchange policy?",
      a: "We offer a transparent lifetime exchange and buyback policy. Gold is valued at 100% of the prevailing bullion rate on the day of exchange, and diamonds receive 100% exchange value for upgrades."
    },
    {
      q: "How is high jewellery delivered safely?",
      a: "All online orders are dispatched in tamper-proof security cases via fully insured armoured logistics partners directly to your doorstep."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-50 font-sans pb-24">
      
      {/* Header */}
      <div className="bg-charcoal-950 text-ivory-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-gold-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block">
            Client Services & Bespoke Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-ivory-50 font-normal">
            Connect with Aurelia
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto font-light">
            Our private client advisors and master jewelers are available for bespoke commissions, boutique appointments, and sizing inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-gold-200 rounded-sm p-6 space-y-3 shadow-sm text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-800 mx-auto sm:mx-0">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">VIP Client Care</h3>
            <p className="text-xs text-charcoal-500 font-light">Direct phone support from our luxury concierge team.</p>
            <p className="text-xs font-bold text-gold-900 pt-1">+91 22 6890 4400 / 4401</p>
          </div>

          <div className="bg-white border border-gold-200 rounded-sm p-6 space-y-3 shadow-sm text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mx-auto sm:mx-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">WhatsApp Concierge</h3>
            <p className="text-xs text-charcoal-500 font-light">Instant real-time video stylist and image sharing.</p>
            <button
              onClick={handleWhatsApp}
              className="text-xs font-bold text-emerald-700 hover:underline pt-1 block"
            >
              Open WhatsApp Chat →
            </button>
          </div>

          <div className="bg-white border border-gold-200 rounded-sm p-6 space-y-3 shadow-sm text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-800 mx-auto sm:mx-0">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-semibold text-charcoal-900">Private Salon Enquiries</h3>
            <p className="text-xs text-charcoal-500 font-light">Formal proposals, media, and bespoke requests.</p>
            <p className="text-xs font-bold text-gold-900 pt-1">concierge@aureliajewels.com</p>
          </div>

        </div>

        {/* Form and Map Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white border border-gold-300 rounded-sm p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">
                Bespoke Enquiry
              </span>
              <h2 className="font-serif text-2xl text-charcoal-900 font-semibold mt-1">
                Send a Message to Our Ateliers
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center mx-auto text-gold-800">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal-900 font-semibold">Message Received</h3>
                <p className="text-xs text-charcoal-600 max-w-sm mx-auto">
                  Thank you. An Aurelia private stylist will respond to your enquiry within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-charcoal-950 text-gold-200 text-xs uppercase font-semibold rounded mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Gayatri Devi"
                      className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                    >
                      <option value="bespoke_design">Bespoke Custom Commission</option>
                      <option value="tryon_query">Virtual Try-On Sizing Inquiry</option>
                      <option value="bridal_appointment">Bridal Suite Reservation</option>
                      <option value="gold_exchange">Gold Exchange & Valuation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements, desired gemstones, timeline or questions..."
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-charcoal-950 hover:bg-charcoal-800 text-gold-300 text-xs font-bold uppercase tracking-[0.2em] rounded shadow-gold-sm transition-all flex items-center"
                >
                  <Send className="w-3.5 h-3.5 mr-2" />
                  Submit Client Enquiry
                </button>

              </form>
            )}

          </div>

          {/* Right FAQs */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">
                Frequently Answered
              </span>
              <h3 className="font-serif text-xl text-charcoal-900 font-semibold mt-0.5">
                Client Questions & Guidance
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gold-200 rounded-sm overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs font-semibold text-charcoal-900 hover:text-gold-700"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-gold-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-charcoal-600 leading-relaxed font-light border-t border-gold-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* BIS Stamp Callout */}
            <div className="p-4 bg-gold-50 border border-gold-300 rounded-sm flex items-center space-x-3 text-xs text-charcoal-800">
              <ShieldCheck className="w-6 h-6 text-gold-700 shrink-0" />
              <div>
                <strong className="block font-semibold">100% Certified Authentic</strong>
                <span className="text-[11px] text-charcoal-600">Every piece comes with physical BIS Hallmark Card & GIA/IGI certificate.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
