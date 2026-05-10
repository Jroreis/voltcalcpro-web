import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json();

    if (!plan || !['basic', 'pro'].includes(plan)) {
      return NextResponse.json(
        { error: 'Plano inválido' },
        { status: 400 }
      );
    }

    // Em produção, usar Stripe SDK
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const session = await stripe.checkout.sessions.create({...});

    // Mock response
    return NextResponse.json({
      success: true,
      checkoutUrl: `https://checkout.stripe.com/pay/mock_${plan}`,
      sessionId: `cs_test_${Math.random().toString(36).substr(2, 9)}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar checkout' },
      { status: 500 }
    );
  }
}
