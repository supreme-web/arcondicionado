import fs from 'fs';
import path from 'path';

const SITE_DOMAIN = "https://arcondicionado.curitiba.br";
const BAIRROS = [
    "batel", "agua-verde", "portao", "centro", "cajuru", "pinheirinho", "boa-vista",
    "santa-felicidade", "bigorrilho", "juveve", "cabral", "hauer", "uberaba", "xaxim",
    "boqueirao", "tingui", "atuba", "bacacheri", "sao-lourenco", "cristo-rei",
    "jardim-social", "alto-da-xv", "merces", "seminario", "vila-izabel"
];
const INTENTS = [
    "ar-condicionado",
    "manutencao-de-ar-condicionado",
    "tecnico-de-ar-condicionado",
    "empresa-de-ar-condicionado"
];

const urls = [
    "",
    "/curitiba/",
];

// Add pillar pages
INTENTS.forEach(intent => {
    urls.push(`/curitiba/${intent}/`);
});

// Add neighborhood pages
BAIRROS.forEach(bairro => {
    INTENTS.forEach(intent => {
        urls.push(`/curitiba/${bairro}/${intent}/`);
    });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${SITE_DOMAIN}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === "" ? "1.0" : url.includes("/curitiba/") && url.split("/").length === 3 ? "0.9" : "0.7"}</priority>
  </url>`).join("\n")}
</urlset>`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_DOMAIN}/sitemap.xml`;

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

console.log(`✅ Sitemap and robots.txt generated with ${urls.length} URLs.`);
