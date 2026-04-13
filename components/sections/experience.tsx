export default function Experience() {
  const experiences = [
    {
      title: 'Inside Sales & Marketing Team Lead',
      company: 'Visys Cloud Technologies',
      location: 'Madhupur, Hyderabad',
      period: 'Current',
      type: 'Onsite',
      project: 'AI4BAZAR',
      responsibilities: [
        'Lead inside sales & marketing team with focus on client acquisition',
        'Managed client outreach and developed comprehensive campaign strategy',
        'Coordinated with cross-functional teams for lead conversion and pipeline management',
        'Implemented data-driven marketing initiatives to improve conversion rates'
      ],
      highlights: ['Team Leadership', 'Sales Strategy', 'Client Management']
    },
    {
      title: 'Digital Marketing Specialist',
      company: 'Freelance',
      location: 'Hyderabad, India',
      period: '2023 - Present',
      type: 'Remote',
      project: 'Multiple Ad Campaigns',
      responsibilities: [
        'Managed multiple live ad campaigns across Meta (Facebook/Instagram) and Google platforms',
        'Designed and optimized Meta Ads for lead generation, brand awareness, and engagement',
        'Executed Google Ads campaigns including Search and Display advertising',
        'Performed audience targeting analysis and optimized ad performance metrics',
        'Created and managed landing pages and lead form setups for clients'
      ],
      highlights: ['Meta Ads', 'Google Ads', 'Campaign Optimization']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-background to-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Proven expertise in sales leadership, digital marketing, and ad tech with a track record of driving growth and results.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 opacity-30 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-xl p-8 hover:shadow-2xl transition-all hover:border-primary/50 hover-lift group animate-fade-in-up md:ml-8"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline indicator */}
                <div className="absolute left-[-28px] top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {exp.period}
                      </p>
                      <div className="flex gap-2 justify-end flex-wrap">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b border-border/50 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">📍</span>
                      <span className="font-semibold text-foreground">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">🎯</span>
                      <span><span className="font-semibold text-foreground">Project:</span> {exp.project}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      <span className="text-lg">✓</span> Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground group/item hover:text-primary transition-all animate-fade-in-up hover:translate-x-2" style={{animationDelay: `${idx * 0.08}s`}}>
                          <span className="text-primary font-bold">→</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    {exp.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium hover:bg-accent/20 transition-all hover:scale-110 hover:shadow-lg cursor-default animate-fade-in-up"
                        style={{animationDelay: `${idx * 0.05}s`}}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
