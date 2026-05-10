# VoltCalc Pro - Website Monetizado

Website profissional e monetizado para a calculadora elétrica VoltCalc Pro com sistema de assinatura, Google AdSense e sincronização com app mobile.

## 🚀 Características

- **Landing Page Responsiva** - Design moderno e profissional
- **Calculadoras Completas** - Lei de Ohm e Queda de Tensão (NBR 5410)
- **Sistema de Autenticação** - Login/Signup com validação
- **Planos Freemium** - Gratuito, Basic (R$ 9,90/mês) e Pro (R$ 19,90/mês)
- **Integração Stripe** - Pagamentos seguros
- **Google AdSense** - Monetização para usuários gratuitos
- **Dashboard Premium** - Histórico de cálculos e relatórios
- **Sincronização com App** - Dados compartilhados entre web e mobile
- **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop

## 📋 Stack Tecnológico

- **Frontend:** Next.js 14, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Pagamentos:** Stripe
- **Autenticação:** JWT (mock)
- **Hospedagem:** Vercel (recomendado)

## 🛠️ Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/voltcalcpro-web.git
cd voltcalcpro-web

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Iniciar servidor de desenvolvimento
pnpm dev
```

Acesse `http://localhost:3000`

## 📝 Variáveis de Ambiente

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Google AdSense
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx

# Banco de dados
DATABASE_URL=postgresql://user:password@localhost:5432/voltcalcpro

# JWT
JWT_SECRET=your-secret-key-here
```

## 📁 Estrutura de Diretórios

```
voltcalcpro-web/
├── app/
│   ├── api/                 # API Routes
│   │   ├── auth/           # Autenticação
│   │   └── stripe/         # Pagamentos
│   ├── auth/               # Páginas de autenticação
│   │   ├── login/
│   │   └── signup/
│   ├── calculators/        # Calculadoras
│   │   ├── ohm/
│   │   └── queda/
│   ├── dashboard/          # Dashboard do usuário
│   ├── checkout/           # Página de checkout
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Landing page
│   └── globals.css         # Estilos globais
├── lib/
│   ├── types.ts            # Tipos TypeScript
│   ├── stripe.ts           # Cliente Stripe
│   └── auth.ts             # Funções de autenticação
├── public/
│   └── images/             # Imagens estáticas
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔐 Autenticação

### Usuário Demo
- Email: `demo@voltcalc.com`
- Senha: `demo123`

## 💳 Planos e Preços

| Plano | Preço | Recursos |
|-------|-------|----------|
| **Gratuito** | R$ 0 | Cálculos ilimitados, com anúncios |
| **Basic** | R$ 9,90/mês | Sem anúncios, sincronização, relatórios PDF |
| **Pro** | R$ 19,90/mês | Tudo do Basic + suporte prioritário + API |

## 📊 Calculadoras

### Lei de Ohm
- Calcula: Tensão (V), Corrente (A), Resistência (Ω), Potência (W)
- Fórmulas: V = I × R, P = V × I
- Validação: Preencha pelo menos 2 campos

### Queda de Tensão (NBR 5410)
- Calcula: Queda de tensão, percentual, tensão final
- Conformidade: Verifica se está dentro dos limites NBR 5410
- Materiais: Cobre (ρ=0,0175) e Alumínio (ρ=0,0278)
- Seções: 1,5 a 120 mm²

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build
docker build -t voltcalcpro-web .

# Run
docker run -p 3000:3000 voltcalcpro-web
```

## 📱 Sincronização com App

O website sincroniza dados com o app mobile VoltCalc Pro através de:

1. **Autenticação:** Mesmo usuário em ambas plataformas
2. **API:** Endpoint `/api/sync` para sincronizar cálculos
3. **Histórico:** Cálculos aparecem em ambos os dispositivos
4. **Assinatura:** Plano sincronizado entre web e mobile

## 🔗 Links Importantes

- **Website:** https://voltcalcpro.com
- **App Mobile:** [Link da Play Store]
- **Documentação:** [Link da documentação]
- **Suporte:** support@voltcalcpro.com

## 📈 Monetização

### Receitas Esperadas (1000 usuários/mês)

| Fonte | Usuários | Conversão | Preço | Renda |
|-------|----------|-----------|-------|-------|
| Basic Premium | 1000 | 5% | R$ 9,90 | R$ 495 |
| Pro Premium | 1000 | 2% | R$ 19,90 | R$ 398 |
| Google AdSense | 1000 | - | R$ 3/1k | R$ 3 |
| **TOTAL** | - | - | - | **R$ 896/mês** |

## 🐛 Troubleshooting

### Erro: "Stripe key not found"
- Verifique se `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` está em `.env.local`

### Erro: "Database connection failed"
- Verifique se `DATABASE_URL` está correto
- Certifique-se de que o PostgreSQL está rodando

### Erro: "Token inválido"
- Limpe localStorage: `localStorage.clear()`
- Faça login novamente

## 📄 Licença

MIT License - Veja LICENSE.md

## 👨‍💻 Autor

Desenvolvido por VoltCalc Pro Team

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, envie email para support@voltcalcpro.com ou abra uma issue no GitHub.
