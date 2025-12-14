'use client'

import { Room } from '@/types'
import { Star, Users, Maximize2, Check, Heart, Eye, Bed } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface RoomGridProps {
  rooms: Room[]
}

export default function RoomGrid({ rooms }: RoomGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [quickView, setQuickView] = useState<number | null>(null)

  const toggleFavorite = (roomId: number) => {
    setFavorites(prev =>
      prev.includes(roomId)
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      {quickView !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-secondary">
                  {rooms.find(r => r.id === quickView)?.name}
                </h3>
                <button
                  onClick={() => setQuickView(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                {rooms.find(r => r.id === quickView)?.description}
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={room.images[0]}
                alt={room.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {room.discount && (
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Save {room.discount}%
                  </div>
                )}
                {room.isFeatured && (
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              <button
                onClick={() => toggleFavorite(room.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label={favorites.includes(room.id) ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.includes(room.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-600'
                  }`}
                />
              </button>

              {!room.isAvailable && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-secondary font-bold shadow-lg">
                    Currently Booked
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{room.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600 capitalize">{room.category}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(room.price)}
                  </div>
                  <div className="text-sm text-gray-500">per night</div>
                  {room.originalPrice && (
                    <div className="text-sm text-gray-400 line-through">
                      {formatPrice(room.originalPrice)}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
                {room.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{room.guests} Guests</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Maximize2 className="w-4 h-4" />
                  <span>{room.size} m²</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {room.amenities.slice(0, 3).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs"
                    >
                      <Check className="w-3 h-3 text-primary" />
                      {amenity}
                    </div>
                  ))}
                  {room.amenities.length > 3 && (
                    <div className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs">
                      +{room.amenities.length - 3} more
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                    room.isAvailable
                      ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!room.isAvailable}
                >
                  {room.isAvailable ? 'Book Now' : 'Unavailable'}
                </button>
                <button 
                  onClick={() => setQuickView(room.id)}
                  className="px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm hover:shadow"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}