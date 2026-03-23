const depoimentos = [
  { name: 'Mariana Sousa',  role: 'Empreendedora digital',    initials: 'MS', color: '#1a73e8', stars: 5, tag: 'E-book',       text: 'Antes eu postava todo dia e vendia uma vez por mês. Depois do Método CEV entendi o que estava errado. Em 3 semanas fechei 4 contratos só pelo Instagram.' },
  { name: 'Rafael Andrade', role: 'Consultor comercial',       initials: 'RA', color: '#e53935', stars: 5, tag: 'Livro Físico', text: 'Conteúdo sem estratégia é só barulho — aprendi isso na página 12. A Cleane te mostra exatamente onde você está errando. Em seis meses minha carteira triplicou.' },
  { name: 'Fernanda Lima',  role: 'Especialista em vendas',    initials: 'FL', color: '#43a047', stars: 5, tag: 'Livro Físico', text: 'O livro físico ficou cheio de marcações. Não é teoria vazia — cada capítulo tem algo que você aplica no mesmo dia. Em 30 dias meu posicionamento mudou completamente.' },
  { name: 'Camila Torres',  role: 'Criadora de conteúdo',      initials: 'CT', color: '#fb8c00', stars: 5, tag: 'E-book',       text: 'Eu achei que já sabia tudo sobre conteúdo. O CEV me mostrou que eu sabia fazer — mas não sabia vender. Essa diferença vale muito mais do que os R$ 37 que paguei.' },
  { name: 'Bruno Melo',     role: 'Coach de negócios',         initials: 'BM', color: '#8e24aa', stars: 5, tag: 'E-book',       text: 'Li o e-book em uma tarde e na semana seguinte apliquei a estrutura de vendas do capítulo 5. A melhor semana de fechamentos do meu negócio em dois anos.' },
  { name: 'Patrícia Rocha', role: 'Gestora de tráfego',        initials: 'PR', color: '#00897b', stars: 5, tag: 'Livro Físico', text: 'O livro chegou em 4 dias com frete grátis e a qualidade me surpreendeu. Mas o que mais surpreendeu foi o conteúdo. Recomendo para qualquer profissional do digital.' },
  { name: 'Lucas Ferreira', role: 'Produtor de conteúdo',      initials: 'LF', color: '#d81b60', stars: 5, tag: 'E-book',       text: 'Comprei o e-book sem muita expectativa e fui surpreendido. A clareza com que a Cleane explica o pilar de estratégia me fez repensar tudo que eu fazia. Vale cada centavo.' },
  { name: 'Juliana Castro', role: 'Agente imobiliária',         initials: 'JC', color: '#f57f17', stars: 5, tag: 'Livro Físico', text: 'Tenho o livro físico na minha mesa e toda semana abro em uma página diferente. Cada leitura me dá um novo insight. É o tipo de material que não envelhece.' },
]

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ opacity: 0.28, flexShrink: 0 }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const Stars = ({ n }: { n: number }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? '#fbbc04' : '#e0e0e0'}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

type Dep = typeof depoimentos[0]

const Card = ({ d }: { d: Dep }) => (
  <div style={{
    width: '300px',
    flexShrink: 0,
    background: '#ffffff',
    border: '1px solid #eaecef',
    borderRadius: '14px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.07), 0 24px 48px rgba(0,0,0,0.04)',
  }}>
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
      <div style={{
        width: '38px', height: '38px', borderRadius: '50%',
        background: d.color, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '13px', flexShrink: 0,
      }}>
        {d.initials}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ color: '#1a1a1a', fontSize: '13px', letterSpacing: '0.02em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.name}</p>
        <p style={{ color: '#6b7280', fontSize: '11px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.role}</p>
      </div>
      <GoogleIcon />
    </div>

    {/* Estrelas */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
      <Stars n={d.stars} />
      <span style={{ color: '#9ca3af', fontSize: '11px' }}>há 2 semanas</span>
    </div>

    {/* Texto */}
    <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.6', flex: 1, marginBottom: '14px' }}>{d.text}</p>

    {/* Tag */}
    <span style={{
      alignSelf: 'flex-start',
      fontSize: '11px',
      letterSpacing: '0.04em',
      padding: '3px 8px',
      borderRadius: '4px',
      background: d.tag === 'Livro Físico' ? 'rgba(201,168,76,0.12)' : 'rgba(59,130,246,0.1)',
      color: d.tag === 'Livro Físico' ? '#92661a' : '#1d4ed8',
    }}>
      {d.tag}
    </span>
  </div>
)

const Row = ({ items, reverse }: { items: Dep[], reverse?: boolean }) => {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Fade esquerdo */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #f8f8f6, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      {/* Fade direito */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #f8f8f6, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{
        display: 'flex',
        gap: '20px',
        width: 'max-content',
        animation: `${reverse ? 'flowRight' : 'flowLeft'} ${reverse ? '70s' : '60s'} linear infinite`,
        paddingBottom: '8px',
      }}>
        {doubled.map((d, i) => <Card key={i} d={d} />)}
      </div>
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32"
      style={{ background: '#f8f8f6', overflow: 'hidden' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Tag */}

        <div data-aos="fade-up" data-aos-delay="60" className="mb-3">
          <h2 className="text-charcoal font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide max-w-3xl">
            Mais de <span style={{ color: '#c9a84c',fontWeight: '600' }}>10.000 pessoas</span> em 7 continentes
            já aplicaram o Método CEV.
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="80" className="mb-14">
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            Cleane Fontenele não vende teoria. Ela vende o que já funcionou — para empreendedores,
            profissionais e criadores que travavam no digital e hoje faturam com consistência.
          </p>
        </div>
      </div>

      {/* Faixa única fluindo */}
      <Row items={depoimentos} />

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 text-center" data-aos="fade-up">
          {[
            { num: '10.000+', label: 'pessoas impactadas' },
            { num: '7',       label: 'continentes' },
            { num: '100%',    label: 'garantia de devolução' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl tracking-wide" style={{ color: '#c9a84c' }}>{s.num}</span>
              <span className="text-muted text-xs tracking-widest2 uppercase mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes flowLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes flowRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}