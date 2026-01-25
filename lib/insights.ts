import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';


const INSIGHTS_DIR = path.join(process.cwd(), 'content/insights');

/* ---------- TYPES ---------- */

export interface InsightMeta {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    excerpt: string;
    category: string[];
    date: string;
    author: string;
    thumbnail: string;
    hero: string;
}

export interface Insight extends InsightMeta {
    content: string;
}

/* ---------- HELPERS ---------- */

function getAllFiles() {
    return fs
        .readdirSync(INSIGHTS_DIR)
        .filter((file) => file.endsWith('.md'));
}

/* ---------- PUBLIC API ---------- */

// Used for generateStaticParams
export function getAllInsightSlugs(): { slug: string }[] {
    return getAllFiles().map((file) => {
        const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), 'utf-8');
        const { data } = matter(raw);
        return { slug: data.slug };
    });
}

// Used for cards, previews, listings
export function getAllInsightsMeta(): InsightMeta[] {
    return getAllFiles()
        .map((file) => {
            const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), 'utf-8');
            const { data } = matter(raw);

            return {
                id: data.id,
                slug: data.slug,
                title: data.title,
                subtitle: data.subtitle,
                excerpt: data.excerpt ?? data.subtitle, // ← safe fallback
                category: Array.isArray(data.category)
                    ? data.category
                    : [data.category],
                date: data.date,
                author: data.author,
                thumbnail: data.thumbnail,
                hero: data.hero,
            };
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
}

// Used for full article page
export async function getInsightBySlug(slug: string): Promise<Insight> {
    const file = getAllFiles().find((file) => {
        const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), 'utf-8');
        const { data } = matter(raw);
        return data.slug === slug;
    });

    if (!file) {
        notFound();
    }

    const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), 'utf-8');
    const { data, content } = matter(raw);

    const processed = await remark().use(html).process(content);

    return {
        id: data.id,
        slug: data.slug,
        title: data.title,
        subtitle: data.subtitle,
        excerpt: data.excerpt ?? data.subtitle,
        category: Array.isArray(data.category)
            ? data.category
            : [data.category],
        date: data.date,
        author: data.author,
        thumbnail: data.thumbnail,
        hero: data.hero,
        content: processed.toString(),
    };
}
