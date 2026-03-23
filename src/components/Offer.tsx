// ✅ Cole aqui os links dos seus produtos
const LINK_EBOOK   = "https://metodocev.cleanefontenele.com/product/1"
const LINK_LIVRO   = "https://metodocev.cleanefontenele.com/product/2"

// ✅ Substitua pelo caminho da imagem da capa do livro
import capaLivro from "../assets/livro.webp"

const BtnShine = () => (
  <span
    style={{
      position: 'absolute',
      inset: 0,
      borderRadius: '10px',
      background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)',
      backgroundSize: '200% 100%',
      animation: 'btnShine 2.8s linear infinite',
      pointerEvents: 'none',
    }}
  />
)

const GlowWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: 'relative', borderRadius: '10px' }}>
    <div
      style={{
        position: 'absolute',
        inset: '-3px',
        borderRadius: '13px',
        background: 'transparent',
        boxShadow: '0 0 16px 3px rgba(37,99,235,0.7), 0 0 40px 6px rgba(37,99,235,0.3)',
        pointerEvents: 'none',
      }}
    />
    {children}
  </div>
)

export default function Offer() {
  return (
    <section
      id="inscricao"
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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Título */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-cream font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide">
            Escolha como você quer começar.
          </h2>
        </div>

        {/* Layout: foto esquerda + cards direita */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-stretch">

          {/* ── FOTO DO LIVRO ── */}
          <div
            className="w-full mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full h-full min-h-[300px]">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
                  filter: 'blur(16px)',
                }}
              />
              <img
                src={capaLivro}
                alt="Capa do livro Método CEV"
                className="relative z-10 rounded-xl w-full h-full object-cover object-center"
                style={{
                  boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 30px rgba(201,168,76,0.08)',
                }}
              />
            </div>
          </div>

          {/* ── CARDS — coluna direita ── */}
          <div
            className="flex flex-col gap-6"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {/* Card E-book */}
            <div
              className="relative p-7 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '12px' }}
            >
              <p className="text-gold/70 text-xs tracking-widest3 uppercase mb-3">
                E-book Digital
              </p>
              <p className="text-cream text-5xl tracking-wide mb-3">
                R$ 37
              </p>
              <p className="text-cream/50 text-sm leading-relaxed mb-6">
                Os 7 pilares do Método CEV. Leia hoje, aplique amanhã.
              </p>
              <GlowWrapper>
                <a
                  href={LINK_EBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '100%',
                    textAlign: 'center',
                    padding: '16px 24px',
                    background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #1e40af 100%)',
                    color: '#fff',
                    borderRadius: '10px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(147,197,253,0.35)',
                    overflow: 'hidden',
                    textDecoration: 'none',
                  }}
                >
                  <BtnShine />
                  <span style={{ position: 'relative', zIndex: 1 }}>Quero o E-book agora →</span>
                </a>
              </GlowWrapper>
            </div>

            {/* Card Livro Físico */}
            <div
              className="relative p-7 flex flex-col"
              style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.45)', borderRadius: '12px' }}
            >
              {/* Glow de canto */}
              <div
                style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '160px', height: '160px', borderRadius: '12px',
                  background: 'radial-gradient(circle at top right, rgba(201,168,76,0.2) 0%, transparent 65%)',
                  pointerEvents: 'none',
                }}
              />
              <div className="flex items-center gap-3 mb-3">
                <p className="text-gold/70 text-xs tracking-widest3 uppercase">Livro Físico</p>
                <span
                  className="text-xs tracking-widest2 uppercase px-2 py-0.5"
                  style={{ background: 'rgba(201,168,76,0.25)', color: '#c9a84c', borderRadius: '4px' }}
                >
                  Mais vendido
                </span>
              </div>
              <p className="text-cream text-5xl tracking-wide mb-3">
                R$ 157
              </p>
              <p className="text-cream/50 text-sm leading-relaxed mb-6">
                Frete grátis para todo o Brasil. O método na sua mão.
              </p>
              <GlowWrapper>
                <a
                  href={LINK_LIVRO}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '100%',
                    textAlign: 'center',
                    padding: '16px 24px',
                    background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #1e40af 100%)',
                    color: '#fff',
                    borderRadius: '10px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(147,197,253,0.35)',
                    overflow: 'hidden',
                    textDecoration: 'none',
                  }}
                >
                  <BtnShine />
                  <span style={{ position: 'relative', zIndex: 1 }}>Quero o Livro físico →</span>
                </a>
              </GlowWrapper>
            </div>

            {/* Garantia */}
            <div
              className="flex items-start gap-4 px-5 py-4"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '10px' }}
            >
              <span className="text-xl shrink-0 mt-0.5">🔒</span>
              <p className="text-cream/45 text-sm leading-relaxed">
                <span className="text-cream/70">Garantia incondicional:</span> se você não tiver
                o insight para crescer, devolvemos cada centavo. Sem perguntas.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes btnShine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}