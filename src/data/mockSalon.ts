import type { SalonService, Stylist } from '../types';

export const mockSalonServices: SalonService[] = [
  {
    id: 'haircut',
    name: 'Signature Haircut & Sculpting',
    category: 'Hair',
    price: 2500,
    durationMinutes: 60,
    description: 'Precision couture haircut, custom scalp elixir treatment, sensory head massage, and bespoke editorial blow-dry.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'balayage',
    name: 'Couture Balayage & Gloss',
    category: 'Color',
    price: 7500,
    durationMinutes: 150,
    description: 'Hand-painted dimensional highlighting tailored to skin tone, paired with glossing glaze and Olaplex bond repair.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'bridal',
    name: 'Bridal & Red Carpet Styling',
    category: 'Bridal',
    price: 15000,
    durationMinutes: 180,
    description: 'Exquisite bridal coiffure, veil fitting, trial session, high-definition makeup prep, and luxury gift set.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'skin',
    name: 'Cellular Hydration Skin Ritual',
    category: 'Skin',
    price: 3500,
    durationMinutes: 75,
    description: 'Deep dermal lymphatic drainage, micro-current contouring, multi-peptide sheet mask, and LED light renewal.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nails',
    name: 'Gel Sculpt & Russian Manicure',
    category: 'Nails',
    price: 1800,
    durationMinutes: 60,
    description: 'Waterless precision cuticle detailing, nail strengthening structured gel base, and organic botanical hand massage.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'wellness',
    name: 'Aromatherapy Head Spa & Scalp Detox',
    category: 'Wellness',
    price: 4200,
    durationMinutes: 90,
    description: 'Japanese head spa waterfall treatment, organic botanical scalp exfoliation, neck oil therapy, and steam mist.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop'
  }
];

export const mockStylists: Stylist[] = [
  {
    id: 'camille',
    name: 'Camille Laurent',
    role: 'Creative Art Director & Master Stylist',
    specialization: 'Parisian Balayage & Precision Bob Cuts',
    experienceYears: 14,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    bio: 'Trained in Paris and Tokyo, Camille has styled for Paris Fashion Week and Vogue editorials. Famous for effortless movement and seamless color melt.'
  },
  {
    id: 'riccardo',
    name: 'Riccardo Rossi',
    role: 'Senior Colorist & Hair Sculptor',
    specialization: 'High-Contrast Blonding & Texture Architecture',
    experienceYears: 11,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    bio: 'Riccardo brings Milanese couture flare. Known for custom root shadows, dimensional tones, and restorative keratin infusions.'
  },
  {
    id: 'soraya',
    name: 'Soraya Chen',
    role: 'Lead Aesthetician & Skincare Specialist',
    specialization: 'Sculptal Facial Massage & Dermal Renewal',
    experienceYears: 9,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    bio: 'Soraya combines ancient lymphatic techniques with modern bio-hacking technology to deliver instant radiant glow.'
  }
];
