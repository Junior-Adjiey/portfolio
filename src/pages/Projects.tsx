import { useEffect, useMemo, useRef, useState } from 'react'

// ——— Icônes SVG ———
const Calendar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)
const ExternalLink = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)
const Github = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const Users = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)
const Zap = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)
const Award = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

// ——— Données ———
type TechCategory = 'frontend' | 'backend' | 'database' | 'algo' | 'data' | 'design' | 'tools'

type Project = {
  id: number
  title: string
  subtitle: string
  role: string
  year: string
  duration: string
  status: 'Terminé' | 'En développement'
  type: 'featured' | 'academic' | 'personal'
  desc: string
  challenge: string
  solution: string
  impact: string[]
  tech: { name: string; category: TechCategory }[]
  features: string[]
  code: string
  demo: string
  img: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Mastercamp - Guide Me',
    subtitle: "Optimisation d'itinéraires métro en temps réel",
    role: 'Développeur Backend & Algorithmes',
    year: '2024',
    duration: 'Juin - Juillet 2025',
    status: 'Terminé',
    type: 'academic',
    desc: 'Application web exploitant les données GTFS pour calculer des itinéraires optimaux en temps réel sur le réseau de métro parisien. Utilisation d\'algorithmes de graphe avancés (Dijkstra, connexité, ACPM) pour proposer les meilleurs trajets.',
    challenge: "Traiter en temps réel des millions de données de transport public et optimiser les calculs d'itinéraires pour une réponse < 2 secondes.",
    solution: "Implémentation d'algorithmes de graphe optimisés avec préprocessing des données GTFS et mise en cache intelligente des résultats fréquents.",
    impact: [
      "Calcul d'itinéraires 3x plus rapide que les solutions existantes",
      'Support de 14 lignes de métro parisien',
      'Interface intuitive avec Vue.js',
    ],
    tech: [
      { name: 'Python', category: 'backend' },
      { name: 'FastAPI', category: 'backend' },
      { name: 'Vue.js', category: 'frontend' },
      { name: 'Algorithmes de graphe', category: 'algo' },
      { name: 'GTFS', category: 'data' },
    ],
    features: [
      'Calcul temps réel avec Dijkstra',
      'Données GTFS du métro parisien',
      'Interface responsive Vue.js',
      'API documentée avec FastAPI',
    ],
    code: 'https://github.com/AlikBook/Master_camp_project.git',
    demo: '#',
    img: '/GuideMe.png',
  },
  {
    id: 2,
    title: 'MOVE2GETR',
    subtitle: 'Réseau social pour étudiants africains en mobilité',
    role: 'Fondateur & Développeur Front-end Lead',
    year: '2025',
    duration: 'Février 2025 - En cours',
    status: 'En développement',
    type: 'featured',
    desc: 'Plateforme communautaire inspirée de Reddit/Facebook pour connecter les étudiants africains en mobilité internationale. Design responsive avec identité visuelle africaine forte.',
    challenge: "Créer une communauté engageante qui répond aux besoins spécifiques des étudiants africains : entraide, networking, partage d'expériences.",
    solution: 'Interface social media moderne avec système de publications, réactions, messagerie et groupes thématiques. UX optimisée pour l\'engagement communautaire.',
    impact: [
      'Première plateforme dédiée aux étudiants africains',
      'Interface multilingue (FR/EN)',
      'Design culturellement adapté',
    ],
    tech: [
      { name: 'React', category: 'frontend' },
      { name: 'TailwindCSS', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Figma', category: 'design' },
    ],
    features: [
      "Système d'authentification complet",
      'Publications et réactions en temps réel',
      'Messagerie privée et groupes',
      'Design responsive mobile-first',
      'Identité visuelle africaine',
    ],
    code: 'https://github.com/Junior-Adjiey/move2getr.git',
    demo: '#',
    img: '/Move2getr.png',
  },
  {
    id: 3,
    title: 'Portfolio Personnel',
    subtitle: 'Site vitrine moderne et interactif',
    role: 'Développeur Full-stack & Designer',
    year: '2025',
    duration: 'En cours',
    status: 'En développement',
    type: 'personal',
    desc: 'Portfolio personnel conçu pour présenter mes compétences et projets de manière moderne et engageante. Focus sur l\'expérience utilisateur et les performances.',
    challenge: 'Se démarquer avec un design unique tout en gardant une approche professionnelle et accessible.',
    solution: 'Design système cohérent, animations subtiles, architecture modulaire et optimisations de performance.',
    impact: [
      'Temps de chargement < 1 seconde',
      'Score Lighthouse > 95/100',
      'Design responsive et accessible',
    ],
    tech: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'TailwindCSS', category: 'frontend' },
      { name: 'Vite', category: 'tools' },
    ],
    features: [
      'Animation et interactions fluides',
      'Mode sombre/clair',
      'SEO optimisé',
      'Architecture componentisée',
    ],
    code: 'https://github.com/votre-username/portfolio',
    demo: 'https://votre-portfolio.com',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
]

