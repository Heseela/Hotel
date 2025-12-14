'use client'

import { Search, Filter } from 'lucide-react'

interface RoomSearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onFilterToggle: () => void
  activeFilterCount: number
}

export default function RoomSearchBar({
  searchQuery,
  onSearchChange,
  onFilterToggle,
  activeFilterCount
}: RoomSearchBarProps) {
  return (
    <section className="sticky top-24 z-40 bg-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search rooms by name, amenities, or features..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={onFilterToggle}
            className="md:hidden flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}