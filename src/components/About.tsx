const cards = [
  {
    number: '01',
    title: 'Leitura rápida e prática',
    desc: 'Cada página foi construída para gerar ação imediata. Sem enrolação, sem teoria vazia só o que você aplica hoje e vê resultado ainda esta semana.',
  },
  {
    number: '02',
    title: 'Método aplicado globalmente',
    desc: 'Validado em 7 continentes com profissionais reais. O que você vai aprender não é hipótese é o que funciona no mercado digital de verdade.',
  },
  {
    number: '03',
    title: 'Garantia de insight',
    desc: 'Se você terminar a leitura sem um insight transformador, devolvemos 100% do valor. Sem burocracia. Sem questionamento.',
  },
]

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0d0d0d 0%, #1a1208 50%, #0d0d0d 100%)' }}
    >
      {/* Grade pontilhada */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Tag + Título — acima de tudo, alinhado à esquerda */}
        <div className="mb-10" data-aos="fade-up">
          <h2 className="text-cream font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide max-w-3xl">
            Você já se perguntou por que algumas pessoas vendem todos os dias
            nas redes {' '}
            <span className="shimmer-text">e outras não?</span>
          </h2>
        </div>

        <div className="gold-line mb-12" data-aos="fade-up" data-aos-delay="60" />

        {/* Layout principal — 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-0 items-start">

          {/* ── COLUNA ESQUERDA: textos ── */}
          <div
            className="space-y-8 md:pr-12 md:pt-4"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <p className="text-cream/70 text-xl md:text-2xl leading-relaxed">
              Não é sorte. Não é número de seguidores. Não é ter o nicho certo.
            </p>

            <p
              className="text-5xl md:text-6xl leading-tight"
              style={{ color: '#c9a84c' }}
            >
              É método.
            </p>

            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              O Método CEV une os 3 pilares que ninguém te conta juntos:{' '}
              <span className="text-cream">Conteúdo</span> que atrai,{' '}
              <span className="text-cream">Estratégia</span> que posiciona e{' '}
              <span className="text-cream">Vendas</span> que convertem de forma
              simples, direta e replicável.
            </p>

            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              No e-book você descobre os 7 pilares do método, a diferença entre
              conteúdo validado e conteúdo autoral, e como começar a crescer
              ainda esta semana.
            </p>

            {/* Quote */}
            <div
              className="border-l-2 pl-6 py-2"
              style={{ borderColor: '#c9a84c' }}
            >
              <p className="text-cream text-lg italic leading-relaxed">
                "O problema não é você. É que ninguém te ensinou o método certo."
              </p>
              <p className="text-gold text-xs tracking-widest2 uppercase mt-3">
                 Cleane Fontenele
              </p>
            </div>
          </div>

          {/* ── COLUNA CENTRAL: linha vertical ── */}
          <div
            className="hidden md:flex flex-col items-center self-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="w-px h-full min-h-full"
              style={{ background: 'linear-gradient(to bottom, #c9a84c 0%, rgba(201,168,76,0.15) 100%)' }}
            />
          </div>

          {/* ── COLUNA DIREITA: cards em coluna ── */}
          <div
            className="flex flex-col gap-5 md:pl-12"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl"
                data-aos="fade-left"
                data-aos-delay={100 + i * 120}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 0% 50%, rgba(201,168,76,0.14) 0%, transparent 70%)' }}
                />

                {/* Barra esquerda dourada */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-[2px]"
                  style={{ background: '#c9a84c' }}
                />

                <div
                  className="relative pl-7 pr-6 py-6 flex gap-5 items-start rounded-xl"
                  style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.18)' }}
                >
                  {/* Número */}
                  <span
                    className="text-5xl leading-none tracking-tighter select-none shrink-0 mt-1"
                    style={{ color: 'rgba(201,168,76,0.30)' }}
                  >
                    {card.number}
                  </span>

                  <div>
                    <h3 className="text-cream text-lg md:text-xl leading-snug tracking-wide mb-2">
                      {card.title}
                    </h3>
                    <p className="text-cream/60 text-sm md:text-base leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}