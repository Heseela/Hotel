export interface ContactInfo {
    id: number
    title: string
    description: string
    icon: string
    details: string[]
    link?: string
    linkText?: string
  }
  
  export interface FAQItem {
    id: number
    question: string
    answer: string
    category: 'general' | 'booking' | 'services' | 'facilities'
  }
  
  export interface ContactFormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    checkIn?: string
    checkOut?: string
    guests?: number
  }