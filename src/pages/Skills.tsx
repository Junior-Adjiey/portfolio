import { useEffect, useMemo, useRef, useState } from 'react'

// ——— Types ———
type ColorKey = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal'

type Skill = {
  name: string
  context: string
  projects: string[]
}

type SkillGroup = {
  title: string
  icon: JSX.Element
  color: ColorKey
  skills: Skill[]
}

// ——— Icônes SVG ———
const Code = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)
const Server = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 00-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)
const Database = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
)
const Cog = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const Brain = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)
const Globe = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

// ——— Données ———
const skillGroups: SkillGroup[] = [
  {
    title: 'Langages de programmation',
    icon: <Code />,
    color: 'blue',
    skills: [
      { name: 'Python', context: 'FastAPI, algorithmes, traitement de données GTFS', projects: ['Mastercamp', 'Algorithmes de graphe'] },
      { name: 'JavaScript', context: 'React, Vue.js, développement front-end moderne', projects: ['MOVE2GETR', 'Portfolio'] },
      { name: 'TypeScript', context: 'Applications React typées, meilleure maintenabilité', projects: ['Portfolio', 'Projets récents'] },
      { name: 'Java', context: 'Programmation orientée objet, formation académique', projects: ['Projets EFREI'] },
      { name: 'SQL', context: 'Requêtes complexes, bases de données relationnelles', projects: ['Applications web'] },
      { name: 'HTML/CSS', context: 'Sémantique moderne, responsive design', projects: ['Tous les projets web'] },
    ],
  },
  {
    title: 'Frameworks & Bibliothèques',
    icon: <Server />,
    color: 'green',
    skills: [
      { name: 'React', context: 'Interface utilisateur moderne, composants réutilisables', projects: ['MOVE2GETR', 'Portfolio'] },
      { name: 'Vue.js', context: 'Applications web interactives, écosystème complet', projects: ['Mastercamp'] },
      { name: 'Node.js', context: 'Développement backend JavaScript, APIs REST', projects: ['MOVE2GETR'] },
      { name: 'Express.js', context: 'Serveur web rapide et minimaliste', projects: ['APIs backend'] },
      { name: 'FastAPI', context: 'APIs Python modernes, documentation automatique', projects: ['Mastercamp', 'Projets algorithmiques'] },
      { name: 'Tailwind CSS', context: 'Styling utilitaire, design systems cohérents', projects: ['MOVE2GETR', 'Portfolio'] },
      { name: 'Bootstrap', context: "Prototypage rapide, composants prêts à l'emploi", projects: ['Projets académiques'] },
    ],
  },
  {
    title: 'Bases de données',
    icon: <Database />,
    color: 'purple',
    skills: [
      { name: 'MongoDB', context: 'Base NoSQL, données flexibles et évolutives', projects: ['MOVE2GETR'] },
      { name: 'MySQL', context: 'Base relationnelle, transactions et intégrité', projects: ['Projets web traditionnels'] },
    ],
  },
  {
    title: 'Outils & Technologies',
    icon: <Cog />,
    color: 'orange',
    skills: [
      { name: 'Git/GitHub', context: 'Contrôle de version, collaboration en équipe', projects: ['Tous les projets'] },
      { name: 'VS Code', context: 'Environnement de développement principal', projects: ['Développement quotidien'] },
      { name: 'Postman', context: "Test et documentation d'APIs", projects: ['Développement backend'] },
      { name: 'Figma', context: 'Design UI/UX, prototypage collaboratif', projects: ['MOVE2GETR design'] },
    ],
  },
  {
    title: 'Algorithmes & Modélisation',
    icon: <Brain />,
    color: 'red',
    skills: [
      { name: 'Algorithmes de graphe', context: 'Dijkstra, connexité, ACPM pour optimisation', projects: ['Mastercamp - optimisation métro'] },
      { name: 'UML', context: 'Modélisation objet, architecture logicielle', projects: ['Projets EFREI'] },
      { name: 'Traitement GTFS', context: "Données de transport public, calcul d'itinéraires", projects: ['Mastercamp'] },
    ],
  },
  {
    title: 'Langues',
    icon: <Globe />,
    color: 'teal',
    skills: [
      { name: 'Français', context: 'Langue maternelle, communication professionnelle', projects: ['Documentation', 'Enseignement'] },
      { name: 'Anglais', context: 'Niveau B2, documentation technique', projects: ['Veille technologique', 'Projets internationaux'] },
    ],
  },
]

