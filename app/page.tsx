'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HeroNew from '@/components/sections/hero-new'
import AboutNew from '@/components/sections/about-new'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import EducationNew from '@/components/sections/education-new'
import Contact from '@/components/sections/contact'
import Navigation from '@/components/navigation'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="relative">
        <HeroNew />
        <AboutNew />
        <Experience />
        <Skills />
        <Projects />
        <EducationNew />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 text-center text-muted-foreground">
        <p className="text-sm">© 2024 Agathamudi Vijay Kumar. All rights reserved.</p>
      </footer>
    </div>
  )
}
