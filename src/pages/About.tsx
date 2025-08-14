// Icônes SVG (acceptent className pour hériter des couleurs/tailles)
const MapPin = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={`w-5 h-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Calendar = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={`w-5 h-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const GraduationCap = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={`w-5 h-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const Users = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={`w-5 h-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const Award = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={`w-5 h-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

// Petites briques réutilisables
function StatCard({
  icon: Icon,
  label,
  title,
  subtitle,
  accent = "[--color-primary]",
  softBg = "[--color-primary]/10",
  hoverBg = "[--color-primary]/20",
}: {
  icon: (props: { className?: string }) => JSX.Element
  label: string
  title: string
  subtitle?: string
  accent?: string
  softBg?: string
  hoverBg?: string
}) {
  return (
    <div className="card p-6 text-center group hover:shadow-lg transition-shadow">
      <div
        className={`inline-flex items-center justify-center w-12 h-12 bg-${softBg} rounded-lg mb-4 group-hover:bg-${hoverBg} transition-colors`}
      >
        <Icon className={`text-${accent}`} />
      </div>
      <div className="text-sm text-[--color-text-light] uppercase tracking-wide">{label}</div>
      <div className="mt-1 font-semibold text-[--color-text-strong]">{title}</div>
      {subtitle && <div className="text-sm text-[--color-text]">{subtitle}</div>}
    </div>
  )
}

function TimelineItem({
  iconBg,
  Icon,
  title,
  badgeText,
  badgeTone,
  subtitle,
  description,
  dateTime,
}: {
  iconBg: string
  Icon: (props: { className?: string }) => JSX.Element
  title: string
  badgeText: string
  badgeTone: string
  subtitle: string
  description: string
  dateTime: string
}) {
  return (
    <div className="flex gap-6 group">
      <div className={`flex-shrink-0 w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}>
        <Icon className="text-white" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-xl font-semibold text-[--color-text-strong]">{title}</h3>
          <span className={`badge ${badgeTone}`}>{badgeText}</span>
        </div>
        <p className="text-[--color-primary] font-medium mb-2">{subtitle}</p>
        <p className="text-[--color-text] leading-relaxed">{description}</p>
        <time className="sr-only" dateTime={dateTime}>{badgeText}</time>
      </div>
    </div>
  )
}

type SoftSkill = { label: string; level: 1 | 2 | 3 | 4 | 5; hint?: string }

const softSkills: SoftSkill[] = [
  { label: "Esprit d'analyse et résolution de problèmes", level: 5 },
  { label: "Rigueur et sens du détail", level: 5 },
  { label: "Autonomie et apprentissage rapide", level: 4 },
  { label: "Communication claire et efficace", level: 4 },
  { label: "Esprit d'équipe et collaboration", level: 5 },
  { label: "Gestion du temps et des priorités", level: 4 },
  { label: "Adaptabilité et flexibilité", level: 4 },
]

const interests = [
  { category: 'Tech', items: ['Développement web', 'Intelligence artificielle', 'Projets créatifs'] },
  { category: 'Académique', items: ['Mathématiques', 'Accompagnement scolaire', 'Lecture'] },
  { category: 'Sport & Loisirs', items: ['Football', 'Tennis de table', 'Natation', 'Musique'] },
]

