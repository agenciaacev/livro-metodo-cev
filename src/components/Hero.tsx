import imgCleane from "../assets/foto-cleane.webp";
import logo from "../assets/logo-principal.webp";

// ✅ Cole aqui o link do seu produto (Hotmart, Kiwify, etc.)
const LINK_COMPRA = "https://seu-link-aqui.com";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d0d0d 0%, #1a1208 40%, #0d0d0d 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Foto background lateral — só desktop */}
      <div
        className="hidden md:block absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          backgroundImage: `url(${imgCleane})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.9) 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0a05 42%, transparent 72%)" }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center md:px-12 md:pt-24 md:pb-16">

        {/* Mobile: foto como background com texto sobreposto */}
        <div className="block md:hidden relative w-full">
          <img
            src={imgCleane}
            alt="Cleane Fontenele"
            className="w-full object-cover object-top"
            style={{ minHeight: '95vh', maxHeight: '95vh', objectFit: 'cover', objectPosition: 'top' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, transparent 45%, rgba(15,10,4,0.35) 62%, rgba(15,10,4,0.88) 78%, #1a1208 92%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 z-10">
            <img src={logo} alt="Logo" className="h-8 w-auto mb-4" />
            <h1 className="text-cream font-bold text-4xl text tracking-wide mb-3 text-center" style={{ lineHeight: '1.1', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8), 2px 2px 0px rgba(0,0,0,0.6)' }}>
              <span style={{ color: '#c9a84c', fontWeight: 700 }}>O método usado em 7 continentes</span> para transformar redes sociais em máquina de vendas.
            </h1>
            <p className="text-cream/80 text-lg mb-2 text-center" style={{ lineHeight: '1.3' }}>
              Aprenda a unir Conteúdo, Estratégia e Vendas para atrair clientes
              todos os dias sem depender de sorte ou só de indicações.
            </p>
          </div>
        </div>

        {/* Texto + CTA — desktop */}
        <div className="px-6 pt-6 pb-20 md:px-0 md:pt-0 md:pb-0">

          {/* Logo — só desktop */}
          <img src={logo} alt="Logo" className="hidden md:block h-12 w-auto mb-8" />

          <div className="hidden md:block" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="80">
            <h1 className="text-cream font-semibold text-4xl md:text-4xl lg:text-5xl tracking-wide mb-5" style={{ lineHeight: '1.1', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8), 2px 2px 0px rgba(0,0,0,0.6)' }}>
              <span style={{ color: '#c9a84c', fontWeight: 700 }}>O método usado em 7 continentes</span> para transformar redes sociais em máquina de vendas.
            </h1>
          </div>

          <div className="hidden md:block" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="160">
            <p className="text-cream text-xl md:text-2xl mb-10" style={{ lineHeight: '1.3' }}>
              Aprenda a unir Conteúdo, Estratégia e Vendas para atrair clientes
              todos os dias sem depender de sorte ou só de indicações.
            </p>
          </div>

          {/* CTA card */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="260"
            className="rounded-2xl border border-gold/15 p-6 md:p-8"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <p className="text-cream text-base tracking-wide mb-2">
              Comece agora por apenas
            </p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-cream/50 text-base" style={{ textDecoration: "line-through" }}>
                R$ 97,00
              </span>
              <span className="text-cream text-4xl md:text-5xl tracking-wide">
                R$ 37,00
              </span>
            </div>

            {/* Botão com glow */}
            <div style={{ position: "relative", borderRadius: "10px" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-3px",
                  borderRadius: "13px",
                  background: "transparent",
                  boxShadow: "0 0 16px 3px rgba(37,99,235,0.7), 0 0 40px 6px rgba(37,99,235,0.3)",
                  pointerEvents: "none",
                }}
              />
              <a
                href={LINK_COMPRA}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  position: "relative",
                  width: "100%",
                  textAlign: "center",
                  padding: "18px 24px",
                  background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #1e40af 100%)",
                  color: "#fff",
                  borderRadius: "10px",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(147,197,253,0.35)",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "10px",
                    background: "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)",
                    backgroundSize: "200% 100%",
                    animation: "btnShine 2.8s linear infinite",
                    pointerEvents: "none",
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>
                  Quero o E-book agora →
                </span>
              </a>
            </div>

            <p className="text-cream text-sm text-center tracking-wide mt-4">
              Garantia incondicional · Se não tiver o insight, devolvemos 100% do valor
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator — oculto no mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10">
        <span className="text-gold/40 text-xs tracking-widest2 uppercase">Descer</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent relative overflow-hidden">
          <div className="scroll-dot absolute top-0 left-0 right-0 h-3 bg-gold/70" />
        </div>
      </div>

      <style>{`
        @keyframes btnShine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}