const colorMap: Record<ColorKey, { bg: string; text: string; border: string; hover: string }> = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-300' },
  green: { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-300' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-300' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:border-orange-300' },
  red: { bg: 'bg-red-500/10', text: 'text-red-600', border: 'border-red-200', hover: 'hover:border-red-300' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-600', border: 'border-teal-200', hover: 'hover:border-teal-300' },
}

// ——— Composants ———
function Tabs({ selected, onChange }: { selected: number; onChange: (i: number) => void }) {
  const listRef = useRef<HTMLDivElement | null>(null)

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const lastIndex = skillGroups.length - 1
    if (e.key === 'ArrowRight') onChange(selected === lastIndex ? 0 : selected + 1)
    if (e.key === 'ArrowLeft') onChange(selected === 0 ? lastIndex : selected - 1)
    if (e.key === 'Home') onChange(0)
    if (e.key === 'End') onChange(lastIndex)
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Catégories de compétences"
      className="flex flex-wrap gap-2 mb-12 justify-center"
      onKeyDown={onKeyDown}
    >
      {skillGroups.map((group, index) => (
        <button
          key={group.title}
          id={`tab-${index}`}
          role="tab"
          aria-selected={selected === index}
          aria-controls={`panel-${index}`}
          tabIndex={selected === index ? 0 : -1}
          onClick={() => onChange(index)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] focus-visible:ring-offset-2 ${
            selected === index
              ? `${colorMap[group.color].bg} ${colorMap[group.color].text} shadow-sm`
              : 'text-[--color-text] hover:bg-[--color-bg-secondary]'
          }`}
        >
          <span className="text-sm">{group.icon}</span>
          <span className="hidden sm:inline">{group.title}</span>
        </button>
      ))}
    </div>
  )
}

function SkillCard({ skill, color }: { skill: Skill; color: ColorKey }) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-all duration-200 group cursor-default ${colorMap[color].border} ${colorMap[color].hover} hover:shadow-md`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-lg text-[--color-text-strong] group-hover:text-[--color-primary] transition-colors">
          {skill.name}
        </h3>
      </div>
      <p className="text-[--color-text] leading-relaxed mb-4">{skill.context}</p>
      <div>
        <p className="text-xs uppercase tracking-wide text-[--color-text-light] font-semibold mb-2">Utilisé dans :</p>
        <div className="flex flex-wrap gap-2">
          {skill.projects.map((project) => (
            <span key={project} className="text-xs px-2 py-1 bg-[--color-bg-secondary] text-[--color-text-light] rounded-md">
              {project}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [selectedGroup, setSelectedGroup] = useState(0)
  const [query] = useState('')
  const [projectFilter] = useState<string>('all')
  const liveRef = useRef<HTMLDivElement | null>(null)


  const currentGroup = skillGroups[selectedGroup]

  const filteredSkills = useMemo(() => {
    return currentGroup.skills.filter((s) => {
      const matchesText = query.trim().length === 0 || `${s.name} ${s.context}`.toLowerCase().includes(query.toLowerCase())
      const matchesProject = projectFilter === 'all' || s.projects.includes(projectFilter)
      return matchesText && matchesProject
    })
  }, [currentGroup, query, projectFilter])

  useEffect(() => {
    if (liveRef.current) {
      liveRef.current.textContent = `${filteredSkills.length} compétence${filteredSkills.length > 1 ? 's' : ''}`
    }
  }, [filteredSkills.length])

  return (
    <section className="container-app py-16 md:py-24" aria-labelledby="skills-title">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 id="skills-title" className="text-4xl md:text-5xl font-display text-[--color-text-strong] mb-6">Mes Compétences</h1>
        <p className="text-xl text-[--color-text] max-w-3xl mx-auto leading-relaxed">
          Technologies et outils que j'utilise dans mes projets, avec contexte d'usage réel. Filtre par texte ou par projet.
        </p>
      </div>

      {/* Onglets */}
      <Tabs selected={selectedGroup} onChange={setSelectedGroup} />

     

      {/* Panneau des compétences */}
      <div
        role="tabpanel"
        id={`panel-${selectedGroup}`}
        aria-labelledby={`tab-${selectedGroup}`}
        className="max-w-5xl mx-auto"
      >
        <div className="card p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-3 rounded-lg ${colorMap[currentGroup.color].bg}`}>
              <span className={colorMap[currentGroup.color].text}>{currentGroup.icon}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[--color-text-strong]">{currentGroup.title}</h2>
              <p className="text-[--color-text-light]">{filteredSkills.length} technologie{filteredSkills.length > 1 ? 's' : ''} affichée{filteredSkills.length > 1 ? 's' : ''}</p>
            </div>
          </div>

          {filteredSkills.length === 0 ? (
            <p className="text-[--color-text]">Aucun résultat. Essayez un autre mot-clé ou réinitialisez le filtre projet.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} color={currentGroup.color} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-[--color-text-strong] text-center mb-12">Stack technique en résumé</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Front-end', techs: 'React, Vue.js, TypeScript', description: 'Interfaces modernes et interactives', color: 'blue' as ColorKey },
            { title: 'Back-end', techs: 'Node.js, FastAPI, Express', description: 'APIs performantes et documentées', color: 'green' as ColorKey },
            { title: 'Data & Algo', techs: 'Python, Graphes, GTFS', description: "Algorithmes d'optimisation avancés", color: 'purple' as ColorKey },
            { title: 'Outils', techs: 'Git, Figma, VS Code', description: 'Workflow de développement efficace', color: 'orange' as ColorKey },
          ].map((category) => (
            <div key={category.title} className="card p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className={`text-lg font-bold mb-2 ${colorMap[category.color].text}`}>{category.title}</div>
              <div className="font-medium text-[--color-text-strong] mb-3 text-sm">{category.techs}</div>
              <div className="text-xs text-[--color-text-light] leading-relaxed">{category.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Approche */}
      <div className="mt-20">
        <div className="card p-8 bg-gradient-to-r from-[--color-primary]/5 to-[--color-primary]/10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[--color-text-strong] mb-4">Mon approche technique</h2>
            <p className="text-[--color-text] mb-6 max-w-3xl mx-auto leading-relaxed">
              Je privilégie la <strong>compréhension profonde</strong> des outils plutôt que leur accumulation. Chaque technologie est choisie pour résoudre un problème spécifique, avec un focus sur la <strong>qualité du code</strong> et l'<strong>expérience utilisateur</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projets" className="btn-primary">Voir mes réalisations</a>
              <a href="/contact" className="btn-ghost">Discuter technique</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
