import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Landmark
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, GOVERNMENT_SCHEMES } from '../../data/financeData';

interface FooterProps {
  onOpenLeadModal: (initialService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#04060d] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1 & 2: Brand Info & Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-[1px] shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-heading font-bold text-lg tracking-wider text-white">
                    VALIANT
                  </span>
                  <span className="font-serif-heading font-light text-lg tracking-wider text-amber-400">
                    CAPITAL
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-mono font-medium text-slate-400">
                  Financial Advisory & Loans
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light pr-4">
              {COMPANY_INFO.legalName} is an institutional loan advisory and government subsidy consultancy helping individuals, professionals, and enterprises unlock optimum financing structures across 45+ banking partners.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.helpline.replace(/\s+/g, '')}`} className="hover:text-amber-400 transition-colors font-mono">
                  {COMPANY_INFO.helplineDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.headquarters.address}</span>
              </div>
            </div>

            {/* Certifications Badge */}
            <div className="flex items-center gap-3 pt-3">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001:2015 Certified
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-amber-400 font-semibold flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" /> 45+ Bank Channel Partner
              </span>
            </div>
          </div>

          {/* Column 3: Loan Solutions Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Loan Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenLeadModal(s.title)}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Government Schemes */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Government Schemes
            </h4>
            <ul className="space-y-2 text-xs">
              {GOVERNMENT_SCHEMES.slice(0, 6).map((sch) => (
                <li key={sch.id}>
                  <button
                    onClick={() => onOpenLeadModal(`Government Scheme: ${sch.acronym || sch.name}`)}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <span>{sch.acronym} Subsidy</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('#government-schemes')}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>View All 8+ Schemes</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Quick Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Why Choose Us', href: '#why-choose-us' },
                { label: 'Loan Eligibility Simulator', href: '#calculator' },
                { label: 'Advanced EMI Calculator', href: '#calculator' },
                { label: 'Company Journey', href: '#achievements' },
                { label: 'Client Testimonials', href: '#testimonials' },
                { label: 'Frequently Asked Questions', href: '#faqs' },
                { label: 'Corporate Office Locations', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Regulatory Financial Disclaimer */}
        <div className="py-8 border-b border-slate-800/80 space-y-3 text-[11px] text-slate-400 leading-relaxed font-light">
          <p>
            <strong className="text-slate-300 font-semibold uppercase font-mono">Regulatory &amp; Compliance Disclaimer:</strong> {COMPANY_INFO.legalName} is a licensed independent financial consultancy and corporate DSA / facilitation partner. We do not directly issue loans or collect public deposits. All loan sanctions, interest rate approvals, moratorium terms, and capital disbursements are subject to the independent underwriting policies, credit committees, and loan agreements of the respective scheduled commercial banks, NBFCs, and central/state government nodal agencies.
          </p>
          <p>
            Interest rates, processing charges, and loan-to-value ratios shown on this portal are indicative benchmark figures based on current market trends and may vary according to applicant CIBIL score, income stability, property location, and bank risk tiering.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-400 flex-wrap justify-center">
            <span className="hover:text-amber-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">Terms &amp; Conditions</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">Fair Practice Code</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">Grievance Redressal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
