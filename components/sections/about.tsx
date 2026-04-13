export default function About() {
  const highlights = [
    {
      icon: '🧠',
      title: 'Strategic Thinker',
      description: 'Analytical approach to problem-solving with deep market research capabilities'
    },
    {
      icon: '🚀',
      title: 'Growth Driver',
      description: 'Proven track record in sales growth, client acquisition, and revenue generation'
    },
    {
      icon: '🎯',
      title: 'Digital Expert',
      description: 'Proficient in Meta Ads, Google Ads, and data-driven campaign optimization'
    },
    {
      icon: '👥',
      title: 'Team Leader',
      description: 'Experience leading cross-functional teams and fostering collaboration'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I&apos;m an MBA Finance student with hands-on experience in sales, marketing, and ad tech. I bridge the gap between strategy and execution, turning business insights into tangible results.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-xl transition-all hover:border-primary/50 hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Profile Details with Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="bg-background border border-border rounded-xl p-8 shadow-lg hover-lift animate-fade-in-up animate-delay-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Profile</h3>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-xs font-semibold text-primary/70 mb-2 uppercase tracking-wider">Education</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">MBA (Finance)</p>
                  <p className="text-sm text-muted-foreground">Samskriti College of Engineering & Technology</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-xs font-semibold text-accent/70 mb-2 uppercase tracking-wider">Experience</p>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Sales & Marketing Lead</p>
                  <p className="text-sm text-muted-foreground">Visys Cloud Technologies</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-xs font-semibold text-primary/70 mb-2 uppercase tracking-wider">Expertise</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Digital Advertising</p>
                  <p className="text-sm text-muted-foreground">Meta Ads, Google Ads, Campaign Strategy</p>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in-right animate-delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-2xl"></div>
              <div className="relative bg-card border-2 border-primary/30 rounded-xl p-1 overflow-hidden shadow-2xl hover-lift">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vijay-YrhcVO0gJjK3YtOjo9QF4EnYl5MS8m.jpg" 
                  alt="Agathamudi Vijay Kumar" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
