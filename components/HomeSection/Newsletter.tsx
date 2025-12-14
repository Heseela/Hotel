'use client'

import { Send } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <section className="py-20 bg-linear-to-r from-secondary to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about 
            exclusive offers, events, and special promotions
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-white placeholder-gray-100 focus:outline-none ring-2 ring-white/30"
                required
              />
              <button
                type="submit"
                className="bg-white text-secondary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center gap-2"
              >
                Subscribe
                <Send size={20} />
              </button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}