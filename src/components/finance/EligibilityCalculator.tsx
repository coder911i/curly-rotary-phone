import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  PieChart, 
  Percent, 
  Coins, 
  Building,
  HelpCircle
} from 'lucide-react';

interface EligibilityCalculatorProps {
  onCheckEligibilityWithData: (data: {
    serviceType: string;
    monthlyIncome: number;
    employmentType: string;
    city: string;
    loanAmount: number;
    tenureYears: number;
  }) => void;
}

export const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({
  onCheckEligibilityWithData
}) => {
  const [activeTab, setActiveTab] = useState<'eligibility' | 'emi'>('eligibility');

  // Eligibility Simulator State
  const [loanType, setLoanType] = useState('Home Loan');
  const [monthlyIncome, setMonthlyIncome] = useState(85000);
  const [existingEmis, setExistingEmis] = useState(12000);
  const [employmentType, setEmploymentType] = useState<'salaried' | 'self_employed' | 'business_owner'>('salaried');
  const [city, setCity] = useState('Mumbai');
  const [eligibilityTenure, setEligibilityTenure] = useState(20);

  // EMI Calculator State
  const [emiAmount, setEmiAmount] = useState(5000000); // 50L
  const [emiInterestRate, setEmiInterestRate] = useState(8.5); // 8.5%
  const [emiTenureYears, setEmiTenureYears] = useState(20); // 20 years

  // Eligibility Calculation Logic (Industry Standard FOIR - Fixed Obligation to Income Ratio)
  const calculateEligibility = () => {
    // Standard FOIR: 50% for income < 50k, 60% for 50k-1L, 65% for >1L
    let foir = 0.50;
    if (monthlyIncome > 100000) foir = 0.65;
    else if (monthlyIncome >= 50000) foir = 0.55;

    const availableMonthlyEmi = Math.max(0, (monthlyIncome * foir) - existingEmis);
    
    // Rate assumption per product
    let annualRate = 8.5;
    if (loanType === 'Personal Loan') annualRate = 10.5;
    else if (loanType === 'Business Loan') annualRate = 11.5;
    else if (loanType === 'Loan Against Property') annualRate = 9.25;

    const r = annualRate / (12 * 100);
    const n = eligibilityTenure * 12;

    // Max loan = EMI * ((1+r)^n - 1) / (r * (1+r)^n)
    const maxLoan = availableMonthlyEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));

    return {
      maxLoan: Math.round(maxLoan),
      allowedEmi: Math.round(availableMonthlyEmi),
      foirPercent: Math.round(foir * 100),
      indicativeRate: annualRate
    };
  };

  // EMI Calculation Logic
  const calculateEmiResults = () => {
    const r = emiInterestRate / (12 * 100);
    const n = emiTenureYears * 12;
    const monthlyEmi = (emiAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyEmi * n;
    const totalInterest = totalPayment - emiAmount;

    const principalPercent = Math.round((emiAmount / totalPayment) * 100);
    const interestPercent = 100 - principalPercent;

    return {
      monthlyEmi: Math.round(monthlyEmi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principalPercent,
      interestPercent
    };
  };

  const formatLakhCr = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Crore`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const eligibilityRes = calculateEligibility();
  const emiRes = calculateEmiResults();

  const handleLaunchLeadModal = () => {
    if (activeTab === 'eligibility') {
      onCheckEligibilityWithData({
        serviceType: loanType,
        monthlyIncome,
        employmentType,
        city,
        loanAmount: eligibilityRes.maxLoan,
        tenureYears: eligibilityTenure
      });
    } else {
      onCheckEligibilityWithData({
        serviceType: 'Loan Product',
        monthlyIncome: 75000,
        employmentType: 'salaried',
        city: 'Metropolitan',
        loanAmount: emiAmount,
        tenureYears: emiTenureYears
      });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#070c18] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Find the Right Financial <br />
            <span className="gold-gradient-text">Solution & Eligibility for You</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Estimate your maximum borrowing potential and optimize monthly repayments using our institutional financial simulator.
          </p>

          {/* Calculator Tab Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 mt-2">
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'eligibility'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Loan Eligibility Simulator
            </button>
            <button
              onClick={() => setActiveTab('emi')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'emi'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Advanced EMI Calculator
            </button>
          </div>
        </div>

        {/* TAB 1: ELIGIBILITY SIMULATOR */}
        {activeTab === 'eligibility' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Input Controls */}
            <div className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 space-y-6">
              
              {/* Type of Requirement */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  1. Type of Requirement
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Home Loan', 
                    'Personal Loan', 
                    'Business Loan', 
                    'Loan Against Property', 
                    'MSME Loan', 
                    'Education Loan'
                  ].map((type) => (
                    <button
                      key={type}
                      onClick={() => setLoanType(type)}
                      className={`p-2.5 rounded-xl text-xs font-medium transition-all text-center cursor-pointer ${
                        loanType === type
                          ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Net Income */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold uppercase tracking-wider">
                    2. Net Monthly Income (In-Hand)
                  </span>
                  <span className="font-mono font-bold text-base text-amber-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                    ₹{monthlyIncome.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={500000}
                  step={5000}
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹25,000</span>
                  <span>₹2.5 Lakh</span>
                  <span>₹5 Lakh+</span>
                </div>
              </div>

              {/* Existing Monthly EMIs */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold uppercase tracking-wider">
                    3. Existing Monthly EMIs (Current Loans)
                  </span>
                  <span className="font-mono font-bold text-sm text-slate-200 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                    ₹{existingEmis.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={150000}
                  step={2000}
                  value={existingEmis}
                  onChange={(e) => setExistingEmis(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹0 (None)</span>
                  <span>₹75,000</span>
                  <span>₹1.5 Lakh</span>
                </div>
              </div>

              {/* Employment Type & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    4. Employment Profile
                  </label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="salaried">Salaried (Corporate / Govt)</option>
                    <option value="self_employed">Self-Employed Professional (Doctor/CA/Lawyer)</option>
                    <option value="business_owner">Business Owner / MSME Trader</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    5. Property / Residence City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mumbai">Mumbai / MMR</option>
                    <option value="Delhi">Delhi NCR / Gurgaon / Noida</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Ahmedabad">Ahmedabad / Surat</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Other">Other City / Tier 2 / 3</option>
                  </select>
                </div>
              </div>

              {/* Desired Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold uppercase tracking-wider">
                    6. Preferred Loan Tenure
                  </span>
                  <span className="font-mono font-bold text-sm text-amber-400">
                    {eligibilityTenure} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={eligibilityTenure}
                  onChange={(e) => setEligibilityTenure(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-400"
                />
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 rounded-2xl glass-panel-gold p-6 sm:p-8 space-y-6 shadow-2xl bg-[#0a1224]">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-400 block mb-1">
                  Estimated Pre-Approval Capacity
                </span>
                <h3 className="text-xl font-bold font-serif-luxury text-white">
                  Your Maximum Loan Eligibility
                </h3>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/80 border border-amber-500/30 text-center space-y-1">
                <span className="text-xs text-slate-400 font-medium">Estimated Maximum Sanction</span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono-numbers text-amber-400 block">
                  {formatLakhCr(eligibilityRes.maxLoan)}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Approval Probability
                </span>
              </div>

              <div className="space-y-3 divide-y divide-slate-800/80 text-xs">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Comfortable Monthly EMI Capacity</span>
                  <span className="font-mono font-bold text-white">
                    ₹{eligibilityRes.allowedEmi.toLocaleString('en-IN')} / mo
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Indicative Benchmark Rate</span>
                  <span className="font-mono font-bold text-emerald-400">
                    {eligibilityRes.indicativeRate}% p.a. onwards
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Permitted FOIR (Debt-to-Income)</span>
                  <span className="font-mono font-bold text-white">
                    {eligibilityRes.foirPercent}% of Net In-Hand
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Selected Product &amp; Tenure</span>
                  <span className="font-mono font-bold text-amber-300">
                    {loanType} ({eligibilityTenure} Yrs)
                  </span>
                </div>
              </div>

              <button
                onClick={handleLaunchLeadModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Eligibility &amp; Get Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Soft assessment only — Zero impact on your CIBIL score</span>
              </p>

            </div>
          </motion.div>
        )}

        {/* TAB 2: ADVANCED EMI CALCULATOR */}
        {activeTab === 'emi' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* EMI Controls */}
            <div className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 space-y-6">
              
              {/* Loan Amount Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold uppercase tracking-wider">
                    1. Loan Principal Amount
                  </span>
                  <span className="font-mono font-bold text-base text-amber-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                    {formatLakhCr(emiAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={20000000}
                  step={100000}
                  value={emiAmount}
                  onChange={(e) => setEmiAmount(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹1 Lakh</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crore</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold uppercase tracking-wider">
                    2. Annual Interest Rate (% p.a.)
                  </span>
                  <span className="font-mono font-bold text-base text-emerald-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                    {emiInterestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={6.5}
                  max={18.0}
                  step={0.1}
                  value={emiInterestRate}
                  onChange={(e) => setEmiInterestRate(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>6.5%</span>
                  <span>12.0%</span>
                  <span>18.0%</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-semibold uppercase tracking-wider">
                    3. Loan Tenure (Years)
                  </span>
                  <span className="font-mono font-bold text-base text-white bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                    {emiTenureYears} Years ({emiTenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={emiTenureYears}
                  onChange={(e) => setEmiTenureYears(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

            </div>

            {/* EMI Breakdown Card */}
            <div className="lg:col-span-5 rounded-2xl glass-panel-gold p-6 sm:p-8 space-y-6 shadow-2xl bg-[#0a1224]">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-400 block mb-1">
                  Amortization Breakdown
                </span>
                <h3 className="text-xl font-bold font-serif-luxury text-white">
                  Monthly Payment Summary
                </h3>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/80 border border-amber-500/30 text-center space-y-1">
                <span className="text-xs text-slate-400 font-medium">Equated Monthly Installment (EMI)</span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono-numbers text-amber-400 block">
                  ₹{emiRes.monthlyEmi.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400">per month for {emiTenureYears} years</span>
              </div>

              {/* Visual Split Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-amber-400 font-bold">Principal: {emiRes.principalPercent}%</span>
                  <span className="text-sky-400 font-bold">Total Interest: {emiRes.interestPercent}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800 overflow-hidden flex">
                  <div 
                    className="bg-amber-400 h-full transition-all duration-300"
                    style={{ width: `${emiRes.principalPercent}%` }}
                  ></div>
                  <div 
                    className="bg-sky-500 h-full transition-all duration-300"
                    style={{ width: `${emiRes.interestPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2.5 divide-y divide-slate-800/80 text-xs">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Principal Loan Amount</span>
                  <span className="font-mono font-bold text-white">
                    ₹{emiAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Total Interest Amount</span>
                  <span className="font-mono font-bold text-sky-400">
                    ₹{emiRes.totalInterest.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Total Repayment (Principal + Interest)</span>
                  <span className="font-mono font-bold text-amber-300">
                    ₹{emiRes.totalPayment.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={handleLaunchLeadModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply with These Terms</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
