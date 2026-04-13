'use client'

export default function EducationNew() {
  const educationData = [
    {
      degree: 'MBA (Finance)',
      institution: 'Samskriti College of Engg. & Tech. (JNTUH)',
      period: '2024-2026',
      cgpa: '7.5',
      address: 'Kondapur (V), Ghatkesar (M), Medchal Dist, Hyderabad - 501301',
      side: 'left'
    },
    {
      degree: 'B.Sc.',
      institution: 'Maharaja College (Andhra University)',
      period: '2020-2023',
      cgpa: '8.7',
      address: 'Tupulakula Street, Kaspa West, Vizianagaram - 535002',
      side: 'right'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College (BIEAP)',
      period: '2018-2020',
      cgpa: '9.2',
      address: 'Madhapur (Ayyappa Society)',
      side: 'left'
    }
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            🎓 EDUCATION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            📘 ACADEMIC BACKGROUND
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary/50 opacity-30"></div>

          {/* Education cards */}
          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${edu.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-stretch animate-fade-in-up`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Card */}
                <div className="w-full md:w-1/2 animate-fade-in-up hover:scale-105 transition-transform" style={{animationDelay: `${idx * 0.15}s`}}>
                  <div className="h-full bg-card border-2 border-primary/30 rounded-xl p-6 md:p-8 hover:border-accent/50 hover:shadow-xl transition-all group">
                    {/* Top accent bar */}
                    <div className="h-1 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 rounded-t-lg bg-gradient-to-r from-primary to-accent"></div>

                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold text-lg mt-2">
                      {edu.institution}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-muted-foreground">
                      <span>📅</span>
                      <span className="font-semibold">{edu.period}</span>
                    </div>

                    <div className="mt-4 inline-block px-4 py-2 bg-primary/10 rounded-lg">
                      <p className="text-sm font-bold text-primary">GPA: {edu.cgpa}</p>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {edu.address}
                    </p>
                  </div>
                </div>

                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:flex items-center justify-center w-12 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent shadow-lg"></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
