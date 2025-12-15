import { Calendar, Users, Star } from 'lucide-react'
import Image from 'next/image'

export default function RoomsHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-44 md:pb-44">
      <div className="absolute inset-0 z-0">
        <Image
          src="/room-5.jpg"
          alt="Luxury hotel room with ocean view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            LUXURY ACCOMMODATIONS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Discover Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Choose from our curated collection of luxurious rooms and suites, 
            each designed to provide the ultimate comfort and relaxation.
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold">4.9</div>
                <div className="text-sm opacity-80">Guest Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold">120+</div>
                <div className="text-sm opacity-80">Rooms Available</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Booking Available</div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  )
}