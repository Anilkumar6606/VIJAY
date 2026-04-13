export default function Education() {
  const education = [
    {
      degree: 'MBA (Finance)',
      institution: 'Samskriti College of Engineering & Technology (JNTUH)',
      year: '2024 - 2026',
      cgpa: '7.5',
      status: 'In Progress',
      highlights: ['Finance Specialization', 'Strategic Management', 'Business Analytics']
    },
    {
      degree: 'B.Sc.',
      institution: 'Maharaja College (Andhra University)',
      year: '2020 - 2023',
      cgpa: '8.7',
      status: 'Completed',
      highlights: ['Strong Academic Record', 'Analytical Foundation', 'Research Skills']
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College (BIEAP)',
      year: '2018 - 2020',
      cgpa: '9.2',
      status: 'Completed',
      highlights: ['Mathematics, Physics, Chemistry', 'Merit Scholar', 'Academic Excellence']
    }
  ]

  const certifications = [
    {
      title: 'Digital Marketing',
      issuer: 'Google & Meta Certified',
      year: '2023'
    },
    {
      title: 'Sales Excellence Program',
      issuer: 'Industry Training',
      year: '2023'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background via-card/20 to-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Education & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Academic foundation combining technical knowledge with business acumen.
            </p>
          </div>

          {/* Education Timeline Flowchart */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground animate-fade-in-up">Education Journey</h3>
            <div className="relative py-8">
              {/* Center vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-40 hidden md:block"></div>

              {education.map((edu, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className="mb-16 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className={`flex gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                      {/* Content Card */}
                      <div className="w-full md:w-1/2">
                        <div className="bg-background border-2 border-primary/40 rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all hover:border-primary/80 group hover-lift h-full">
                          {/* Top accent bar */}
                          <div className={`h-1.5 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 rounded-t-lg bg-gradient-to-r ${
                            index === 0 
                              ? 'from-primary via-accent to-primary' 
                              : index === 1 
                              ? 'from-accent via-primary to-accent' 
                              : 'from-primary to-accent'
                          }`}></div>

                          <div className="space-y-4">
                            {/* Year Badge */}
                            <div className="inline-block">
                              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {edu.year}
                              </span>
                            </div>

                            {/* Title & Institution */}
                            <div>
                              <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {edu.degree}
                              </h4>
                              <p className="text-primary font-semibold text-base mt-2">
                                {edu.institution}
                              </p>
                            </div>

                            {/* Status and GPA */}
                            <div className="flex items-center gap-3 pt-3 pb-3 border-b border-primary/20">
                              <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 ${
                                edu.status === 'In Progress' 
                                  ? 'bg-primary/20 text-primary' 
                                  : 'bg-accent/20 text-accent'
                              }`}>
                                {edu.status}
                              </span>
                              <div className="ml-auto px-4 py-1.5 bg-accent/10 rounded-lg">
                                <p className="text-sm font-bold text-accent">GPA: {edu.cgpa}</p>
                              </div>
                            </div>

                            {/* Highlights */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {edu.highlights.map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-semibold hover:from-primary/20 hover:to-accent/20 transition-all cursor-default border border-primary/20"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="hidden md:flex items-center justify-center flex-shrink-0">
                        <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-xl flex items-center justify-center group-hover:scale-125 transition-transform z-10">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block w-1/2"></div>
                    </div>

                    {/* Connection arrow/line for mobile */}
                    {index < education.length - 1 && (
                      <div className="flex md:hidden justify-center mt-4 mb-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent/50"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground animate-fade-in-up animate-delay-200">Certifications & Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-xl transition-all hover:border-primary/50 hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 font-semibold">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Years of Study', value: '8+' },
              { label: 'Avg CGPA', value: '8.5' },
              { label: 'Institutions', value: '3' },
              { label: 'Academic Awards', value: 'Merit Scholar' }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-xl transition-all hover:border-primary/50 hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1 + 0.4}s` }}
              >
                <p className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
