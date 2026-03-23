import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
}

export default function SEO({
  title = 'Método CEV | Conteúdo, Estratégia e Vendas — Cleane Fontenele',
  description = 'O método usado em 7 continentes para transformar redes sociais em máquina de vendas. Aprenda a unir Conteúdo, Estratégia e Vendas para atrair clientes todos os dias — sem depender de sorte ou só de indicações.',
}: SEOProps) {
  const url = 'https://metodocev.cleanefontenele.com'
  const image = `${url}/og-image.jpg`

  return (
    <Helmet>
      {/* ── Básico ── */}
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="método CEV, Cleane Fontenele, conteúdo estratégia vendas, marketing digital, redes sociais, máquina de vendas, e-book, livro físico, 7 continentes, presença digital, vendas no digital" />
      <meta name="author" content="Cleane Fontenele" />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Método CEV — Cleane Fontenele" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── Mobile ── */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1a1208" />

      {/* ── Geo ── */}
      <meta name="geo.region" content="BR-CE" />
      <meta name="geo.placename" content="Fortaleza, Ceará, Brasil" />
      <meta name="geo.position" content="-3.729109683167275;-38.497129705291414" />
      <meta name="ICBM" content="-3.729109683167275, -38.497129705291414" />

      {/* ── Schema.org — Produto ── */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Método CEV',
          description,
          url,
          brand: { '@type': 'Person', name: 'Cleane Fontenele' },
          offers: [
            {
              '@type': 'Offer',
              name: 'E-book Digital — Método CEV',
              price: '37.00',
              priceCurrency: 'BRL',
              availability: 'https://schema.org/InStock',
              url,
            },
            {
              '@type': 'Offer',
              name: 'Livro Físico — Método CEV',
              price: '157.00',
              priceCurrency: 'BRL',
              availability: 'https://schema.org/InStock',
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'BR' },
                shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'BRL' },
              },
              url,
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '10000',
          },
        })}
      </script>

      {/* ── Schema.org — LocalBusiness ── */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MarketingAgency',
          name: 'Agência ACEV',
          url,
          telephone: '+55-85-8696-9403',
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '1' },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Senador Virgílio Távora, 1500 - Aldeota',
            addressLocality: 'Fortaleza',
            addressRegion: 'CE',
            postalCode: '60170-078',
            addressCountry: 'BR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -3.729109683167275,
            longitude: -38.497129705291414,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          sameAs: [
            'https://www.instagram.com/cleanementora/',
            'https://www.instagram.com/agenciaacev/',
          ],
        })}
      </script>
    </Helmet>
  )
}