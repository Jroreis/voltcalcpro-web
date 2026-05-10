'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuedaCalculator() {
  const [voltage, setVoltage] = useState<number | ''>('');
  const [current, setCurrent] = useState<number | ''>('');
  const [length, setLength] = useState<number | ''>('');
  const [conductorType, setConductorType] = useState<'copper' | 'aluminum'>('copper');
  const [conductorSize, setConductorSize] = useState<number | ''>('');
  const [results, setResults] = useState<any>(null);

  const resistivity = conductorType === 'copper' ? 0.0175 : 0.0278;

  const calculateQueda = () => {
    if (!voltage || !current || !length || !conductorSize) {
      alert('Preencha todos os campos');
      return;
    }

    const v = voltage as number;
    const i = current as number;
    const l = length as number;
    const s = conductorSize as number;

    // Resistência do condutor: R = ρ × (L / S)
    const resistance = (resistivity * (l * 2)) / s; // × 2 para ida e volta

    // Queda de tensão: ΔV = I × R
    const quedaTensao = i * resistance;

    // Percentual de queda: %ΔV = (ΔV / V) × 100
    const percentualQueda = (quedaTensao / v) * 100;

    // Recomendação NBR 5410
    let recomendacao = 'OK';
    if (percentualQueda > 5) {
      recomendacao = 'ACIMA DO LIMITE (NBR 5410 recomenda máx 5%)';
    } else if (percentualQueda > 3) {
      recomendacao = 'PRÓXIMO AO LIMITE (NBR 5410 recomenda máx 3% para circuitos finais)';
    }

    setResults({
      resistance: resistance.toFixed(4),
      quedaTensao: quedaTensao.toFixed(2),
      percentualQueda: percentualQueda.toFixed(2),
      tensaoFinal: (v - quedaTensao).toFixed(2),
      recomendacao,
      nbr5410: percentualQueda <= 5 ? 'CONFORME' : 'NÃO CONFORME',
    });
  };

  const clearFields = () => {
    setVoltage('');
    setCurrent('');
    setLength('');
    setConductorSize('');
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
            <Link href="/calculators/ohm" className="text-gray-700 hover:text-primary">Lei de Ohm</Link>
            <Link href="/auth/login" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">Entrar</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Queda de Tensão</h1>
          <p className="text-gray-600 mb-8">Conforme NBR 5410 - Cálculo de queda de tensão em condutores</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tensão Nominal (V)
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
                  Comprimento do Condutor (m)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="Ex: 50"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Condutor
                </label>
                <select
                  value={conductorType}
                  onChange={(e) => setConductorType(e.target.value as 'copper' | 'aluminum')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="copper">Cobre (ρ = 0,0175)</option>
                  <option value="aluminum">Alumínio (ρ = 0,0278)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Seção do Condutor (mm²)
                </label>
                <select
                  value={conductorSize}
                  onChange={(e) => setConductorSize(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione...</option>
                  <option value="1.5">1,5 mm²</option>
                  <option value="2.5">2,5 mm²</option>
                  <option value="4">4 mm²</option>
                  <option value="6">6 mm²</option>
                  <option value="10">10 mm²</option>
                  <option value="16">16 mm²</option>
                  <option value="25">25 mm²</option>
                  <option value="35">35 mm²</option>
                  <option value="50">50 mm²</option>
                  <option value="70">70 mm²</option>
                  <option value="95">95 mm²</option>
                  <option value="120">120 mm²</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={calculateQueda}
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
                      <p className="text-sm text-gray-600">Queda de Tensão (V)</p>
                      <p className="text-3xl font-bold text-primary">{results.quedaTensao}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Percentual de Queda (%)</p>
                      <p className="text-3xl font-bold text-primary">{results.percentualQueda}%</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Tensão Final (V)</p>
                      <p className="text-3xl font-bold text-primary">{results.tensaoFinal}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${results.nbr5410 === 'CONFORME' ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'}`}>
                      <p className="text-sm font-semibold">NBR 5410</p>
                      <p className={`text-lg font-bold ${results.nbr5410 === 'CONFORME' ? 'text-green-700' : 'text-red-700'}`}>
                        {results.nbr5410}
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-sm font-semibold text-yellow-900">Recomendação</p>
                      <p className="text-sm text-yellow-800">{results.recomendacao}</p>
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
            <h3 className="font-bold text-gray-900 mb-2">NBR 5410 - Limites de Queda de Tensão:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Máximo 5% da tensão nominal (geral)</li>
              <li>• Máximo 3% para circuitos finais (recomendado)</li>
              <li>• Fórmula: ΔV = I × R, onde R = ρ × (L / S)</li>
              <li>• ρ (cobre) = 0,0175 | ρ (alumínio) = 0,0278</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Google AdSense */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-600">
          <p>Espaço para anúncios Google AdSense</p>
        </div>
      </div>
    </div>
  );
}
