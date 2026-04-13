import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const projects = [
    {
      title: 'AI4BAZAR Platform',
      tagline: 'AI-driven marketplace solution',
      description: 'Served as Sales & Marketing Lead for an innovative AI-powered bazaar platform. Developed go-to-market strategy, managed client acquisition pipeline, and coordinated cross-functional teams for product launch.',
      role: 'Sales & Marketing Lead',
      company: 'Visys Cloud Technologies',
      achievements: [
        'Established comprehensive sales strategy and client acquisition framework',
        'Led marketing initiatives to build brand awareness in the AI marketplace space',
        'Managed client relationships and drove conversion through the sales funnel'
      ],
      tags: ['Sales', 'Marketing', 'AI/ML', 'Product Launch', 'Client Management'],
      status: 'Current'
    },
    {
      title: 'Freelance Digital Campaigns',
      tagline: 'Multi-platform advertising expertise',
      description: 'Executed and optimized multiple digital advertising campaigns for local and regional businesses. Managed campaigns across Meta (Facebook/Instagram) and Google platforms with focus on lead generation and ROI maximization.',
      role: 'Digital Marketing Specialist',
      company: 'Self-Employed',
      achievements: [
        'Designed and launched 15+ successful ad campaigns across Meta and Google',
        'Achieved average 3.5x ROAS on lead generation campaigns',
        'Optimized audience targeting resulting in 40% reduction in cost per lead',
        'Created custom landing pages with conversion optimization'
      ],
      tags: ['Meta Ads', 'Google Ads', 'Lead Generation', 'Performance Marketing', 'Analytics'],
      status: 'Ongoing'
    },
    {
      title: 'Market Research & Analysis',
      tagline: 'Strategic insights for business growth',
      description: 'Conducted comprehensive market research initiatives to identify growth opportunities and competitive positioning. Developed analytical frameworks for customer segmentation and market trend analysis.',
      role: 'Market Analyst',
      company: 'Personal Projects',
      achievements: [
        'Analyzed market trends in Ad Tech and SaaS sectors',
        'Created customer segmentation models for targeted marketing',
        'Developed competitive analysis frameworks',
        'Identified and validated new business opportunities'
      ],
      tags: ['Market Research', 'Business Analysis', 'Data Analysis', 'Strategic Planning'],
      status: 'Complete'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background via-background to-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Key Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Showcasing real-world projects where I&apos;ve made significant impact in sales, marketing, and business strategy.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all hover:border-primary/50 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary/50 group-hover:opacity-100 opacity-50 transition-opacity"></div>

                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary font-semibold">{project.tagline}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span>🎯</span>
                        {project.role} at {project.company}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 ${
                        project.status === 'Current' ? 'bg-primary/20 text-primary' :
                        project.status === 'Ongoing' ? 'bg-accent/20 text-accent' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      <span className="text-lg">⭐</span> Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground group/item hover:text-primary transition-all animate-fade-in-up hover:translate-x-2" style={{animationDelay: `${idx * 0.08}s`}}>
                          <span className="text-primary font-bold">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-all hover:scale-110 hover:shadow-lg cursor-default animate-fade-in-up"
                        style={{animationDelay: `${idx * 0.05}s`}}
                      >
                        {tag}
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
