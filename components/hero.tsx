"use client"

import { Github, Mail, Phone, MapPin, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center px-6 lg:px-0" data-aos="fade-up">
      <div className="max-w-3xl">
        <p className="font-mono text-primary mb-4 text-sm tracking-wider">
          {"Hola, me llamo"}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Pablo López Lozano.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 text-balance">
          Software developer.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-10">
          Soy un{" "}
          <span className="text-primary font-medium">desarrollador de software</span>{" "}
          con experiencia en desarrollo web y móvil, especialmente en tecnologías como{" "}
          <span className="text-foreground">Symfony</span>,{" "}
          <span className="text-foreground">React Native</span> y{" "}
          <span className="text-foreground">React</span>. Apasionado por la creación de
          soluciones innovadoras, busco crecer profesionalmente en entornos dinámicos y
          colaborativos.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://github.com/Pablolopezlo15"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub de Pablo"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm group-hover:underline underline-offset-4">GitHub</span>
          </a>
          <a
            href="mailto:plopezlozano12@gmail.com"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Enviar email a Pablo"
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm group-hover:underline underline-offset-4">plopezlozano12@gmail.com</span>
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Chauchina, Granada</span>
          </span>
        </div>

        <a
          href="#experiencia"
          className="group inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          {"Conoce mi experiencia"}
          <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
