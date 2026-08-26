import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Booking, ViewState } from '../types';

interface BookingContextType {
  activeView: ViewState;
  setActiveView: (view: ViewState) => void;
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => Booking;
  cancelBooking: (id: string) => void;
  isBookingsDrawerOpen: boolean;
  setIsBookingsDrawerOpen: (open: boolean) => void;
  currentActiveBooking: Booking | null;
  setCurrentActiveBooking: (booking: Booking | null) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'five_luxury_demos_bookings';

const MOCK_INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'VM-20481',
    businessId: 'doctor',
    businessName: 'VÉRA MEDICAL',
    type: 'Cardiology Consultation',
    date: '2026-08-28',
    time: '05:30 PM',
    details: {
      doctor: 'Dr. Arjun Mehra',
      patientName: 'Alexander Vance',
      clinic: 'Véra Medical Suites, Central Tower'
    },
    createdAt: new Date().toISOString(),
    status: 'Confirmed'
  },
  {
    id: 'AUR-48291',
    businessId: 'hotel',
    businessName: 'THE AURELIA',
    type: 'Lakeview Suite (3 Nights)',
    date: '2026-09-12',
    details: {
      location: 'Lake Como, Italy',
      guests: 2,
      totalAmount: '€5,140'
    },
    createdAt: new Date().toISOString(),
    status: 'Confirmed'
  }
];

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ViewState>('showcase');
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : MOCK_INITIAL_BOOKINGS;
    } catch {
      return MOCK_INITIAL_BOOKINGS;
    }
  });
  const [isBookingsDrawerOpen, setIsBookingsDrawerOpen] = useState(false);
  const [currentActiveBooking, setCurrentActiveBooking] = useState<Booking | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to persist bookings to localStorage', e);
    }
  }, [bookings]);

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
    const prefixes: Record<string, string> = {
      doctor: 'VM-',
      law: 'BLK-',
      hotel: 'AUR-',
      salon: 'ELAN-',
      restaurant: 'NOIR-'
    };
    
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newId = `${prefixes[bookingData.businessId] || 'RES-'}${randomNum}`;

    const newBooking: Booking = {
      ...bookingData,
      id: newId,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    setBookings(prev => [newBooking, ...prev]);
    setCurrentActiveBooking(newBooking);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  return (
    <BookingContext.Provider
      value={{
        activeView,
        setActiveView,
        bookings,
        addBooking,
        cancelBooking,
        isBookingsDrawerOpen,
        setIsBookingsDrawerOpen,
        currentActiveBooking,
        setCurrentActiveBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
