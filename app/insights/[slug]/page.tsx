import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';
import Carousel from '@/components/ui/Carousel';
import Card from '@/components/ui/Card';
import { notFound } from 'next/navigation';

import {
    getAllInsightSlugs,
    getInsightBySlug,
    getAllInsightsMeta,
} from '@/lib/insights';

import styles from './page.module.css';

const siteUrl = 'https://princeperspect.in';
const siteName = 'Prince Kumar';

function absoluteUrl(path: string) {
    return new URL(path, siteUrl).toString();
}

function jsonLdScript(data: unknown) {
    return JSON.stringify(data).replace(/</g, '\\u003c');
}

/* ---------- STATIC PARAMS ---------- */

export async function generateStaticParams() {
    return getAllInsightSlugs();
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug?: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    if (!slug) notFound();

    const insight = await getInsightBySlug(slug);
    const articlePath = `/insights/${insight.slug}`;
    const articleTitle = insight.title;
    const articleDescription = insight.excerpt;

    return {
        title: articleTitle,
        description: articleDescription,
        alternates: {
            canonical: articlePath,
        },
        openGraph: {
            title: articleTitle,
            description: articleDescription,
            url: articlePath,
            siteName,
            locale: 'en_US',
            type: 'article',
            publishedTime: insight.date,
            modifiedTime: insight.date,
            authors: [siteUrl],
            images: [
                {
                    url: insight.hero,
                    alt: insight.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: articleTitle,
            description: articleDescription,
            images: [insight.hero],
        },
    };
}

/* ---------- PAGE ---------- */

export default async function InsightPage({
    params,
}: {
    params: Promise<{ slug?: string }>;
}) {
    const { slug } = await params;

    if (!slug) notFound();

    const insight = await getInsightBySlug(slug);

    const moreInsights = getAllInsightsMeta().filter(
        (i) => i.slug !== slug
    );

    const articleUrl = absoluteUrl(`/insights/${insight.slug}`);
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl,
        },
        url: articleUrl,
        headline: insight.title,
        description: insight.excerpt,
        image: [absoluteUrl(insight.hero)],
        datePublished: `${insight.date}T00:00:00+05:30`,
        dateModified: `${insight.date}T00:00:00+05:30`,
        author: {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: insight.author,
            url: siteUrl,
        },
        articleSection: insight.category,
        keywords: insight.category.join(', '),
        inLanguage: 'en-US',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd) }}
            />
            <Navbar />

            {/* HERO */}
            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${insight.hero})` }}
            >
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1>{insight.title}</h1>
                </div>
            </section>

            {/* ARTICLE SURFACE */}
            <Surface roundedTop roundedBottom>
                <main className={styles.article}>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: insight.content }}
                    />
                </main>

                {/* MORE ARTICLES */}
                {moreInsights.length > 0 && (
                    <section className={styles.more}>
                        <div className={styles.carouselWrap}>
                            <Carousel>
                                {moreInsights.map((item) => (
                                    <Card
                                        key={item.slug}
                                        title={item.title}
                                        category={item.category.join(' • ')}
                                        excerpt={item.excerpt}
                                        image={item.thumbnail}
                                        href={`/insights/${item.slug}`}
                                    />
                                ))}
                            </Carousel>
                        </div>
                    </section>
                )}
            </Surface>

            <Footer />
        </>
    );
}
