import { GraduationCap, Languages } from "lucide-react"

const education = [
  {
    period: "2024 — 2025",
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "IES Hermenegildo Lanz, Granada",
  },
  {
    period: "2022 — 2024",
    title: "Grado Superior en Desarrollo de Aplicaciones Web",
    institution: "IES Francisco Ayala, Granada",
  },
  {
    period: "2019 — 2022",
    title: "Bachillerato",
    institution: "IES Arjé, Chauchina (Granada)",
  },
]

const languages = [
  { name: "Español", level: "Nativo", percentage: 100 },
  { name: "Inglés", level: "B1 Certificado — Estudiando B2", percentage: 55 },
]

export function Education() {
  return (
    <section id="educacion" className="py-24 px-6 lg:px-0">
      <div className="max-w-3xl">
        <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12" data-aos="fade-up">
          <span className="font-mono text-primary text-lg md:text-xl">05.</span>
          Educación
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="space-y-0 mb-16">
          {education.map((edu, idx) => (
            <div
              key={edu.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-8 first:pt-0 border-b border-border last:border-0"
            >
              <p className="font-mono text-xs text-muted-foreground pt-1 tracking-wider">
                {edu.period}
              </p>
              <div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-foreground font-semibold text-lg leading-snug mb-1">
                      {edu.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground mb-6">
          <Languages className="h-5 w-5 text-primary" />
          Idiomas
        </h3>
        <div className="space-y-5">
          {languages.map((lang) => (
            <div key={lang.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{lang.name}</span>
                <span className="text-xs font-mono text-muted-foreground">{lang.level}</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
