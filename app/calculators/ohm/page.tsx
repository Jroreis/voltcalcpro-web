'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OhmCalculator() {
  const [voltage, setVoltage] = useState<number | ''>('');
  const [current, setCurrent] = useState<number | ''>('');
  const [resistance, setResistance] = useState<number | ''>('');
  const [power, setPower] = useState<number | ''>('');
  const [results, setResults] = useState<any>(null);

  const calculateOhm = () => {
    if (voltage === '' && current === '' && resistance === '') {
      alert('Preencha pelo menos 2 campos');
      return;
    }

    let v = voltage as number;
    let i = current as number;
    let r = resistance as number;
    let p = power as number;

    // Lei de Ohm: V = I × R
    if (v && i && !r) r = v / i;
    if (v && r && !i) i = v / r;
    if (i && r && !v) v = i * r;

    // Potência: P = V × I
    if (v && i && !p) p = v * i;
    if (p && v && !i) i = p / v;
    if (p && i && !v) v = p / i;

    setResults({
      voltage: v?.toFixed(2),
      current: i?.toFixed(2),
      resistance: r?.toFixed(2),
      power: p?.toFixed(2),
      apparentPower: (v * i * 1.0)?.toFixed(2), // Sem fator de potência
      reactiveVoltage: (i * r)?.toFixed(2),
    });
  };

  const clearFields = () => {
    setVoltage('');
    setCurrent('');
    setResistance('');
    setPower('');
    setResults(null);
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
          <div className="flex gap-4">
            <Link href="/calculators/queda" className="text-gray-700 hover:text-primary">Queda de Tensão</Link>
            <Link href="/auth/login" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">Entrar</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Lei de Ohm</h1>
          <p className="text-gray-600 mb-8">Calcule tensão, corrente, resistência e potência</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tensão (V)
                </label>
                <input
                  type="number"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="Ex: 220"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Corrente (A)
                </label>
                <input
                  type="number"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="Ex: 10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resistência (Ω)
                </label>
                <input
                  type="number"
                  value={resistance}
                  onChange={(e) => setResistance(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="Ex: 22"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Potência (W)
                </label>
                <input
                  type="number"
                  value={power}
                  onChange={(e) => setPower(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="Ex: 2200"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={calculateOhm}
                  className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  Calcular
                </button>
                <button
                  onClick={clearFields}
                  className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Limpar
                </button>
              </div>
            </div>

            {/* Results */}
            <div>
              {results ? (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Resultados</h2>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Tensão (V)</p>
                      <p className="text-3xl font-bold text-primary">{results.voltage}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Corrente (A)</p>
                      <p className="text-3xl font-bold text-primary">{results.current}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Resistência (Ω)</p>
                      <p className="text-3xl font-bold text-primary">{results.resistance}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Potência (W)</p>
                      <p className="text-3xl font-bold text-primary">{results.power}</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                    Salvar Cálculo
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-gray-600">Os resultados aparecerão aqui</p>
                </div>
              )}
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border-l-4 border-primary p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Como usar:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Preencha pelo menos 2 campos</li>
              <li>• A calculadora usa a Lei de Ohm: V = I × R</li>
              <li>• Também calcula potência: P = V × I</li>
              <li>• Todos os valores são calculados automaticamente</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Google AdSense */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-600">
          {/* Espaço para anúncios */}
          <p>Espaço para anúncios Google AdSense</p>
        </div>
      </div>
    </div>
  );
}
