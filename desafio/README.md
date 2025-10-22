# 🏳️‍🌈 Desafio Técnico – Front-end | Lacrei Saúde

## 💡 Visão Geral

Este projeto foi desenvolvido como parte do **desafio técnico da Lacrei Saúde**, com o objetivo de construir uma **interface digital inclusiva, acessível e responsiva**, alinhada aos princípios de **Design Universal**, **WCAG (Web Content Accessibility Guidelines)** e ao **Marsha Design System** da Lacrei.

O projeto foi implementado com **Next.js**, **TypeScript**, **Styled Components** e deploy na **Vercel**.

🔗 **Deploy em Produção:** [desafio-lacrei-saude-alpha.vercel.app](https://desafio-lacrei-saude-alpha.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15**
- **React 18**
- **TypeScript**
- **Styled Components**
- **Vercel (Deploy e CI/CD)**
- **ESLint + Prettier (Padronização de código)**
- **Jest (Testes Unitários)**

---

## 🧭 Estrutura do Projeto

```
app/
 ├── components/       # Componentes reutilizáveis (Header, Footer, Cards, etc.)
 ├── profissionais/    # Página específica com listagem de profissionais
 ├── globals.css       # Estilos globais
 ├── layout.tsx        # Estrutura base (Header, Footer, etc.)
 ├── page.tsx          # Página inicial
public/
 ├── assets/           # Imagens e ícones
__tests__/             # Testes unitários (Navbar, Footer, Card, etc.)
```

---

## 💻 Rodando o Projeto Localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/RuiGomes111/desafioLacreiSaude.git
cd desafioLacreiSaude
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o servidor de desenvolvimento

```bash
npm run dev
```

Aplicação disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🧱 Build e Deploy

### 🏗️ Build de produção

```bash
npm run build
```

### 🚀 Deploy na Vercel

O deploy é realizado automaticamente via **integração com o GitHub**:  
- **Push** na branch `main` → **Preview Deploy**  
- Após aprovação → **Promovido a Produção**  

---

## 🧪 Testes Automatizados

Os testes foram implementados utilizando **Jest** e **React Testing Library**.

### 📂 Estrutura de Testes

```
__tests__/
 ├── Navbar.test.tsx
 ├── Footer.test.tsx
 ├── Card.test.tsx
```

Para executar:
```bash
npm test
```

### 🧾 Summary (Exemplo)

```
Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Coverage:    95% Statements
```

🖼️ **Print do summary do Jest:**
> ![Print do Jest](/desafio/public/assets/testes.png)

---

## 💡 Resultados do Lighthouse

Os testes de performance e acessibilidade foram realizados com o **Google Lighthouse (Chrome DevTools)** em ambiente de produção.

🎯 **Notas obtidas (meta mínima: 90 Acessibilidade / 80 Performance):**

| Métrica | Nota |
|----------|------|
| Desempenho | 91 |
| Acessibilidade | 92 |
| Práticas Recomendadas | 100 |
| SEO | 100 |

🖼️ **Print do relatório Lighthouse:**

![Lighthouse Resultados](/desafio/public/assets/print.png)

---

## 🧭 Rollback (Recuperação de Versões)

### 🔙 Via Vercel Dashboard
1. Acesse o painel do projeto
2. Vá em **Deployments**
3. Clique em **“Promote to Production”** na versão anterior

A Vercel mantém histórico de builds, permitindo rollback instantâneo e seguro.

---

## ⚙️ Justificativas Técnicas

| Decisão | Justificativa |
|----------|----------------|
| **Next.js (App Router)** | Melhor SEO e performance por SSR |
| **Styled Components** | Escopo isolado e reutilização de estilos |
| **Vercel** | Deploy contínuo, rollback rápido e CI/CD integrado |
| **Componentização** | Facilita manutenção e testes unitários |
| **Marsha Design System** | Padronização visual e acessibilidade garantida |

---

## 👨‍💻 Autor

**Rui Gomes**  
Desenvolvedor Fullstack | Engenheiro Informático  
💼 [LinkedIn](https://linkedin.com/in/ruigomes)  
🚀 [GitHub](https://github.com/RuiGomes111)

---

### 💬 Observação Final

> Projeto desenvolvido com foco em **inclusão, acessibilidade e performance**, refletindo o compromisso da Lacrei Saúde com uma web mais aberta e empática.
