"use client"

import { useState, useEffect, useRef } from "react"

const role = "DIGITAL MARKETING SPECIALIST"

export default function HeroNew() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate angle and distance from center
      const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX)
      const distance = Math.min(30, Math.hypot(event.clientX - centerX, event.clientY - centerY) / 50)

      const offsetX = Math.cos(angle) * distance
      const offsetY = Math.sin(angle) * distance

      setMousePos({ x: offsetX, y: offsetY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="hero py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-auto md:min-h-[500px]">
          {/* Hero Copy */}
          <div className="space-y-6 animate-fade-in-up pt-8 pl-4 md:pl-0">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
              AGATHAMUDI VIJAY KUMAR
            </p>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                🔹 HAY! I&apos;M VIJAY
                <br />
                <span className="text-accent">
                  I&apos;M A {role}
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Performance marketing specialist with proven expertise in Google Ads and Meta Ads. I design and execute data-driven campaigns focused on lead generation, audience targeting, and conversion optimization to deliver measurable growth outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all">
                💬 Get In Touch
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 bg-primary/20 border border-accent/50 text-foreground rounded-full font-bold hover:bg-primary/30 transition-all">
                📄 View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/agathamudi-vijay-kumar-22a264297" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/50 hover:bg-accent/20 transition-all font-bold text-accent">
                in
              </a>
              <a href="mailto:agathamudivijay2002@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/50 hover:bg-accent/20 transition-all font-bold text-accent">
                @
              </a>
              <a href="tel:+917730890887" className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/50 hover:bg-accent/20 transition-all font-bold text-accent">
                ph
              </a>
            </div>
          </div>

          {/* Hero Visual - Circular Image with Responsive Orbits */}
          <div 
            ref={containerRef}
            className="relative flex justify-center items-start md:items-center animate-fade-in-right w-full h-64 sm:h-72 md:h-80 lg:h-96 -mt-12 sm:-mt-8 md:mt-0"
          >
            {/* Main circular image container with orbiting dots */}
            <div 
              className="relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-square flex items-center justify-center"
              style={{
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Orbit 1 - Clockwise */}
              <div 
                className="absolute inset-0 rounded-full border border-primary/30"
                style={{
                  animation: 'rotateClockwise 8s linear infinite'
                }}
              >
                {/* Dot 1 - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50"></div>
                </div>
                
                {/* Dot 2 - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg shadow-accent/50"></div>
                </div>
              </div>

              {/* Orbit 2 - Counter Clockwise (larger) - Responsive */}
              <div 
                className="absolute rounded-full border border-accent/30"
                style={{
                  width: '120%',
                  height: '120%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'rotateCounterClockwise 12s linear infinite'
                }}
              >
                {/* Dot 3 - Right */}
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50"></div>
                </div>
                
                {/* Dot 4 - Left */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg shadow-accent/50"></div>
                </div>
              </div>

              {/* Glow effect circle */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.15)',
                }}
              />

              {/* Image with circular shape - Responsive */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vijay-YrhcVO0gJjK3YtOjo9QF4EnYl5MS8m.jpg"
                  alt="Vijay Kumar"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              </div>
            </div>

            {/* Floating orbiting dots */}
            <style>{`
              @keyframes rotateClockwise {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes rotateCounterClockwise {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(-360deg); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}
