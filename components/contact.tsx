import { Mail, Github, Phone, MapPin, Car } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 lg:px-0" data-aos="fade-up">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-4">06. ¿Hablamos?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          Ponte en contacto
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Estoy buscando nuevas oportunidades donde pueda aportar mis conocimientos
          y seguir aprendiendo. Si tienes una propuesta o simplemente quieres saludar,
          no dudes en escribirme.
        </p>

        <a
          href="mailto:plopezlozano12@gmail.com"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors mb-12"
        >
          <Mail className="h-4 w-4" />
          Escríbeme
        </a>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://github.com/Pablolopezlo15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="GitHub de Pablo"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="mailto:plopezlozano12@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="Email de Pablo"
          >
            <Mail className="h-4 w-4" />
            plopezlozano12@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Chauchina, Granada
          </span>
          <span className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            Carné de conducir + coche
          </span>
        </div>
      </div>
    </section>
  )
}