export default function About() {
  return (
    <section className="container-app py-16 md:py-24" aria-labelledby="about-title">
      {/* En-tête avec photo et intro */}
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <header className="space-y-4">
            <h1 id="about-title" className="text-4xl md:text-5xl font-display text-[--color-text-strong]">
              À propos
            </h1>
            <p className="text-xl text-[--color-text] leading-relaxed">
              Je suis <strong>Koffi Jean-Luc Junior Adjiey</strong>, étudiant en Master 1 Software Engineering à l'EFREI Paris.
              Passionné par le développement web et l'intelligence artificielle, je transforme des idées complexes
              en solutions digitales innovantes.
            </p>
          </header>

          <p className="text-xl text-[--color-text] leading-relaxed">
            Mon parcours m'a mené de la <strong>Côte d'Ivoire</strong> à <strong>Paris</strong>,
            en passant par des classes préparatoires intensives en mathématiques et physique.
            Cette expérience m'a forgé une rigueur scientifique que j'applique aujourd'hui
            au développement logiciel et à l'architecture web.
          </p>

          <p className="text-xl text-[--color-text] leading-relaxed">
            Actuellement, je recherche un <strong>stage de 5 mois à partir de novembre 2025 </strong>
            pour mettre en pratique mes compétences en programmation, conception logicielle
            et gestion de projets dans un environnement professionnel stimulant.
          </p>
        </div>

        {/* Photo de profil ou illustration */}
        <aside className="space-y-6" aria-label="Portrait">
          <div className="card p-0 overflow-hidden">
            {/* Si vous utilisez Next.js, remplacez par <Image /> pour les perfs */}
            <img
              src="/photo.jpg"
              alt="Portrait professionnel de Koffi Jean-Luc Junior Adjiey"
              className="w-full h-full object-cover"
            />
          </div>
        </aside>
      </div>

      {/* Informations rapides */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <StatCard
          icon={GraduationCap}
          label="Formation"
          title="M1 Software Engineering"
          subtitle="EFREI Paris"
        />
        <StatCard
          icon={MapPin}
          label="Localisation"
          title="Cachan, France"
          subtitle="Île-de-France"
        />
        <StatCard
          icon={Calendar}
          label="Disponibilité"
          title="Stage 5 mois"
          subtitle="Dès novembre 2025"
          accent="green-600"
          softBg="green-500/10"
          hoverBg="green-500/20"
        />
      </div>

      {/* Parcours académique */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-[--color-text-strong] mb-8">Parcours académique</h2>

        <div className="space-y-8">
          <TimelineItem
            iconBg="bg-gray-500"
            Icon={GraduationCap}
            title="EFREI Paris"
            badgeText="2024 - 2027"
            badgeTone="bg-[--color-primary]/10 text-[--color-primary]"
            subtitle="Master - École d'ingénieur en informatique, Spécialité Software Engineering"
            description="Formation approfondie en développement logiciel, architecture web, intelligence artificielle et gestion de projets. Spécialisation en technologies modernes (React, Vue.js, FastAPI)."
            dateTime="2024-09-01/2027-06-30"
          />

          <TimelineItem
            iconBg="bg-blue-500"
            Icon={Award}
            title="INPHB, Côte d'Ivoire"
            badgeText="2022 - 2024"
            badgeTone="bg-blue-500/10 text-blue-600"
            subtitle="Classes préparatoires - Mathématiques & Physique (MPSI / MP*)"
            description="Formation intensive en mathématiques appliquées et physique. Développement d'un esprit d'analyse rigoureux et de capacités de résolution de problèmes complexes."
            dateTime="2022-09-01/2024-06-30"
          />

          <TimelineItem
            iconBg="bg-green-500"
            Icon={Award}
            title="Lycée Scientifique de Yamoussoukro"
            badgeText="2022"
            badgeTone="bg-green-500/10 text-green-600"
            subtitle="Bac Scientifique - Mention Bien"
            description="Solide formation scientifique avec excellence en mathématiques et physique, posant les bases de ma passion pour la résolution de problèmes techniques."
            dateTime="2022-06-01"
          />
        </div>
      </div>

      {/* Expérience et soft skills */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        {/* Expérience */}
        <section aria-labelledby="xp-title">
          <h2 id="xp-title" className="text-3xl font-bold text-[--color-text-strong] mb-6">Expérience</h2>

          <article className="card p-6 border-l-4 border-[--color-primary]">
            <header className="flex items-center gap-3 mb-3">
              <Users className="text-[--color-primary]" />
              <div>
                <h3 className="font-semibold text-[--color-text-strong]">Enseignant en mathématiques</h3>
                <p className="text-sm text-[--color-text-light]">Complétude • En cours</p>
              </div>
            </header>
            <p className="text-[--color-text] leading-relaxed">
              Cours particuliers pour collégiens et lycéens. Amélioration significative des résultats et retours positifs.
              Développement des compétences en pédagogie, communication et gestion du temps.
            </p>
          </article>
        </section>

        {/* Soft Skills */}
        <section aria-labelledby="skills-title">
          <h2 id="skills-title" className="text-3xl font-bold text-[--color-text-strong] mb-6">Qualités</h2>
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {softSkills.map(({ label, level }) => (
              <li
                key={label}
                className="group rounded-xl border border-[--color-border] bg-[--color-bg] p-4 hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-[--color-primary] focus-within:ring-offset-2"
                tabIndex={0}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-medium text-[--color-text-strong]">{label}</span>
                  <div
                    className="flex items-center gap-1"
                    role="meter"
                    aria-valuemin={0}
                    aria-valuemax={5}
                    aria-valuenow={level}
                    aria-label={`Niveau ${level} sur 5`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${i < level ? 'bg-[--color-primary]' : 'bg-[--color-border]'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Centres d'intérêt */}
      <section className="mt-20" aria-labelledby="interets-title">
        <h2 id="interets-title" className="text-3xl font-bold text-[--color-text-strong] mb-8">Centres d'intérêt</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((group) => (
            <div key={group.category} className="card p-6">
              <h3 className="font-semibold text-[--color-text-strong] mb-4">{group.category}</h3>
              <ul className="space-y-2" role="list">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--color-primary] rounded-full" aria-hidden="true"></span>
                    <span className="text-sm text-[--color-text]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <div className="mt-20 text-center">
        <div className="card p-8 bg-gradient-to-r from-[--color-primary]/5 to-[--color-primary]/10">
          <h2 className="text-2xl font-bold text-[--color-text-strong] mb-4">
            Intéressé par mon profil ?
          </h2>
          <p className="text-[--color-text] mb-6 max-w-2xl mx-auto">
            Je serais ravi d'échanger avec vous sur vos projets et comment mes compétences peuvent contribuer à vos équipes de développement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] focus-visible:ring-offset-2">
              Me contacter
            </a>
            <a href="/projets" className="btn-ghost focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] focus-visible:ring-offset-2">
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
