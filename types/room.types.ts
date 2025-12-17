export interface Room {
    id: number
    slug: string
    name: string
    description: string
    price: number
    originalPrice?: number
    rating: number
    guests: number
    beds: number
    size: number
    category: 'suite' | 'deluxe' | 'standard' | 'villa' | 'family'
    amenities: string[]
    features: string[]
    images: string[]
    isAvailable: boolean
    discount?: number
    isFeatured?: boolean
  }
  
  export interface FilterOptions {
    category: string[]
    priceRange: [number, number]
    guests: number[]
    amenities: string[]
    availability: boolean
  }
  
  export interface SortOption {
    id: string
    label: string
  }
  
  export interface Category {
    id: string
    label: string
    count: number
  }