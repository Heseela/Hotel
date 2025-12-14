import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const partnerTestimonials = [
  {
    id: 1,
    name: 'James Wilson',
    company: 'Luxury Travel Magazine',
    content: 'Horizon Hotel consistently sets the standard for luxury hospitality. Their attention to detail is unmatched.',
    image: '/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Sophia Lee',
    company: 'Global Hospitality Awards',
    content: 'A perfect blend of modern luxury and traditional hospitality. Truly deserving of every award.',
    image: '/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Robert Garcia',
    company: 'Sustainable Travel Council',
    content: 'Leading the way in sustainable luxury practices while maintaining exceptional guest experiences.',
    image: '/testimonial-3.jpg',
  },
]

export default function AboutTestimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Industry Recognition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What industry experts and partners say about our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {partnerTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg">
              <Quote className="w-8 h-8 text-primary/30 mb-6" />
              <p className="text-gray-700 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-bold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-secondary to-secondary/90 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Awards & Recognition
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Celebrating excellence in hospitality through industry recognition
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { year: '2023', award: 'World Luxury Hotel Award' },
              { year: '2022', award: 'Best Luxury Hotel - USA' },
              { year: '2021', award: 'Sustainable Hotel Award' },
              { year: '2020', award: '5-Star Excellence Award' },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{award.year}</div>
                <div className="text-sm">{award.award}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xl font-bold">TripAdvisor</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xl font-bold">Booking.com</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.9</div>
                <div className="text-xl font-bold">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-xl font-bold">Guest Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-heading font-bold text-secondary mb-6">
            Experience Our Hospitality
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied guests who have experienced the Horizon difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium">
              Book Your Stay
            </button>
            <button className="border-2 border-gray-300 text-secondary px-8 py-3 rounded-full hover:border-primary hover:bg-gray-50 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}