import { NextRequest, NextResponse } from 'next/server';

// Mock de usuários (em produção, seria um banco de dados)
let mockUsers: any[] = [
  {
    id: '1',
    email: 'demo@voltcalc.com',
    password: 'demo123',
    name: 'Demo User',
    role: 'free',
  },
];

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, plan } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Nome, email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se usuário já existe
    if (mockUsers.find(u => u.email === email)) {
      return NextResponse.json(
        { error: 'Email já cadastrado' },
        { status: 400 }
      );
    }

    // Criar novo usuário
    const newUser = {
      id: String(mockUsers.length + 1),
      email,
      password, // Em produção, fazer hash
      name,
      role: plan || 'free',
      createdAt: new Date(),
    };

    mockUsers.push(newUser);

    // Criar token JWT (mock)
    const token = Buffer.from(JSON.stringify({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
      iat: Date.now(),
    })).toString('base64');

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar cadastro' },
      { status: 500 }
    );
  }
}
