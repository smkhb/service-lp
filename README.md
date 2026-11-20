<div align="center">
  <a href="https://samb.fyi/">
    <img src="public/og-image.png" alt="Samuel Bernardo, desenvolvedor de software" width="720">
  </a>

  <h1>samb.fyi</h1>

  <p><strong>Sites e soluções digitais para pequenos negócios.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Astro-191724?style=for-the-badge&amp;logo=astro&amp;logoColor=white" alt="Astro">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&amp;logo=tailwindcss&amp;logoColor=38BDF8" alt="Tailwind CSS">
  </p>

  <a href="https://samb.fyi/"><img src="https://img.shields.io/badge/Visitar-samb.fyi-FDD445?style=for-the-badge" alt="Visitar samb.fyi"></a>
</div>

## 👋 Sobre o projeto

Este é o código da página comercial de **Samuel Bernardo**, desenvolvedor independente. O site reúne serviços de desenvolvimento web, atendimento inteligente e automação, com links de WhatsApp que já preenchem uma mensagem para cada serviço.

| Serviço | O que posso desenvolver |
| --- | --- |
| 🏢 **Sites Institucionais** | Sites responsivos para apresentar o negócio, os serviços e os canais de contato. |
| 🚀 **Landing Pages** | Páginas para divulgar um produto, serviço ou campanha e captar contatos. |
| 💬 **Chatbots & Atendimento Inteligente** | Atendimento automatizado que responde dúvidas e encaminha conversas para uma pessoa quando necessário. |
| ⚙️ **Automações & Integrações com IA** | Integrações entre ferramentas e sistemas para automatizar tarefas repetitivas. |
| 🛠️ **Manutenção e Consultoria** | Correções, melhorias e orientação técnica para projetos existentes. |

## 💻 Rodar localmente

Use o Node.js **22.23.4 ou superior**, conforme o requisito da versão do Astro fixada no projeto.

```bash
git clone https://github.com/smkhb/service-lp.git
cd service-lp
npm ci
npm run dev
```

Abra [localhost:4321](http://localhost:4321).

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Valida o código com Astro Check e gera a versão estática em `dist/`. |
| `npm run preview` | Abre uma prévia local do último build. |

## 🗂️ Estrutura

| Caminho | Conteúdo |
| --- | --- |
| [`src/pages/`](src/pages/) | Página inicial e manifesto web. |
| [`src/components/`](src/components/) | Seções da página e elementos de navegação. |
| [`src/layouts/`](src/layouts/) | Layout HTML e metadados. |
| [`src/lib/site-config.ts`](src/lib/site-config.ts) | Metadados, preços, contato e mensagens do WhatsApp. |
| [`src/styles/`](src/styles/) | Estilos globais e animações. |
| [`public/`](public/) | Ícones e imagem de compartilhamento. |

A identidade visual usa fundo escuro, amarelo como cor de destaque e a fonte JetBrains Mono. Consulte o [guia de estilo](STYLE_GUIDE.md) para os padrões do projeto.

## ☁️ Build para publicação

Para publicar a versão estática na Cloudflare, use `npm run build` como comando de build e `dist/` como diretório de saída. A imagem de compartilhamento usa `https://servicos.samb.fyi` por padrão. Se o endereço da landing page mudar, defina `SITE_URL` nas variáveis de build com o novo endereço.

## 📬 Contato

[Site](https://samb.fyi/) · [E-mail](mailto:hello@samb.fyi) · [WhatsApp Business](https://wa.me/5548984282011)
