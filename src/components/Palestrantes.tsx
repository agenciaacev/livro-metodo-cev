interface Speaker {
  name: string
  role: string
  bio: string
  initials: string
}

const speakers: Speaker[] = [
  {
    name: 'Cleane Fontenele',
    role: 'Criadora do Método CEV',
    bio: 'Especialista em marketing digital e posicionamento estratégico. Apresentadora, comunicadora e criadora do Método CEV — Conteúdo, Estratégia e Vendas. Referência em transformar marcas pessoais em autoridade digital.',
    initials: 'CF',
  },
  {
    name: 'Apolo Scherer',
    role: 'Vice-Presidente do CRECI-CE',
    bio: 'Profissional reconhecido pela sua atuação no mercado imobiliário cearense, com vasta experiência em gestão, desenvolvimento estratégico e liderança no setor imobiliário do Ceará.',
    initials: 'AS',
  },
]

export default function Palestrantes() {
  return (
    <section
      id="palestrantes"
      className="py-24 md:py-36 px-6"
      style={{ background: '#0f0f0f' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="section-tag mb-4">Quem vai estar lá</p>
          <h2 className="text-4xl md:text-5xl text-cream tracking-wide leading-tight mb-6">
            Palestrantes
          </h2>
          <div className="gold-line max-w-xs mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="card-hover p-10 border border-gold/20 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1a1208 0%, #0d0d0d 100%)' }}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-10"
                style={{
                  background: 'radial-gradient(circle at top right, #c9a84c, transparent)',
                }}
              />

              {/* Avatar */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-full border border-gold/50 flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(201,168,76,0.08)' }}
                >
                  <span className="text-gold tracking-widest text-sm italic">
                    {speaker.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-cream text-xl tracking-wide">{speaker.name}</h3>
                  <p className="text-gold text-xs tracking-widest2 uppercase mt-1">
                    {speaker.role}
                  </p>
                </div>
              </div>

              <div className="gold-line mb-6" />

              <p className="text-cream/60 text-sm leading-relaxed">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
