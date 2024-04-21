import AboutSection from "@/components/AboutSection"
import Showcase from "@/components/Showcase"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Skills  from "@/components/Skills"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <Showcase />
      <Skills />
      <ProjectsSection />
    </main>
  )
}
