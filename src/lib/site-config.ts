export const prices = {
  landing: 'R$ 497',
  essential: 'R$ 897',
  professional: 'R$ 1.297',
} as const

export const siteConfig = {
  name: 'Samuel Bernardo',
  title: 'Samuel Bernardo | Desenvolvimento Web e Soluções Digitais',
  description: 'Sites profissionais, landing pages, chatbots, automações com IA e consultoria para pequenos negócios e profissionais.',
  email: 'hello@samb.fyi',
  whatsapp: '+55 48 98428-2011',
} as const

const messages = {
  site: 'Olá, Samuel! Vim pelo seu site e gostaria de criar um site profissional para meu negócio. Podemos conversar?',
  landing: `Olá, Samuel! Vim pelo seu site e tenho interesse em uma Landing Page (a partir de ${prices.landing}). Gostaria de saber mais.`,
  chatbot: 'Olá, Samuel! Vim pelo seu site e tenho interesse em Chatbots & Atendimento Inteligente. Gostaria de conversar sobre uma solução para meu negócio.',
  automation: 'Olá, Samuel! Vim pelo seu site e tenho interesse em Automações & Integrações com IA. Gostaria de conversar sobre meu projeto.',
  maintenance: 'Olá, Samuel! Vim pelo seu site e preciso de Manutenção e Consultoria para um projeto existente. Gostaria de conversar.',
  essential: `Olá, Samuel! Vim pelo seu site e tenho interesse no pacote Site Essencial (a partir de ${prices.essential}). Gostaria de conversar sobre meu projeto.`,
  professional: `Olá, Samuel! Vim pelo seu site e tenho interesse no pacote Site Profissional (a partir de ${prices.professional}). Gostaria de conversar sobre meu projeto.`,
  contact: 'Olá, Samuel! Conheci seu trabalho pelo samb.fyi e gostaria de conversar sobre um projeto.',
}

export function whatsappLink(intent: keyof typeof messages) {
  const number = siteConfig.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(messages[intent])}`
}
