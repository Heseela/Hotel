import Image from 'next/image'

export default function ContactHero() {
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
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We're here to help you plan your perfect stay. Whether you have questions
            about our facilities, need assistance with booking, or want to plan a 
            special event, our team is ready to assist.
          </p>


        </div>
      </div>
    </section>
  )
}