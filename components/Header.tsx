'use client'

import { Menu, X, Phone, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            setScrolled(window.scrollY > 20)
        })
    }

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Rooms & Suites', href: '/rooms' },
        { label: 'Services', href: '/services' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ]

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
            <div className="hidden md:block bg-secondary text-white py-2 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span className="text-sm">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span className="text-sm">Miami, FL</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#contact" className="text-sm hover:text-primary transition-colors">
                            Contact Us
                        </a>
                        <div className="w-px h-4 bg-white/30"></div>
                        <a href="#rooms" className="text-sm hover:text-primary transition-colors">
                            Special Offers
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-linear-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">H</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-heading font-bold text-secondary leading-tight">
                                Horizon
                            </span>
                            <span className="text-xs text-gray-500">Luxury Hotel & Resort</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-secondary hover:text-primary transition-colors font-medium relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium flex items-center gap-2 shadow-lg hover:shadow-xl">
                            <Calendar size={18} />
                            Book Now
                        </button>
                    </div>

                    <button
                        className="md:hidden text-secondary p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fadeIn">
                        <div className="flex flex-col space-y-2 bg-gray-50 rounded-2xl p-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-secondary hover:text-primary hover:bg-white transition-colors py-3 px-4 rounded-xl font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                <div className="space-y-3 mb-4 px-4">
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <Phone size={16} />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <MapPin size={16} />
                                        <span>123 Luxury Avenue, Miami, FL</span>
                                    </div>
                                </div>
                                <button className="w-full bg-primary text-white py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2">
                                    <Calendar size={18} />
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}