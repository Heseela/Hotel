'use client'

import { ContactInfo } from '@/types/contact.types'
import { ExternalLink, Phone, Mail, MapPin, Clock, Users, Shield } from 'lucide-react'

interface ContactInfoProps {
  contactInfo: ContactInfo[]
}

export default function ContactInfo({ contactInfo }: ContactInfoProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case '📞': return <Phone className="w-6 h-6" />
      case '✉️': return <Mail className="w-6 h-6" />
      case '📍': return <MapPin className="w-6 h-6" />
      case '🕒': return <Clock className="w-6 h-6" />
      case '🎩': return <Users className="w-6 h-6" />
      case '🚨': return <Shield className="w-6 h-6" />
      default: return <span>{icon}</span>
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            How to Reach Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Multiple ways to get in touch with our dedicated team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div
              key={info.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(info.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {info.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {info.details.map((detail, index) => (
                  <div key={index} className="text-gray-700">
                    {detail}
                  </div>
                ))}
              </div>

              {info.link && (
                <a
                  href={info.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                >
                  {info.linkText}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}