'use client'

import { useState } from 'react'
import { Send, Check, AlertCircle, Calendar, Users } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    isBookingInquiry: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'reservation', label: 'Reservation Question' },
    { value: 'event', label: 'Event & Conference' },
    { value: 'wedding', label: 'Wedding Planning' },
    { value: 'corporate', label: 'Corporate Booking' },
    { value: 'feedback', label: 'Feedback & Review' },
    { value: 'career', label: 'Career Opportunities' },
    { value: 'other', label: 'Other' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        isBookingInquiry: false
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Booking Inquiry Toggle */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="isBookingInquiry"
                  checked={formData.isBookingInquiry}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="relative w-12 h-6 rounded-full bg-gray-300 peer-checked:bg-primary transition-colors">
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></div>
                </div>
                <span className="ml-3 font-medium text-secondary">
                  This is a booking inquiry
                </span>
              </label>
            </div>

            {/* Personal Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-secondary mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Booking Details (Conditional) */}
            {formData.isBookingInquiry && (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-6">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Check-in Date
                      </div>
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Check-out Date
                      </div>
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Number of Guests
                      </div>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Message */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-secondary mb-6">Your Message</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="text-sm text-gray-600">
                  <p className="mb-2">* Required fields</p>
                  <p>We typically respond within 2-4 business hours</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                      <Check className="w-5 h-5" />
                      Message sent successfully!
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      Error sending message. Please try again.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Response Time Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">2-4</div>
              <div className="text-gray-600">Hours Response Time</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Availability</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Response Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}