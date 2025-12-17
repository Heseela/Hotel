'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Room } from '@/types/room.types'
import { initialRooms } from '@/data/rooms'
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Bed, 
  Maximize2, 
  Check, 
  Wifi, 
  Coffee,
  Tv,
  Wind,
  Dumbbell,
  Car,
  Utensils,
  Waves,
  Shield,
  Calendar,
  Clock,
  Heart,
  Share2,
  MapPin,
  Phone,
  Mail,
  Bath,
  Home,
  Briefcase,
  Trees,
  Sparkles,
  ChefHat,
  Wine,
  Gamepad2
} from 'lucide-react'

interface SingleRoomProps {
  room: Room
}

export default function SingleRoom({ room }: SingleRoomProps) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guests, setGuests] = useState(room.guests)
  const [nights, setNights] = useState(3)
  const [isFavorite, setIsFavorite] = useState(false)
  
  const similarRooms = initialRooms
    .filter(r => r.id !== room.id && r.category === room.category && r.isAvailable)
    .slice(0, 3)

  const handleBookNow = () => {
    const bookingParams = new URLSearchParams({
      room: room.slug,
      guests: guests.toString(),
      checkIn: checkInDate || new Date().toISOString().split('T')[0],
      checkOut: checkOutDate || new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      nights: nights.toString()
    })
    router.push(`/booking?${bookingParams}`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${room.name} - Horizon Hotels`,
        text: room.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      // You can add a toast notification here
      alert('Link copied to clipboard!')
    }
  }

  // Icon mapping for amenities
  const amenitiesIcons: Record<string, React.ReactNode> = {
    'Private Pool': <Waves className="h-5 w-5" />,
    'Butler Service': <Sparkles className="h-5 w-5" />,
    'Gourmet Kitchen': <ChefHat className="h-5 w-5" />,
    'Home Theater': <Tv className="h-5 w-5" />,
    'Wine Cellar': <Wine className="h-5 w-5" />,
    'Private Garden': <Trees className="h-5 w-5" />,
    'Jacuzzi': <Bath className="h-5 w-5" />,
    'Living Area': <Home className="h-5 w-5" />,
    'Work Desk': <Briefcase className="h-5 w-5" />,
    'Kitchenette': <Utensils className="h-5 w-5" />,
    'High-Speed WiFi': <Wifi className="h-5 w-5" />,
    'Ocean View Balcony': <Trees className="h-5 w-5" />,
    'King Size Bed': <Bed className="h-5 w-5" />,
    'Smart TV': <Tv className="h-5 w-5" />,
    'Mini Bar': <Utensils className="h-5 w-5" />,
    'Coffee Machine': <Coffee className="h-5 w-5" />,
    'Garden View': <Trees className="h-5 w-5" />,
    'Queen Bed': <Bed className="h-5 w-5" />,
    'Free WiFi': <Wifi className="h-5 w-5" />,
    'Two Bedrooms': <Home className="h-5 w-5" />,
    'Play Area': <Gamepad2 className="h-5 w-5" />,
    'Two Bathrooms': <Bath className="h-5 w-5" />,
    'Game Console': <Gamepad2 className="h-5 w-5" />,
    'Romantic Decor': <Sparkles className="h-5 w-5" />,
    'Champagne': <Wine className="h-5 w-5" />,
    'Spa Bath': <Bath className="h-5 w-5" />,
    'Couples Spa': <Sparkles className="h-5 w-5" />,
    'Ocean Front': <Waves className="h-5 w-5" />,
    'Dining Area': <Utensils className="h-5 w-5" />,
    'Wet Bar': <Wine className="h-5 w-5" />,
    'Fireplace': <Sparkles className="h-5 w-5" />,
    'Private Plunge Pool': <Waves className="h-5 w-5" />,
    'Outdoor Shower': <Bath className="h-5 w-5" />,
    'Outdoor Dining': <Utensils className="h-5 w-5" />,
    'BBQ Area': <ChefHat className="h-5 w-5" />,
    'Meeting Area': <Briefcase className="h-5 w-5" />,
    'Printer': <Briefcase className="h-5 w-5" />,
    'Coffee Station': <Coffee className="h-5 w-5" />,
  }

  // Calculate total price
  const calculateTotal = () => {
    const basePrice = room.price * nights
    const serviceFee = 49
    const taxes = 87
    const discount = room.discount ? (basePrice * room.discount / 100) : 0
    return basePrice + serviceFee + taxes - discount
  }

  // Get category label
  const getCategoryLabel = () => {
    const labels = {
      suite: 'Suite',
      deluxe: 'Deluxe Room',
      standard: 'Standard Room',
      villa: 'Villa',
      family: 'Family Room'
    }
    return labels[room.category]
  }

  return (
    <>
      {/* Back Navigation */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/rooms" 
              className="group inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Rooms
            </Link>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition-colors ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                aria-label="Share room"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Room Details */}
            <div className="lg:col-span-2">
              {/* Room Header */}
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                      {getCategoryLabel()}
                    </span>
                    <h1 className="font-heading text-3xl font-bold text-gray-900 md:text-4xl">
                      {room.name}
                    </h1>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        {room.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ${room.originalPrice}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-gray-900">
                          ${room.price}
                          <span className="text-sm font-normal text-gray-600"> / night</span>
                        </span>
                      </div>
                      {room.discount && (
                        <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                          Save {room.discount}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Rating & Meta */}
                <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">{room.rating.toFixed(1)}</span>
                    <span className="text-gray-500">({Math.floor(Math.random() * 100) + 50} reviews)</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Up to {room.guests} Guest{room.guests > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span>{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize2 className="h-5 w-5 text-primary" />
                      <span>{room.size} m²</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative mb-4 h-64 overflow-hidden rounded-2xl md:h-96">
                  <Image
                    src={room.images[selectedImage] || room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  {room.isFeatured && (
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        Featured Room
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Thumbnails */}
                {room.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {room.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg transition-all ${selectedImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}
                      >
                        <Image
                          src={image}
                          alt={`${room.name} view ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                  Room Description
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div className="rounded-xl bg-gray-50 p-6">
                    <h3 className="mb-4 font-heading text-xl font-bold text-gray-900">
                      Special Features
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="mb-6 font-heading text-2xl font-bold text-gray-900">
                  Amenities & Services
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {amenitiesIcons[amenity] || <Check className="h-5 w-5" />}
                      </div>
                      <span className="font-medium text-gray-900">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Rules */}
              <div className="mb-8 rounded-2xl border border-gray-200 p-6">
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                  House Rules & Policies
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-900">
                      <Clock className="h-5 w-5 text-primary" />
                      Check-in / Check-out
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>• Check-in: 2:00 PM - 10:00 PM</p>
                      <p>• Check-out: Until 11:00 AM</p>
                      <p>• Early check-in available upon request</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-900">
                      <Users className="h-5 w-5 text-primary" />
                      Guest Policy
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>• Maximum {room.guests} guest{room.guests > 1 ? 's' : ''}</p>
                      <p>• Children welcome</p>
                      <p>• No pets allowed</p>
                      <p>• Non-smoking room</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-900">
                      <Shield className="h-5 w-5 text-primary" />
                      Cancellation Policy
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>• Free cancellation 48 hours before check-in</p>
                      <p>• 50% refund for late cancellations</p>
                      <p>• No refund for no-shows</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-900">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Additional Information
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>• Airport transfer available</p>
                      <p>• Daily housekeeping</p>
                      <p>• 24-hour room service</p>
                      <p>• Concierge service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">
                  Book This Room
                </h3>
                
                {/* Availability Status */}
                <div className={`mb-6 rounded-lg p-4 ${room.isAvailable ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${room.isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <p className={`font-semibold ${room.isAvailable ? 'text-green-800' : 'text-red-800'}`}>
                      {room.isAvailable ? '✅ Available for dates' : '❌ Currently unavailable'}
                    </p>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-6 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => {
                        setCheckInDate(e.target.value)
                        if (checkOutDate && new Date(e.target.value) >= new Date(checkOutDate)) {
                          const newCheckOut = new Date(e.target.value)
                          newCheckOut.setDate(newCheckOut.getDate() + nights)
                          setCheckOutDate(newCheckOut.toISOString().split('T')[0])
                        }
                      }}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => {
                        setCheckOutDate(e.target.value)
                        if (checkInDate) {
                          const nightsDiff = Math.ceil(
                            (new Date(e.target.value).getTime() - new Date(checkInDate).getTime()) / (1000 * 3600 * 24)
                          )
                          if (nightsDiff > 0) setNights(nightsDiff)
                        }
                      }}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      min={checkInDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">
                      Nights Stay
                    </label>
                    <select
                      value={nights}
                      onChange={(e) => {
                        const newNights = parseInt(e.target.value)
                        setNights(newNights)
                        if (checkInDate) {
                          const newCheckOut = new Date(checkInDate)
                          newCheckOut.setDate(newCheckOut.getDate() + newNights)
                          setCheckOutDate(newCheckOut.toISOString().split('T')[0])
                        }
                      }}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        <option key={num} value={num}>
                          {num} Night{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests Selection */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {[...Array(room.guests)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Guest{i + 1 > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Summary */}
                <div className="mb-6 space-y-3 border-t border-gray-200 pt-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">${room.price} × {nights} nights</span>
                    <span className="font-medium text-gray-900">${(room.price * nights).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service fee</span>
                    <span className="font-medium text-gray-900">$49.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes</span>
                    <span className="font-medium text-gray-900">$87.00</span>
                  </div>
                  {room.discount && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount ({room.discount}%)</span>
                      <span className="font-medium text-green-600">
                        -${((room.price * nights * room.discount) / 100).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-2xl text-primary">
                        ${calculateTotal().toFixed(2)}
                        <span className="text-sm font-normal text-gray-600"> USD</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleBookNow}
                    disabled={!room.isAvailable}
                    className={`w-full rounded-lg py-4 font-semibold transition-colors ${room.isAvailable ? 'bg-primary text-white hover:bg-primary/90' : 'cursor-not-allowed bg-gray-300 text-gray-500'}`}
                  >
                    {room.isAvailable ? 'Book Now' : 'Not Available'}
                  </button>
                  
                  <Link
                    href="/contact"
                    className="block w-full rounded-lg border border-primary bg-white py-4 text-center font-semibold text-primary transition-colors hover:bg-primary/5"
                  >
                    Contact for Inquiry
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">+960 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">reservations@horizonhotels.com</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Need help? Our team is available 24/7 to assist with your booking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Rooms Section */}
          {similarRooms.length > 0 && (
            <div className="mt-12">
              <div className="mb-8">
                <h2 className="mb-2 font-heading text-2xl font-bold text-gray-900 md:text-3xl">
                  Similar Rooms You Might Like
                </h2>
                <p className="text-gray-600">Other {getCategoryLabel().toLowerCase()}s you may be interested in</p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                {similarRooms.map((similarRoom) => (
                  <Link 
                    key={similarRoom.id} 
                    href={`/rooms/${similarRoom.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={similarRoom.images[0]}
                          alt={similarRoom.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {similarRoom.discount && (
                          <div className="absolute left-4 top-4">
                            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                              -{similarRoom.discount}%
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {getCategoryLabel()}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{similarRoom.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        
                        <h3 className="mb-2 font-heading text-lg font-bold text-gray-900 group-hover:text-primary">
                          {similarRoom.name}
                        </h3>
                        
                        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                          {similarRoom.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            {similarRoom.originalPrice && (
                              <span className="mr-2 text-sm text-gray-500 line-through">
                                ${similarRoom.originalPrice}
                              </span>
                            )}
                            <span className="text-xl font-bold text-gray-900">
                              ${similarRoom.price}
                              <span className="text-sm font-normal text-gray-600"> / night</span>
                            </span>
                          </div>
                          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}