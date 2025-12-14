'use client'

import { Calendar, Users, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [guests, setGuests] = useState('2')

    return (
        <section className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-1.webp"
                    alt="Luxury hotel lobby with elegant interior design"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Experience Luxury & Comfort
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 opacity-90">
                        Discover our premium accommodations with breathtaking ocean views
                        and world-class amenities
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <label className="block text-sm mb-2 text-left">Check-in</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                                        placeholder="Check-in Date"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm mb-2 text-left">Check-out</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                                        placeholder="Check-out Date"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm mb-2 text-left">Guests</label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <select
                                        value={guests}
                                        onChange={(e) => setGuests(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary appearance-none"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map((num) => (
                                            <option key={num} value={num} className="text-gray-900">
                                                {num} {num === 1 ? 'Guest' : 'Guests'}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-end">
                                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                    Check Availability
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold">4.9</div>
                            <div className="text-sm opacity-80">Guest Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">120+</div>
                            <div className="text-sm opacity-80">Rooms & Suites</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">24/7</div>
                            <div className="text-sm opacity-80">Room Service</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">3</div>
                            <div className="text-sm opacity-80">Restaurants</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}