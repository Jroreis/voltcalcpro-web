'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'basic';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const plans = {
    basic: {
      name: 'Basic',
      price: 9.90,
      currency: 'BRL',
      description: 'Plano básico com recursos essenciais',
      features: [
        'Cálculos ilimitados',
        'Sem anúncios',
        'Sincronização de dados',
        'Relatórios PDF',
      ],
    },
    pro: {
      name: 'Pro',
      price: 19.90,
      currency: 'BRL',
      description: 'Plano profissional com recursos avançados',
      features: [
        'Tudo do Basic',
        'Suporte prioritário',
        'Relatórios avançados',
        'Exportar em múltiplos formatos',
        'API para integração',
      ],
    },
  };

  const selectedPlan = plans[plan as keyof typeof plans] || plans.basic;

  const handleCheckout = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao processar pagamento');
        return;
      }

      // Redirecionar para Stripe (em produção)
      // window.location.href = data.checkoutUrl;
      alert('Em desenvolvimento: Integração com Stripe');
    } catch (err) {
      setError('Erro ao conectar ao servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">⚡</div>
            <span className="text-2xl font-bold text-gray-900">VoltCalc Pro</span>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Plan Summary */}
          <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedPlan.name}</h2>
            <p className="text-gray-600 mb-4">{selectedPlan.description}</p>
            
            <div className="mb-6">
              <p className="text-4xl font-bold text-primary">
                R$ {selectedPlan.price.toFixed(2)}
                <span className="text-lg text-gray-600">/mês</span>
              </p>
            </div>

            <h3 className="font-semibold text-gray-900 mb-3">Inclui:</h3>
            <ul className="space-y-2">
              {selectedPlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Form (Mock) */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-4">Informações de Pagamento</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Validade
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
            >
              {loading ? 'Processando...' : `Pagar R$ ${selectedPlan.price.toFixed(2)}`}
            </button>
            <Link
              href="/"
              className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition text-center"
            >
              Cancelar
            </Link>
          </div>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-primary rounded">
            <p className="text-sm text-gray-700">
              🔒 Seus dados de pagamento são processados de forma segura pelo Stripe. 
              Nunca armazenamos informações de cartão em nossos servidores.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
