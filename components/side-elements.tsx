import { Github, Mail } from "lucide-react"

export function SideElements() {
  return (
    <>
      {/* Left side - social links */}
      <div className="hidden lg:flex fixed bottom-0 left-8 flex-col items-center gap-6">
        <a
          href="https://github.com/Pablolopezlo15"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="GitHub de Pablo"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="mailto:plopezlozano12@gmail.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Email de Pablo"
        >
          <Mail className="h-5 w-5" />
        </a>
        <span className="w-px h-24 bg-muted-foreground" />
      </div>

      {/* Right side - email */}
      <div className="hidden lg:flex fixed bottom-0 right-8 flex-col items-center gap-6">
        <a
          href="mailto:plopezlozano12@gmail.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          plopezlozano12@gmail.com
        </a>
        <span className="w-px h-24 bg-muted-foreground" />
      </div>
    </>
  )
}
