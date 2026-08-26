import type { HotelExperience, Room } from '../types';

export const mockRooms: Room[] = [
  {
    id: 'lakeview-suite',
    name: 'Lakeview Suite',
    subtitle: 'Panoramic Lake Como Horizons',
    pricePerNight: 1450,
    sizeSqm: 85,
    maxGuests: 2,
    amenities: [
      'Private Marble Balcony',
      'Plunge Pool Access',
      '24/7 Personal Butler Service',
      'Bang & Olufsen Acoustics',
      'Hermès Bath Amenities'
    ],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    description: 'Immerse in timeless Italian elegance. Features handcrafted Venetian silk drapery, floor-to-ceiling glass windows framing Lake Como, and a private travertine terrace.'
  },
  {
    id: 'aurelia-villa',
    name: 'Aurelia Villa',
    subtitle: 'Private Sanctuary & Private Jetty',
    pricePerNight: 2100,
    sizeSqm: 140,
    maxGuests: 4,
    amenities: [
      'Private Venetian Riva Jetty',
      'Heated Infinity Pool',
      'Dedicated Executive Chef',
      'Helipad Access',
      'Wine Cellar Access'
    ],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
    description: 'A secluded sanctuary set amidst century-old botanical gardens. Offering ultimate privacy, personal docking for private speedboats, and custom dining setups.'
  },
  {
    id: 'garden-residence',
    name: 'Garden Residence',
    subtitle: 'Lush Botanical Terraces',
    pricePerNight: 1150,
    sizeSqm: 70,
    maxGuests: 2,
    amenities: [
      'Private Olive Grove Patio',
      'Soaking Tub with Lake Views',
      'Organic Herb Garden Access',
      'Daily Sommelier Selection'
    ],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    description: 'Surrounded by fragrant jasmine and ancient olive trees, this residence balances understated earth tones with high-concept architectural luxury.'
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    subtitle: 'The Pinnacle of Italian Aristocracy',
    pricePerNight: 3500,
    sizeSqm: 220,
    maxGuests: 6,
    amenities: [
      '360° Lake & Mountain Panorama',
      'Private Spa & Sauna Chamber',
      'Grand Piano Lounge',
      'Chauffeur-driven Vintage Maserati'
    ],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
    description: 'Our crown jewel. Spanning the entire top penthouse tier with original 18th-century ceiling frescoes, custom Frette linens, and private rooftop observatory.'
  }
];

export const mockExperiences: HotelExperience[] = [
  {
    id: 'exp-boat',
    title: 'Riva Aquarama Boat Charters',
    category: 'Lake Exploration',
    description: 'Glide across Lake Como in our vintage mahogany Riva boat with champagne and private captain.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'exp-dining',
    title: 'Waterfront Candlelit Dining',
    category: 'Gastronomy',
    description: 'Indulge in a 7-course tasting menu curated by Michelin-starred Chef Marco Rossi under the stars.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'exp-wine',
    title: 'Lombardy Cellar Tasting',
    category: 'Enology',
    description: 'Exclusive access to rare vintage Barolos and Franciacortas with our Master Sommelier.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'exp-spa',
    title: 'Thermal Stone & Algae Spa',
    category: 'Holistic Wellness',
    description: 'Rejuvenate body and mind with Alpine thermal hydrotherapy and Valmont collagen facials.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop'
  }
];
