import { Button } from '@/components/ui/button'
import { ArrowRight, Linkedin, Mail, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] pt-32 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-left">
              <div className="inline-block animate-fade-in-down animate-delay-100">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/15 transition-colors">
                  👋 Welcome
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in-down animate-delay-200">
                Agathamudi <br className="hidden md:block" />
                <span className="text-primary animate-pulse-glow">Vijay Kumar</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-down animate-delay-300">
                MBA Finance | Sales & Marketing Leader | Ad Tech Specialist
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed animate-fade-in-up animate-delay-200">
              Dynamic MBA student blending strategic thinking with digital execution. Experienced in driving sales growth, managing ad campaigns, and leading cross-functional teams in the AI-driven marketplace space.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animate-delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-lift shadow-lg">
                View My Work <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Download Resume
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border animate-fade-in-up animate-delay-400">
              <a
                href="tel:+917730890887"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors hover-glow rounded-lg px-2 py-1"
              >
                <Phone className="w-5 h-5" />
                <span>+91 7730890887</span>
              </a>
              <a
                href="mailto:agathamudivijay2002@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors hover-glow rounded-lg px-2 py-1"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/agathamudi-vijay-kumar-22a264297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors hover-glow rounded-lg px-2 py-1"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column - Circular Photo */}
          <div className="hidden md:flex items-center justify-center animate-fade-in-right animate-delay-300">
            <div className="relative w-96 h-96">
              {/* Outer rotating ring with blue glow */}
              <div className="absolute inset-0 rounded-full animate-orbit-slow" style={{
                background: 'conic-gradient(from 0deg, #0066ff, #00d4ff, #0066ff)',
                opacity: '0.3',
                filter: 'blur(25px)'
              }}></div>

              {/* Middle animated ring */}
              <div className="absolute inset-2 rounded-full border-2" style={{
                borderColor: '#00d4ff',
                opacity: '0.6',
                animation: 'orbitMedium 25s linear infinite'
              }}></div>

              {/* Inner glow ring */}
              <div className="absolute inset-6 rounded-full border-2" style={{
                borderColor: '#0066ff',
                opacity: '0.4'
              }}></div>

              {/* Photo Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4" style={{
                borderColor: '#00d4ff',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
              }}>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vijay-YrhcVO0gJjK3YtOjo9QF4EnYl5MS8m.jpg" 
                  alt="Agathamudi Vijay Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Center info badge */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-card border-2 border-primary rounded-full px-6 py-3 shadow-2xl hover-lift group">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-xs font-bold uppercase text-primary tracking-wider">MBA Student</p>
                  <p className="text-xs font-semibold text-foreground">Finance Specialization</p>
                </div>
              </div>

              {/* Floating badges around circle */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg hover:scale-110 transition-transform">
                  📊 Sales
                </span>
              </div>

              <div className="absolute top-1/2 -right-6 transform translate-y-[-50%] translate-x-full">
                <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg hover:scale-110 transition-transform">
                  📱 Marketing
                </span>
              </div>

              <div className="absolute bottom-1/4 -left-6 transform translate-x-[-100%]">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg hover:scale-110 transition-transform">
                  🚀 Ad Tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
