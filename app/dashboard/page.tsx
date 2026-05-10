'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [calculations, setCalculations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    // Decodificar token (mock)
    try {
      const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
      setUser(decoded);
    } catch (err) {
      router.push('/auth/login');
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="spinner"></div></div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">⚡</div>
            <span className="text-2xl font-bold text-gray-900">VoltCalc Pro</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">{user.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bem-vindo, {user.email}!
          </h1>
          <p className="text-xl text-gray-600">
            Plano: <span className="font-semibold capitalize">{user.role}</span>
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link
            href="/calculators/ohm"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Lei de Ohm</h2>
            <p className="text-gray-600">Calcule tensão, corrente e resistência</p>
          </Link>

          <Link
            href="/calculators/queda"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Queda de Tensão</h2>
            <p className="text-gray-600">Conforme NBR 5410</p>
          </Link>
        </div>

        {/* Upgrade Section */}
        {user.role === 'free' && (
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Upgrade para Premium</h2>
            <p className="mb-6 text-lg">
              Desbloqueie recursos avançados, remova anúncios e sincronize seus cálculos em todos os dispositivos.
            </p>
            <div className="flex gap-4">
              <Link
                href="/checkout?plan=basic"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Basic - R$ 9,90/mês
              </Link>
              <Link
                href="/checkout?plan=pro"
                className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white"
              >
                Pro - R$ 19,90/mês
              </Link>
            </div>
          </div>
        )}

        {/* Recent Calculations */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cálculos Recentes</h2>
          {calculations.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              Nenhum cálculo realizado ainda. Comece a usar as calculadoras!
            </p>
          ) : (
            <div className="space-y-4">
              {calculations.map((calc) => (
                <div key={calc.id} className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-semibold text-gray-900">{calc.type}</p>
                  <p className="text-sm text-gray-600">{new Date(calc.timestamp).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
