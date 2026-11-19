/**
 * Configuração central do site.
 * Valores de contato são placeholders até confirmação do Samuel.
 * O SITE_PRICE é configurável — não publicar valor inventado.
 */
export const siteConfig = {
  name: 'Samuel Bernardo',
  title: 'Samuel Bernardo — Soluções Digitais',
  description: 'Sites e landing pages para profissionais e pequenos negócios que precisam de uma presença online clara e honesta.',
  // Placeholders — substituir pelos dados reais quando fornecidos
  SITE_EMAIL: 'contato@exemplo.com',
  SITE_WHATSAPP: '+55 00 00000-0000',
  // Preço configurável — valor pendente de confirmação
  // Deixar null ou string vazia para ocultar o preço na seção de oferta
  SITE_PRICE: 'R$ 697' as string | null,
  SITE_PRICE_LABEL: 'Condições a combinar',
} as const;
