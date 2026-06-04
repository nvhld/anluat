import type { Metadata } from 'next';
import { JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['vietnamese', 'latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'An Luật | Chọn đúng hướng pháp lý',
    template: '%s | An Luật',
  },
  description:
    'Công ty Luật TNHH MTV An Luật hỗ trợ cá nhân và doanh nghiệp trong tư vấn, hợp đồng, lao động, tranh tụng và giải quyết tranh chấp.',
  keywords: [
    'An Luật',
    'công ty luật',
    'luật sư TP Hồ Chí Minh',
    'tư vấn pháp lý',
    'tư vấn doanh nghiệp',
    'giải quyết tranh chấp',
  ],
  authors: [{ name: 'Công ty Luật TNHH MTV An Luật' }],
  creator: 'Công ty Luật TNHH MTV An Luật',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'An Luật | Chọn đúng hướng pháp lý',
    description: 'Hỗ trợ pháp lý cho cá nhân và doanh nghiệp từ năm 2006.',
    url: site.url,
    siteName: site.name,
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'An Luật | Chọn đúng hướng pháp lý',
    description: 'Hỗ trợ pháp lý cho cá nhân và doanh nghiệp từ năm 2006.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${site.url}/#legalservice`,
    name: site.legalName,
    url: site.url,
    telephone: site.phone.secondary.schema,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tầng 3, Số 9 Phan Kế Bính',
      addressLocality: 'TP. Hồ Chí Minh',
      addressRegion: 'TP. Hồ Chí Minh',
      addressCountry: 'VN',
    },
    areaServed: 'VN',
    founder: {
      '@type': 'Person',
      name: 'Đinh Thị Quỳnh Như',
      jobTitle: 'Luật sư sáng lập',
    },
    knowsAbout: [
      'Hôn nhân gia đình',
      'Lao động nhân sự',
      'Tư vấn doanh nghiệp',
      'Hợp đồng',
      'Tranh tụng',
      'Thu hồi nợ',
    ],
  };

  return (
    <html lang="vi" className={`${playfair.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
