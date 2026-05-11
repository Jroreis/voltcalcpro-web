# 🚀 Guia de Deployment - VoltCalc Pro Website

## Passo 1: Criar Repositório no GitHub

### 1.1 Criar repositório vazio no GitHub

1. Vá em https://github.com/new
2. Nome do repositório: `voltcalcpro-web`
3. Descrição: "Website monetizado da calculadora VoltCalc Pro"
4. Escolha: **Public** (para Vercel)
5. Clique em "Create repository"

### 1.2 Fazer push do código para GitHub

```bash
cd /home/ubuntu/voltcalcpro-web

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/voltcalcpro-web.git

# Renomear branch para main
git branch -M main

# Fazer push
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu usuário GitHub!**

---

## Passo 2: Fazer Deploy em Vercel

### 2.1 Criar conta em Vercel

1. Vá em https://vercel.com
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize Vercel a acessar seus repositórios

### 2.2 Importar projeto

1. Após fazer login, vá em https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione `voltcalcpro-web`
4. Clique em "Import"

### 2.3 Configurar variáveis de ambiente

Na tela de configuração do Vercel, adicione:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_seu_key
STRIPE_SECRET_KEY = sk_test_seu_key
NEXT_PUBLIC_GOOGLE_ADSENSE_ID = ca-pub-seu_id
JWT_SECRET = seu_secret_aleatorio
```

**Deixe em branco por enquanto - você configura depois!**

### 2.4 Fazer deploy

1. Clique em "Deploy"
2. Aguarde 2-3 minutos
3. Seu site estará em: `voltcalcpro-web.vercel.app`

---

## Passo 3: Registrar Domínio

### 3.1 Registrar em Namecheap (Recomendado)

1. Vá em https://www.namecheap.com
2. Busque por `voltcalcpro.com`
3. Adicione ao carrinho
4. Preencha com seus dados:
   - **Nome:** Jefferson Reis Oliveira
   - **Email:** jroreis4582@gmail.com
   - **Telefone:** +55 (19) 98914-2713
   - **Endereço:** Rua José Inácio dos Santos 153, Jardim Itaguaçu 2
   - **Cidade:** Campinas
   - **Estado:** São Paulo
   - **CEP:** 13053-195
   - **País:** Brazil

5. Escolha **Namecheap BasicDNS** (gratuito)
6. Finalize a compra

**Custo:** ~R$ 30-50/ano

### 3.2 Alternativas de Registradores

- **GoDaddy:** https://godaddy.com
- **Registro.br:** https://registro.br (para .com.br)
- **Google Domains:** https://domains.google

---

## Passo 4: Conectar Domínio ao Vercel

### 4.1 No Vercel

1. Vá em seu projeto no Vercel
2. Clique em "Settings" → "Domains"
3. Clique em "Add Domain"
4. Digite: `voltcalcpro.com`
5. Clique em "Add"

### 4.2 Configurar DNS

Vercel vai mostrar 2 opções:

**Opção A: Usar Nameservers do Vercel (RECOMENDADO)**

1. Copie os nameservers do Vercel
2. Vá no painel do Namecheap
3. Clique em "Manage"
4. Vá em "Nameservers"
5. Selecione "Custom DNS"
6. Cole os nameservers do Vercel
7. Salve

**Opção B: Usar CNAME Records**

Se não conseguir mudar nameservers:

1. No Namecheap, vá em "Advanced DNS"
2. Adicione um CNAME record:
   - **Host:** www
   - **Value:** cname.vercel-dns.com
   - **TTL:** 30 min

3. Adicione um A record:
   - **Host:** @
   - **Value:** 76.76.19.89
   - **TTL:** 30 min

---

## Passo 5: Configurar Variáveis de Ambiente

### 5.1 Obter Stripe API Keys

1. Vá em https://dashboard.stripe.com
2. Crie conta ou faça login
3. Vá em "Developers" → "API Keys"
4. Copie:
   - **Publishable Key** (começa com `pk_test_`)
   - **Secret Key** (começa com `sk_test_`)

### 5.2 Obter Google AdSense ID

1. Vá em https://adsense.google.com
2. Crie conta ou faça login
3. Seu ID está em "Settings" → "Account"
4. Formato: `ca-pub-xxxxxxxxxxxxxxxx`

### 5.3 Adicionar no Vercel

1. No Vercel, vá em "Settings" → "Environment Variables"
2. Adicione:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_seu_key_aqui
STRIPE_SECRET_KEY = sk_test_seu_key_aqui
NEXT_PUBLIC_GOOGLE_ADSENSE_ID = ca-pub-seu_id_aqui
JWT_SECRET = gerar_uma_string_aleatoria_forte
```

3. Clique em "Save"
4. Redeploy o projeto

---

## Passo 6: Testar o Site

Após tudo configurado, acesse:

- **URL Vercel:** https://voltcalcpro-web.vercel.app
- **Seu domínio:** https://voltcalcpro.com

### Testes Recomendados

- [ ] Landing page carrega corretamente
- [ ] Calculadora Lei de Ohm funciona
- [ ] Calculadora Queda de Tensão funciona
- [ ] Login/Signup funcionam
- [ ] Checkout redireciona para Stripe
- [ ] Google AdSense aparece (se configurado)

---

## Troubleshooting

### Domínio não funciona

- Aguarde 24-48 horas para DNS propagar
- Verifique se os nameservers estão corretos
- Limpe cache do navegador (Ctrl+Shift+Del)

### Erro 404 em rotas

- Verifique se `next.config.js` está correto
- Redeploy o projeto no Vercel

### Variáveis de ambiente não funcionam

- Verifique se o nome está exato (case-sensitive)
- Redeploy após adicionar variáveis
- Use `NEXT_PUBLIC_` para variáveis públicas

### Stripe não funciona

- Verifique se as API keys estão corretas
- Use modo teste (`pk_test_`, `sk_test_`)
- Verifique console do navegador para erros

---

## Próximos Passos

1. **Configurar banco de dados** (PostgreSQL)
2. **Implementar autenticação real** (com hash de senha)
3. **Conectar com app mobile** (sincronização)
4. **Configurar email** (notificações)
5. **Adicionar analytics** (Google Analytics)
6. **Configurar SSL** (Vercel faz automaticamente)

---

## 📞 Suporte

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Stripe Docs:** https://stripe.com/docs
- **Email:** jroreis4582@gmail.com

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Projeto importado no Vercel
- [ ] Domínio registrado
- [ ] DNS configurado
- [ ] Variáveis de ambiente adicionadas
- [ ] Site acessível em voltcalcpro.com
- [ ] Calculadoras testadas
- [ ] Login/Signup testados
- [ ] Anúncios configurados

Parabéns! 🎉 Seu website está ao vivo!
