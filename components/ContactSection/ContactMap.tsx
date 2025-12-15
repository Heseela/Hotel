export default function ContactMap() {

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Find Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conveniently located in the heart of Miami Beach with easy access from all major transportation hubs
          </p>
        </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266786!3d25.782390733069336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1644262075539!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Horizon Hotel Location"
                ></iframe>
              </div>
            </div>
          </div>
    </section>
  )
}