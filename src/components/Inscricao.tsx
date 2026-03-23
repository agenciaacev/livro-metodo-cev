import { useState } from 'react'

export default function Inscricao() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', creci: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (form.nome && form.email && form.telefone) {
      setSent(true)
    }
  }

  return (
    <section
      id="inscricao"
      className="py-24 md:py-36 px-6"
      style={{ background: 'linear-gradient(160deg, #0d0d0d 0%, #1a1208 50%, #0d0d0d 100%)' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-tag mb-4">Garanta sua vaga</p>
          <h2 className="text-4xl md:text-5xl text-cream tracking-wide leading-tight mb-6">
            Inscrição
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-cream/50 text-base leading-relaxed max-w-xl mx-auto">
            As vagas são limitadas. Preencha o formulário e entraremos em
            contato para confirmar sua participação no evento.
          </p>
        </div>

        {/* Form card */}
        <div
          className="border border-gold/20 p-10 md:p-14"
          style={{ background: 'rgba(201,168,76,0.03)' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {!sent ? (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className="text-gold/70 text-xs tracking-widest2 uppercase block mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-transparent border border-gold/25 text-cream placeholder-cream/20
                      px-4 py-3 text-sm tracking-wide outline-none
                      focus:border-gold/60 transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gold/70 text-xs tracking-widest2 uppercase block mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-transparent border border-gold/25 text-cream placeholder-cream/20
                      px-4 py-3 text-sm tracking-wide outline-none
                      focus:border-gold/60 transition-colors duration-200"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label className="text-gold/70 text-xs tracking-widest2 uppercase block mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(85) 9 0000-0000"
                    className="w-full bg-transparent border border-gold/25 text-cream placeholder-cream/20
                      px-4 py-3 text-sm tracking-wide outline-none
                      focus:border-gold/60 transition-colors duration-200"
                  />
                </div>

                {/* CRECI */}
                <div>
                  <label className="text-gold/70 text-xs tracking-widest2 uppercase block mb-2">
                    CRECI <span className="text-gold/40">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    name="creci"
                    value={form.creci}
                    onChange={handleChange}
                    placeholder="Número do CRECI"
                    className="w-full bg-transparent border border-gold/25 text-cream placeholder-cream/20
                      px-4 py-3 text-sm tracking-wide outline-none
                      focus:border-gold/60 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-cream/30 text-xs tracking-wide">
                  * Campos obrigatórios. Suas informações estão seguras.
                </p>
                <button
                  onClick={handleSubmit}
                  className="btn-primary cta-pulse whitespace-nowrap"
                >
                  Garantir minha vaga
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-10" data-aos="fade-up">
              <div className="num-circle mx-auto mb-6 w-16 h-16">
                <span className="text-gold text-xl">✓</span>
              </div>
              <h3 className="text-cream text-2xl tracking-wide mb-4">
                Inscrição recebida!
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed max-w-sm mx-auto">
                Obrigada pelo seu interesse. Em breve entraremos em contato
                pelo WhatsApp para confirmar sua participação.
              </p>
              <div className="gold-line max-w-xs mx-auto mt-8" />
            </div>
          )}
        </div>

        {/* Alternative CTA */}
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="150">
          <p className="text-cream/30 text-sm mb-4">Prefere falar diretamente?</p>
          <a
            href="https://wa.me/5585999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
