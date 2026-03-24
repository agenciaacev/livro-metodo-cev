# Método CEV em Movimento 
Clone da landing page do evento **Método CEV em Movimento** de Cleane Fontenele.

## Stack

- **Vite** — build tool
- **React 18** + **TypeScript**
- **Tailwind CSS** — estilização utility-first
- **AOS** (Animate On Scroll) — animações ao rolar
- **Times New Roman** — fonte padrão em todo o projeto

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo dev
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

## Estrutura

```
src/
├── components/
│   ├── Navbar.tsx        # Navbar fixa com scroll transparente → sólido
│   ├── Hero.tsx          # Seção de abertura — fundo escuro, shimmer gold
│   ├── MarqueeBand.tsx   # Faixa de ticker animado
│   ├── Sobre.tsx         # O que é o Método CEV
│   ├── EventoInfo.tsx    # Faixa dourada com data, local, formato e vagas
│   ├── Palestrantes.tsx  # Cleane Fontenele e Apolo Scherer
│   ├── Programacao.tsx   # Agenda do evento em timeline
│   ├── ParaQuem.tsx      # Perfis do público-alvo
│   ├── Depoimentos.tsx   # Depoimentos de participantes
│   ├── Inscricao.tsx     # Formulário de inscrição
│   └── Footer.tsx        # Rodapé com links e contato
├── App.tsx               # Composição geral + init AOS
├── index.css             # Tailwind + AOS + estilos globais
└── main.tsx              # Entry point
```

## Design

- **Paleta**: preto profundo `#0d0d0d`, creme `#faf7f0`, dourado `#c9a84c`
- **Tipografia**: Times New Roman em todo o projeto, sem bold
- **Animações**: AOS fade-up/fade-left/fade-right, shimmer no título, marquee, pulse no CTA
- **Efeito grain**: overlay sutil de ruído em toda a página
