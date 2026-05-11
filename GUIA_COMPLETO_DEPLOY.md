# 🚀 GUIA COMPLETO: Do GitHub até Seu Site Online

## Informações Importantes
- **Seu Email:** jroreis4582@gmail.com
- **Seu Domínio:** voltcalcpro.com
- **Seu Repositório:** voltcalcpro-web
- **Seu Nome:** Jefferson Reis Oliveira

---

# PARTE 1: GITHUB

## PASSO 1: Criar Conta GitHub (Se não tiver)

1. Abra o navegador
2. Vá em: **https://github.com/signup**
3. Preencha:
   - **Email address:** `jroreis4582@gmail.com`
   - **Password:** (crie uma senha forte)
   - **Username:** (escolha um nome - ex: jefferson-reis)
4. Clique em **"Create account"**
5. Confirme no email
6. ✅ Conta criada!

## PASSO 2: Fazer Upload do Código

Abra o Terminal e execute:

```bash
cd /home/ubuntu/voltcalcpro-web
git remote set-url origin https://github.com/SEU_USUARIO/voltcalcpro-web.git
git branch -M main
git push -u origin main
```

**IMPORTANTE:** Substitua `SEU_USUARIO` pelo seu username!

Exemplo: `https://github.com/jefferson-reis/voltcalcpro-web.git`

---

# PARTE 2: VERCEL (Deploy)

## PASSO 3: Criar Conta Vercel

1. Vá em: **https://vercel.com/signup**
2. Clique em **"Continue with GitHub"**
3. Autorize Vercel
4. ✅ Conta criada!

## PASSO 4: Fazer Deploy

1. Vá em: **https://vercel.com/new**
2. Clique em **"Import Git Repository"**
3. Selecione **voltcalcpro-web**
4. Clique em **"Import"**
5. Clique em **"Deploy"**
6. ⏳ Aguarde 2-3 minutos
7. ✅ Site está online em: `voltcalcpro-web.vercel.app`

---

# PARTE 3: CONECTAR DOMÍNIO

## PASSO 5: Adicionar Domínio no Vercel

1. No Vercel, vá em seu projeto
2. Clique em **"Settings"** → **"Domains"**
3. Clique em **"Add Domain"**
4. Digite: `voltcalcpro.com`
5. Clique em **"Add"**
6. **COPIE os 2 nameservers que aparecerem:**
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

## PASSO 6: Configurar Namecheap

1. Vá em: **https://www.namecheap.com**
2. Faça login
3. Vá em **"Dashboard"** → **"Domains"**
4. Clique em **"Manage"** ao lado de `voltcalcpro.com`
5. Procure por **"Nameservers"**
6. Clique em **"Custom DNS"**
7. Cole os 2 nameservers do Vercel:
   - Campo 1: `ns1.vercel-dns.com`
   - Campo 2: `ns2.vercel-dns.com`
8. Clique em **"Save"**

## PASSO 7: Verificar no Vercel

1. Volte para Vercel
2. Clique em **"Verify"**
3. Se tudo estiver certo: ✅ **"Domain Connected"**

## PASSO 8: Aguardar Propagação

- Aguarde 24-48 horas
- Depois acesse: **voltcalcpro.com**
- ✅ Seu site está online!

---

# ✅ PRONTO!

Seu site VoltCalc Pro está online em **voltcalcpro.com** 🎉
