import Image from 'next/image'
import { Award } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              ABOUT HORIZON HOTEL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6">
              Welcome to Luxury & Comfort
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 1995, Horizon Hotel has been synonymous with exceptional hospitality and 
              unparalleled luxury. Nestled in the heart of Miami Beach, we've been creating 
              unforgettable experiences for travelers from around the world.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">28+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">120+</div>
                <div className="text-sm text-gray-600">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-sm text-gray-600">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">45+</div>
                <div className="text-sm text-gray-600">Awards Won</div>
              </div>
            </div>

            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium">
              Explore Our Story
            </button>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/lobby.jpg"
                alt="Horizon Hotel Luxury Lobby"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-secondary">Award Winning</div>
                  <div className="text-sm text-gray-600">Since 2010</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}