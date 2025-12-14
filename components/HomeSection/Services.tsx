import { Wifi, Utensils, Car, Dumbbell, Waves } from 'lucide-react'

const services = [
  {
    icon: <Wifi size={48} />,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet access throughout the property',
  },
  {
    icon: <Utensils size={48} />,
    title: 'Fine Dining',
    description: 'Multiple restaurants offering international and local cuisine',
  },
  {
    icon: <Car size={48} />,
    title: 'Airport Transfer',
    description: 'Complimentary airport pickup and drop-off service',
  },
  {
    icon: <Car size={48} />,
    title: 'Spa & Wellness',
    description: 'Full-service spa with professional therapists',
  },
  {
    icon: <Dumbbell size={48} />,
    title: 'Fitness Center',
    description: 'State-of-the-art gym equipment and personal trainers',
  },
  {
    icon: <Waves size={48} />,
    title: 'Pool Access',
    description: 'Infinity pool with panoramic ocean views',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled luxury with our comprehensive range of 
            services designed to make your stay exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="text-2xl font-heading font-semibold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}