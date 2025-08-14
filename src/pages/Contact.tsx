import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici tu peux ajouter la logique d'envoi
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="container-app py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display text-[--color-text-strong] mb-6">
            Travaillons ensemble
          </h1>
          <p className="text-xl text-[--color-text] max-w-2xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? Une opportunité de stage ? 
            Je serais ravi d'échanger avec vous sur vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-display text-[--color-text-strong] mb-6">
                Envoyez-moi un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[--color-text-strong]">
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-[--color-text] bg-[--color-bg] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 transition-all outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[--color-text-strong]">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-[--color-text] bg-[--color-bg] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 transition-all outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-[--color-text-strong]">
                    Sujet *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-[--color-text] bg-[--color-bg] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 transition-all outline-none"
                    placeholder="Opportunité de stage, collaboration, question..."
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[--color-text-strong]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[--color-border] px-4 py-3 text-[--color-text] bg-[--color-bg] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 transition-all outline-none resize-none"
                    placeholder="Décrivez votre projet, vos besoins ou posez votre question..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Contact direct */}
            <div className="card p-6">
              <h3 className="text-xl font-display text-[--color-text-strong] mb-6">
                Contact direct
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:koffi-jean-luc-junior.adjiey@efrei.net"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--color-bg-soft] transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[--color-primary]/10 rounded-lg flex items-center justify-center group-hover:bg-[--color-primary] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[--color-text-light]">Email</div>
                    <div className="font-semibold text-[--color-text-strong] group-hover:text-[--color-primary] transition-colors">
                      koffi-jean-luc-junior.adjiey@efrei.net
                    </div>
                  </div>
                </a>
                
                <a
                  href="tel:+33764401302"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--color-bg-soft] transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[--color-primary]/10 rounded-lg flex items-center justify-center group-hover:bg-[--color-primary] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[--color-text-light]">Téléphone</div>
                    <div className="font-semibold text-[--color-text-strong] group-hover:text-[--color-primary] transition-colors">
                      +33 07 64 40 13 02
                    </div>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 p-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[--color-primary]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[--color-primary]" />
                  </div>
                  <div>
                    <div className="text-sm text-[--color-text-light]">Localisation</div>
                    <div className="font-semibold text-[--color-text-strong]">
                      Cachan, France
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="card p-6">
              <h3 className="text-xl font-display text-[--color-text-strong] mb-6">
                Réseaux sociaux
              </h3>
              
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/junior-adjiey-348961325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--color-bg-soft] transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-[--color-text-strong] group-hover:text-[--color-primary] transition-colors">
                    LinkedIn
                  </span>
                </a>
                
                <a
                  href="https://github.com/Junior-Adjiey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--color-bg-soft] transition-colors group"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold text-[--color-text-strong] group-hover:text-[--color-primary] transition-colors">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="card p-6 bg-gradient-to-br from-[--color-primary]/5 to-purple-500/5 border-[--color-primary]/20">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[--color-primary]" />
                <h3 className="text-xl font-display text-[--color-text-strong]">
                  Disponibilité
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[--color-text-strong] font-semibold">
                    Disponible pour un stage
                  </span>
                </div>
                <p className="text-sm text-[--color-text]">
                  Recherche un stage de 5 mois à partir de <strong>novembre 2025 </strong> 
                  dans le développement web ou l'ingénierie logicielle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-display text-[--color-text-strong] mb-8">
            Questions fréquentes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-[--color-text-strong] mb-2">
                Délai de réponse ?
              </h3>
              <p className="text-sm text-[--color-text]">
                Je réponds généralement sous 24-48h maximum.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-[--color-text-strong] mb-2">
                Types de missions ?
              </h3>
              <p className="text-sm text-[--color-text]">
                Stage, projet étudiant, développement web, consulting.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-[--color-text-strong] mb-2">
                Budget projets ?
              </h3>
              <p className="text-sm text-[--color-text]">
                Ouvert aux discussions selon la complexité et durée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}