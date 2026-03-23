export default function MarqueeBand() {
  const items = [
    'Conteúdo com Propósito',
    '✦',
    'Estratégia Comercial',
    '✦',
    'Poder na Comunicação',
    '✦',
    'Protagonismo Digital',
    '✦',
    'Autoridade no Mercado',
    '✦',
    'Vendas com Resultado',
    '✦',
  ]

  return (
    <div
      className="py-4 overflow-hidden"
      style={{ background: '#c9a84c' }}
    >
      <div className="marquee-inner inline-flex">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-charcoal text-xs tracking-widest2 uppercase mx-6"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
