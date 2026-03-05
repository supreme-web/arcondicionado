/**
 * SEO Data for arcondicionado.curitiba.br
 */

export const SITE_DOMAIN = "https://arcondicionado.curitiba.br";
export const BRAND = "MFAR";

export const BAIRROS = [
    "batel", "agua-verde", "portao", "centro", "cajuru", "pinheirinho", "boa-vista",
    "santa-felicidade", "bigorrilho", "juveve", "cabral", "hauer", "uberaba", "xaxim",
    "boqueirao", "tingui", "atuba", "bacacheri", "sao-lourenco", "cristo-rei",
    "jardim-social", "alto-da-xv", "merces", "seminario", "vila-izabel"
];

export const INTENTS = [
    {
        slug: "ar-condicionado",
        label: "Ar Condicionado",
        keyword: "ar condicionado",
        h1Template: (bairro?: string) => bairro ? `Ar Condicionado em Curitiba - ${bairro}` : "Ar Condicionado em Curitiba",
        descTemplate: (bairro?: string) => bairro ? `Procurando ar condicionado no bairro ${bairro} em Curitiba? A MFAR oferece as melhores soluções em climatização residencial e comercial.` : "As melhores soluções em ar condicionado em Curitiba. Venda, instalação e manutenção com a qualidade MFAR."
    },
    {
        slug: "manutencao-de-ar-condicionado",
        label: "Manutenção de Ar Condicionado",
        keyword: "manutenção de ar condicionado",
        h1Template: (bairro?: string) => bairro ? `Manutenção de Ar Condicionado em ${bairro}` : "Manutenção de Ar Condicionado em Curitiba",
        descTemplate: (bairro?: string) => bairro ? `Serviço especializado de manutenção de ar condicionado no bairro ${bairro}, Curitiba. Garanta a durabilidade e eficiência do seu aparelho.` : "Manutenção preventiva e corretiva de ar condicionado em Curitiba. Atendimento ágil e técnico especializado."
    },
    {
        slug: "tecnico-de-ar-condicionado",
        label: "Técnico de Ar Condicionado",
        keyword: "técnico de ar condicionado",
        h1Template: (bairro?: string) => bairro ? `Técnico de Ar Condicionado no bairro ${bairro}` : "Técnico de Ar Condicionado em Curitiba",
        descTemplate: (bairro?: string) => bairro ? `Precisa de um técnico de ar condicionado no ${bairro}? Chame a MFAR. Profissionais qualificados para instalação e reparos imediatos.` : "Encontre o melhor técnico de ar condicionado em Curitiba. Equipe treinada e pronta para atender sua residência ou empresa."
    },
    {
        slug: "empresa-de-ar-condicionado",
        label: "Empresa de Ar Condicionado",
        keyword: "empresa de ar condicionado",
        h1Template: (bairro?: string) => bairro ? `Empresa de Ar Condicionado em ${bairro}, Curitiba` : "Empresa de Ar Condicionado em Curitiba",
        descTemplate: (bairro?: string) => bairro ? `A MFAR é a sua empresa de ar condicionado de confiança no bairro ${bairro}. Qualidade técnica e suporte completo em Curitiba.` : "Somos a principal empresa de ar condicionado em Curitiba. Mais de 10 anos de experiência em climatização e conforto térmico."
    }
];

export const INTRO_BLOCKS = [
    "Climatizar seu ambiente é essencial para o conforto em Curitiba, onde as variações térmicas são constantes.",
    "Se você busca eficiência e economia, a escolha do sistema de ar condicionado ideal faz toda a diferença.",
    "A MFAR é referência em soluções térmicas, trazendo tecnologia de ponta para sua casa ou escritório.",
    "O bem-estar da sua família ou equipe depende de um ambiente com temperatura controlada e ar purificado.",
    "Em Curitiba, ter um sistema de ar condicionado confiável é sinônimo de produtividade e qualidade de vida."
];

export const BENEFIT_BLOCKS = [
    "Equipe técnica altamente qualificada e certificada pelos principais fabricantes.",
    "Atendimento personalizado para entender a necessidade específica de cada ambiente.",
    "Uso de ferramentas modernas para instalação limpa e manutenção precisa.",
    "Garantia de serviço e suporte pós-venda dedicado ao cliente.",
    "Projetos de climatização que visam o menor consumo de energia possível."
];

