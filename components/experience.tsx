import { Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Julio 2025 — Agosto 2025",
    title: "Programador Full-Stack Junior",
    company: "Vértigo Apps",
    description:
      "Desarrollo de una aplicación usando Symfony (Back-end) y React Native (Front-end).",
    tags: ["Symfony", "React Native", "PHP", "JavaScript"],
  },
  {
    period: "Marzo 2025 — Junio 2025",
    title: "Prácticas DAM",
    company: "Vértigo Apps",
    description:
      "Desarrollo de una aplicación usando Symfony (Back-end) y React Native (Front-end).",
    tags: ["Symfony", "React Native", "PHP", "JavaScript"],
  },
  {
    period: "Marzo 2024 — Junio 2024",
    title: "Prácticas DAW",
    company: "Surdaf",
    description:
      "Automatización de procesos con Power Automate y UiPath. Colaboración en la optimización de flujos empresariales.",
    tags: ["Power Automate", "UiPath", "Automatización"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 lg:px-0">
      <div className="max-w-3xl">
        <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12" data-aos="fade-up">
          <span className="font-mono text-primary text-lg md:text-xl">02.</span>
          Experiencia
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${exp.period}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 py-8 first:pt-0 border-b border-border last:border-0 hover:bg-secondary/30 md:-mx-6 md:px-6 rounded-lg transition-colors"
            >
              <p className="font-mono text-xs text-muted-foreground pt-1 tracking-wider uppercase">
                {exp.period}
              </p>
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-1 flex items-center gap-2">
                  {exp.title}
                  <span className="text-primary">·</span>
                  <span className="text-primary">{exp.company}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-primary/10 text-primary font-mono text-xs px-3 py-1 rounded-full"
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
    </section>
  )
}
