import type { DiningTable, MenuItem, TableZone } from '../types';

export const mockChef = {
  name: 'Chef Kabir Malhotra',
  role: 'Executive Chef & Culinary Director',
  bio: 'Former Executive Sous Chef at Noma Copenhagen and Le Bernardin NYC. Chef Kabir reinterprets traditional Indian spices with modern avant-garde Nordic technique and sustainable seasonal farm sourcing.',
  credentials: [
    'Michelin 3-Star Alumnus',
    'San Pellegrino Asia’s Top 50 Culinary Pioneer',
    'James Beard Guest International Laureate'
  ],
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop'
};

export const mockMenuItems: MenuItem[] = [
  // Amuse
  {
    id: 'm1',
    name: 'Wild Smoked Truffle Tart',
    category: 'Amuse',
    price: 1250,
    description: 'Black winter truffle gelée, charcoal tartlet, whipped Kashmiri goat cheese, and edible gold leaf.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Vegetarian']
  },
  {
    id: 'm2',
    name: 'Norwegian Salmon Crisp',
    category: 'Amuse',
    price: 1400,
    description: 'Cured Atlantic salmon belly, yuzu pearls, sesame crisp, and sea buckthorn emulsion.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Pescatarian', 'Gluten-Free']
  },
  // Starters
  {
    id: 'm3',
    name: 'Seared Hokkaido Scallops',
    category: 'Starters',
    price: 2100,
    description: 'Caramelized cauliflower velvet, saffron foam, crispy pancetta dust, and micro-herbs.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Gluten-Free']
  },
  {
    id: 'm4',
    name: 'Charred Morels & Asparagus',
    category: 'Starters',
    price: 1850,
    description: 'Himalayan wild morels stuffed with pine nut ricotta, smoked asparagus coulis, and garlic chips.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Vegetarian']
  },
  // Mains
  {
    id: 'm5',
    name: 'Charcoal Grilled Chilean Sea Bass',
    category: 'Mains',
    price: 2850,
    description: 'Miso-marinated Chilean sea bass, braised bok choy, lemongrass dashi broth, and crispy lotus root.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Pescatarian']
  },
  {
    id: 'm6',
    name: 'Saffron & Wild Mushroom Risotto',
    category: 'Mains',
    price: 2100,
    description: 'Acquerello carnaroli rice, Iranian saffron thread, aged Parmigiano Reggiano, and black truffle drizzle.',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'm7',
    name: 'Wagyu A5 Striploin & Bone Marrow',
    category: 'Mains',
    price: 4500,
    description: 'Miyazaki A5 Wagyu beef, smoked shallot jus, roasted bone marrow butter, and truffle pomme purée.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000&auto=format&fit=crop'
  },
  // Desserts
  {
    id: 'm8',
    name: 'Valrhona Dark Chocolate Sphere',
    category: 'Desserts',
    price: 1150,
    description: '70% Guanaja chocolate dome melted with hot salted caramel, hazelnut praline core, and gold dust.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Vegetarian']
  },
  {
    id: 'm9',
    name: 'Deconstructed Mango Yuzu Pavlova',
    category: 'Desserts',
    price: 980,
    description: 'Crisp French meringue, Alphonso mango sorbet, yuzu gel, and crystallised mint leaves.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop',
    dietary: ['Vegetarian', 'Gluten-Free']
  },
  // Wine
  {
    id: 'm10',
    name: 'Château Margaux Premier Grand Cru 2015',
    category: 'Wine',
    price: 12500,
    description: 'Deep ruby vintage with aromas of blackcurrant, violets, cedarwood, and velvet tannins.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
    pairing: 'Ideal with Wagyu Striploin'
  }
];

export const mockTables: DiningTable[] = [
  // Indoor Section
  { id: 't1', number: 1, seats: 2, zone: 'Indoor', status: 'available', cx: 80, cy: 90, r: 24 },
  { id: 't2', number: 2, seats: 2, zone: 'Indoor', status: 'available', cx: 160, cy: 90, r: 24 },
  { id: 't3', number: 3, seats: 4, zone: 'Indoor', status: 'available', cx: 90, cy: 190, width: 60, height: 40 },
  { id: 't4', number: 4, seats: 4, zone: 'Indoor', status: 'reserved', cx: 180, cy: 190, width: 60, height: 40 },
  { id: 't5', number: 5, seats: 6, zone: 'Indoor', status: 'available', cx: 135, cy: 280, width: 85, height: 45 },

  // Terrace Section
  { id: 't6', number: 6, seats: 2, zone: 'Terrace', status: 'available', cx: 330, cy: 85, r: 24 },
  { id: 't7', number: 7, seats: 4, zone: 'Terrace', status: 'available', cx: 410, cy: 95, width: 55, height: 40 },
  { id: 't8', number: 8, seats: 4, zone: 'Terrace', status: 'available', cx: 340, cy: 185, width: 55, height: 40 },
  { id: 't9', number: 9, seats: 4, zone: 'Terrace', status: 'reserved', cx: 420, cy: 185, width: 55, height: 40 },

  // Private Dining Section
  { id: 't10', number: 10, seats: 8, zone: 'Private Dining', status: 'available', cx: 330, cy: 300, width: 95, height: 50 },
  { id: 't11', number: 11, seats: 10, zone: 'Private Dining', status: 'vip', cx: 450, cy: 300, width: 105, height: 55 },
  { id: 't12', number: 12, seats: 2, zone: 'Terrace', status: 'available', cx: 490, cy: 100, r: 24 }
];

export const mockTableZones: TableZone[] = [
  { id: 'z1', name: 'Indoor', tables: mockTables.filter(t => t.zone === 'Indoor') },
  { id: 'z2', name: 'Terrace', tables: mockTables.filter(t => t.zone === 'Terrace') },
  { id: 'z3', name: 'Private Dining', tables: mockTables.filter(t => t.zone === 'Private Dining') }
];
