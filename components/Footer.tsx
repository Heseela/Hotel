import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Rooms & Suites', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  const services = [
    { label: 'Spa & Wellness', href: '#' },
    { label: 'Fine Dining', href: '#' },
    { label: 'Conference Rooms', href: '#' },
    { label: 'Wedding Services', href: '#' },
    { label: 'Tour Packages', href: '#' },
    { label: 'Airport Transfer', href: '#' },
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full"></div>
              <span className="text-2xl font-heading font-bold">
                Horizon
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Luxury hotel resort offering world-class accommodations 
              with breathtaking views and exceptional service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={20} />
                <span className="text-gray-300">
                  123 Luxury Avenue<br />
                  Miami, FL 33101<br />
                  United States
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span className="text-gray-300">info@horizonhotel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Horizon Hotel & Resort. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed with ❤️ | Inspired by Unwind Template
          </p>
        </div>
      </div>
    </footer>
  )
}