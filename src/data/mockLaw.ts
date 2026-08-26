import type { Attorney, CaseStudy, PracticeArea } from '../types';

export const mockPracticeAreas: PracticeArea[] = [
  {
    id: 'corp-mna',
    title: 'Corporate Law & M&A',
    subtitle: 'Cross-Border Deals & Governance',
    description: 'Structure complex multinational acquisitions, public offerings, strategic joint ventures, and leveraged buyouts with absolute regulatory precision.',
    casesHandled: 140,
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'litigation',
    title: 'Commercial Litigation',
    subtitle: 'High-Stakes Courtroom Defense',
    description: 'Formidable trial advocacy before supreme benches, federal courts, and appellate tribunals handling high-exposure corporate disputes.',
    casesHandled: 95,
    iconName: 'Scale',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'ip-tech',
    title: 'Intellectual Property & Patents',
    subtitle: 'Global Brand & Tech Protection',
    description: 'Safeguarding proprietary algorithms, biotech patents, trade secrets, and international trademark portfolios against infringement.',
    casesHandled: 110,
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'arbitration',
    title: 'International Arbitration',
    subtitle: 'Cross-Jurisdictional Resolution',
    description: 'Expert representation under ICC, LCIA, and SIAC rules for sovereign energy claims and bilateral investment treaty breaches.',
    casesHandled: 65,
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'real-estate',
    title: 'Luxury Real Estate & Infrastructure',
    subtitle: 'Commercial & Institutional Assets',
    description: 'Advising sovereign funds and private equity firms on multi-billion dollar urban redevelopments and hospitality portfolios.',
    casesHandled: 80,
    iconName: 'Landmark',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'
  }
];

export const mockAttorneys: Attorney[] = [
  {
    id: 'blackstone',
    name: 'Charles Blackstone KC',
    role: 'Senior Founding Partner',
    specialization: 'Corporate M&A & International Arbitration',
    experience: 27,
    education: 'LL.M., Harvard Law School — B.A. (Hons) Law, Oxford University',
    bio: 'Recognized by Chambers & Partners as a Tier-1 Legal Master, Charles has counseled Fortune 100 boards and sovereign wealth funds through transformative transactions.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop',
    cases: ['$1.8B Energy Merger', 'Sovereign Debt Restructuring', 'Cross-Border Arbitration']
  },
  {
    id: 'vance',
    name: 'Victoria Vance',
    role: 'Managing Partner — Commercial Litigation',
    specialization: 'Antitrust & High-Stakes Securities Defense',
    experience: 20,
    education: 'J.D., Columbia Law School (Harlan Fiske Stone Scholar)',
    bio: 'Victoria commands respect across international courtrooms, specializing in complex class actions, regulatory enforcement, and trade secret litigation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    cases: ['$240M IP Verdict Defense', 'Federal Class Action Dismissal']
  },
  {
    id: 'rothschild',
    name: 'Julian Rothschild',
    role: 'Partner — Intellectual Property & Tech',
    specialization: 'AI Licensing, Semiconductor Patents & Trade Secrets',
    experience: 16,
    education: 'J.D. & B.S. Electrical Engineering, Stanford University',
    bio: 'Julian blends deep technical expertise with strategic patent litigation, representing leading Silicon Valley firms and European tech conglomerates.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    cases: ['Multi-Nation Patent Injunction', '$450M Bio-Tech Acquisition']
  }
];

export const mockCaseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: '$240M Tech Acquisition Defense',
    clientCategory: 'Cross-Border Tech Enterprise',
    value: '$240M',
    summary: 'Successfully defended an international software conglomerate against hostile takeover efforts while securing key antitrust clearances across EU and US regulators.',
    outcome: '100% Unanimous Regulatory Clearance',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'case-2',
    title: 'International Sovereign Energy Arbitration',
    clientCategory: 'Global Infrastructure Consortium',
    value: '$1.2B',
    summary: 'Represented an energy consortium in a high-profile ICC arbitration against a sovereign state regarding breach of concession agreements.',
    outcome: 'Full Award Granted + Full Cost Recovery',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'case-3',
    title: 'Semiconductor Patent Disputes',
    clientCategory: 'Hardware Pioneer',
    value: '$650M',
    summary: 'Invalidated rival patent claims before the PTAB and secured multi-year licensing deals preserving market dominance in 4nm fabrication.',
    outcome: 'Favorable Cross-Licensing Settlement',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop'
  }
];
