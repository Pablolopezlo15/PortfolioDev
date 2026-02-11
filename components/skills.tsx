"use client"

import { Code2, Database, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Lenguajes",
    items: ["Java", "JavaScript", "PHP", "Kotlin", "HTML5", "CSS3", "SQL"],
  },
  {
    icon: Wrench,
    title: "Frameworks",
    items: [
      "Laravel",
      "Symfony",
      "Vue",
      "Angular",
      "React",
      "React Native",
      "JavaFX",
      "Bootstrap",
      "Sass",
    ],
  },
  {
    icon: Database,
    title: "Bases de datos",
    items: ["MySQL", "MariaDB", "MongoDB", "Oracle PL/SQL"],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    items: ["Git", "GitHub", "Node.js", "Composer", "Firebase"],
  },
]

const softSkills = [
  { icon: Users, label: "Trabajo en equipo" },
  { icon: Users, label: "Flexibilidad y adaptabilidad" },
  { icon: Users, label: "Resolución de problemas" },
  { icon: Users, label: "Gestión del tiempo" },
  { icon: Users, label: "Actitud positiva" },
  { icon: Users, label: "Capacidad de aprendizaje" },
]

export function Skills() {
  return (
    <section id="conocimientos" className="py-24 px-6 lg:px-0">
      <div className="max-w-3xl">
        <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12" data-aos="fade-up">
          <span className="font-mono text-primary text-lg md:text-xl">03.</span>
          Conocimientos
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-md hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-6">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {softSkills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              {skill.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
