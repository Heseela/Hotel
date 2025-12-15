'use client'

import { useState, useEffect, useCallback } from 'react'
import { Info, Phone } from 'lucide-react'
import RoomsHero from '@/components/RoomSection/RoomsHero'
import RoomSearchBar from '@/components/RoomSection/RoomSearchBar'
import RoomFilterSidebar from '@/components/RoomSection/RoomFilterSidebar'
import { allAmenities, categories, initialRooms } from '@/data/rooms'
import RoomGrid from '@/components/RoomSection/RoomGrid'
import RoomSort from '@/components/RoomSection/RoomSort'
import { FilterOptions, Room } from '@/types/room.types'

export default function RoomsPage() {
  const [rooms] = useState<Room[]>(initialRooms)
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(initialRooms)
  const [sortBy, setSortBy] = useState<string>('recommended')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    priceRange: [100, 1000],
    guests: [],
    amenities: [],
    availability: true,
  })

  const getActiveFilterCount = useCallback(() => {
    let count = 0
    if (filters.category.length > 0) count += filters.category.length
    if (filters.guests.length > 0) count += filters.guests.length
    if (filters.amenities.length > 0) count += filters.amenities.length
    if (filters.priceRange[0] !== 100 || filters.priceRange[1] !== 1000) count += 1
    if (!filters.availability) count += 1
    return count
  }, [filters])

  const applyFilters = useCallback(() => {
    setLoading(true)
    
    let result = [...rooms]

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(room =>
        room.name.toLowerCase().includes(query) ||
        room.description.toLowerCase().includes(query) ||
        room.amenities.some(a => a.toLowerCase().includes(query)) ||
        room.features.some(f => f.toLowerCase().includes(query))
      )
    }

    if (filters.category.length > 0) {
      result = result.filter(room => filters.category.includes(room.category))
    }

    result = result.filter(room =>
      room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1]
    )

    if (filters.guests.length > 0) {
      result = result.filter(room => filters.guests.includes(room.guests))
    }

    if (filters.amenities.length > 0) {
      result = result.filter(room =>
        filters.amenities.every(amenity => room.amenities.includes(amenity))
      )
    }

    if (filters.availability) {
      result = result.filter(room => room.isAvailable)
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'guests':
        result.sort((a, b) => b.guests - a.guests)
        break
      case 'size':
        result.sort((a, b) => b.size - a.size)
        break
      default:
        result.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1
          if (!a.isFeatured && b.isFeatured) return 1
          if (b.rating !== a.rating) return b.rating - a.rating
          return a.price - b.price
        })
    }

    setTimeout(() => {
      setFilteredRooms(result)
      setLoading(false)
    }, 300)
  }, [rooms, filters, sortBy, searchQuery])

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters)
  }

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const resetFilters = () => {
    setFilters({
      category: [],
      priceRange: [100, 1000],
      guests: [],
      amenities: [],
      availability: true,
    })
    setSortBy('recommended')
    setSearchQuery('')
  }

  useEffect(() => {
    applyFilters()
  }, [applyFilters])

  return (
    <main className="min-h-screen">
      <RoomsHero />

      <RoomSearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
        activeFilterCount={getActiveFilterCount()}
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <RoomFilterSidebar
              filters={filters}
              categories={categories}
              amenities={allAmenities}
              onFilterChange={handleFilterChange}
              onReset={resetFilters}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />

            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-secondary">
                      Available Rooms
                    </h2>
                    <p className="text-gray-600">
                      {loading ? 'Searching...' : `Found ${filteredRooms.length} of ${rooms.length} rooms`}
                    </p>
                  </div>
                  <div className="w-full sm:w-auto">
                    <RoomSort sortBy={sortBy} onSortChange={handleSortChange} />
                  </div>
                </div>

                {getActiveFilterCount() > 0 && (
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">
                        {getActiveFilterCount()} active filter{getActiveFilterCount() !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <button
                      onClick={resetFilters}
                      className="text-sm text-primary hover:text-primary/80 font-medium"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                      <div className="h-56 bg-gray-200"></div>
                      <div className="p-6 space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {filteredRooms.length > 0 ? (
                    <RoomGrid rooms={filteredRooms} />
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Info className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3">
                        No matching rooms found
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Try adjusting your search terms or filters to find what you're looking for.
                      </p>
                      <button
                        onClick={resetFilters}
                        className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}

                  <div className="mt-12 bg-linear-to-r from-primary/5 to-primary/10 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-secondary">Need help choosing?</h4>
                          <p className="text-sm text-gray-600">
                            Our concierge team is available 24/7 to assist you.
                          </p>
                        </div>
                      </div>
                      <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium whitespace-nowrap">
                        Contact Concierge
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-linear-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Special Offers Available
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy exclusive benefits including free upgrades, 
            spa credits, and flexible cancellation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl">
              View Special Offers
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-medium">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}