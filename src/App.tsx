import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingProvider, useBooking } from './context/BookingContext';
import type { ViewState } from './types';

// Common Components
import { GlobalTopBar } from './components/common/GlobalTopBar';
import { BookingsDrawer } from './components/common/BookingsDrawer';
import { CursorFollower } from './components/common/CursorFollower';

// Showcase Components
import { ShowcaseHero } from './components/showcase/ShowcaseHero';
import { IndustryCard } from './components/showcase/IndustryCard';
import type { IndustryCardData } from './components/showcase/IndustryCard';
import { ShowcaseFooter } from './components/showcase/ShowcaseFooter';

// Doctor Website Components
import { DoctorNav } from './components/doctor/DoctorNav';
import { DoctorHero } from './components/doctor/DoctorHero';
import { DoctorTreatments } from './components/doctor/DoctorTreatments';
import { DoctorProfile } from './components/doctor/DoctorProfile';
import { DoctorStats } from './components/doctor/DoctorStats';
import { DoctorGallery } from './components/doctor/DoctorGallery';
import { DoctorBookingModal } from './components/doctor/DoctorBookingModal';

// Law Website Components
import { LawNav } from './components/law/LawNav';
import { LawHero } from './components/law/LawHero';
import { LawPracticeAreas } from './components/law/LawPracticeAreas';
import { LawAttorneys } from './components/law/LawAttorneys';
import { LawCaseStudies } from './components/law/LawCaseStudies';
import { LawConsultationModal } from './components/law/LawConsultationModal';

// Hotel Website Components
import { HotelNav } from './components/hotel/HotelNav';
import { HotelHero } from './components/hotel/HotelHero';
import { HotelRooms } from './components/hotel/HotelRooms';
import { HotelExperiences } from './components/hotel/HotelExperiences';
import { HotelBookingModal } from './components/hotel/HotelBookingModal';

// Salon Website Components
import { SalonNav } from './components/salon/SalonNav';
import { SalonHero } from './components/salon/SalonHero';
import { SalonServices } from './components/salon/SalonServices';
import { SalonStylists } from './components/salon/SalonStylists';
import { SalonBookingModal } from './components/salon/SalonBookingModal';

// Restaurant Website Components
import { RestaurantNav } from './components/restaurant/RestaurantNav';
import { RestaurantHero } from './components/restaurant/RestaurantHero';
import { RestaurantChef } from './components/restaurant/RestaurantChef';
import { RestaurantMenu } from './components/restaurant/RestaurantMenu';
import { InteractiveFloorPlan } from './components/restaurant/InteractiveFloorPlan';
import { RestaurantReservationModal } from './components/restaurant/RestaurantReservationModal';

// Showcase Cards Data
const SHOWCASE_CARDS: IndustryCardData[] = [
  {
    id: 'doctor',
    number: '01',
    industry: 'Healthcare & Cardiology',
    name: 'VÉRA MEDICAL',
    tagline: 'Minimal Luxury Healthcare',
    description: 'Advanced cardiovascular care with a patient-first approach led by Dr. Arjun Mehra. Features live stat counters, 3D medical card depth, and multi-step appointment scheduling.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#3b82f6',
    themeClass: 'font-doctor',
    features: ['Dr. Arjun Mehra', '4.9 Rating', '12K+ Patients', 'Live Appointment Slots']
  },
  {
    id: 'law',
    number: '02',
    industry: 'International Law Firm',
    name: 'BLACKSTONE & CO.',
    tagline: 'Strategic Corporate Counsel',
    description: 'Precision in every argument. Institutional legal practice for cross-border deals, IP litigation, and arbitration with lead partners Charles Blackstone & Victoria Vance.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#d4af37',
    themeClass: 'font-law-serif',
    features: ['$4.8B+ Transactions', '320+ Cases', 'Corporate M&A', 'Consultation Engine']
  },
  {
    id: 'hotel',
    number: '03',
    industry: 'Ultra-Luxury Hotel',
    name: 'THE AURELIA',
    tagline: 'Lake Como Private Retreat',
    description: 'Stay somewhere unforgettable. Overlooking Lake Como with private Riva boat charters, lakeview suites, and a dynamic real-time hotel price calculation booking engine.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#fbbf24',
    themeClass: 'font-hotel-serif',
    features: ['Lake Como, Italy', 'Lakeview Suites', 'Live Calculator', 'Spa & Yacht Charters']
  },
  {
    id: 'salon',
    number: '04',
    industry: 'Haute Beauté & Studio',
    name: 'MAISON ÉLAN',
    tagline: 'Fashion Editorial Beauty',
    description: 'Your best look, beautifully considered. High-fashion hair sculpting, Parisian balayage, and cellular skincare rituals with master artist selection.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#fb7185',
    themeClass: 'font-salon-serif',
    features: ['Master Stylists', 'Signature Cut', 'Russian Manicure', 'Live Summary']
  },
  {
    id: 'restaurant',
    number: '05',
    industry: 'Fine-Dining Restaurant',
    name: 'NOIR',
    tagline: 'Avant-Garde Modern Cuisine',
    description: 'An evening worth remembering in New Delhi. Guided by Chef Kabir Malhotra, featuring an interactive SVG visual restaurant floor-plan table picker.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#f59e0b',
    themeClass: 'font-restaurant-serif',
    features: ['Chef Kabir Malhotra', 'Interactive Floor Plan', 'Tasting Menu', 'Table Selector']
  }
];

