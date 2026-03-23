export default function EventoInfo() {
  const infos = [
    {
      label: 'Data',
      value: 'Em breve',
      sub: '2026 · Fortaleza — CE',
      icon: '📅',
    },
    {
      label: 'Local',
      value: 'Fortaleza',
      sub: 'Ceará · Brasil',
      icon: '📍',
    },
    {
      label: 'Formato',
      value: 'Presencial',
      sub: 'Evento exclusivo e imersivo',
      icon: '🎯',
    },
    {
      label: 'Vagas',
      value: 'Limitadas',
      sub: 'Reserve sua vaga agora',
      icon: '🔑',
    },
  ]

  return (
    <section
      className="py-16 px-6"
      style={{ background: '#c9a84c' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-dark/30">
          {infos.map((info, i) => (
            <div
              key={i}
              className="text-center py-10 px-6"
              style={{ background: '#c9a84c' }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="text-2xl mb-3">{info.icon}</div>
              <p className="text-xs tracking-widest2 uppercase text-charcoal/60 mb-2">
                {info.label}
              </p>
              <p className="text-charcoal text-xl tracking-wide mb-1">{info.value}</p>
              <p className="text-charcoal/60 text-xs tracking-wide">{info.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
