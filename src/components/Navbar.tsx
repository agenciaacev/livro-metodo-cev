import { useState, useEffect } from 'react'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Inscrição', href: '#inscricao' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10,10,10,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="text-gold tracking-widest2 text-sm uppercase"
        >
          CEV<span className="text-cream/40 mx-1">·</span>Movimento
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/50 text-xs tracking-widest2 uppercase hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#inscricao"
          className="hidden md:inline-block text-xs tracking-widest2 uppercase px-6 py-2 border border-gold/40
            text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
        >
          Inscrever-se
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-gold transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-80' : 'max-h-0'}`}
        style={{ background: 'rgba(10,10,10,0.97)' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/60 text-sm tracking-widest2 uppercase hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
