'use client'

import { Star, Users, Maximize2, Wifi, Coffee, Wind, Tv, Bath, Heart, Share2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View',
    description: 'Wake up to breathtaking ocean views from your private balcony. Features a king-sized bed, marble bathroom, and premium amenities.',
    price: 299,
    rating: 4.8,
    reviews: 128,
    guests: 2,
    size: 45,
    amenities: ['Ocean View', 'King Bed', 'Free WiFi', 'Breakfast Included', 'AC', 'Smart TV', 'Mini Bar', 'Balcony'],
    image: '/images/room-deluxe.jpg',
    images: ['/images/room-deluxe-1.jpg', '/images/room-deluxe-2.jpg', '/images/room-deluxe-3.jpg'],
    highlight: 'Most Popular',
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Perfect for business travelers, featuring a separate living area, workspace, and premium business amenities.',
    price: 499,
    rating: 4.9,
    reviews: 89,
    guests: 3,
    size: 75,
    amenities: ['Living Room', 'Jacuzzi', 'Workspace', 'Kitchenette', 'City View', 'Premium WiFi', 'Express Check-in', 'Private Bar'],
    image: '/images/room-executive.jpg',
    images: ['/images/room-executive-1.jpg', '/images/room-executive-2.jpg'],
    highlight: 'Business Favorite',
  },
  {
    id: 3,
    name: 'Presidential Villa',
    description: 'Ultimate luxury with private pool, butler service, and exclusive amenities for the most discerning guests.',
    price: 899,
    rating: 5.0,
    reviews: 45,
    guests: 4,
    size: 120,
    amenities: ['Private Pool', 'Butler Service', 'Gourmet Kitchen', 'Home Theater', 'Wine Cellar', 'Spa Bath', 'Garden', 'Beach Access'],
    image: '/images/room-villa.jpg',
    images: ['/images/room-villa-1.jpg', '/images/room-villa-2.jpg', '/images/room-villa-3.jpg'],
    highlight: 'Exclusive',
  },
  {
    id: 4,
    name: 'Family Suite',
    description: 'Spacious suite perfect for families, featuring two bedrooms, play area, and kid-friendly amenities.',
    price: 399,
    rating: 4.7,
    reviews: 67,
    guests: 4,
    size: 65,
    amenities: ['Two Bedrooms', 'Play Area', 'Kitchen', 'Game Console', 'Kids Menu', 'Pool View', 'Baby Sitting', 'Connecting Rooms'],
    image: '/images/room-family.jpg',
    images: ['/images/room-family-1.jpg', '/images/room-family-2.jpg'],
    highlight: 'Family Friendly',
  },
  {
    id: 5,
    name: 'Honeymoon Suite',
    description: 'Romantic retreat with special touches for couples celebrating special moments together.',
    price: 599,
    rating: 4.9,
    reviews: 92,
    guests: 2,
    size: 55,
    amenities: ['Romantic Decor', 'Champagne', 'Couples Spa', 'Private Balcony', 'Rose Petals', 'Candlelit Dinner', 'Jacuzzi', 'Butler Service'],
    image: '/images/room-honeymoon.jpg',
    images: ['/images/room-honeymoon-1.jpg', '/images/room-honeymoon-2.jpg'],
    highlight: 'Romantic',
  },
  {
    id: 6,
    name: 'Standard Room',
    description: 'Comfortable and affordable accommodation with all essential amenities for a pleasant stay.',
    price: 199,
    rating: 4.5,
    reviews: 156,
    guests: 2,
    size: 35,
    amenities: ['Garden View', 'Queen Bed', 'Work Desk', 'Free WiFi', 'TV', 'AC', 'Coffee Maker', 'Safe'],
    image: '/images/room-standard.jpg',
    images: ['/images/room-standard-1.jpg'],
    highlight: 'Best Value',
  },
]

export default function RoomCard() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [activeRoom, setActiveRoom] = useState(rooms[0])

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const amenityIcons = {
    'Free WiFi': <Wifi className="w-4 h-4" />,
    'Premium WiFi': <Wifi className="w-4 h-4" />,
    'Breakfast Included': <Coffee className="w-4 h-4" />,
    'Kids Menu': <Coffee className="w-4 h-4" />,
    'AC': <Wind className="w-4 h-4" />,
    'Smart TV': <Tv className="w-4 h-4" />,
    'TV': <Tv className="w-4 h-4" />,
    'Game Console': <Tv className="w-4 h-4" />,
    'Jacuzzi': <Bath className="w-4 h-4" />,
    'Spa Bath': <Bath className="w-4 h-4" />,
    'Marble Bathroom': <Bath className="w-4 h-4" />,
  }

  return (
    <div>
      {/* Room List */}
      <div className="space-y-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
              activeRoom.id === room.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    {room.highlight}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={() => toggleFavorite(room.id)}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Heart className={`w-5 h-5 ${
                      favorites.includes(room.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                    }`} />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-2 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(room.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {room.rating} ({room.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      ${room.price}
                    </div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {room.description}
                </p>

                {/* Room Info */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Up to {room.guests} guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" />
                    <span>{room.size} m²</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {amenityIcons[amenity as keyof typeof amenityIcons] || '✨'}
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveRoom(room)}
                    className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                      activeRoom.id === room.id
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {activeRoom.id === room.id ? 'Selected' : 'Select Room'}
                  </button>
                  <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                    Book Now
                  </button>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          &lt;
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-lg">1</button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          3
        </button>
        <span className="text-gray-500">...</span>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          8
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          &gt;
        </button>
      </div>
    </div>
  )
}