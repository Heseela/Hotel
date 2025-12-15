import { ContactInfo, FAQItem } from "@/types/contact.types"

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    title: 'Main Reception',
    description: 'Our reception is open 24/7 for your convenience',
    icon: '📞',
    details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    link: 'tel:+15551234567',
    linkText: 'Call Now'
  },
  {
    id: 2,
    title: 'Email Inquiries',
    description: 'For general inquiries and reservations',
    icon: '✉️',
    details: ['reservations@horizonhotel.com', 'info@horizonhotel.com'],
    link: 'mailto:reservations@horizonhotel.com',
    linkText: 'Send Email'
  },
  {
    id: 3,
    title: 'Hotel Address',
    description: 'Visit us at our luxurious beachfront location',
    icon: '📍',
    details: ['123 Luxury Avenue', 'Miami Beach, FL 33139', 'United States'],
    link: 'https://maps.google.com/?q=123+Luxury+Avenue+Miami+Beach+FL',
    linkText: 'Get Directions'
  },
  {
    id: 4,
    title: 'Business Hours',
    description: 'Our main services availability',
    icon: '🕒',
    details: ['Reception: 24/7', 'Restaurant: 6 AM - 11 PM', 'Spa: 8 AM - 10 PM', 'Pool: 7 AM - 9 PM']
  }
]

export const departments = [
  {
    name: 'Reservations',
    email: 'reservations@horizonhotel.com',
    phone: '+1 (555) 123-4567',
    hours: '24/7'
  },
  {
    name: 'Events & Weddings',
    email: 'events@horizonhotel.com',
    phone: '+1 (555) 123-4570',
    hours: 'Mon-Fri: 9 AM - 6 PM'
  },
  {
    name: 'Corporate Bookings',
    email: 'corporate@horizonhotel.com',
    phone: '+1 (555) 123-4571',
    hours: 'Mon-Fri: 8 AM - 5 PM'
  },
  {
    name: 'Spa & Wellness',
    email: 'spa@horizonhotel.com',
    phone: '+1 (555) 123-4572',
    hours: 'Daily: 8 AM - 10 PM'
  }
]

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'What are your check-in and check-out times?',
    answer: 'Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability.',
    category: 'general'
  },
  {
    id: 2,
    question: 'Do you offer airport transportation?',
    answer: 'Yes, we provide complimentary airport transfers for all guests staying in suites and villas. For other room categories, airport transfer service is available at an additional charge.',
    category: 'services'
  },
  {
    id: 3,
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 48 hours or more before arrival date will receive a full refund. Cancellations made within 48 hours will be charged for one night stay.',
    category: 'booking'
  },
  {
    id: 4,
    question: 'Are pets allowed at the hotel?',
    answer: 'We welcome pets up to 20kg in designated pet-friendly rooms. A pet fee of $75 per stay applies. Please notify us in advance if traveling with pets.',
    category: 'facilities'
  },
  {
    id: 5,
    question: 'Do you have parking facilities?',
    answer: 'Yes, we offer both valet parking ($45 per night) and self-parking ($35 per night). Electric vehicle charging stations are available.',
    category: 'facilities'
  },
  {
    id: 6,
    question: 'Is breakfast included in the room rate?',
    answer: 'Breakfast is included for all guests staying in suites and villas. For other room categories, breakfast can be added for $35 per person per day.',
    category: 'services'
  },
  {
    id: 7,
    question: 'Do you have wheelchair accessible rooms?',
    answer: 'Yes, we have 12 fully accessible rooms with roll-in showers, wider doorways, and accessible amenities. Please request when booking.',
    category: 'facilities'
  },
  {
    id: 8,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), cash, and digital payments through Apple Pay and Google Pay.',
    category: 'general'
  }
]

export const socialMedia = [
  { name: 'Facebook', icon: '📘', url: '#', handle: '@HorizonHotel' },
  { name: 'Instagram', icon: '📷', url: '#', handle: '@HorizonLuxury' },
  { name: 'Twitter', icon: '🐦', url: '#', handle: '@HorizonHotel' },
  { name: 'LinkedIn', icon: '💼', url: '#', handle: 'Horizon Hotel Group' },
  { name: 'TripAdvisor', icon: '⭐', url: '#', handle: 'Horizon Hotel Miami' }
]