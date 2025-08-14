import { ArrowRight, Download } from 'lucide-react'

// Constantes pour éviter la duplication
const TECHNOLOGIES = ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Python']
const HERO_IMAGE = {
  src: "/photo.jpg",
  alt: "Code moderne sur écran d'ordinateur - Développement web"
}

export default function Home() {
  return (
    <section className="container-app py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Contenu principal */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-sm tracking-wide uppercase text-[--color-primary] font-semibold animate-fade-in">
              Étudiant ingénieur — EFREI Paris
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-[--color-text-strong] leading-tight animate-fade-in-up">
              Je conçois des{' '}
              <span className="text-[--color-primary] relative">
                solutions web
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" fill="none">
                  <path d="M0 8c20-4 40-6 60-2s40 2 40-2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </span>{' '}
              innovantes.
            </h1>
            
            <p className="text-xl text-[--color-text] max-w-prose leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Étudiant en Software Engineering passionné par le développement web et l'IA. 
              Je recherche un stage de 5 mois pour mettre en pratique mes compétences et apprendre auprès d'équipes expérimentées.
            </p>
          </div>
          
          {/* Actions principales */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="/projets" 
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="/contact" 
              className="btn-ghost inline-flex items-center gap-2"
            >
              Me contacter
            </a>
            
            <a 
              href="/ADJIEY KOFFI JEAN-LUC JUNIOR CV.pdf" 
              download 
              className="btn-ghost inline-flex items-center gap-2 text-sm border-dashed"
            >
              <Download className="w-4 h-4" />
              Mon CV
            </a>
          </div>
          
          {/* Technologies */}
          <div className="pt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-[--color-text-light] mb-4">Mes outils favoris :</p>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech, index) => (
                <span 
                  key={tech} 
                  className="badge hover:scale-105 hover:bg-[--color-primary] hover:text-white transition-all cursor-default"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Image et badge */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Image principale */}
          <div className="card p-0 overflow-hidden group hover:shadow-xl transition-shadow duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              className="w-full h-full lg:h-130 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              width="600"
              height="400"
            />
          </div>
          
          {/* Badge flottant avec animation */}
          <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[--color-primary] to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-xl animate-bounce-slow">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Disponible • Stage 2025
            </div>
          </div>
          
          {/* Élément décoratif */}
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[--color-primary]/10 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Section finale simple */}
      <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <p className="text-[--color-text-light] text-lg">
          Prêt à collaborer sur votre prochain projet ?{' '}
          <a 
            href="/contact" 
            className="text-[--color-primary] hover:underline font-semibold transition-colors"
          >
            Discutons-en →
          </a>
        </p>
      </div>
    </section>
  )
}