const MainShowcaseContent: React.FC = () => {
  const { activeView, setActiveView } = useBooking();

  // Modals state for individual sites
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [isLawModalOpen, setIsLawModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedHotelRoomId, setSelectedHotelRoomId] = useState<string | undefined>(undefined);
  const [isSalonModalOpen, setIsSalonModalOpen] = useState(false);
  const [selectedSalonServiceId, setSelectedSalonServiceId] = useState<string | undefined>(undefined);
  const [isRestaurantModalOpen, setIsRestaurantModalOpen] = useState(false);

  const handleSelectView = (view: ViewState) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-white selection:bg-amber-400 selection:text-black">
      <GlobalTopBar />
      <CursorFollower />
      <BookingsDrawer />

      <AnimatePresence mode="wait">
        {/* VIEW 0: MAIN SHOWCASE LANDING PAGE */}
        {activeView === 'showcase' && (
          <motion.div
            key="showcase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ShowcaseHero />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-32 space-y-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold block">
                    Interactive Showcase Catalog
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mt-1">
                    Select a Luxury Website Experience
                  </h2>
                </div>
                <span className="hidden sm:block text-xs text-white/50 font-mono">
                  5 Real Business Concepts
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {SHOWCASE_CARDS.map((card, idx) => (
                  <IndustryCard
                    key={card.id}
                    card={card}
                    index={idx}
                    onSelect={handleSelectView}
                  />
                ))}
              </div>
            </section>

            <ShowcaseFooter />
          </motion.div>
        )}

        {/* VIEW 1: VÉRA MEDICAL (DOCTOR) */}
        {activeView === 'doctor' && (
          <motion.div
            key="doctor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#090d16]"
          >
            <DoctorNav onOpenBooking={() => setIsDoctorModalOpen(true)} />
            <DoctorHero onOpenBooking={() => setIsDoctorModalOpen(true)} />
            <DoctorTreatments onSelectTreatment={() => setIsDoctorModalOpen(true)} />
            <DoctorProfile />
            <DoctorStats />
            <DoctorGallery />
            <DoctorBookingModal
              isOpen={isDoctorModalOpen}
              onClose={() => setIsDoctorModalOpen(false)}
            />
          </motion.div>
        )}

        {/* VIEW 2: BLACKSTONE & CO. (LAW) */}
        {activeView === 'law' && (
          <motion.div
            key="law"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#08080a]"
          >
            <LawNav onOpenConsultation={() => setIsLawModalOpen(true)} />
            <LawHero onOpenConsultation={() => setIsLawModalOpen(true)} />
            <LawPracticeAreas onSelectPractice={() => setIsLawModalOpen(true)} />
            <LawAttorneys onSelectAttorney={() => setIsLawModalOpen(true)} />
            <LawCaseStudies />
            <LawConsultationModal
              isOpen={isLawModalOpen}
              onClose={() => setIsLawModalOpen(false)}
            />
          </motion.div>
        )}

        {/* VIEW 3: THE AURELIA (HOTEL) */}
        {activeView === 'hotel' && (
          <motion.div
            key="hotel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0d0c0a]"
          >
            <HotelNav onOpenBooking={() => setIsHotelModalOpen(true)} />
            <HotelHero onOpenBooking={() => setIsHotelModalOpen(true)} />
            <HotelRooms
              onSelectRoom={(roomId) => {
                setSelectedHotelRoomId(roomId);
                setIsHotelModalOpen(true);
              }}
            />
            <HotelExperiences />
            <HotelBookingModal
              isOpen={isHotelModalOpen}
              onClose={() => setIsHotelModalOpen(false)}
              initialRoomId={selectedHotelRoomId}
            />
          </motion.div>
        )}

        {/* VIEW 4: MAISON ÉLAN (SALON) */}
        {activeView === 'salon' && (
          <motion.div
            key="salon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#110e0e]"
          >
            <SalonNav onOpenBooking={() => setIsSalonModalOpen(true)} />
            <SalonHero onOpenBooking={() => setIsSalonModalOpen(true)} />
            <SalonServices
              onSelectService={(serviceId) => {
                setSelectedSalonServiceId(serviceId);
                setIsSalonModalOpen(true);
              }}
            />
            <SalonStylists onSelectStylist={() => setIsSalonModalOpen(true)} />
            <SalonBookingModal
              isOpen={isSalonModalOpen}
              onClose={() => setIsSalonModalOpen(false)}
              initialServiceId={selectedSalonServiceId}
            />
          </motion.div>
        )}

        {/* VIEW 5: NOIR (RESTAURANT) */}
        {activeView === 'restaurant' && (
          <motion.div
            key="restaurant"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#070709]"
          >
            <RestaurantNav onOpenReservation={() => setIsRestaurantModalOpen(true)} />
            <RestaurantHero onOpenReservation={() => setIsRestaurantModalOpen(true)} />
            <RestaurantChef />
            <RestaurantMenu />

            {/* Standalone Interactive Floorplan Preview Section */}
            <section id="noir-floor" className="py-24 px-4 sm:px-6 bg-[#09090c] border-t border-amber-500/20">
              <div className="max-w-4xl mx-auto space-y-8 text-center">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    03 — Dining Layout
                  </span>
                  <h2 className="text-4xl font-bold font-serif-luxury text-white">Visual Table Selection</h2>
                  <p className="text-sm text-amber-100/60 font-light">
                    Select your preferred table on our visual floor plan to launch table reservation.
                  </p>
                </div>

                <InteractiveFloorPlan
                  selectedTableId={null}
                  onSelectTable={() => setIsRestaurantModalOpen(true)}
                />
              </div>
            </section>

            <RestaurantReservationModal
              isOpen={isRestaurantModalOpen}
              onClose={() => setIsRestaurantModalOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <BookingProvider>
      <MainShowcaseContent />
    </BookingProvider>
  );
}
