export type ViewState = 'showcase' | 'doctor' | 'law' | 'hotel' | 'salon' | 'restaurant';

export interface Booking {
  id: string;
  businessId: 'doctor' | 'law' | 'hotel' | 'salon' | 'restaurant';
  businessName: string;
  type: string;
  date: string;
  time?: string;
  details: Record<string, any>;
  createdAt: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
}

// Doctor Types
export interface Treatment {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  price?: string;
  iconName: string;
  image: string;
}

export interface DoctorProfile {
  name: string;
  role: string;
  specialization: string;
  experience: number;
  patients: string;
  rating: number;
  image: string;
  bio: string;
  education: string[];
  certifications: string[];
  languages: string[];
}

// Law Types
export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  casesHandled: number;
  iconName: string;
  image: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: number;
  education: string;
  bio: string;
  image: string;
  cases: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  value: string;
  summary: string;
  outcome: string;
  image: string;
}

// Hotel Types
export interface Room {
  id: string;
  name: string;
  subtitle: string;
  pricePerNight: number;
  sizeSqm: number;
  maxGuests: number;
  amenities: string[];
  image: string;
  description: string;
}

export interface HotelExperience {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

// Salon Types
export interface SalonService {
  id: string;
  name: string;
  category: 'Hair' | 'Color' | 'Styling' | 'Bridal' | 'Skin' | 'Nails' | 'Wellness';
  price: number;
  durationMinutes: number;
  description: string;
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experienceYears: number;
  rating: number;
  image: string;
  bio: string;
}

// Restaurant Types
export interface MenuItem {
  id: string;
  name: string;
  category: 'Amuse' | 'Starters' | 'Mains' | 'Desserts' | 'Wine';
  price: number;
  description: string;
  image: string;
  dietary?: string[];
  pairing?: string;
}

export interface TableZone {
  id: string;
  name: 'Indoor' | 'Terrace' | 'Private Dining';
  tables: DiningTable[];
}

export interface DiningTable {
  id: string;
  number: number;
  seats: number;
  zone: 'Indoor' | 'Terrace' | 'Private Dining';
  status: 'available' | 'reserved' | 'vip';
  cx: number;
  cy: number;
  r?: number;
  width?: number;
  height?: number;
}
