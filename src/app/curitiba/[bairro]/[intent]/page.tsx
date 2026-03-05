import { BAIRROS, INTENTS, generatePageContent } from "@/lib/seoData";
import SeoPageContent from "@/components/SeoPageContent";
import { Metadata } from "next";

interface Props {
    params: Promise<{ bairro: string; intent: string }>;
}

export async function generateStaticParams() {
    const params: { bairro: string; intent: string }[] = [];

    BAIRROS.forEach((bairro) => {
        INTENTS.forEach((intent) => {
            params.push({
                bairro,
                intent: intent.slug,
            });
        });
    });

    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { bairro, intent } = await params;
    const content = generatePageContent(intent, bairro);
    return {
        title: content.title,
        description: content.description,
        alternates: {
            canonical: content.canonical,
        },
    };
}

export default async function BairroIntentPage({ params }: Props) {
    const { bairro, intent } = await params;
    return <SeoPageContent intentSlug={intent} bairroSlug={bairro} />;
}
