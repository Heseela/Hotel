'use client'

import Image from 'next/image'
import { useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'General Manager',
    bio: 'With over 20 years in luxury hospitality, Sarah ensures every guest experience exceeds expectations.',
    image: '/testimonial-1.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
      email: 'sarah@horizonhotel.com',
    },
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head Chef',
    bio: 'Michelin-star trained chef bringing global culinary experiences to our restaurants.',
    image: '/testimonial-2.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
      email: 'michael@horizonhotel.com',
    },
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Guest Relations Director',
    bio: 'Ensuring every guest feels personally cared for and valued throughout their stay.',
    image: '/testimonial-3.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
      email: 'emma@horizonhotel.com',
    },
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Spa & Wellness Director',
    bio: 'Creating transformative wellness experiences that rejuvenate mind, body, and soul.',
    image: '/testimonial-2.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
      email: 'david@horizonhotel.com',
    },
  },
]

export default function AboutTeam() {
  const [activeMember, setActiveMember] = useState(teamMembers[0])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            MEET THE TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Leadership & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of hospitality professionals ensures your experience is nothing short of extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group cursor-pointer"
              onClick={() => setActiveMember(member)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="font-bold text-lg">{member.name}</div>
                    <div className="text-sm opacity-90">{member.role}</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}