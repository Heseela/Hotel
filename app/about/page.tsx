import AboutFeatures from "@/components/AboutSection/AboutFeatures";
import AboutHero from "@/components/AboutSection/AboutHero";
import AboutHistory from "@/components/AboutSection/AboutHistory";
import AboutTeam from "@/components/AboutSection/AboutTeam";
import AboutTestimonials from "@/components/AboutSection/AboutTestimonials";


export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutHistory />
      <AboutFeatures />
      <AboutTeam />
      <AboutTestimonials />
    </main>
  )
}