type CategoryId = 'all' | 'featured' | 'academic' | 'personal'

const categoryLabels: Record<CategoryId, string> = {
  all: 'Tous les projets',
  featured: 'Projets phares',
  academic: 'Projets académiques',
  personal: 'Projets personnels',
}

const techColors: Record<TechCategory, string> = {
  frontend: 'bg-blue-500/10 text-blue-600',
  backend: 'bg-green-500/10 text-green-600',
  database: 'bg-purple-500/10 text-purple-600',
  algo: 'bg-red-500/10 text-red-600',
  data: 'bg-orange-500/10 text-orange-600',
  design: 'bg-pink-500/10 text-pink-600',
  tools: 'bg-gray-500/10 text-gray-600',
}

// ——— Composants ———
function FilterChips({ value, onChange, counts }: {
  value: CategoryId
  onChange: (v: CategoryId) => void
  counts: Record<CategoryId, number>
}) {
  const items: CategoryId[] = ['all', 'featured', 'academic', 'personal']
  return (
    <nav className="flex flex-wrap gap-3 justify-center mb-12" aria-label="Filtres projets">
      {items.map((id) => (
        <button
          key={id}
          type="button"
          aria-pressed={value === id}
          onClick={() => onChange(id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] focus-visible:ring-offset-2 ${
            value === id
              ? 'bg-[--color-primary] text-black shadow-lg'
              : 'bg-[--color-bg-secondary] text-[--color-text] hover:bg-[--color-primary]/10'
          }`}
        >
          {categoryLabels[id]}
          <span className="text-xs bg-black/10 px-2 py-0.5 rounded-full" aria-hidden>
            {counts[id]}
          </span>
        </button>
      ))}
    </nav>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <article
      className="group cursor-pointer transition-all duration-300"
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project)
        }
      }}
      tabIndex={0}
      aria-labelledby={`project-title-${project.id}`}
    >
      <div className="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="lg:flex lg:min-h-[400px]">
          {/* Image */}
          <div className="lg:w-1/2 relative overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-150 h-10 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Badge de statut */}
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Terminé' ? 'bg-green-500/90 text-white' : 'bg-orange-500/90 text-white'
              }`}
            >
              {project.status}
            </div>

            {/* Badge de type */}
            {project.type === 'featured' && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-[--color-primary]/90 text-white px-2 py-1 rounded-full text-xs">
                <Award />
                Projet phare
              </div>
            )}
          </div>

          {/* Contenu */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-[--color-text-light]">
                  <Calendar />
                  <span>{project.duration}</span>
                </div>
              </div>

              <h2 id={`project-title-${project.id}`} className="text-2xl font-bold text-[--color-text-strong] mb-2 group-hover:text-[--color-primary] transition-colors">
                {project.title}
              </h2>

              <p className="text-[--color-primary] font-medium mb-3">{project.subtitle}</p>
              <p className="text-sm text-[--color-text-light] mb-4">{project.role}</p>

              <p className="text-[--color-text] leading-relaxed mb-6">{project.desc}</p>

              {/* Features clés */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[--color-text-strong] mb-3 uppercase tracking-wide">Fonctionnalités clés</h3>
                <ul className="grid grid-cols-2 gap-2" role="list">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[--color-text]">
                      <span className="w-1.5 h-1.5 bg-[--color-primary] rounded-full" aria-hidden></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies + actions */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[--color-text-strong] mb-3 uppercase tracking-wide">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={`text-xs px-3 py-1 rounded-full font-medium ${techColors[tech.category]}`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center gap-2 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github />
                  Code source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink />
                  Voir la démo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    closeBtnRef.current?.focus()
  }, [])

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 md:inset-0 md:m-auto md:max-w-3xl p-4 md:p-6">
        <div className="card p-6 bg-[--color-bg] shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-start justify-between gap-4">
            <h2 id="modal-title" className="text-xl font-bold text-[--color-text-strong]">{project.title}</h2>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="btn-ghost px-3 py-1"
              aria-label="Fermer la fenêtre"
            >
              Fermer
            </button>
          </div>

          <p className="text-[--color-primary] mt-1">{project.subtitle}</p>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <img src={project.img} alt="Aperçu du projet" className="w-full h-48 md:h-full object-cover rounded-lg" />
            <div className="space-y-4">
              <p className="text-sm text-[--color-text-light]">{project.role} • {project.duration}</p>
              <p className="text-[--color-text]">{project.desc}</p>
              <div>
                <h3 className="font-semibold text-[--color-text-strong] mb-2">Défi</h3>
                <p className="text-[--color-text]">{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[--color-text-strong] mb-2">Solution</h3>
                <p className="text-[--color-text]">{project.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[--color-text-strong] mb-2">Impact</h3>
                <ul className="list-disc list-inside text-[--color-text] space-y-1">
                  {project.impact.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t, i) => (
              <span key={i} className={`text-xs px-3 py-1 rounded-full font-medium ${techColors[t.category]}`}>{t.name}</span>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2 text-sm">
              <Github /> Code source
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm">
              <ExternalLink /> Voir la démo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ——— Page ———
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const liveRegionRef = useRef<HTMLDivElement | null>(null)

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all' ? projects : projects.filter((p) => p.type === selectedCategory)
  }, [selectedCategory])

  const counts = useMemo(() => {
    const map: Record<CategoryId, number> = {
      all: projects.length,
      featured: projects.filter((p) => p.type === 'featured').length,
      academic: projects.filter((p) => p.type === 'academic').length,
      personal: projects.filter((p) => p.type === 'personal').length,
    }
    return map
  }, [])

  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `${filteredProjects.length} projet${filteredProjects.length > 1 ? 's' : ''}`
    }
  }, [filteredProjects.length])

  // Stats dynamiques
  const uniqueTechCount = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tech.forEach((t) => set.add(t.name)))
    return set.size
  }, [])

  const completionRate = useMemo(() => {
    const done = projects.filter((p) => p.status === 'Terminé').length
    return Math.round((done / projects.length) * 100)
  }, [])

  const years = useMemo(() => {
    const ys = Array.from(new Set(projects.map((p) => p.year))).sort()
    return ys.length ? `${ys[0]}-${ys[ys.length - 1]}` : ''
  }, [])

  return (
    <section className="container-app py-16 md:py-24">
      {/* En-tête */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display text-[--color-text-strong] mb-6">Mes Projets</h1>
        <p className="text-xl text-[--color-text] max-w-3xl mx-auto leading-relaxed">
          Des solutions concrètes à des problèmes réels. Chaque projet reflète ma passion pour l'innovation technique et l'impact utilisateur.
        </p>
      </div>

      {/* Filtres */}
      <FilterChips value={selectedCategory} onChange={setSelectedCategory} counts={counts} />
      <div aria-live="polite" aria-atomic="true" className="sr-only" ref={liveRegionRef} />

      {/* Grille des projets */}
      <div className="grid gap-8 lg:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      {/* Statistiques */}
      <div className="mt-20 pt-16 border-t border-[--color-border]">
        <h2 className="text-3xl font-bold text-[--color-text-strong] text-center mb-12">En quelques chiffres</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Award />, number: filteredProjects.length, label: 'Projets affichés', color: 'text-blue-600' },
            { icon: <Zap />, number: `${uniqueTechCount}+`, label: 'Technologies utilisées', color: 'text-green-600' },
            { icon: <Users />, number: `${completionRate}%`, label: 'Projets terminés', color: 'text-purple-600' },
            { icon: <Calendar />, number: years, label: 'Période active', color: 'text-orange-600' },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-[--color-text-strong] mb-2">{stat.number}</div>
              <div className="text-[--color-text-light]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-20 text-center">
        <div className="card p-8 bg-gradient-to-r from-[--color-primary]/5 to-[--color-primary]/10">
          <h2 className="text-2xl font-bold text-[--color-text-strong] mb-4">Un projet en tête ?</h2>
          <p className="text-[--color-text] mb-6 max-w-2xl mx-auto">
            Je suis toujours intéressé par de nouveaux défis techniques. Parlons de votre projet et voyons comment nous pouvons collaborer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Démarrer une collaboration</a>
            <a href="/competences" className="btn-ghost">Voir mes compétences</a>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />)
      }
    </section>
  )
}
