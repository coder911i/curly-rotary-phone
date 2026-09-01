import type { ServiceItem, GovernmentScheme, TestimonialItem, TimelineMilestone, FaqItem } from '../types/finance';

export const COMPANY_INFO = {
  name: 'VALIANT CAPITAL PARTNERS',
  legalName: 'Valiant Capital & Financial Advisory Private Limited',
  tagline: 'Making Financial Solutions Simple, Smart & Accessible.',
  shortTagline: 'Enterprise Financial & Loan Advisory',
  established: '2010',
  helpline: '+91 1800 890 8254',
  helplineDisplay: '1800 890 VALIANT (8254)',
  whatsappNumber: '919876543210',
  whatsappPrefill: 'Hello Valiant Capital team, I am looking for financial advisory assistance and would like to explore my loan options.',
  email: 'advisory@valiantcapital.in',
  supportEmail: 'support@valiantcapital.in',
  headquarters: {
    address: 'Level 14, Express Towers, Nariman Point, Financial District, Mumbai 400021',
    city: 'Mumbai',
    country: 'India'
  },
  branches: [
    { city: 'Mumbai', address: 'Level 14, Express Towers, Nariman Point', timing: '9:30 AM – 7:00 PM (Mon-Sat)' },
    { city: 'New Delhi', address: 'Floor 7, Statesman House, Barakhamba Road, Connaught Place', timing: '9:30 AM – 7:00 PM (Mon-Sat)' },
    { city: 'Bengaluru', address: 'Prestige Trade Tower, Palace Road, High Grounds', timing: '9:30 AM – 7:00 PM (Mon-Sat)' },
    { city: 'Ahmedabad', address: 'Block 12, GIFT City International Financial Services Centre', timing: '9:30 AM – 7:00 PM (Mon-Sat)' }
  ],
  stats: {
    yearsExperience: 15,
    clientsAssisted: '25,000+',
    capitalDisbursed: '₹4,800+ Cr',
    satisfactionRate: '99.4%',
    bankPartners: '45+',
    avgTurnaround: '48 Hrs'
  }
};

