'use client'

import { guestOptions } from '@/data/rooms'
import { Category, FilterOptions } from '@/types'
import { X, Filter, DollarSign, Users, Check } from 'lucide-react'

interface RoomFilterProps {
  filters: FilterOptions
  categories: Category[]
  amenities: string[]
  onFilterChange: (filters: FilterOptions) => void
  onReset: () => void
}

export default function RoomFilter({
  filters,
  categories,
  amenities,
  onFilterChange,
  onReset,
}: RoomFilterProps) {
  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.category.includes(categoryId)
      ? filters.category.filter(c => c !== categoryId)
      : [...filters.category, categoryId]
    
    onFilterChange({
      ...filters,
      category: newCategories,
    })
  }

  const handleGuestsChange = (guestCount: number) => {
    const newGuests = filters.guests.includes(guestCount)
      ? filters.guests.filter(g => g !== guestCount)
      : [...filters.guests, guestCount]
    
    onFilterChange({
      ...filters,
      guests: newGuests,
    })
  }

  const handleAmenityChange = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity]
    
    onFilterChange({
      ...filters,
      amenities: newAmenities,
    })
  }

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({
      ...filters,
      priceRange: [min, max],
    })
  }

  const handleAvailabilityChange = (available: boolean) => {
    onFilterChange({
      ...filters,
      availability: available,
    })
  }

  const clearFilter = (type: keyof FilterOptions) => {
    const defaultValue = type === 'priceRange' ? [100, 1000] : 
                        type === 'availability' ? true : []
    onFilterChange({
      ...filters,
      [type]: defaultValue,
    })
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (filters.category.length > 0) count += filters.category.length
    if (filters.guests.length > 0) count += filters.guests.length
    if (filters.amenities.length > 0) count += filters.amenities.length
    if (filters.priceRange[0] !== 100 || filters.priceRange[1] !== 1000) count += 1
    if (!filters.availability) count += 1
    return count
  }

  const activeFilterCount = getActiveFilterCount()

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-secondary">Filters</h3>
          {activeFilterCount > 0 && (
            <span className="w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onReset}
            className="text-sm text-primary hover:text-primary/80 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-secondary">Price Range</h4>
          <DollarSign className="w-4 h-4 text-gray-400" />
        </div>
        <div className="space-y-4">
          <div className="px-2">
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(parseInt(e.target.value), filters.priceRange[1])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
            />
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-secondary">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </div>
            {(filters.priceRange[0] !== 100 || filters.priceRange[1] !== 1000) && (
              <button
                onClick={() => clearFilter('priceRange')}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Room Categories */}
      <div className="mb-8">
        <h4 className="font-medium text-secondary mb-4">Room Type</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center justify-between cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:border-primary peer-checked:bg-primary transition-colors flex items-center justify-center">
                    {filters.category.includes(category.id) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
                <span className="text-gray-700 group-hover:text-secondary">
                  {category.label}
                </span>
              </div>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {category.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Guests */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-secondary">Guests</h4>
          <Users className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2">
          {guestOptions.map((guest) => (
            <button
              key={guest}
              onClick={() => handleGuestsChange(guest)}
              className={`px-4 py-2 rounded-lg transition-all ${
                filters.guests.includes(guest)
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {guest}
            </button>
          ))}
        </div>
        {filters.guests.length > 0 && (
          <button
            onClick={() => clearFilter('guests')}
            className="mt-3 text-xs text-gray-500 hover:text-gray-700"
          >
            Clear selection
          </button>
        )}
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h4 className="font-medium text-secondary mb-4">Amenities</h4>
        <div className="space-y-3">
          {amenities.map((amenity) => (
            <label
              key={amenity}
              className="flex items-center justify-between cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:border-primary peer-checked:bg-primary transition-colors flex items-center justify-center">
                    {filters.amenities.includes(amenity) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
                <span className="text-gray-700 group-hover:text-secondary">
                  {amenity}
                </span>
              </div>
            </label>
          ))}
        </div>
        {filters.amenities.length > 0 && (
          <button
            onClick={() => clearFilter('amenities')}
            className="mt-3 text-xs text-gray-500 hover:text-gray-700"
          >
            Clear selection
          </button>
        )}
      </div>

      {/* Availability */}
      <div>
        <h4 className="font-medium text-secondary mb-4">Availability</h4>
        <label className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="relative">
            <input
              type="checkbox"
              checked={filters.availability}
              onChange={(e) => handleAvailabilityChange(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-12 h-6 rounded-full bg-gray-300 peer-checked:bg-primary transition-colors"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:transform peer-checked:translate-x-6"></div>
          </div>
          <span className="ml-3 text-gray-700">
            Show available rooms only
          </span>
        </label>
      </div>

      {/* Reset Button */}
      {activeFilterCount > 0 && (
        <button
          onClick={onReset}
          className="w-full mt-8 py-3 bg-gray-100 text-secondary rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4" />
          Reset All Filters
        </button>
      )}
    </div>
  )
}