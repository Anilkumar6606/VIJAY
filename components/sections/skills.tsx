export default function Skills() {
  const skillsWithLevels = [
    { 
      category: 'Technical & Web', 
      icon: '💻', 
      skills: [
        { name: 'HTML & CSS', level: 88 },
        { name: 'WordPress', level: 85 },
        { name: 'Oracle SQL', level: 80 },
        { name: 'Digital Marketing Tools', level: 92 }
      ] 
    },
    { 
      category: 'Marketing & Advertising', 
      icon: '📊', 
      skills: [
        { name: 'Meta Ads', level: 95 },
        { name: 'Google Ads', level: 93 },
        { name: 'Audience Targeting', level: 91 },
        { name: 'Campaign Strategy', level: 89 },
        { name: 'Ad Analysis', level: 87 }
      ] 
    },
    { 
      category: 'Business & Soft Skills', 
      icon: '🎯', 
      skills: [
        { name: 'Strategic Planning', level: 85 },
        { name: 'Market Research', level: 83 },
        { name: 'Leadership', level: 85 },
        { name: 'Problem Solving', level: 89 },
        { name: 'Sales Strategy', level: 86 }
      ] 
    },
    { 
      category: 'Languages', 
      icon: '🗣️', 
      skills: [
        { name: 'English', level: 95 },
        { name: 'Hindi', level: 98 },
        { name: 'Telugu', level: 100 }
      ] 
    }
  ]

  const SkillBar = ({ name, level, idx }: { name: string; level: number; idx: number }) => (
    <div className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.04}s` }}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-foreground">{name}</span>
        <span className="text-xs font-bold text-primary">{level}%</span>
      </div>
      <div className="w-full bg-card border border-border/30 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, #0066ff, #00d4ff)',
            boxShadow: '0 0 8px rgba(0, 212, 255, 0.4)'
          }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background via-card/20 to-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Skills & Expertise
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Comprehensive skill set with proficiency levels across all areas.
            </p>
          </div>

          {/* Skills Categories with Bars in Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up animate-delay-100">
            {skillsWithLevels.map((skillCategory, catIdx) => (
              <div 
                key={catIdx} 
                className="bg-background border border-border/50 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${catIdx * 0.12}s`}}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">{skillCategory.icon}</span>
                  <h3 className="font-bold text-foreground text-sm md:text-base">{skillCategory.category}</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, idx) => (
                    <SkillBar key={idx} name={skill.name} level={skill.level} idx={idx} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
