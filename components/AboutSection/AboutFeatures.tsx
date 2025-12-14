import { Leaf, Shield, Heart, Users, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Sustainable Luxury',
    description: 'Committed to eco-friendly practices without compromising on luxury.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Highest standards of safety and hygiene protocols throughout the property.',
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'Tailored experiences for every guest with dedicated concierge service.',
  },
  {
    icon: Users,
    title: 'Cultural Immersion',
    description: 'Authentic local experiences curated by our cultural ambassadors.',
  },
  {
    icon: Clock,
    title: '24/7 Excellence',
    description: 'Round-the-clock service ensuring your comfort at any hour.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Consistent recognition for excellence in hospitality and service.',
  },
]

export default function AboutFeatures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            OUR COMMITMENT
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Why Choose Horizon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what sets us apart in the world of luxury hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-linear-to-r from-primary to-primary/80 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Core Values
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Excellence in every detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Genuine care for our guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Respect for local culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Sustainable luxury practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Innovation in hospitality</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4">"</div>
              <p className="text-xl italic mb-6">
                Luxury is not about being seen, it's about being felt. 
                It's the quiet confidence of exceptional service, 
                the subtle elegance of thoughtful details, and the 
                profound comfort of knowing you're truly cared for.
              </p>
              <div className="font-bold">— Our Philosophy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}