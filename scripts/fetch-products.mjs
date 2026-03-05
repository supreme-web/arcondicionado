import fs from 'fs';
import path from 'path';

const SITEMAP_URL = 'https://loja.mfar.com.br/sitemap/product-1.xml';
const OUTPUT_FILE = path.resolve(process.cwd(), 'src', 'lib', 'products.generated.json');

function titleCase(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

async function fetchProducts() {
    console.log(`Starting product fetch from ${SITEMAP_URL}`);

    try {
        const response = await fetch(SITEMAP_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
        }

        const xml = await response.text();

        // Simple regex to match <loc> elements
        const locRegex = /<loc>(.*?)<\/loc>/g;
        let match;
        const urls = [];

        while ((match = locRegex.exec(xml)) !== null) {
            urls.push(match[1]);
        }

        if (urls.length === 0) {
            throw new Error('No URLs found in the sitemap.');
        }

        const products = [];
        const seenSlugs = new Set();

        urls.forEach(url => {
            // Assume url is like https://loja.mfar.com.br/algum-produto
            // Remove trailing slash if any and get the last segment
            const cleanUrl = url.replace(/\/$/, '');
            const segments = cleanUrl.split('/');
            const slug = segments[segments.length - 1];

            if (!slug || seenSlugs.has(slug)) return;

            seenSlugs.add(slug);

            products.push({
                url: url,
                slug: slug,
                name: titleCase(slug)
            });
        });

        // Ensure the src/lib directory exists
        const libDir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(libDir)) {
            fs.mkdirSync(libDir, { recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(products, null, 2));

        console.log(`✅ successfully fetched and saved ${products.length} products to products.generated.json`);
    } catch (error) {
        console.error('❌ Error fetching products:', error);
        process.exit(1);
    }
}

fetchProducts();
