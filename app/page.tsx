'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">⚡</div>
            <span className="text-2xl font-bold text-gray-900">VoltCalc Pro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-700 hover:text-primary transition">Recursos</Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary transition">Preços</Link>
            <Link href="#faq" className="text-gray-700 hover:text-primary transition">FAQ</Link>
            <Link href="/auth/login" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition">Entrar</Link>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
            <Link href="#features" className="text-gray-700 hover:text-primary">Recursos</Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary">Preços</Link>
            <Link href="#faq" className="text-gray-700 hover:text-primary">FAQ</Link>
            <Link href="/auth/login" className="px-4 py-2 bg-primary text-white rounded-lg text-center">Entrar</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Cálculos Elétricos Profissionais
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Calculadora completa para engenheiros e profissionais da área elétrica. 
          Conforme NBR 5410, com Lei de Ohm, Queda de Tensão e muito mais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/calculators/ohm"
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Começar Grátis
          </Link>
          <Link 
            href="/auth/signup"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Assinar Premium
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Recursos Principais</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lei de Ohm',
                description: 'Cálculos de tensão, corrente e resistência com precisão profissional.',
                icon: '⚡'
              },
              {
                title: 'Queda de Tensão',
                description: 'Análise completa de queda de tensão em cabos conforme NBR 5410.',
                icon: '📊'
              },
              {
                title: 'NBR 5410',
                description: 'Conformidade total com normas brasileiras de instalações elétricas.',
                icon: '✅'
              },
              {
                title: 'Histórico Sincronizado',
                description: 'Acesse seus cálculos em qualquer dispositivo, sempre sincronizado.',
                icon: '☁️'
              },
              {
                title: 'Relatórios PDF',
                description: 'Exporte seus cálculos em PDF profissional para documentação.',
                icon: '📄'
              },
              {
                title: 'Sem Limites',
                description: 'Cálculos ilimitados. Anúncios apenas para usuários gratuitos.',
                icon: '∞'
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Planos e Preços</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Gratuito</h3>
              <p className="text-4xl font-bold text-primary mb-6">R$ 0<span className="text-lg text-gray-600">/mês</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Cálculos ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Lei de Ohm
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Queda de Tensão
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Sem anúncios
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Relatórios PDF
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Sincronização
                </li>
              </ul>
              <Link 
                href="/calculators/ohm"
                className="w-full py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition text-center"
              >
                Começar
              </Link>
            </div>

            {/* Basic */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary transform scale-105">
              <div className="bg-primary text-white px-3 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold text-primary mb-6">R$ 9,90<span className="text-lg text-gray-600">/mês</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Tudo do Gratuito
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Sem anúncios
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Relatórios PDF
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Sincronização
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Suporte prioritário
                </li>
              </ul>
              <Link 
                href="/auth/signup?plan=basic"
                className="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition text-center"
              >
                Assinar
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold text-primary mb-6">R$ 19,90<span className="text-lg text-gray-600">/mês</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Tudo do Basic
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Suporte prioritário
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Relatórios avançados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Exportar em múltiplos formatos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> API para integração
                </li>
              </ul>
              <Link 
                href="/auth/signup?plan=pro"
                className="w-full py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition text-center"
              >
                Assinar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">VoltCalc Pro</h4>
              <p className="text-gray-400">Calculadora profissional para engenheiros elétricos.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/calculators/ohm" className="hover:text-white">Lei de Ohm</Link></li>
                <li><Link href="/calculators/queda" className="hover:text-white">Queda de Tensão</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Preços</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacidade</Link></li>
                <li><Link href="/terms" className="hover:text-white">Termos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white">Contato</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 VoltCalc Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
