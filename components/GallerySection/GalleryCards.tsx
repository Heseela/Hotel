'use client'

import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
    {
        id: 1,
        category: 'Rooms',
        title: 'Luxury Suite Interior',
        image: '/room-1.jpg',
        width: 400,
        height: 500,
    },
    {
        id: 2,
        category: 'Pool',
        title: 'Infinity Pool',
        image: '/pool.jpg',
        width: 400,
        height: 300,
    },
    {
        id: 3,
        category: 'Dining',
        title: 'Fine Dining Restaurant',
        image: '/dining.jpg',
        width: 400,
        height: 400,
    },
    {
        id: 4,
        category: 'Spa',
        title: 'Wellness Center',
        image: '/spa.jpg',
        width: 400,
        height: 500,
    },
    {
        id: 5,
        category: 'Views',
        title: 'Ocean View Balcony',
        image: '/view.jpg',
        width: 400,
        height: 300,
    },
    {
        id: 6,
        category: 'Lobby',
        title: 'Grand Lobby',
        image: '/lobby.jpg',
        width: 400,
        height: 400,
    },
]

export default function GalleryCard() {
    const [activeCategory, setActiveCategory] = useState('All')

    const categories = ['All', 'Rooms', 'Pool', 'Dining', 'Spa', 'Views', 'Lobby']

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory)

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
                        Our Gallery
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Take a visual tour through our luxurious facilities and breathtaking spaces
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all ${activeCategory === category
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative aspect-4/3">
                                <Image
                                    src={image.image}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={85}
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <span className="text-primary text-sm font-medium">
                                        {image.category}
                                    </span>
                                    <h3 className="text-white text-xl font-heading font-semibold">
                                        {image.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}