export const BANKING_PARTNERS = [
  { name: 'State Bank of India', short: 'SBI', type: 'Public Sector Leader' },
  { name: 'HDFC Bank', short: 'HDFC', type: 'Private Banking' },
  { name: 'ICICI Bank', short: 'ICICI', type: 'Private Banking' },
  { name: 'Axis Bank', short: 'AXIS', type: 'Retail & Corporate' },
  { name: 'Kotak Mahindra Bank', short: 'KOTAK', type: 'Private Wealth & Credit' },
  { name: 'Bank of Baroda', short: 'BOB', type: 'Public Sector' },
  { name: 'Bajaj Finserv', short: 'BAJAJ', type: 'NBFC Partner' },
  { name: 'Tata Capital', short: 'TATA', type: 'Financial Services' },
  { name: 'SIDBI', short: 'SIDBI', type: 'MSME Development Bank' },
  { name: 'NABARD', short: 'NABARD', type: 'Rural & Agri Credit' },
  { name: 'Punjab National Bank', short: 'PNB', type: 'Public Sector' },
  { name: 'Standard Chartered', short: 'SCB', type: 'MNC Bank' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'home-loans',
    title: 'Home Loans',
    category: 'individual',
    icon: 'Home',
    tagline: 'Own Your Dream Property with Lowest Market Rates',
    description: 'Bespoke residential funding for ready properties, under-construction apartments, plot purchases, home construction, and balance transfers with top-up options.',
    features: [
      'Interest rates starting from 8.35% p.a.',
      'Flexible tenures up to 30 years',
      'Zero prepayment penalty on floating rates',
      'Doorstep document collection & legal vetting'
    ],
    interestRate: 'From 8.35% p.a.',
    maxAmount: 'Up to ₹20 Crore',
    tenure: 'Up to 30 Years',
    processingTime: '3 - 5 Working Days',
    badge: 'Most Popular',
    documents: ['PAN & Aadhaar Card', 'Last 6 Months Bank Statements', 'Last 3 Months Salary Slips / 2 Yrs ITR', 'Property Title Deeds & Sanction Map'],
    eligibility: ['Age: 21 - 65 Years', 'Min Monthly Income: ₹30,000', 'Credit Score: 700+', 'Salaried or Self-Employed']
  },
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    category: 'individual',
    icon: 'UserCheck',
    tagline: 'Collateral-Free Instant Liquidity for Any Need',
    description: 'Instant unsecured loans for debt consolidation, luxury travel, medical emergencies, wedding expenses, or home renovation with zero asset pledging.',
    features: [
      '100% digital paperless approval',
      'Disbursal within 24 hours of sanction',
      'No collateral or guarantor required',
      'Customized repayment tenures'
    ],
    interestRate: 'From 10.49% p.a.',
    maxAmount: 'Up to ₹50 Lakhs',
    tenure: '1 to 7 Years',
    processingTime: '24 - 48 Hours',
    badge: 'Quick Disbursal',
    documents: ['Identity & Address Proof', 'Latest 3 Months Salary Slips', '6 Months Salary Account Statement', 'Employment ID Proof'],
    eligibility: ['Age: 21 - 58 Years', 'Min Income: ₹25,000/mo', 'Min 1 Year Work Experience', 'CIBIL Score: 680+']
  },
  {
    id: 'business-loans',
    title: 'Business Loans',
    category: 'business',
    icon: 'Briefcase',
    tagline: 'Unleash Growth Capital for Enterprise Expansion',
    description: 'Tailored commercial credit lines, working capital facilities (Cash Credit/Overdraft), term loans, and machinery financing for expanding enterprises.',
    features: [
      'Unsecured & secured funding options',
      'Structured to match seasonal cash flows',
      'Multi-bank tender for lowest pricing',
      'Dedicated corporate credit underwriter'
    ],
    interestRate: 'From 11.25% p.a.',
    maxAmount: 'Up to ₹10 Crore',
    tenure: '1 to 10 Years',
    processingTime: '5 - 7 Working Days',
    badge: 'High Limit',
    documents: ['Business Registration / GST Certificate', 'Last 2 Years Audited Financials & ITR', 'Last 12 Months Current Account Statement', 'Promoter KYC & Ownership Proof'],
    eligibility: ['Business Vintage: Min 2 Years', 'Annual Turnover: Min ₹40 Lakhs', 'Positive Net Worth & Cash Accruals']
  },
  {
    id: 'gold-loans',
    title: 'Gold Loans',
    category: 'individual',
    icon: 'Coins',
    tagline: 'Instant Liquidity Against Gold at Maximum LTV',
    description: 'Immediate funding against gold jewelry and coins with bank-grade safety, lowest processing costs, and maximum loan-to-value as per RBI directives.',
    features: [
      'Highest LTV up to 75% market value',
      'Same-day appraisal & instant transfer',
      'Bullet repayment & interest-only options',
      'Insured vault storage in partner banks'
    ],
    interestRate: 'From 8.75% p.a.',
    maxAmount: 'Up to ₹1.5 Crore',
    tenure: '3 Months to 3 Years',
    processingTime: 'Same Day (2 Hours)',
    badge: 'Instant Transfer',
    documents: ['KYC (Aadhaar & PAN)', 'Gold Articles for Appraisal', 'Passport Photo', 'Cancelled Cheque for Disbursal'],
    eligibility: ['Age: 18+ Years', 'Valid ownership of gold ornaments (18k - 24k)']
  },
  {
    id: 'vehicle-loans',
    title: 'Vehicle Loans',
    category: 'individual',
    icon: 'Car',
    tagline: 'Drive Away with Up to 100% On-Road Financing',
    description: 'Competitive loans for luxury cars, electric vehicles, commercial fleets, and pre-owned automobiles with extended repayment and low down payment options.',
    features: [
      'Up to 100% on-road price funding',
      'Attractive fixed and floating options',
      'Special discounted rates on Green/EVs',
      'Quick dealer-direct disbursal'
    ],
    interestRate: 'From 8.65% p.a.',
    maxAmount: 'Up to ₹3 Crore',
    tenure: 'Up to 7 Years',
    processingTime: '24 - 48 Hours',
    documents: ['KYC Documents', 'Bank Statement (6 Months)', 'Proforma Invoice / Quotation from Dealer', 'Income Proof / ITR'],
    eligibility: ['Age: 21 - 65 Years', 'Min Monthly Income: ₹25,000', 'Salaried, Self-Employed or Fleet Operator']
  },
  {
    id: 'loan-against-property',
    title: 'Loan Against Property (LAP)',
    category: 'business',
    icon: 'Building2',
    tagline: 'Unlock High-Value Capital Pledging Real Estate',
    description: 'Monetize residential, commercial, or industrial real estate assets to access massive long-term capital at substantially lower interest rates than unsecured debt.',
    features: [
      'Substantially lower EMIs than unsecured debt',
      'Funding up to 70% of property market value',
      'Tenures extending up to 20 years',
      'Self-occupied & rented property accepted'
    ],
    interestRate: 'From 9.15% p.a.',
    maxAmount: 'Up to ₹25 Crore',
    tenure: 'Up to 20 Years',
    processingTime: '7 - 10 Working Days',
    badge: 'Lowest Long-term Rates',
    documents: ['Property Ownership Chain Deeds', 'Approved Building Plan & Tax Receipts', '3 Years ITR with Financial Statements', '12 Months Bank Statements'],
    eligibility: ['Clear and marketable property title', 'Adequate debt service coverage ratio (DSCR)']
  },
  {
    id: 'msme-loans',
    title: 'MSME Priority Loans',
    category: 'business',
    icon: 'Factory',
    tagline: 'Government-Backed Collateral-Free Credit for MSMEs',
    description: 'Empowering manufacturing and service micro, small, and medium enterprises under CGTMSE credit guarantee with priority interest subsidies and zero collateral.',
    features: [
      'Collateral-free up to ₹5 Crore under CGTMSE',
      'Priority lending sector interest concessions',
      'Machinery, plant, and raw material financing',
      'Structured letter of credit & bank guarantee'
    ],
    interestRate: 'From 9.50% p.a.',
    maxAmount: 'Up to ₹5 Crore',
    tenure: 'Up to 8 Years',
    processingTime: '5 - 7 Working Days',
    badge: 'Govt Supported',
    documents: ['Udyam MSME Registration Certificate', 'Project Report / Business Plan', 'Audited Balance Sheets (2 Years)', 'GST Returns (GSTR-1 & 3B)'],
    eligibility: ['Registered MSME unit (Manufacturing/Services)', 'Clean banking track record']
  },
  {
    id: 'education-loans',
    title: 'Education Loans',
    category: 'individual',
    icon: 'GraduationCap',
    tagline: 'Fund World-Class Higher Education Worldwide',
    description: 'Comprehensive financial backing for premier domestic universities (IIT, IIM, AIIMS) and top global institutions (US, UK, Canada, Europe, Australia) covering tuition & living costs.',
    features: [
      '100% tuition + living + travel cost coverage',
      'Moratorium period: Course Duration + 1 Year',
      'Unsecured options up to ₹75 Lakhs for top tier universities',
      'Income tax deduction benefit under Section 80E'
    ],
    interestRate: 'From 9.25% p.a.',
    maxAmount: 'Up to ₹1.5 Crore',
    tenure: 'Up to 15 Years',
    processingTime: '3 - 5 Working Days',
    documents: ['Admission Offer Letter & Fee Schedule', 'Academic Transcripts (10th, 12th, Degree)', 'Co-applicant KYC & Income Documents', 'GRE/GMAT/IELTS Scorecards (if applicable)'],
    eligibility: ['Indian citizen with confirmed admission', 'Co-applicant with stable income']
  },
  {
    id: 'government-schemes',
    title: 'Government Financial Schemes',
    category: 'government',
    icon: 'Landmark',
    tagline: 'Avail Central & State Capital Subsidies up to 35%',
    description: 'Expert advisory and liaison to unlock government capital subsidies, interest subvention, and subsidized loans under PMEGP, Mudra, Stand-Up India, and CLCSS.',
    features: [
      'Subsidy assistance up to 35% of project cost',
      'Complete DPR (Detailed Project Report) preparation',
      'Online portal registration and compliance tracking',
      'Bank approval liaison and claim disbursement'
    ],
    interestRate: 'Subsidized / Subvention Rates',
    maxAmount: 'Up to ₹50 Lakhs (PMEGP) / ₹5 Cr (CGTMSE)',
    tenure: 'Up to 7 Years',
    processingTime: '10 - 15 Working Days',
    badge: 'Direct Subsidy',
    documents: ['Aadhaar & PAN of Beneficiary', 'Detailed Project Report (DPR)', 'Caste/Category Certificate (if subsidy tier applies)', 'Educational Qualification Proof (Min 8th Pass)'],
    eligibility: ['New entrepreneurial ventures or MSME units', 'Age 18+ with no default on existing loans']
  },
  {
    id: 'financial-consultancy',
    title: 'Credit & Financial Consultancy',
    category: 'advisory',
    icon: 'TrendingUp',
    tagline: 'Strategic Debt Optimization & Credit Score Rehabilitation',
    description: 'Professional financial health auditing, CIBIL score enhancement roadmap, debt consolidation advisory, and corporate balance sheet optimization.',
    features: [
      'Comprehensive credit report deep-dive analysis',
      'Resolution of disputed DPD / write-off remarks',
      'Debt-to-Income (FOIR) restructuring',
      'Strategic tax and cash flow management'
    ],
    interestRate: 'Advisory Fee / Success Linked',
    processingTime: 'Immediate Consultation',
    badge: 'Strategic Advisory',
    documents: ['Recent CIBIL / Experian Credit Report', 'Current Loan Repayment Track Records', 'Income Statements & Tax Returns'],
    eligibility: ['Individuals & Businesses seeking debt restructuring or credit repair']
  },
  {
    id: 'documentation-assistance',
    title: 'Financial Documentation Support',
    category: 'advisory',
    icon: 'FileSpreadsheet',
    tagline: 'End-to-End CMA Data, DPR & Bank Dossier Preparation',
    description: 'Chartered accountant vetted project reports, Credit Monitoring Arrangement (CMA) data, provisional financial projections, and bank-ready dossier compilation.',
    features: [
      'Institutional standard CMA data preparation',
      'Techno-Economic Viability (TEV) alignment',
      'ITR filing & balance sheet finalization advisory',
      'Zero rejection documentation guarantee'
    ],
    processingTime: '48 - 72 Hours',
    documents: ['Past 3 Years P&L and Balance Sheet', 'Project Details & Quotations', 'Bank Statements'],
    eligibility: ['MSMEs, Startups & Commercial Borrowers']
  },
  {
    id: 'customized-solutions',
    title: 'Customized Enterprise Solutions',
    category: 'advisory',
    icon: 'ShieldCheck',
    tagline: 'Bespoke Debt Syndication & Structured Finance',
    description: 'Specialized mezzanine debt, promoter funding, builder project finance, inventory funding, and consortium loan syndication for high-net-worth clients and corporations.',
    features: [
      'Multi-bank consortium syndication',
      'Custom covenants & moratorium schedules',
      'Private credit & structured debt placement',
      'Confidential senior partner engagement'
    ],
    interestRate: 'Custom Structuring',
    maxAmount: '₹25 Cr to ₹500 Cr+',
    tenure: 'Structured Schedules',
    badge: 'Enterprise Only',
    documents: ['Corporate Dossier', 'Detailed Business Model', 'Audited Financials (3 Yrs)'],
    eligibility: ['Corporate entities & established developers with proven track record']
  }
];

