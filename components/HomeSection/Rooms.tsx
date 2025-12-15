'use client'

import { Star, Users, Maximize2, Check, ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const rooms = [
    {
        id: 1,
        name: 'Deluxe Ocean View',
        description: 'Spacious room with private balcony',
        price: 299,
        rating: 4.8,
        guests: 2,
        size: 45,
        features: ['Ocean View', 'King Bed', 'Balcony', 'Free WiFi'],
        image: '/room.jpg',
        highlight: true,
    },
    {
        id: 2,
        name: 'Executive Suite',
        description: 'Luxurious suite with separate living area',
        price: 499,
        rating: 4.9,
        guests: 3,
        size: 75,
        features: ['Jacuzzi', 'Living Room', 'Kitchenette', 'City View'],
        image: '/room-2.jpg',
        highlight: true,
    },
    {
        id: 3,
        name: 'Standard Room',
        description: 'Comfortable room with essential amenities',
        price: 199,
        rating: 4.5,
        guests: 2,
        size: 35,
        features: ['Queen Bed', 'Work Desk', 'Free WiFi', 'TV'],
        image: '/room-1.jpg',
        highlight: false,
    },
    {
        id: 4,
        name: 'Family Suite',
        description: 'Perfect for families with extra space',
        price: 399,
        rating: 4.7,
        guests: 4,
        size: 65,
        features: ['Two Bedrooms', 'Kitchen', 'Play Area', 'Two Bathrooms'],
        image: '/room-1.jpg',
        highlight: false,
    },
    {
        id: 5,
        name: 'Honeymoon Suite',
        description: 'Romantic retreat with special amenities',
        price: 599,
        rating: 4.9,
        guests: 2,
        size: 55,
        features: ['Romantic Decor', 'Champagne', 'Spa Bath', 'Private Balcony'],
        image: '/room-5.jpg',
        highlight: true,
    },
    {
        id: 6,
        name: 'Presidential Villa',
        description: 'Ultimate luxury with private pool',
        price: 899,
        rating: 5.0,
        guests: 4,
        size: 120,
        features: ['Private Pool', 'Butler Service', 'Gourmet Kitchen', 'Home Theater'],
        image: '/room-6.jpg',
        highlight: false,
    },
]

export default function Rooms() {
    const [hoveredRoom, setHoveredRoom] = useState<number | null>(null)

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        ACCOMMODATIONS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
                        Rooms & Suites
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Experience unparalleled comfort in our thoughtfully designed spaces
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <div
                            key={room.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredRoom(room.id)}
                            onMouseLeave={() => setHoveredRoom(null)}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {room.highlight && (
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                                                POPULAR
                                            </span>
                                        </div>
                                    )}

                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <div className="text-lg font-bold text-secondary">
                                            ${room.price}
                                            <span className="text-sm font-normal text-gray-500"> / night</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-heading font-bold text-secondary">
                                            {room.name}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium">{room.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {room.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            <span>{room.guests} Guests</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Maximize2 className="w-4 h-4" />
                                            <span>{room.size} m²</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="grid grid-cols-2 gap-2">
                                            {room.features.slice(0, 4).map((feature, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-primary" />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full py-3 bg-gray-100 text-secondary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {hoveredRoom === room.id && (
                                    <div className="absolute inset-0 bg-primary/5 border-2 border-primary/20 rounded-2xl pointer-events-none" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Link
                        href="/rooms"
                        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
                    >
                        View All Rooms
                        <ChevronRight size={20} />
                    </Link>
                </div>

            </div>
        </section>
    )
}