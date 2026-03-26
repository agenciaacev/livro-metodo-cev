import cardBg1 from '../assets/leitura-rapida.png'
import cardBg2 from '../assets/metodo-global.png'
import cardBg3 from '../assets/garantia-de-insight.png'
import cardBgCenter from '../assets/cara-pensando.jpeg'

const cards = [
  {
    title: 'LEITURA RÁPIDA E PRÁTICA',
    image: cardBg1,
  },
  {
    title: 'MÉTODO APLICADO GLOBALMENTE',
    image: cardBg2,
  },
  {
    title: 'GARANTIA DE INSIGHT',
    image: cardBg3,
  },
]

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #0a0a0a 0%, #111008 40%, #16120a 70%, #0a0a0a 100%)',
      }}
    >
      {/* Grade pontilhada sutil */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glows ambiente */}
      <div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Título principal */}
        <div className="mb-8" data-aos="fade-up">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ color: '#c9a84c' }}
          >
            Sobre o Método
          </p>
          <h2
            className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide max-w-3xl"
            style={{ color: '#ffffff' }}
          >
            Você já se perguntou por que algumas pessoas vendem todos os dias
            nas redes{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #c9a84c, #e8c97a, #c9a84c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              e outras não?
            </span>
          </h2>
        </div>

        {/* Linha divisória dourada */}
        <div
          className="mb-14"
          data-aos="fade-up"
          data-aos-delay="60"
          style={{
            height: '1px',
            width: '80px',
            background: 'linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.2))',
          }}
        />

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── COLUNA ESQUERDA ── */}
          <div className="space-y-10" data-aos="fade-right" data-aos-duration="900">

            {/* Imagem principal */}
            <div
              className="relative group overflow-hidden rounded-2xl"
              data-aos="fade-up"
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)',
              }}
            >
              <img
                src={cardBgCenter}
                alt="Pessoa pensando em estratégia"
                className="w-full block transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ height: '280px', objectFit: 'cover' }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(10,10,10,0.6), transparent)',
                }}
              />
            </div>

            {/* Textos */}
            <div className="space-y-6">
              <p style={{ color: '#ffffff', fontSize: '1.2rem', lineHeight: '1.7' }}>
                Não é sorte. Não é número de seguidores. Não é ter o nicho certo.
              </p>

              <p
                className="font-bold leading-none"
                style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#c9a84c', letterSpacing: '-0.02em' }}
              >
                É método.
              </p>

              <p style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.8' }}>
                O Método CEV une os 3 pilares que ninguém te conta juntos:{' '}
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Conteúdo</span> que atrai,{' '}
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Estratégia</span> que posiciona e{' '}
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Vendas</span> que convertem de forma
                simples, direta e replicável.
              </p>

              <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.8' }}>
                No e-book você descobre os 7 pilares do método, a diferença entre
                conteúdo validado e conteúdo autoral, e como começar a crescer
                ainda esta semana.
              </p>
            </div>

            {/* Quote */}
            <div
              className="relative pl-6 py-4"
              style={{
                borderLeft: '2px solid #c9a84c',
                background: 'rgba(201,168,76,0.04)',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <p
                className="italic leading-relaxed mb-3"
                style={{ color: '#ffffff', fontSize: '1.05rem' }}
              >
                "O problema não é você. É que ninguém te ensinou o método certo."
              </p>
              <p
                className="font-semibold tracking-[0.25em] uppercase"
                style={{ color: '#c9a84c', fontSize: '0.7rem' }}
              >
                — Cleane Fontenele
              </p>
            </div>
          </div>

          {/* ── COLUNA DIREITA — OS 3 PILARES ── */}
          <div
            className="flex flex-col gap-5"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {/* Título */}
            <div className="mb-4" data-aos="fade-left" data-aos-delay="80">
              <h3
                className="font-semibold text-2xl md:text-3xl tracking-wide"
                style={{ color: '#ffffff' }}
              >
                Os <span style={{ color: '#c9a84c' }}>3 Pilares</span>
              </h3>
            </div>

            {cards.map((card, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl"
                data-aos="fade-left"
                data-aos-delay={100 + i * 120}
                style={{
                  height: '200px',
                  border: '1px solid rgba(201,168,76,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                {/* Imagem de fundo — ocupa o card inteiro e aparece toda */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay escuro */}
                <div
                  className="absolute inset-0 transition-all duration-500 group-hover:opacity-70"
                  style={{ background: 'rgba(0,0,0,0.52)' }}
                />

                {/* Glow dourado no hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.2) 0%, transparent 70%)',
                  }}
                />

                {/* Linha dourada inferior no hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
                />

                {/* Título centralizado no meio do card */}
                <div className="relative z-10 h-full flex items-center justify-center p-6">
                  <h3
                    className="text-white font-semibold text-center leading-snug"
                    style={{
                      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                      letterSpacing: '0.08em',
                      textShadow: '0 2px 16px rgba(0,0,0,0.9)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}