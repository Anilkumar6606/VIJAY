'use client'

export default function PhotoGallery() {
  return (
    <section id="photo-gallery" className="py-20 bg-gradient-to-b from-background via-card/10 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Professional Profile
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know me through a professional portrait
            </p>
          </div>

          {/* Circular Photo Section */}
          <div className="flex items-center justify-center min-h-[500px] relative">
            {/* SVG Animated Orbits */}
            <svg
              className="absolute inset-0 w-full h-full max-w-3xl mx-auto"
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer ring - slowest */}
              <circle
                cx="300"
                cy="300"
                r="280"
                fill="none"
                stroke="url(#gradientOuter)"
                strokeWidth="1"
                opacity="0.3"
                className="animate-orbit-slow"
                style={{ transformOrigin: '300px 300px' }}
              />

              {/* Middle ring */}
              <circle
                cx="300"
                cy="300"
                r="240"
                fill="none"
                stroke="url(#gradientMiddle)"
                strokeWidth="1"
                opacity="0.4"
                className="animate-orbit-medium"
                style={{ transformOrigin: '300px 300px' }}
              />

              {/* Inner ring - fastest */}
              <circle
                cx="300"
                cy="300"
                r="200"
                fill="none"
                stroke="url(#gradientInner)"
                strokeWidth="2"
                opacity="0.5"
                className="animate-orbit-fast"
                style={{ transformOrigin: '300px 300px' }}
              />

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="gradientOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="rgb(249, 115, 22)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradientMiddle" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradientInner" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Circle with Photo */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Glowing background circle */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-primary via-accent to-primary rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>

              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-scale-in" style={{ animation: 'pulse 2s ease-in-out infinite' }}></div>
                <div className="absolute inset-2 rounded-full border border-accent/30 animate-scale-in" style={{ animation: 'pulse 2.5s ease-in-out infinite' }}></div>

                {/* Photo circle */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-1.5">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden shadow-2xl animate-glow">
                    {/* Placeholder for photo - using initials */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        VK
                      </div>
                      <p className="text-sm text-muted-foreground text-center px-4">
                        Agathamudi Vijay Kumar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots around circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 310;
                const x = Math.cos(angle) * radius + 300;
                const y = Math.sin(angle) * radius + 300;

                return (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary animate-pulse"
                    style={{
                      left: `calc(50% + ${Math.cos(angle) * radius}px - 6px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px - 6px)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: '🎓',
                title: 'MBA Student',
                desc: 'Finance Specialization at SCET',
              },
              {
                icon: '💼',
                title: 'Professional Experience',
                desc: 'Sales & Marketing Leadership',
              },
              {
                icon: '🎯',
                title: 'Focus Areas',
                desc: 'Ad Tech & Digital Strategy',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border-2 border-primary/30 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:border-primary/80 hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
