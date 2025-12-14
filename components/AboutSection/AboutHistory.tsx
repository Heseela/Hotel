import { Calendar, Building, Trophy, Globe } from 'lucide-react'

const milestones = [
  {
    year: '1995',
    title: 'The Beginning',
    description: 'Horizon Hotel opened its doors with 50 luxury rooms and a vision for exceptional hospitality.',
    icon: Calendar,
  },
  {
    year: '2005',
    title: 'First Expansion',
    description: 'Added 30 new suites and opened our award-winning restaurant, Azure.',
    icon: Building,
  },
  {
    year: '2015',
    title: 'International Recognition',
    description: 'Received the prestigious "World Luxury Hotel Award" for three consecutive years.',
    icon: Trophy,
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Opened three new properties in Europe and Asia, maintaining our luxury standards.',
    icon: Globe,
  },
]

export default function AboutHistory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A legacy of excellence and innovation in hospitality
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year */}
                <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
                  <div className={`text-center ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="text-5xl font-bold text-primary opacity-20">{milestone.year}</div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white z-10 hidden md:flex items-center justify-center">
                  <milestone.icon className="w-4 h-4 text-white" />
                </div>

                <div className="md:w-1/2">
                  <div className={`bg-white p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <milestone.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-secondary">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="bg-primary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
            <p className="opacity-90">
              To provide exceptional luxury experiences that exceed expectations, 
              creating lasting memories through impeccable service, world-class amenities, 
              and genuine hospitality that celebrates each guest's unique journey.
            </p>
          </div>
          <div className="bg-secondary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
            <p className="opacity-90">
              To be the world's most admired luxury hotel brand, setting new standards 
              in sustainable luxury hospitality while maintaining our commitment to 
              personalized service and cultural authenticity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}