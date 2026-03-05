import { INTENTS, generatePageContent } from "@/lib/seoData";
import SeoPageContent from "@/components/SeoPageContent";
import { Metadata } from "next";

interface Props {
    params: Promise<{ intent: string }>;
}

export async function generateStaticParams() {
    return INTENTS.map((intent) => ({
        intent: intent.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { intent } = await params;
    const content = generatePageContent(intent);
    return {
        title: content.title,
        description: content.description,
        alternates: {
            canonical: content.canonical,
        },
    };
}

export default async function IntentPage({ params }: Props) {
    const { intent } = await params;
    return <SeoPageContent intentSlug={intent} />;
}
