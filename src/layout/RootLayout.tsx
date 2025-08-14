import { Outlet, NavLink } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg transition-all duration-200 ${
          isActive 
            ? 'bg-[--color-primary] text-black shadow-lg' 
            : 'text-[--color-text] hover:text-[--color-text-strong] hover:bg-[--color-bg-soft]'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

function MobileNavItem({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive 
            ? 'bg-[--color-primary] text-white' 
            : 'text-[--color-text] hover:bg-[--color-bg-soft]'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[--color-bg]/90 border-b border-[--color-border] supports-backdrop-blur:bg-[--color-bg]/60">
        <nav className="container-app flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="font-display text-xl font-bold text-[--color-text-strong] hover:text-[--color-primary] transition-colors"
          >
            ADJIEY JUNIOR<span className="text-[--color-primary]"></span>
          </NavLink>
          
          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-1 bg-[--color-bg-soft] rounded-xl p-1">
            <NavItem to="/">Accueil</NavItem>
            <NavItem to="/a-propos">À propos</NavItem>
            <NavItem to="/competences">Compétences</NavItem>
            <NavItem to="/projets">Projets</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
          
          {/* CTA & Menu mobile */}
          <div className="flex items-center gap-3">
            <a 
              href="/ADJIEY KOFFI JEAN-LUC JUNIOR CV.pdf" 
              className="btn-primary text-sm hidden sm:inline-flex"
              download
            >
              CV
            </a>
            
            {/* Bouton menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[--color-text] hover:bg-[--color-bg-soft] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[--color-bg] border-t border-[--color-border] animate-slide-down">
            <div className="container-app py-4 space-y-2">
              <MobileNavItem to="/" onClick={() => setMobileMenuOpen(false)}>
                Accueil
              </MobileNavItem>
              <MobileNavItem to="/a-propos" onClick={() => setMobileMenuOpen(false)}>
                À propos
              </MobileNavItem>
              <MobileNavItem to="/competences" onClick={() => setMobileMenuOpen(false)}>
                Compétences
              </MobileNavItem>
              <MobileNavItem to="/projets" onClick={() => setMobileMenuOpen(false)}>
                Projets
              </MobileNavItem>
              <MobileNavItem to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavItem>
              <div className="pt-2 border-t border-[--color-border] mt-4">
                <a 
                  href="/cv.pdf" 
                  className="btn-primary w-full justify-center"
                  download
                >
                  Télécharger CV
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-[--color-bg-soft] border-t border-[--color-border]">
        <div className="container-app py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* À propos */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="font-display text-xl font-bold text-[--color-text-strong]">
                  Koffi Jean-Luc Junior Adjiey
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-[--color-text] text-sm leading-relaxed">
                Étudiant en M1 Software Engineering à l'EFREI Paris. 
                Passionné par le développement web et l'intelligence artificielle.
              </p>
              <p className="text-[--color-primary] text-sm font-semibold">
                📍 Cachan, France • Disponible pour stage
              </p>
            </div>
            
            {/* Navigation rapide */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[--color-text-strong]">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to="/projets" className="text-[--color-text] hover:text-[--color-primary] transition-colors">
                    Mes projets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/competences" className="text-[--color-text] hover:text-[--color-primary] transition-colors">
                    Compétences
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/a-propos" className="text-[--color-text] hover:text-[--color-primary] transition-colors">
                    À propos de moi
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="text-[--color-text] hover:text-[--color-primary] transition-colors">
                    Me contacter
                  </NavLink>
                </li>
              </ul>
            </div>
            
            {/* Contact & Réseaux */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[--color-text-strong]">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:koffi-jean-luc-junior.adjiey@efrei.net" 
                  className="flex items-center gap-2 text-sm text-[--color-text] hover:text-[--color-primary] transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  koffi-jean-luc-junior.adjiey@efrei.net
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <a 
                    href="https://github.com/Junior-Adjiey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-[--color-bg] hover:bg-[--color-primary] hover:text-white rounded-lg transition-colors group"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/junior-adjiey-348961325/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-[--color-bg] hover:bg-[--color-primary] hover:text-white rounded-lg transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[--color-border] py-6">
          <div className="container-app flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[--color-text-light]">
            <p>© {new Date().getFullYear()} Koffi Jean-Luc Junior Adjiey. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}