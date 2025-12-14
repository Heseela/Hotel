'use client'

import { sortOptions } from '@/data/rooms'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface RoomSortProps {
  sortBy: string
  onSortChange: (sortOption: string) => void
}

export default function RoomSort({ sortBy, onSortChange }: RoomSortProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currentSort = sortOptions.find(opt => opt.id === sortBy) || sortOptions[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-3 border border-gray-300 rounded-full hover:border-primary transition-colors bg-white"
      >
        <span className="text-gray-700">
          Sort by: <span className="font-medium text-secondary">{currentSort.label}</span>
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-full md:w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-20 overflow-hidden">
            <div className="py-2">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onSortChange(option.id)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    sortBy === option.id
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}