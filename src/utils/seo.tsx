import { useEffect } from 'react';

interface SchemaOrgProps {
  type: 'Organization' | 'LocalBusiness' | 'WebSite' | 'FAQPage';
  data: Record<string, any>;
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${import.meta.env.VITE_SITE_URL || 'https://giantsgym.com.br'}/#organization`,
  name: 'Giants Gym Cotia',
  alternateName: 'Giants Gym Portal da Primavera',
  url: import.meta.env.VITE_SITE_URL || 'https://giantsgym.com.br',
  logo: `${import.meta.env.VITE_SITE_URL || 'https://giantsgym.com.br'}/logo.png`,
  description: 'Academia completa em Cotia com equipamentos modernos, localizada no Portal da Primavera. Oferecemos planos flexíveis a partir de R$ 109,90/mês.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Bandeirantes, 122 - Portal da Primavera',
    addressLocality: 'Cotia',
    addressRegion: 'SP',
    postalCode: '06716-640',
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-23.603456',
    longitude: '-46.923456'
  },
  telephone: '+55-11-93331-8000',
  email: 'cotia@giantsgym.com.br',
  priceRange: 'R$ 109,90 - R$ 149,90',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '05:00',
      closes: '23:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '05:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '14:00'
    }
  ],
  sameAs: [
    'https://www.instagram.com/giantsgymacademia',
    'https://www.facebook.com/giantsgymacademia'
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${import.meta.env.VITE_SITE_URL || 'https://giantsgym.com.br'}/#website`,
  url: import.meta.env.VITE_SITE_URL || 'https://giantsgym.com.br',
  name: 'Giants Gym Cotia',
  description: 'Academia completa no Portal da Primavera com equipamentos modernos. Planos a partir de R$ 109,90.',
  publisher: {
    '@id': `${import.meta.env.VITE_SITE_URL || 'https://giantsgym.com.br'}/#organization`
  }
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais são os horários de funcionamento da Giants Gym?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Segunda a Quinta: 05:00 às 23h, Sexta: 05:00 às 22h, Sábado: 08h às 17h, Domingo e Feriados: 09h às 14h.'
      }
    },
    {
      '@type': 'Question',
      name: 'Qual o valor dos planos da Giants Gym?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos três planos: Mensal por R$ 149,90, Recorrente por R$ 129,90 e Anual por R$ 109,90 por mês. Todos com acesso ilimitado e todas as modalidades.'
      }
    },
    {
      '@type': 'Question',
      name: 'A Giants Gym aceita Wellhub e TotalPass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, aceitamos tanto Wellhub quanto TotalPass como formas de pagamento.'
      }
    },
    {
      '@type': 'Question',
      name: 'Onde fica localizada a Giants Gym?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Estamos localizados na Rua Bandeirantes, 200 - Portal da Primavera, CEP 06716-640, Cotia - SP.'
      }
    }
  ]
};
