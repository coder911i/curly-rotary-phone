export interface ServiceItem {
  id: string;
  title: string;
  category: 'individual' | 'business' | 'government' | 'advisory';
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  interestRate?: string;
  maxAmount?: string;
  tenure?: string;
  processingTime?: string;
  badge?: string;
  documents: string[];
  eligibility: string[];
}

export interface GovernmentScheme {
  id: string;
  name: string;
  acronym?: string;
  sector: 'msme' | 'startup' | 'women' | 'education' | 'housing' | 'agriculture';
  subsidyRate: string;
  maxFunding: string;
  targetAudience: string;
  overview: string;
  keyBenefits: string[];
  eligibilityCriteria: string[];
  nodalAgency: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrCity: string;
  avatar: string;
  serviceUsed: string;
  amountSanctioned: string;
  rating: number;
  quote: string;
  tag: 'home' | 'business' | 'professional' | 'education';
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  metrics: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'eligibility' | 'schemes' | 'documentation' | 'rates';
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  loanAmount: number;
  tenureYears: number;
  employmentType: 'salaried' | 'self_employed' | 'business_owner' | 'professional';
  monthlyIncome: number;
  existingEmis: number;
  notes?: string;
  preferredTime?: string;
}