export const PROBLEM_BLOCKS = [
    "Um ar condicionado sem manutenção pode aumentar a conta de luz em até 30%.",
    "O acúmulo de sujeira nos filtros favorece a proliferação de fungos e bactérias nocivas.",
    "Ruídos excessivos e falta de resfriamento são sinais claros de que seu aparelho precisa de atenção.",
    "Instalações mal feitas podem causar vazamentos de gás e danos estruturais graves.",
    "A negligência com a limpeza periódica reduz drasticamente a vida útil do seu equipamento."
];

export const SERVICE_BLOCKS = [
    "Instalação de splits, multi-splits e sistemas VRF com acabamento premium.",
    "Limpeza química completa com bactericidas autorizados pela ANVISA.",
    "Carga de gás R410a e R32 seguindo rigorosos padrões de segurança.",
    "Reparos em placas eletrônicas e substituição de compressores originais.",
    "Contratos de PMOC para empresas que exigem máxima conformidade legal."
];

export const CHECKLIST_BLOCKS = [
    "Verificação de drenagem para evitar infiltrações indesejadas.",
    "Teste de estanqueidade para garantir que não existam microvazamentos.",
    "Aferição de corrente elétrica e tensão de trabalho do compressor.",
    "Limpeza profunda das serpentinas e bandejas de condensado.",
    "Verificação do isolamento térmico das tubulações de cobre."
];

export const FAQ_SETS = [
    {
        q: "Qual a frequência ideal para manutenção do ar condicionado?",
        a: "Para uso residencial, recomendamos a limpeza dos filtros mensalmente e a manutenção técnica completa a cada 6 meses. Para empresas, o ideal é seguir o plano do PMOC."
    },
    {
        q: "A MFAR atende todos os bairros de Curitiba?",
        a: "Sim, possuímos equipes móveis que atendem Curitiba e Região Metropolitana com rapidez e eficiência."
    },
    {
        q: "Qual a garantia dos serviços prestados?",
        a: "Oferecemos garantia legal de 90 dias em todos os serviços de mão de obra, além da garantia de fábrica para peças e equipamentos instalados."
    },
    {
        q: "Vocês trabalham com todas as marcas?",
        a: "Atendemos as principais marcas do mercado, como LG, Samsung, Daikin, Gree, Fujitsu, Carrier e Midea."
    },
    {
        q: "Como solicitar um orçamento?",
        a: "Você pode clicar nos botões de CTA desta página ou entrar em contato diretamente pelo site mfar.com.br."
    }
];

export function seedFromSlug(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        const char = slug.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return Math.abs(hash);
}

export function generatePageContent(intentSlug: string, bairroSlug?: string) {
    const intent = INTENTS.find(i => i.slug === intentSlug)!;
    const bairroLabel = bairroSlug ? bairroSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "";
    const seed = seedFromSlug(`${intentSlug}-${bairroSlug || 'curitiba'}`);

    const getRand = (arr: any[]) => arr[seed % arr.length];
    const getRandSlice = (arr: any[], count: number) => {
        const start = seed % arr.length;
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(arr[(start + i) % arr.length]);
        }
        return result;
    };

    const utmSuffix = `?utm_source=arcondicionado-cwb&utm_medium=seo&utm_campaign=${intentSlug}${bairroSlug ? '-' + bairroSlug : ''}`;

    return {
        title: `${intent.label} em ${bairroLabel || 'Curitiba'} | MFAR Climatização`,
        description: intent.descTemplate(bairroLabel),
        h1: intent.h1Template(bairroLabel),
        intro: getRand(INTRO_BLOCKS),
        benefits: getRandSlice(BENEFIT_BLOCKS, 3),
        problems: getRandSlice(PROBLEM_BLOCKS, 2),
        services: getRandSlice(SERVICE_BLOCKS, 3),
        checklist: getRandSlice(CHECKLIST_BLOCKS, 4),
        faq: getRandSlice(FAQ_SETS, 4),
        ctaMain: `https://mfar.com.br${utmSuffix}`,
        ctaStore: `https://loja.mfar.com.br${utmSuffix}`,
        canonical: `${SITE_DOMAIN}${bairroSlug ? '/curitiba/' + bairroSlug + '/' + intentSlug + '/' : '/curitiba/' + intentSlug + '/'}`
    };
}
