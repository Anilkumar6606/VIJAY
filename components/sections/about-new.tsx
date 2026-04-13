'use client'

export default function AboutNew() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-left">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl"></div>
            <div className="relative rounded-2xl border-2 border-accent/50 overflow-hidden shadow-2xl h-96 md:h-[500px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vijay-YrhcVO0gJjK3YtOjo9QF4EnYl5MS8m.jpg"
                alt="Vijay Kumar Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                ℹ️ ABOUT ME
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                📊 PERFORMANCE MARKETER & GROWTH STRATEGIST
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Hyderabad, India. I specialize in planning and executing high-impact digital marketing campaigns across Google and Meta platforms. With expertise in audience segmentation, ad optimization, and conversion tracking, I help businesses achieve measurable growth through data-driven strategy and continuous performance improvement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-center p-4 bg-card/50 border border-border rounded-lg hover:bg-card transition-all hover:scale-105 hover:shadow-lg hover:scale-105 hover:shadow-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <p className="text-3xl font-bold text-accent">12+</p>
                <p className="text-sm text-muted-foreground mt-2">Ad Platforms</p>
              </div>
              <div className="text-center p-4 bg-card/50 border border-border rounded-lg hover:bg-card transition-all hover:scale-105 hover:shadow-lg animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground mt-2">Campaigns Managed</p>
              </div>
              <div className="text-center p-4 bg-card/50 border border-border rounded-lg hover:bg-card transition-all hover:scale-105 hover:shadow-lg animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <p className="text-3xl font-bold text-accent">3</p>
                <p className="text-sm text-muted-foreground mt-2">Languages</p>
              </div>
            </div>

            <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              📩 Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
