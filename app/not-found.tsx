import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Página não encontrada</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
