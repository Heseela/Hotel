'use client'

import { Star, Quote } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Travel Blogger',
    content: 'The most memorable stay of my life! The ocean view from our room was absolutely breathtaking. Service was impeccable.',
    rating: 5,
    image: '/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Executive',
    content: 'Perfect for both business and leisure. The executive suite had everything I needed for productive work and relaxation.',
    rating: 5,
    image: '/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Honeymooner',
    content: 'Our honeymoon was magical thanks to the romantic setup and exceptional service. Will definitely return for our anniversary!',
    rating: 5,
    image: '/testimonial-3.jpg',
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Guest Reviews
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what our guests have to say about their experience at Horizon
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <Quote className="text-primary/30 absolute top-4 left-4" size={48} />
            
            <div className="relative mt-10">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>

              <p className="text-xl italic mb-8">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full mr-4 overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-300">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === index
                    ? 'bg-primary'
                    : 'bg-white/30'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}