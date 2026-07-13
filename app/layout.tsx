import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import CursorGlow from '@/components/CursorGlow';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://merutechnologies.com'),
  title: 'Meru Technologies - AI-Powered Web Development & Digital Marketing',
  description: 'We construct high-performance corporate websites and scale marketing channels through custom artificial intelligence integrations.',
  openGraph: {
    title: 'Meru Technologies - AI-Powered Web Development & Digital Marketing',
    description: 'We construct high-performance corporate websites and scale marketing channels through custom artificial intelligence integrations.',
    url: 'https://merutechnologies.com',
    siteName: 'Meru Technologies',
    images: [
      {
        url: '/meru-icon.png',
        width: 800,
        height: 800,
        alt: 'Meru Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meru Technologies - AI-Powered Web Development & Digital Marketing',
    description: 'We construct high-performance corporate websites and scale marketing channels through custom artificial intelligence integrations.',
    images: ['/meru-icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Meru Technologies',
    'image': 'https://merutechnologies.com/meru-icon.png',
    'url': 'https://merutechnologies.com',
    'telephone': '+1-800-555-6378',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Technology Way',
      'addressLocality': 'Silicon Valley',
      'addressRegion': 'CA',
      'postalCode': '94025',
      'addressCountry': 'US'
    },
    'sameAs': [
      'https://www.facebook.com/merutechnologies',
      'https://www.linkedin.com/company/merutechnologies',
      'https://www.instagram.com/merutechnologies'
    ]
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background-custom text-white selection:bg-primary selection:text-background-custom">
        <LenisProvider>
          <CursorGlow />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
