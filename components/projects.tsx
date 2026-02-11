import { Github, ExternalLink, Folder } from "lucide-react"

const pinnedProjects = [
  {
    name: "Konnekt",
    description:
      "Red social nativa para Android con Kotlin y Jetpack Compose. Publicaciones, chat en tiempo real con WebSockets, comentarios generados por IA con Ollama y tema claro/oscuro.",
    tech: ["Kotlin", "Jetpack Compose", "Python", "FastAPI", "MongoDB", "Docker"],
    github: "https://github.com/Pablolopezlo15/Konnekt",
    live: "https://pablolopezlo15.github.io/Konnekt/",
    language: "Kotlin",
    languageColor: "#A97BFF",
  },
  {
    name: "GestionRestaurante",
    description:
      "Proyecto integrado de 2o DAW. Sistema completo de gestion de restaurante con panel de administracion, gestion de mesas, pedidos y carta digital.",
    tech: ["JavaScript", "Symfony", "PHP", "MySQL", "Twig"],
    github: "https://github.com/Pablolopezlo15/GestionRestaurante-ProyectoDAW",
    live: "https://gestion--restaurante.web.app/",
    language: "JavaScript",
    languageColor: "#F7DF1E",
  },
  {
    name: "CryptoAngular",
    description:
      "Aplicacion de seguimiento de criptomonedas en tiempo real usando la API de CoinGecko. Precios, capitalizacion de mercado y graficos interactivos.",
    tech: ["Angular", "TypeScript", "CoinGecko API", "Firebase"],
    github: "https://github.com/Pablolopezlo15/CryptoAngular",
    live: "https://crypto-angular-7d584.web.app/",
    language: "TypeScript",
    languageColor: "#3178C6",
  },

]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 lg:px-0">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
          <span className="font-mono text-primary text-xl mr-2">04.</span>
          Proyectos Destacados
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pinnedProjects.map((project, idx) => (
          <article
            key={project.name}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <Folder className="h-10 w-10 text-primary" />
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`GitHub de ${project.name}`}
                >
                  <Github className="h-5 w-5" />
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Demo de ${project.name}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
              {project.description}
            </p>

            <div className="flex flex-col gap-3 mt-auto">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: project.languageColor }}
                  />
                  {project.language}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/Pablolopezlo15?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          Ver todos los repositorios
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
