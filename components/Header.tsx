'use client'

import { Menu, X, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'Rooms & Suites', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'Gallery', href: '#' },
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Top Bar */}
            <div className="bg-secondary text-white py-2 px-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span className="text-sm">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span className="text-sm">123 Luxury Avenue, Miami, FL</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-sm hover:text-primary transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary rounded-full"></div>
                        <span className="text-2xl font-heading font-bold text-secondary">
                            Horizon
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-secondary hover:text-primary transition-colors font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-secondary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-secondary hover:text-primary transition-colors py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors w-full">
                                Book Now
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}