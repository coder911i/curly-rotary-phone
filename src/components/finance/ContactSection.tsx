import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../data/financeData';

interface ContactSectionProps {
  onSubmitSuccess: (refId: string, name: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: 'Home Loans',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const generatedRef = 'VAL-' + Math.floor(10000 + Math.random() * 90000);
      onSubmitSuccess(generatedRef, formData.name);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Schedule a Confidential <br />
            <span className="gold-gradient-text">Financial Consultation</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Visit our corporate regional offices or submit your requirement below for a dedicated underwriter callback within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Regional Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="rounded-2xl glass-panel-gold p-6 sm:p-7 space-y-5 shadow-2xl bg-[#090f20]">
              <h3 className="text-lg font-bold font-serif-luxury text-white border-b border-slate-800 pb-3">
                Corporate Headquarters &amp; Helpdesk
              </h3>

              <div className="space-y-4 text-xs">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">Direct Hotline:</span>
                    <a href={`tel:${COMPANY_INFO.helpline.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-amber-400 transition-colors text-sm">
                      {COMPANY_INFO.helplineDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">Advisory &amp; Support Email:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-white hover:text-amber-400 transition-colors text-sm font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">Registered Office:</span>
                    <p className="font-medium text-slate-200 leading-relaxed">
                      {COMPANY_INFO.headquarters.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">Operating Hours:</span>
                    <p className="font-medium text-slate-200">
                      Monday to Saturday: 9:30 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Presence Grid */}
            <div className="rounded-2xl glass-panel p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
                Regional Advisory Centres
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPANY_INFO.branches.map((b, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-xs font-bold text-white block mb-0.5">{b.city}</span>
                    <p className="text-[11px] text-slate-400 font-light line-clamp-2 leading-tight">{b.address}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Callback Request Form */}
          <div className="lg:col-span-7 rounded-2xl glass-panel-gold p-6 sm:p-8 space-y-6 shadow-2xl bg-[#090e1c] border border-amber-500/30">
            
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-400 block mb-1">
                Priority Underwriter Assistance
              </span>
              <h3 className="text-2xl font-bold font-serif-luxury text-white">
                Request a Free Strategic Callback
              </h3>
              <p className="text-xs text-slate-300 pt-1">
                Complete the details below. Our senior financial advisor will review your requirement and call you directly.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-300 text-xs">
                {errorMsg}
              </div>
            )}

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Callback Request Received!</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                  Thank you! Your inquiry has been routed to our senior underwriter desk. We will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Mahindra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Mobile Number (WhatsApp Enabled) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="anand@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Financial Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Government Scheme Guidance" className="bg-slate-900 text-white">Government Scheme Guidance</option>
                      <option value="Other Financial Need" className="bg-slate-900 text-white">Other Financial Need</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Preferred Callback Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs focus:outline-none"
                  >
                    <option value="Immediately (Within 15 mins)">Immediately (Within 15 mins)</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Message / Loan Requirement Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as loan amount needed, property location, income profile, or specific subsidy requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Request a Callback'}</span>
                </button>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Data Protected under ISO 27001
                  </span>
                  <span>Zero Spam Guaranteed</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