export const GOVERNMENT_SCHEMES: GovernmentScheme[] = [
  {
    id: 'pmegp',
    name: "Prime Minister's Employment Generation Programme",
    acronym: 'PMEGP',
    sector: 'msme',
    subsidyRate: '15% to 35% Capital Subsidy',
    maxFunding: '₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Services)',
    targetAudience: 'New Micro Enterprises, Rural & Urban Entrepreneurs, Women & Youth',
    overview: 'A flagship central credit-linked subsidy scheme administered by KVIC to establish new self-employment ventures and generate employment in rural and urban areas.',
    keyBenefits: [
      '15% to 35% government capital subsidy deposited directly in escrow',
      'Own contribution required is only 5% (Special Category) to 10% (General)',
      'Bank credit of 90% to 95% of project cost sanctioned easily',
      'Second upgrade loan up to ₹1 Crore for existing performing units'
    ],
    eligibilityCriteria: [
      'Individual above 18 years of age',
      'Minimum 8th standard pass for projects above ₹10 Lakhs (Mfg) / ₹5 Lakhs (Service)',
      'Only for new units (existing units not eligible for 1st tranche)',
      'Self Help Groups & Co-operative societies eligible'
    ],
    nodalAgency: 'Khadi and Village Industries Commission (KVIC) / MSME Ministry',
    popular: true
  },
  {
    id: 'mudra',
    name: 'Pradhan Mantri MUDRA Yojana',
    acronym: 'PMMY',
    sector: 'startup',
    subsidyRate: 'Collateral-Free Concessional Interest',
    maxFunding: 'Up to ₹20 Lakhs (Tarun Plus Tier)',
    targetAudience: 'Micro Enterprises, Small Shopkeepers, Artisans, Transport Operators',
    overview: 'Refinance support for lending to non-corporate, non-farm small/micro enterprises across three tiers: Shishu (up to ₹50K), Kishore (₹50K-₹5L), and Tarun (₹5L-₹20L).',
    keyBenefits: [
      'Zero collateral or third-party guarantor requirement',
      'Nominal processing fees and affordable interest structures',
      'MUDRA debit card provided for ongoing working capital withdrawals',
      'Simplified one-page application for Shishu tier'
    ],
    eligibilityCriteria: [
      'Small manufacturing enterprises, shopkeepers, fruit/vegetable vendors',
      'Truck operators, food service units, repair shops',
      'Satisfactory credit bureau score with no past defaults'
    ],
    nodalAgency: 'MUDRA / National Credit Guarantee Trustee Company (NCGTC)',
    popular: true
  },
  {
    id: 'cgtmse',
    name: 'Credit Guarantee Fund Trust for Micro & Small Enterprises',
    acronym: 'CGTMSE',
    sector: 'msme',
    subsidyRate: '75% to 85% Credit Guarantee Coverage',
    maxFunding: 'Up to ₹5.00 Crore',
    targetAudience: 'New & Existing Micro and Small Enterprises (Manufacturing & Services)',
    overview: 'Enables collateral-free credit delivery from banks to first-generation entrepreneurs by providing third-party institutional guarantee on default risk.',
    keyBenefits: [
      'Collateral-free debt up to ₹5 Crore sanctioned by scheduled banks',
      'Guarantee coverage up to 85% for women entrepreneurs and micro units',
      'Covers term loans as well as fund-based/non-fund working capital',
      'Fast-track appraisal under automated guarantee issuance'
    ],
    eligibilityCriteria: [
      'Registered Micro and Small enterprises (Udyam registered)',
      'Retail trade units also eligible up to specified limits',
      'Viable project proposal with adequate debt service capability'
    ],
    nodalAgency: 'SIDBI and Ministry of MSME, Govt. of India',
    popular: true
  },
  {
    id: 'stand-up-india',
    name: 'Stand-Up India Scheme',
    acronym: 'SUIS',
    sector: 'women',
    subsidyRate: 'Concessional Interest + Guarantee',
    maxFunding: '₹10 Lakhs to ₹1 Crore',
    targetAudience: 'Women Entrepreneurs and SC/ST Borrowers setting up greenfield ventures',
    overview: 'Facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for greenfield enterprises.',
    keyBenefits: [
      'Substantial loan size for greenfield manufacturing, service, or agri-allied sector',
      'Composite loan covering both Term Loan and Working Capital',
      'Margin money requirement reduced to 15% with convergence of other schemes',
      'Pre-loan handholding and mentorship network support'
    ],
    eligibilityCriteria: [
      'SC/ST and/or Women entrepreneurs above 18 years',
      'In case of non-individual enterprise, 51% shareholding & controlling stake by SC/ST/Women',
      'Must be a greenfield project (first time venture of beneficiary)'
    ],
    nodalAgency: 'Department of Financial Services (DFS), Ministry of Finance',
    popular: true
  },
  {
    id: 'pmay-clss',
    name: 'Pradhan Mantri Awas Yojana - Credit Linked Subsidy',
    acronym: 'PMAY-CLSS',
    sector: 'housing',
    subsidyRate: 'Up to ₹2.67 Lakhs Upfront Interest Subsidy',
    maxFunding: 'Up to ₹18 Lakhs Loan Value with Subsidy',
    targetAudience: 'EWS, LIG, and Middle Income Groups (MIG-I & MIG-II) purchasing first pucca home',
    overview: 'Central sector scheme providing upfront interest subsidy on housing loans to eligible urban and semi-urban first-time home buyers.',
    keyBenefits: [
      'Upfront interest subsidy of 3.00% to 6.50% credited directly into loan account',
      'Net loan amount and monthly EMI reduced significantly from Day 1',
      'Covers home purchase, construction, and structural improvement',
      'Mandatory female co-ownership for EWS/LIG categories promoting empowerment'
    ],
    eligibilityCriteria: [
      'Beneficiary family must not own a pucca house anywhere in India',
      'Household income criteria: EWS (up to ₹3L), LIG (₹3L-₹6L), MIG (up to ₹18L)',
      'Adherence to carpet area guidelines as specified by MoHUA'
    ],
    nodalAgency: 'National Housing Bank (NHB) & HUDCO',
    popular: true
  },
  {
    id: 'csis-education',
    name: 'Central Sector Interest Subsidy for Education Loans',
    acronym: 'CSIS',
    sector: 'education',
    subsidyRate: '100% Full Interest Waiver during Moratorium',
    maxFunding: 'Up to ₹10 Lakhs (Under IBA Model Scheme)',
    targetAudience: 'Economically Weaker Section (EWS) students pursuing professional courses in India',
    overview: 'Full interest subsidy provided by Govt. of India during the moratorium period (Course period + 1 year) on educational loans for technical and professional degrees.',
    keyBenefits: [
      'Zero interest accrued to student during entire course duration plus 1 year grace',
      'Saves lakhs of rupees in accumulated interest during student life',
      'Applicable on recognized professional and technical degree courses in India',
      'Direct benefit transfer directly credited to student loan account'
    ],
    eligibilityCriteria: [
      'Annual family gross income not exceeding ₹4.5 Lakhs from all sources',
      'Admission secured in approved professional/technical courses in India',
      'Loan availed under IBA Model Educational Loan Scheme'
    ],
    nodalAgency: 'Ministry of Education, Govt. of India (Canara Bank Nodal)',
    popular: false
  },
  {
    id: 'clcss-tech',
    name: 'Credit Linked Capital Subsidy Scheme for Tech Upgradation',
    acronym: 'CLCSS',
    sector: 'msme',
    subsidyRate: '15% Upfront Capital Subsidy',
    maxFunding: 'Up to ₹15 Lakhs Subsidy on ₹1 Crore Machinery Loan',
    targetAudience: 'Small Scale Manufacturing Units modernizing plant and machinery',
    overview: 'Facilitates technology induction in micro and small enterprises by providing 15% upfront capital subsidy for upgrading existing manufacturing processes.',
    keyBenefits: [
      'Upfront 15% capital subsidy on institutional finance for specified plant & machinery',
      'Improves product quality, operational efficiency, and energy conservation',
      'Covers 51+ approved sub-sectors including pharma, plastics, auto components, food processing',
      'Helps domestic MSMEs become globally competitive'
    ],
    eligibilityCriteria: [
      'Existing MSE units with valid Udyam registration modernizing technology',
      'New MSE units setting up plant with state-of-the-art eligible machinery',
      'Appraisal and sanction by approved nodal banks'
    ],
    nodalAgency: 'Office of DC-MSME, Ministry of MSME',
    popular: false
  },
  {
    id: 'nabard-agri',
    name: 'Agriculture & Rural Infrastructure Development Fund',
    acronym: 'AIF / NABARD',
    sector: 'agriculture',
    subsidyRate: '3% Interest Subvention + CGTMSE Fee Waiver',
    maxFunding: 'Up to ₹2.00 Crore per project',
    targetAudience: 'Agri-Entrepreneurs, FPOs, Startups, Cold Chain & Warehouse Operators',
    overview: 'Medium-long term debt financing facility for investment in viable projects for post-harvest management infrastructure and community farming assets.',
    keyBenefits: [
      '3% per annum interest subvention up to a limit of ₹2 Crore for 7 years',
      'Credit guarantee coverage under CGTMSE with fee paid by government',
      'Moratorium for repayment minimum 6 months up to 2 years',
      'Convergence with all central and state sector capital subsidy schemes'
    ],
    eligibilityCriteria: [
      'Primary Agricultural Credit Societies, FPOs, Agri-entrepreneurs, Startups',
      'Investment must be in eligible post-harvest infrastructure or logistics'
    ],
    nodalAgency: 'NABARD & Department of Agriculture and Farmers Welfare',
    popular: false
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Rajesh & Sunita Singhania',
    role: 'Homeowners & Senior IT Executives',
    companyOrCity: 'Bandra West, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    serviceUsed: 'Home Loan Balance Transfer + Top-Up',
    amountSanctioned: '₹2.85 Crore',
    rating: 5,
    quote: 'Valiant Capital negotiated our home loan down from 9.40% to 8.40% across private lenders and arranged a ₹50 Lakh top-up for renovation within 6 days. Their documentation team handled everything right from our living room.',
    tag: 'home'
  },
  {
    id: 'test-2',
    name: 'Vikramaditya Rao',
    role: 'Managing Director, Apex Precision Engineering',
    companyOrCity: 'Peenya Industrial Estate, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    serviceUsed: 'MSME Loan & CGTMSE Subsidy',
    amountSanctioned: '₹4.20 Crore',
    rating: 5,
    quote: 'Our machinery import project was stuck due to collateral shortages. Valiant Capital structured a ₹4.2 Crore collateral-free credit under CGTMSE and also helped us claim an eligible tech upgradation subsidy. Simply outstanding financial underwriters.',
    tag: 'business'
  },
  {
    id: 'test-3',
    name: 'Dr. Ananya Deshmukh, MD',
    role: 'Founder & Chief Radiologist, Deshmukh Imaging',
    companyOrCity: 'Koregaon Park, Pune',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    serviceUsed: 'Professional Doctor & Equipment Loan',
    amountSanctioned: '₹1.10 Crore',
    rating: 5,
    quote: 'Purchasing a cutting-edge 3 Tesla MRI required quick capital. The Valiant advisory team understood our clinical balance sheet immediately, delivering sanction in 72 hours with no hidden processing surcharges.',
    tag: 'professional'
  },
  {
    id: 'test-4',
    name: 'Harpreet Singh Bedi',
    role: 'Founder, Bedi Logistics & Cold Chain',
    companyOrCity: 'Ludhiana, Punjab',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    serviceUsed: 'PMEGP Subsidy + Commercial Fleet Loan',
    amountSanctioned: '₹75 Lakhs + 25% Subsidy',
    rating: 5,
    quote: 'From detailed project report (DPR) preparation to bank liaison, Valiant Capital managed our PMEGP application end-to-end. We received our government capital subsidy credited into our escrow account without a single hiccup.',
    tag: 'business'
  },
  {
    id: 'test-5',
    name: 'Aarav & Meera Iyer',
    role: 'Parents of Master Scholar, Imperial College London',
    companyOrCity: 'Adyar, Chennai',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    serviceUsed: 'Overseas Education Loan (100% Unsecured)',
    amountSanctioned: '₹62 Lakhs',
    rating: 5,
    quote: 'When university tuition deadlines were approaching, our local bank delayed for weeks. Valiant Capital stepped in and secured a 100% unsecured international student loan with moratorium in just 4 days. Truly life-saving service.',
    tag: 'education'
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2010',
    title: 'Inception & Retail Advisory Desk',
    description: 'Founded with a core mission to eliminate financial opacity for retail home buyers and entrepreneurs in Mumbai.',
    metrics: '₹50 Cr Disbursed in Year 1',
    icon: 'Building'
  },
  {
    year: '2015',
    title: 'Commercial Expansion & MSME Desk',
    description: 'Expanded operations to New Delhi and Bengaluru, establishing a dedicated debt syndication desk for medium enterprises.',
    metrics: '5,000+ Clients Assisted',
    icon: 'TrendingUp'
  },
  {
    year: '2020',
    title: 'Digital FinTech Transformation',
    description: 'Integrated digital multi-lender underwriting and algorithmic credit eligibility matching across 35+ partner banks.',
    metrics: 'Paperless 24h Approvals',
    icon: 'Cpu'
  },
  {
    year: '2024',
    title: 'Government Subsidy & MSME Fast-Track',
    description: 'Launched a dedicated liaison desk for PMEGP, Mudra, CGTMSE, and state industrial capital subsidies.',
    metrics: '₹3,500+ Cr Cumulative Milestone',
    icon: 'Landmark'
  },
  {
    year: '2026+',
    title: 'Next-Gen Enterprise Advisory Hub',
    description: 'Partnering with 45+ premier institutions and expanding corporate debt syndication across India and GIFT City.',
    metrics: '₹4,800+ Cr Disbursed • 99.4% Approval',
    icon: 'ShieldCheck'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I choose the right loan product for my specific requirement?',
    answer: 'Our senior loan advisors evaluate your cash flow profile, tenure preference, tax brackets, and debt capacity to match you with the optimal product. For instance, if you own unencumbered property, a Loan Against Property (LAP) offers interest rates starting at 9.15% p.a. compared to higher unsecured personal loan rates.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'What documents are required for loan approval?',
    answer: 'Standard documentation includes: (1) Identity & Address proofs (Aadhaar, PAN), (2) Financial proofs (Last 6 months bank statements, 3 months salary slips for salaried OR 2-3 years audited ITR/balance sheets for business owners), and (3) Property or collateral title deeds if applicable. Our team provides doorstep collection and digital verification.',
    category: 'documentation'
  },
  {
    id: 'faq-3',
    question: 'How does your Free Consultation and Advisory process work?',
    answer: 'Our initial advisory session is 100% free and confidential. We review your requirement, evaluate your eligibility across 45+ partner banks and NBFCs, negotiate competitive interest rates on your behalf, and coordinate all bank documentation from application to disbursement with zero upfront consultation fee.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'Can you help us apply for Government Financial Subsidies (PMEGP, Mudra, CGTMSE)?',
    answer: 'Yes! We run a dedicated Government Scheme & Subsidy Desk. We assist entrepreneurs in preparing Detailed Project Reports (DPR), validating eligibility, filing applications on central government portals (such as KVIC/Udyam), and liaising with sanctioning banks to ensure subsidy amounts are credited into your escrow account.',
    category: 'schemes'
  },
  {
    id: 'faq-5',
    question: 'How long does the sanction and disbursal process take?',
    answer: 'Turnaround depends on the product category: Personal and Gold Loans are processed within 24 to 48 hours; Home Loans and MSME Loans take approximately 3 to 5 business days; high-ticket Commercial LAP and Government Subsidy claims take 7 to 12 working days due to formal legal search and technical valuations.',
    category: 'eligibility'
  },
  {
    id: 'faq-6',
    question: 'Does checking my loan eligibility through Valiant Capital affect my CIBIL score?',
    answer: 'No. Our initial eligibility calculator and internal assessment perform a soft evaluation that does NOT trigger multiple hard inquiries on your credit bureau score. Hard inquiries are only executed with your written authorization when your application is formally submitted to the selected lender.',
    category: 'rates'
  },
  {
    id: 'faq-7',
    question: 'Can I apply if my credit score is below 700 or has past settlements?',
    answer: 'Yes. While prime bank rates require a 700+ CIBIL score, we work with specialized NBFCs and asset-backed lenders who evaluate overall debt-service ability and collateral security. Furthermore, our Credit Consultancy team can help you legally dispute incorrect bureau entries and restructure past liabilities.',
    category: 'eligibility'
  },
  {
    id: 'faq-8',
    question: 'What are your charges and is there any hidden fee?',
    answer: 'Valiant Capital maintains absolute pricing transparency. Most retail and MSME loan advisory services are funded through institutional channel commissions paid by partner banks, meaning you pay ZERO upfront advisory charges. Any specialized legal vetting, property valuation, or complex CMA preparation fees are explicitly declared in advance.',
    category: 'general'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: 'guidance',
    title: 'Personalized Financial Guidance',
    short: 'Dedicated Relationship Manager',
    desc: 'Direct access to a senior certified loan underwriter who crafts customized borrowing structures aligned with your net cash flow.',
    icon: 'UserCheck'
  },
  {
    id: 'partners',
    title: '45+ Banking & NBFC Partners',
    short: 'Market-Wide Auction Power',
    desc: 'We place your application across multiple leading institutions simultaneously to secure the lowest possible interest rates and maximum sanction.',
    icon: 'Landmark'
  },
  {
    id: 'underwriting',
    title: 'Expert Underwriting Assistance',
    short: 'Maximum Loan Eligibility',
    desc: 'Our financial analysts know how credit committees think, structuring your income profile and CMA data for smooth, immediate approvals.',
    icon: 'Award'
  },
  {
    id: 'transparent',
    title: '100% Transparent Process',
    short: 'Zero Hidden Charges',
    desc: 'No hidden brokerages, surprise processing deductions, or predatory terms. Complete transparency in all sanction letters and charges.',
    icon: 'Eye'
  },
  {
    id: 'customer-first',
    title: 'Customer-Focused Approach',
    short: 'Tailored to Cash Flow',
    desc: 'Whether you need step-up EMIs, balloon repayments, or interest-only moratoriums, we structure loans that fit your lifestyle.',
    icon: 'HeartHandshake'
  },
  {
    id: 'end-to-end',
    title: 'Support Throughout the Process',
    short: 'From App to Disbursal',
    desc: 'We handle doorstep document pickup, municipal legal search, bank liaison, property valuation, and post-disbursal top-up requests.',
    icon: 'ShieldCheck'
  },
  {
    id: 'schemes',
    title: 'Government Scheme Guidance',
    short: 'Up to 35% Capital Subsidy',
    desc: 'Specialized desk navigating central/state subsidies, PMEGP, Mudra, and CGTMSE collateral-free guarantees for maximum savings.',
    icon: 'Sparkles'
  },
  {
    id: 'experience',
    title: '15+ Years of Industry Leadership',
    short: '₹4,800+ Cr Disbursed',
    desc: 'Over a decade and a half of institutional trust with 25,000+ successful client cases and a 99.4% approval track record.',
    icon: 'TrendingUp'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Your Requirement',
    subtitle: '2-Minute Digital Discovery',
    desc: 'Tell us about your financing requirement, income profile, or desired government subsidy online or over a quick phone call.',
    badge: 'Quick & Simple'
  },
  {
    step: '02',
    title: 'Get Expert Consultation',
    subtitle: 'Dedicated Advisor Assigned',
    desc: 'A senior financial analyst reviews your eligibility, evaluates bank options, and outlines the lowest interest rates available.',
    badge: 'Zero Obligation'
  },
  {
    step: '03',
    title: 'Explore Suitable Solutions',
    subtitle: 'Multi-Bank Comparison',
    desc: 'Compare pre-approved loan options, tenures, processing fees, and government subsidies tailored to your exact monthly budget.',
    badge: 'Best Rates'
  },
  {
    step: '04',
    title: 'Documentation & Guidance',
    subtitle: 'Doorstep & Digital KYC',
    desc: 'We handle complete paperwork, CMA data preparation, legal title verification, and direct bank underwriter liaison.',
    badge: 'Hassle-Free'
  },
  {
    step: '05',
    title: 'Move Forward with Confidence',
    subtitle: 'Swift Disbursal & Support',
    desc: 'Sanction letter issued and loan funds credited directly into your account with ongoing advisory support for future milestones.',
    badge: 'Funded & Secure'
  }
];
