
import dynamic from 'next/dynamic'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ExperienceSection from '@/components/experience-section'
import ProjectsSection from '@/components/projects-section'
import EducationSection from '@/components/education-section'

// Dynamically import client components with ssr disabled
const ContactSection = dynamic(() => import('@/components/contact-section'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="about" className="bg-muted/30">
        <AboutSection />
      </div>
      
      <div id="skills">
        <SkillsSection />
      </div>
      
      <div id="experience" className="bg-muted/30">
        <ExperienceSection />
      </div>
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div id="education" className="bg-muted/30">
        <EducationSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Deepak Manoharan. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-80">
            Senior Data Scientist & AI/ML Engineer | Auckland, New Zealand
          </p>
        </div>
      </footer>
    </main>
  )
}
