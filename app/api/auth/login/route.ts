import { NextRequest, NextResponse } from 'next/server';

// Mock de usuários (em produção, seria um banco de dados)
const mockUsers = [
  {
    id: '1',
    email: 'demo@voltcalc.com',
    password: 'demo123', // Em produção, seria hash
    name: 'Demo User',
    role: 'free',
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Buscar usuário (mock)
    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { error: 'Email ou senha incorretos' },
        { status: 401 }
      );
    }

    // Criar token JWT (mock - em produção usar jsonwebtoken)
    const token = Buffer.from(JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      iat: Date.now(),
    })).toString('base64');

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar login' },
      { status: 500 }
    );
  }
}
