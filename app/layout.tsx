import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VoltCalc Pro - Calculadora Elétrica Profissional',
  description: 'Calculadora profissional para cálculos elétricos conforme NBR 5410. Lei de Ohm, Queda de Tensão e muito mais.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
