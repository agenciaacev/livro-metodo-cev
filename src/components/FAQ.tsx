import { useState } from 'react'

const faqs = [
  {
    q: 'Isso funciona para qualquer nicho?',
    a: 'Sim. O Método CEV foi desenvolvido para ser aplicável em qualquer segmento sejam serviços, produtos físicos, infoprodutos ou negócios locais. O que muda é o conteúdo. A estrutura de conteúdo, estratégia e vendas é universal.',
  },
  {
    q: 'Preciso ter muitos seguidores para aplicar?',
    a: 'Não. O método foi criado justamente para quem ainda está construindo presença digital. Você não precisa de audiência grande precisa de estratégia certa. O CEV te ensina a construir do zero com consistência.',
  },
  {
    q: 'O e-book é digital? Como vou receber?',
    a: 'Sim, o e-book (R$37) é 100% digital. Após a confirmação do pagamento você recebe o acesso imediatamente no seu e-mail. Pode ler no celular, tablet ou computador.',
  },
  {
    q: 'E o livro físico, quanto tempo demora para chegar?',
    a: 'O livro físico (R$157) é enviado para todo o Brasil com frete grátis. O prazo de entrega varia conforme a sua região, mas você recebe o código de rastreio assim que o pedido for despachado.',
  },
  {
    q: 'Vale mesmo a pena investir R$ 37 nisso?',
    a: 'Uma única venda a mais já paga o método inteiro e sobra. O que você vai aprender aqui tem o potencial de mudar completamente a forma como você se posiciona e converte no digital. A pergunta real é: quanto está custando não ter esse método?',
  },
  {
    q: 'E se eu comprar e não gostar?',
    a: 'Garantia incondicional. Se você comprar qualquer um dos nossos produtos e não tiver o insight para crescer e evoluir, devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas.',
  },
  {
    q: 'Qual a diferença entre o e-book e o livro físico?',
    a: 'O e-book traz os fundamentos e os 7 pilares do Método CEV ideal para quem quer começar rápido e entender a base. O livro físico aprofunda a jornada com a história e diferenciais do método, e é perfeito para quem quer ter o conteúdo sempre à mão de forma tangível.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #b8922a 0%, #c9a84c 35%, #e2c060 60%, #c9a84c 100%)',
      }}
    >
      {/* Textura sutil por cima do dourado */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Vinheta nas bordas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Tag + Título */}
        <div className="mb-14" data-aos="fade-up">
          <h2
            className="text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight tracking-wide"
            style={{ color: '#0d0d0d' }}
          >
            Ainda tem alguma dúvida?{' '}
            <span style={{ color: 'rgba(255,255,255,0.85)',fontWeight: '600' }}>A gente responde.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col" data-aos="fade-up" data-aos-delay="80">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid rgba(0,0,0,0.15)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span
                  className="text-base md:text-lg leading-snug tracking-wide"
                  style={{ color: '#1a1208' }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 flex items-center justify-center transition-transform duration-300 rounded-full"
                  style={{
                    color: open === i ? '#c9a84c' : '#0d0d0d',
                    background: open === i ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.3)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    fontSize: '1.1rem',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <p
                  className="text-sm md:text-base leading-relaxed pb-6 pr-8"
                  style={{ color: 'rgba(0,0,0,0.75)' }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="150">
          <p className="text-sm mb-6 tracking-wide" style={{ color: 'rgba(0,0,0,0.5)' }}>
            Ainda com dúvidas? Fale direto com a gente.
          </p>
          <a
            href="https://wa.me/5585986969403?text=Olá%2C%20vim%20pelo%20site%20do%20Método%20CEV%20e%20gostaria%20de%20tirar%20uma%20dúvida!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs tracking-widest2 uppercase px-8 py-4 transition-all duration-300"
            style={{
              border: '1px solid rgba(0,0,0,0.3)',
              color: '#0d0d0d',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.15)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#0d0d0d'
            }}
          >
            Falar no WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}