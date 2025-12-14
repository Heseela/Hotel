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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          lg:block
          ${isOpen ? 'fixed' : 'hidden lg:block'}
          top-0 left-0 lg:relative lg:top-auto lg:left-auto
          h-screen lg:h-auto
          w-80 lg:w-auto
          bg-white lg:bg-transparent
          z-50 lg:z-auto
          overflow-y-auto lg:overflow-visible
          transition-transform duration-300 ease-in-out lg:transform-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 lg:p-0">
          <div className="lg:hidden flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-secondary">Filters</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close filters"
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