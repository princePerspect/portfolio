import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';
import PageHero from '@/components/layout/PageHero';

import Card from '@/components/ui/Card';

import { getAllInsightsMeta } from '@/lib/insights';

import styles from './page.module.css';

export default function InsightsPage() {
    const insights = getAllInsightsMeta();

    const analyticalMemos = insights.filter((i) =>
        i.category.includes('Analytical Memo')
    );

    const caseStudies = insights.filter((i) =>
        i.category.includes('Article & Case Study')
    );

    const notes = insights.filter((i) =>
        i.category.includes('Note & Framework')
    );

    return (
        <div className={styles.page}>
            <Navbar variant="transparent" />

            <PageHero
                eyebrow=""
                title="Analytical Memos & Case Work"
                subtitle="Hypothesis-driven analyses that break down markets, business models, and strategic trade-offs."
            />

            {/* HERO → CONTENT BRIDGE MARK */}
            <div className={styles.heroBridge}>
                <img
                    src="/images/brand/bridge-mark.png"
                    alt=""
                    className={styles.bridgeLogo}
                />
            </div>

            <main className={styles.main}>
                {/* ✅ Rounded white surface */}
                <Surface roundedTop roundedBottom>
                    <div className={styles.container}>

                        <Section title="ANALYTICAL MEMOS" items={analyticalMemos} />
                        <Section title="ARTICLES & CASE STUDIES" items={caseStudies} />
                        <Section title="NOTES & FRAMEWORKS" items={notes} />

                    </div>
                </Surface>
            </main>

            <div className={styles.footerBridge}>
                <img
                    src="/images/brand/bridge-mark.png"
                    alt=""
                    className={`${styles.bridgeLogo} ${styles.bridgeFlipped}`}
                />
            </div>

            <Footer />
        </div>
    );
}

/* ---------- INTERNAL SECTION ---------- */

function Section({
    title,
    items,
}: {
    title: string;
    items: any[];
}) {
    if (!items.length) return null;

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>

            <div className={styles.cardsGrid}>
                {items.map((item) => (
                    <Card
                        key={item.slug}
                        title={item.title}
                        category={item.category.join(' • ')}
                        excerpt={item.excerpt}
                        image={item.thumbnail}
                        href={`/insights/${item.slug}`}
                    />
                ))}
            </div>
        </section>
    );
}
