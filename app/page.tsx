import Gallery from "@/components/HomeSection/Gallery";
import Hero from "@/components/HomeSection/Hero";
import Newsletter from "@/components/HomeSection/Newsletter";
import Rooms from "@/components/HomeSection/Rooms";
import Services from "@/components/HomeSection/Services";
import Testimonials from "@/components/HomeSection/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Rooms />
      <Testimonials />
      <Gallery />
      <Newsletter />
    </div>
  );
}
