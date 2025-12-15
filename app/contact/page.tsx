'use client'

import ContactInfo from '@/components/ContactSection/ContactInfo'
import ContactMap from '@/components/ContactSection/ContactMap'
import ContactForm from '@/components/ContactSection/ContactForm'
import FAQSection from '@/components/ContactSection/FAQSection'
import ContactHero from '@/components/ContactSection/ContactHero'
import { contactInfo } from '@/data/contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo contactInfo={contactInfo} />
      <div id="contact-form">
        <ContactForm />
      </div>
      <ContactMap />
      <FAQSection />
    </main>
  )
}