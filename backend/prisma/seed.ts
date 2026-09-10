import { PrismaClient, TaskDifficulty } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  {
    slug: 'fundamentos',
    name: 'Fundamentos WordPress',
    description: 'Primeiros passos e configurações essenciais.',
    plugins: [
      {
        name: 'Classic Editor',
        description: 'Mantém a experiência de edição clássica.',
        whyUse: 'Útil para equipas que ainda não migraram totalmente para Gutenberg.',
        websiteUrl: 'https://wordpress.org/plugins/classic-editor/'
      },
      {
        name: 'Enable Media Replace',
        description: 'Substitui ficheiros da biblioteca sem quebrar links.',
        whyUse: 'Facilita atualizações de imagens e PDFs publicados.',
        websiteUrl: 'https://wordpress.org/plugins/enable-media-replace/'
      },
      {
        name: 'WP Reset',
        description: 'Reinicia ambiente de teste rapidamente.',
        whyUse: 'Acelera iteração em ambientes de desenvolvimento e staging.',
        websiteUrl: 'https://wordpress.org/plugins/wp-reset/'
      }
    ],
    tasks: [
      ['Instalar WordPress no ambiente local', 'Preparar ambiente com servidor local e concluir instalação base.', 'EASY'],
      ['Definir idioma, fuso horário e formato de data', 'Ajustar configurações gerais para o público alvo.', 'EASY'],
      ['Configurar links permanentes amigáveis', 'Selecionar estrutura de URLs SEO-friendly em Definições > Ligações Permanentes.', 'EASY'],
      ['Remover conteúdo padrão', 'Apagar post, página e comentário default para começar limpo.', 'EASY'],
      ['Criar utilizador administrador secundário', 'Adicionar conta de backup com permissões administrativas.', 'MEDIUM']
    ]
  },
  {
    slug: 'tema-design',
    name: 'Tema e Design',
    description: 'Estrutura visual e consistência de interface.',
    plugins: [
      {
        name: 'Starter Templates',
        description: 'Importa templates prontos para vários nichos.',
        whyUse: 'Acelera criação de layout inicial.',
        websiteUrl: 'https://wordpress.org/plugins/astra-sites/'
      },
      {
        name: 'Envira Gallery Lite',
        description: 'Cria galerias responsivas e leves.',
        whyUse: 'Melhora apresentação visual sem penalizar desempenho.',
        websiteUrl: 'https://wordpress.org/plugins/envira-gallery-lite/'
      },
      {
        name: 'Custom Fonts',
        description: 'Permite carregar fontes personalizadas.',
        whyUse: 'Garante consistência de branding no site.',
        websiteUrl: 'https://wordpress.org/plugins/custom-fonts/'
      }
    ],
    tasks: [
      ['Selecionar e instalar tema base', 'Escolher tema alinhado ao projeto e ativá-lo.', 'EASY'],
      ['Configurar identidade visual', 'Aplicar logotipo, paleta de cores e tipografia.', 'MEDIUM'],
      ['Criar menu principal e rodapé', 'Definir navegação com páginas prioritárias.', 'EASY'],
      ['Ajustar cabeçalho e hero da homepage', 'Configurar mensagem principal e call-to-action.', 'MEDIUM'],
      ['Validar responsividade em mobile e tablet', 'Rever layout em breakpoints comuns antes do lançamento.', 'MEDIUM']
    ]
  },
  {
    slug: 'conteudo',
    name: 'Conteúdo e Estrutura',
    description: 'Organização editorial e arquitetura de informação.',
    plugins: [
      {
        name: 'Duplicate Page',
        description: 'Duplica páginas e posts com um clique.',
        whyUse: 'Poupa tempo ao criar novas páginas com estruturas parecidas.',
        websiteUrl: 'https://wordpress.org/plugins/duplicate-page/'
      },
      {
        name: 'Table of Contents Plus',
        description: 'Gera índice automático para conteúdos longos.',
        whyUse: 'Melhora navegação e legibilidade em artigos extensos.',
        websiteUrl: 'https://wordpress.org/plugins/table-of-contents-plus/'
      },
      {
        name: 'Editorial Calendar',
        description: 'Calendário editorial no painel.',
        whyUse: 'Ajuda no planeamento de publicações recorrentes.',
        websiteUrl: 'https://wordpress.org/plugins/editorial-calendar/'
      }
    ],
    tasks: [
      ['Definir páginas institucionais', 'Criar Sobre, Contactos, Política de Privacidade e Termos.', 'EASY'],
      ['Estruturar categorias e tags', 'Padronizar taxonomias para facilitar descoberta de conteúdo.', 'MEDIUM'],
      ['Criar template de artigo', 'Padronizar blocos como intro, subtítulos e CTA.', 'MEDIUM'],
      ['Configurar página de blog', 'Associar página de posts e ordenar por relevância.', 'EASY'],
      ['Preparar checklist editorial', 'Definir critérios de qualidade antes de publicar.', 'MEDIUM']
    ]
  },
  {
    slug: 'seo-analytics',
    name: 'SEO e Analytics',
    description: 'Visibilidade orgânica e medição de resultados.',
    plugins: [
      {
        name: 'Yoast SEO',
        description: 'Otimização de metadados e sitemaps.',
        whyUse: 'Facilita práticas de SEO on-page com feedback em tempo real.',
        websiteUrl: 'https://wordpress.org/plugins/wordpress-seo/'
      },
      {
        name: 'Site Kit by Google',
        description: 'Integra Search Console e Analytics no painel.',
        whyUse: 'Centraliza métricas essenciais de performance e tráfego.',
        websiteUrl: 'https://wordpress.org/plugins/google-site-kit/'
      },
      {
        name: 'Redirection',
        description: 'Gestão de redirecionamentos e 404.',
        whyUse: 'Evita perda de SEO em mudanças de URL.',
        websiteUrl: 'https://wordpress.org/plugins/redirection/'
      }
    ],
    tasks: [
      ['Instalar e configurar plugin de SEO', 'Aplicar configuração inicial de títulos e metadescrições.', 'EASY'],
      ['Gerar e submeter sitemap XML', 'Validar sitemap no Search Console.', 'MEDIUM'],
      ['Definir estratégia de palavras-chave', 'Mapear keyword principal por página.', 'MEDIUM'],
      ['Configurar Google Analytics', 'Integrar medição de eventos e páginas vistas.', 'MEDIUM'],
      ['Auditar links quebrados', 'Corrigir URLs inválidas e criar redirecionamentos.', 'MEDIUM']
    ]
  },
  {
    slug: 'performance',
    name: 'Performance e Otimização',
    description: 'Velocidade de carregamento e eficiência.',
    plugins: [
      {
        name: 'LiteSpeed Cache',
        description: 'Cache, minificação e otimizações de performance.',
        whyUse: 'Melhora Core Web Vitals com configuração relativamente simples.',
        websiteUrl: 'https://wordpress.org/plugins/litespeed-cache/'
      },
      {
        name: 'Smush',
        description: 'Compressão de imagens automática.',
        whyUse: 'Reduz tamanho de media sem perder qualidade visual.',
        websiteUrl: 'https://wordpress.org/plugins/wp-smushit/'
      },
      {
        name: 'Perfmatters',
        description: 'Desativa recursos desnecessários do WordPress.',
        whyUse: 'Diminui requests e scripts carregados em frontend.',
        websiteUrl: 'https://perfmatters.io/'
      }
    ],
    tasks: [
      ['Ativar cache de página', 'Configurar cache para conteúdo estático e dinâmico quando possível.', 'MEDIUM'],
      ['Otimizar imagens existentes', 'Executar compressão bulk e servir formatos modernos.', 'MEDIUM'],
      ['Minificar CSS e JavaScript', 'Ativar minificação e testar regressões visuais.', 'MEDIUM'],
      ['Configurar carregamento lazy', 'Aplicar lazy load para imagens, iframes e vídeos.', 'EASY'],
      ['Testar Core Web Vitals', 'Avaliar LCP, CLS e INP com ferramentas de diagnóstico.', 'HARD']
    ]
  },
  {
    slug: 'seguranca',
    name: 'Segurança e Conformidade',
    description: 'Proteção, backup e boas práticas de compliance.',
    plugins: [
      {
        name: 'Wordfence Security',
        description: 'Firewall e scanner de malware.',
        whyUse: 'Proteção ativa contra ameaças comuns em WordPress.',
        websiteUrl: 'https://wordpress.org/plugins/wordfence/'
      },
      {
        name: 'UpdraftPlus',
        description: 'Backup automático para cloud.',
        whyUse: 'Permite recuperação rápida em caso de incidente.',
        websiteUrl: 'https://wordpress.org/plugins/updraftplus/'
      },
      {
        name: 'WP Activity Log',
        description: 'Regista atividades no painel.',
        whyUse: 'Aumenta rastreabilidade para auditoria e troubleshooting.',
        websiteUrl: 'https://wordpress.org/plugins/wp-security-audit-log/'
      }
    ],
    tasks: [
      ['Forçar HTTPS no site', 'Garantir certificado SSL ativo e redirecionamento HTTP->HTTPS.', 'EASY'],
      ['Implementar política de passwords fortes', 'Definir requisitos mínimos de autenticação.', 'MEDIUM'],
      ['Configurar backups automáticos', 'Programar backups completos e testar restauração.', 'MEDIUM'],
      ['Limitar tentativas de login', 'Reduzir risco de brute force no wp-login.', 'EASY'],
      ['Executar checklist RGPD', 'Rever consentimentos, políticas e retenção de dados.', 'HARD']
    ]
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce com WooCommerce',
    description: 'Fluxo base para lojas online em WordPress.',
    plugins: [
      {
        name: 'WooCommerce',
        description: 'Base de e-commerce para WordPress.',
        whyUse: 'Permite gerir catálogo, carrinho, checkout e pedidos.',
        websiteUrl: 'https://wordpress.org/plugins/woocommerce/'
      },
      {
        name: 'WooCommerce Stripe Gateway',
        description: 'Pagamentos por cartão via Stripe.',
        whyUse: 'Aumenta conversão com checkout moderno.',
        websiteUrl: 'https://wordpress.org/plugins/woocommerce-gateway-stripe/'
      },
      {
        name: 'PDF Invoices & Packing Slips',
        description: 'Geração automática de faturas em PDF.',
        whyUse: 'Facilita operações de faturação e expedição.',
        websiteUrl: 'https://wordpress.org/plugins/woocommerce-pdf-invoices-packing-slips/'
      }
    ],
    tasks: [
      ['Instalar WooCommerce e assistente inicial', 'Concluir setup base de moeda, endereço e impostos.', 'MEDIUM'],
      ['Criar categorias de produtos', 'Organizar catálogo por taxonomias claras.', 'EASY'],
      ['Configurar métodos de pagamento', 'Ativar gateways e validar ambiente de testes.', 'MEDIUM'],
      ['Definir opções de envio', 'Configurar zonas, métodos e custos de envio.', 'MEDIUM'],
      ['Testar jornada completa de compra', 'Simular pedido do carrinho ao email de confirmação.', 'HARD']
    ]
  },
  {
    slug: 'lancamento-manutencao',
    name: 'Lançamento e Manutenção',
    description: 'Checklist final e operação contínua.',
    plugins: [
      {
        name: 'WP Mail SMTP',
        description: 'Configuração fiável de envio de emails.',
        whyUse: 'Evita falhas de entrega em formulários e notificações.',
        websiteUrl: 'https://wordpress.org/plugins/wp-mail-smtp/'
      },
      {
        name: 'ManageWP Worker',
        description: 'Gestão centralizada de atualizações e backups.',
        whyUse: 'Simplifica manutenção de múltiplos sites.',
        websiteUrl: 'https://wordpress.org/plugins/worker/'
      },
      {
        name: 'Broken Link Checker',
        description: 'Monitoriza links quebrados continuamente.',
        whyUse: 'Ajuda a manter UX e SEO após lançamento.',
        websiteUrl: 'https://wordpress.org/plugins/broken-link-checker/'
      }
    ],
    tasks: [
      ['Configurar ambiente de staging', 'Preparar fluxo seguro para validar alterações.', 'MEDIUM'],
      ['Executar checklist pré-lançamento', 'Validar conteúdo, formulários, permissões e performance.', 'MEDIUM'],
      ['Configurar monitorização de uptime', 'Receber alertas automáticos de indisponibilidade.', 'EASY'],
      ['Criar rotina de atualizações mensais', 'Definir processo para core, plugins e temas.', 'MEDIUM'],
      ['Documentar handover do projeto', 'Registar acessos, processos e responsabilidades da equipa.', 'MEDIUM']
    ]
  }
] as const;

async function main() {
  await prisma.userTaskProgress.deleteMany();
  await prisma.pluginRecommendation.deleteMany();
  await prisma.task.deleteMany();
  await prisma.category.deleteMany();

  for (const category of categories) {
    const createdCategory = await prisma.category.create({
      data: {
        slug: category.slug,
        name: category.name,
        description: category.description
      }
    });

    await prisma.pluginRecommendation.createMany({
      data: category.plugins.map((plugin) => ({
        categoryId: createdCategory.id,
        ...plugin
      }))
    });

    await prisma.task.createMany({
      data: category.tasks.map((task, index) => ({
        categoryId: createdCategory.id,
        title: task[0],
        description: task[1],
        order: index + 1,
        difficulty: task[2] as TaskDifficulty,
        estimatedMin: task[2] === 'EASY' ? 20 : task[2] === 'MEDIUM' ? 40 : 75
      }))
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Seed error:', error);
    await prisma.$disconnect();
    process.exit(1);
  });
