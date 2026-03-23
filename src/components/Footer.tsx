import logo from '../assets/logo-principal.webp'

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: '#080808' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

        <div className="gold-line w-full" />

        <img
          src={logo}
          alt="Método CEV"
          className="h-12 w-auto opacity-70"
        />

        <p className="text-cream/20 text-xs tracking-wide text-center">
          © 2026 Método CEV · Cleane Fontenele. Todos os direitos reservados.
        </p>

        <div className="gold-line w-full" />

      </div>
    </footer>
  )
}