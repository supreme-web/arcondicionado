interface WhatsappParams {
    text?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
}

export function getWhatsappLink(params: WhatsappParams = {}) {
    const {
        text = "Olá MFAR! Quero orçamento de ar condicionado em Curitiba.",
        utmSource = "arcondicionado.curitiba.br",
        utmMedium = "cta",
        utmCampaign = "seo_programatico"
    } = params;

    // Montar parâmetros
    // O link na URL base, encode text, append utms na URL. 
    // O WhatsApp usa o text puro urlencoded.
    const encodedText = encodeURIComponent(text);

    // A API wa.me/numero não aceita params UTM puros da mesma forma, 
    // mas vamos appendá-los à URL de qualquer forma para possíveis trackings nativos ou textuais
    return `https://wa.me/5541998623691?text=${encodedText}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
}
