import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { SideElements } from "@/components/side-elements"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <SideElements />
      <main className="max-w-6xl mx-auto lg:px-24">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
