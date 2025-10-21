# 🏳️‍🌈 Desafio Técnico – Front-end | Lacrei Saúde

## 💡 Visão Geral

Este projeto foi desenvolvido como parte do desafio técnico da **Lacrei Saúde**, com o objetivo de construir uma **interface digital inclusiva, acessível e responsiva**, seguindo os princípios de **design universal e acessibilidade digital (WCAG)**.

O projeto foi implementado com **Next.js**, **TypeScript**, **Styled Components** e **Vercel** como plataforma de deploy.

🔗 **Deploy em Produção:** [desafio-lacrei-saude-alpha.vercel.app](https://desafio-lacrei-saude-alpha.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

* **Next.js 15**
* **React 18**
* **TypeScript**
* **Styled Components**
* **Vercel (Deploy e CI/CD)**
* **ESLint + Prettier (Padronização de código)**

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

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🧱 Build e Deploy

### 🏗️ Gerar build de produção

```bash
npm run build
```

### 🚀 Deploy na Vercel

O deploy é feito automaticamente via **integração com o GitHub**.

* Cada **push na branch `main`** gera uma **Preview Deploy** (pré-visualização).
* Quando a build passa, a Vercel promove automaticamente a versão para **produção**.

---

## 🧩 Testes Aplicados

### ✅ Testes de Interface (manuais)

* Verificação de responsividade (mobile, tablet e desktop)
* Teste de contraste e legibilidade (fundo x texto)
* Acessibilidade com tabulação e leitores de tela (NVDA)
* Performance no **Lighthouse** (Google Chrome)

### 🧪 Testes Automatizados (opcional)

os testes podem ser executados com:

```bash
npm test
```

---

## 🧭 Rollback (Recuperação de Versões)

### 🔙 Proposta Simples de Rollback

Na Vercel, basta:

1. Ir até o painel do projeto
2. Acessar **Deployments**
3. Selecionar a versão anterior e clicar em **“Promote to Production”**

### 🧩 Rollback Funcional

O uso de **Preview Deploys** em cada commit permite testar novas features antes de subir para produção, minimizando riscos de regressões.

---

## 🎨 Justificativas Visuais e Técnicas

### 🌈 Escolhas Visuais

* Paleta de cores acessível (alto contraste, tons suaves e inclusivos)
* Tipografia sem serifa (legibilidade aprimorada)
* Layout com espaçamento confortável e foco em clareza

### ⚙️ Escolhas Técnicas

* **Next.js (App Router)** pela performance e SEO
* **Styled Components** para isolamento e reuso de estilos
* **Componentização** focada em manutenção e escalabilidade
* **Deploy via Vercel** pela integração nativa e rollback rápido

---

## 👨‍💻 Autor

**Rui Gomes**
Desenvolvedor Fullstack | Engenheiro Informático
💼 [LinkedIn](https://linkedin.com/in/ruigomes)


