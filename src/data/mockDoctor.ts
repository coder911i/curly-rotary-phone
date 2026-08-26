import type { DoctorProfile, Treatment } from '../types';

export const mockDoctorProfile: DoctorProfile = {
  name: 'Dr. Arjun Mehra',
  role: 'Consultant Cardiologist & Medical Director',
  specialization: 'Advanced Interventional Cardiology & Heart Failure Medicine',
  experience: 18,
  patients: '12,000+',
  rating: 4.9,
  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
  bio: 'Dr. Arjun Mehra leads Véra Medical with over 18 years of pioneering clinical excellence at Harley Street and Johns Hopkins. Specializing in preventive cardiovascular screening, precision coronary interventions, and holistic metabolic health.',
  education: [
    'MBBS (Gold Medalist) — AIIMS New Delhi',
    'MD (Cardiology) — Johns Hopkins School of Medicine',
    'Fellowship in Interventional Cardiology — Royal College of Physicians, London'
  ],
  certifications: [
    'Board Certified in Cardiovascular Disease',
    'Diplomate in Precision Preventive Cardiology',
    'Member, European Society of Cardiology (FESC)'
  ],
  languages: ['English', 'Hindi', 'French']
};

export const mockTreatments: Treatment[] = [
  {
    id: 'cardiology',
    title: 'Advanced Cardiology Consultation',
    category: 'Diagnostic & Therapeutics',
    description: 'Comprehensive hemodynamic evaluations, 3D echocardiography, and tailored pharmacological regimens for peak cardiac health.',
    duration: '45 mins',
    price: '$350',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'screening',
    title: 'Comprehensive Heart Screening',
    category: 'Preventive Medicine',
    description: 'Ultra-low-radiation CT coronary angiography, advanced lipid subfraction testing, and genetic risk assessment.',
    duration: '90 mins',
    price: '$850',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'preventive',
    title: 'Preventive Metabolic Care',
    category: 'Long-term Wellness',
    description: 'Integrated endothelial profiling, lifestyle optimization, and continuous bio-metric monitoring for longevity.',
    duration: '60 mins',
    price: '$450',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'hypertension',
    title: 'Hypertension Management',
    category: 'Vascular Medicine',
    description: '24-hour ambulatory blood pressure mapping, arterial stiffness index tests, and targeted therapeutic protocols.',
    duration: '30 mins',
    price: '$280',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'diabetes',
    title: 'Diabetes & Cardiometabolic Care',
    category: 'Endocrinology & Heart',
    description: 'Dual-action glycemic control combined with cardioprotective therapies to shield microvascular structures.',
    duration: '45 mins',
    price: '$320',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Medicine & Rehabilitation',
    category: 'Holistic Recovery',
    description: 'Personalized cardiopulmonary fitness training, stress-resilience biofeedback, and Mediterranean nutrition coaching.',
    duration: '60 mins',
    price: '$300',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop'
  }
];

export const mockDoctorGallery = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop'
];

export const mockTestimonials = [
  {
    quote: "Dr. Arjun Mehra’s thorough approach and genuine empathy saved my life during an early ischemic diagnosis. Véra Medical is unmatched.",
    author: "Victor Vance",
    role: "Managing Director, Apex Capital",
    rating: 5
  },
  {
    quote: "The serene environment and state-of-the-art cardiovascular screening gave me absolute confidence in my long-term longevity plan.",
    author: "Elena Rostova",
    role: "Architectural Principal",
    rating: 5
  },
  {
    quote: "Prompt, discreet, and deeply professional. The multi-disciplinary care team ensured seamless recovery post-procedure.",
    author: "Sir Marcus Sterling",
    role: "Philanthropist",
    rating: 5
  }
];
