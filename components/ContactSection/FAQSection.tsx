'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, BookOpen, Heart, Building } from 'lucide-react'
import { faqItems } from '@/data/contact'


export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'general', label: 'General', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'booking', label: 'Booking', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'services', label: 'Services', icon: <Heart className="w-5 h-5" /> },
    { id: 'facilities', label: 'Facilities', icon: <Building className="w-5 h-5" /> },
  ]

  const filteredFAQs = activeCategory === 'all'
    ? faqItems
    : faqItems.filter(faq => faq.category === activeCategory)

  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id)
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our hotel and services
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${activeCategory === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      {categories.find(c => c.id === faq.category)?.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">
                        {faq.question}
                      </h3>
                      <div className="text-xs text-gray-500">
                        {faq.category.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${expandedQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${expandedQuestion === faq.id
                    ? 'max-h-96 pb-6'
                    : 'max-h-0'
                    }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-linear-to-r from-secondary to-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="opacity-90 mb-6">
            Can't find what you're looking for? Our team is always here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-secondary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Call Us Now
            </a>
            <button
              onClick={() => {
                const form = document.getElementById('contact-form')
                if (form) form.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}