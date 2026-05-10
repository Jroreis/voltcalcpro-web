import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VoltCalc Pro - Calculadora Elétrica Profissional',
  description: 'Calculadora profissional para cálculos elétricos conforme NBR 5410. Lei de Ohm, Queda de Tensão e muito mais.',
  keywords: 'calculadora elétrica, NBR 5410, lei de ohm, queda de tensão, engenharia elétrica',
  openGraph: {
    title: 'VoltCalc Pro',
    description: 'Calculadora profissional para cálculos elétricos',
    url: 'https://voltcalcpro.com',
    siteName: 'VoltCalc Pro',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
