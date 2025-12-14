'use client'

import { Category, FilterOptions } from "@/types"
import RoomFilter from "./RoomsFilter"


interface RoomFilterSidebarProps {
  filters: FilterOptions
  categories: Category[]
  amenities: string[]
  onFilterChange: (filters: FilterOptions) => void
  onReset: () => void
  isOpen: boolean
  onClose: () => void
}

export default function RoomFilterSidebar({
  filters,
  categories,
  amenities,
  onFilterChange,
  onReset,
  isOpen,
  onClose,
}: RoomFilterSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky lg:top-40 z-50
          h-[calc(100vh-5rem)] lg:h-fit
          top-20 left-0 lg:left-auto
          w-80 lg:w-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          bg-white lg:bg-transparent
          overflow-y-auto lg:overflow-visible
        `}
      >
        <div className="lg:sticky lg:top-40 p-6 lg:p-0">
          <div className="lg:hidden flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-secondary">Filters</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <RoomFilter
            filters={filters}
            categories={categories}
            amenities={amenities}
            onFilterChange={onFilterChange}
            onReset={onReset}
          />
        </div>
      </div>
    </>
  )
}