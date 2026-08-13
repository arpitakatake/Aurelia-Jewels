import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { BOUTIQUES } from '../data/stores';

export default function StoresPage() {
  const [selectedBoutique, setSelectedBoutique] = useState(BOUTIQUES[0]);
  const [appointment, setAppointment] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '14:00',
    categoryInterest: 'bridal_trousseau',
    notes: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-ivory-50 font-sans pb-24">
      
      {/* Header */}
      <div className="bg-charcoal-950 text-ivory-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-gold-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block">
            Bespoke Haute Joaillerie Salons
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-ivory-50 font-normal">
            Aurelia Flagship Boutiques
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto font-light">
            Visit our private bridal suites in Mumbai, New Delhi, Bengaluru, Hyderabad, and Chennai. Experience bespoke trousseau consultations with master karigars.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Boutique List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOUTIQUES.map((boutique) => {
            const isSelected = selectedBoutique.id === boutique.id;
            return (
              <div
                key={boutique.id}
                onClick={() => setSelectedBoutique(boutique)}
                className={`bg-white border rounded-sm overflow-hidden shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-gold-500 ring-2 ring-gold-300/50 shadow-gold-sm'
                    : 'border-gold-200 hover:border-gold-400'
                }`}
              >
                {/* Boutique Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory-100">
                  <img
                    src={boutique.image}
                    alt={boutique.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-sm text-gold-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded">
                    {boutique.city}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-900">
                      {boutique.name}
                    </h3>
                    <p className="text-xs text-charcoal-600 flex items-start leading-relaxed font-light">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{boutique.address}</span>
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-charcoal-500 pt-3 border-t border-gold-100">
                    <p className="flex items-center">
                      <Phone className="w-3.5 h-3.5 mr-2 text-gold-600" />
                      <span>{boutique.phone}</span>
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-2 text-gold-600" />
                      <span>{boutique.hours}</span>
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {boutique.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[10px] bg-gold-50 border border-gold-200 text-charcoal-700 px-2 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBoutique(boutique);
                      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2 bg-charcoal-950 hover:bg-charcoal-800 text-gold-300 text-xs font-semibold uppercase tracking-wider rounded transition-colors mt-2"
                  >
                    Select for Private Appointment
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive VIP Appointment Booking Form */}
        <div id="booking-form" className="bg-white border border-gold-300 rounded-sm p-6 sm:p-12 shadow-sm space-y-6">
          
          <div className="border-b border-gold-100 pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block">
                VIP Private Consultation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-semibold mt-0.5">
                Reserve Salon at {selectedBoutique.name}
              </h2>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 bg-gold-100 text-gold-900 text-xs font-bold rounded uppercase">
              {selectedBoutique.city}
            </span>
          </div>

          {confirmed ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-gold-100 rounded-full border border-gold-400 flex items-center justify-center mx-auto text-gold-800">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900 font-semibold">Appointment Reserved</h3>
              <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Thank you, {appointment.name}. Our boutique manager at {selectedBoutique.name} will call you to confirm your private bridal suite and prepare curated selections.
              </p>
              <button
                onClick={() => setConfirmed(false)}
                className="px-6 py-2.5 bg-charcoal-950 text-gold-300 text-xs font-semibold uppercase tracking-wider rounded"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitAppointment} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={appointment.name}
                    onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                    placeholder="e.g. Radhika Merchant"
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Mobile (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={appointment.phone}
                    onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={appointment.email}
                    onChange={(e) => setAppointment({ ...appointment, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={appointment.date}
                    onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={appointment.time}
                    onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  >
                    <option value="11:00">11:00 AM (Morning Salon)</option>
                    <option value="14:00">02:00 PM (Afternoon Suite)</option>
                    <option value="16:30">04:30 PM (Evening Consultation)</option>
                    <option value="19:00">07:00 PM (Private VIP Viewing)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={appointment.categoryInterest}
                    onChange={(e) => setAppointment({ ...appointment, categoryInterest: e.target.value })}
                    className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                  >
                    <option value="bridal_trousseau">Royal Bridal Trousseau & Sets</option>
                    <option value="solitaires">Solitaire Engagement Rings</option>
                    <option value="temple_gold">Vedic Temple Gold Jewellery</option>
                    <option value="custom_bespoke">Bespoke Custom Commission</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                  Special Preferences / Stylist Notes
                </label>
                <textarea
                  rows="2"
                  value={appointment.notes}
                  onChange={(e) => setAppointment({ ...appointment, notes: e.target.value })}
                  placeholder="Mention any specific pieces from Virtual Try-On you'd like to inspect in person..."
                  className="w-full bg-ivory-50 border border-gold-300 rounded px-3.5 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-600"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 bg-charcoal-950 hover:bg-charcoal-800 text-gold-300 text-xs font-bold uppercase tracking-[0.2em] rounded shadow-gold-sm transition-all flex items-center justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirm Private Appointment
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
