import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import PageHero from '@/components/layout/PageHero';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';

import PillTag from '@/components/ui/PillTag';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';

import FeaturedWork from '@/components/sections/FeaturedWork';
import ContactCTA from '@/components/sections/ContactCTA';

import {
    featuredWorkItems,
    skills,
} from '@/content/data';

import styles from './page.module.css';

const pageTitle = 'For Recruiters';
const pageDescription =
    "A recruiter-focused overview of Prince Kumar's skills, work style, ownership areas, and fit for strategy, product, and systems roles.";
const previewImage = '/images/hero/hero-head.png';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: '/for-recruiters',
    },
    openGraph: {
        title: `${pageTitle} | Prince Kumar`,
        description: pageDescription,
        url: '/for-recruiters',
        siteName: 'Prince Kumar',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: previewImage,
                width: 2880,
                height: 1258,
                alt: 'Prince Kumar portfolio preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${pageTitle} | Prince Kumar`,
        description: pageDescription,
        images: [previewImage],
    },
};

export default function ForRecruitersPage() {
    const whatIBring = [
        'Structured thinking - breaking down messy problems into clear, solvable parts.',
        'Multi-perspective analysis - user, market, business, and technical lenses.',
        'System & workflow design - designing clean workflows and operational logic.',
        'Reliable ownership - accountable from problem definition to delivery.',
        'Clarity in decision-making - grounding choices in data, constraints, and logic.',
        'Founder-style execution - fast iterations, low friction, strong follow-through.',
    ];

    const whereIAddValue = [
        'Roles requiring structured thinking',
        'Teams dealing with messy, unstructured problems',
        'Early-stage companies needing clarity & direction',
        'Product strategy, system flows, operational logic',
        'Founders who need someone who “gets things done”',
        'Decision-heavy environments',
    ];

    return (
        <div className={styles.page}>
            <Navbar variant="transparent" />

            <PageHero
                eyebrow=""
                title="I bring structured ownership to every problem I take on"
                subtitle="From definition to delivery"
            />

            {/* HERO → CONTENT BRIDGE MARK */}
            <div className={styles.heroBridge}>
                <img
                    src="/images/brand/bridge-mark.png"
                    alt=""
                    className={styles.bridgeLogo}
                />
            </div>

            <Surface roundedTop roundedBottom>
                <main className={styles.main}>
                    <div className={styles.container}>

                        {/* WHAT I BRING */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>What I Bring to a Team</h2>

                            <ul className={styles.bulletList}>
                                {whatIBring.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <Divider />

                        {/* HOW I WORK */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>How I Work</h2>

                            <ul className={styles.workList}>
                                <li>
                                    I ask questions before proposing answers.
                                    <strong> Understanding &gt; assuming.</strong>
                                </li>
                                <li>
                                    I work from first principles.
                                    <strong> Break it down → find the core → rebuild with clarity.</strong>
                                </li>
                                <li>
                                    I think in systems, not features.
                                    <strong> Flows, interactions, and constraints matter more than tasks.</strong>
                                </li>
                                <li>
                                    I prioritize clarity in thinking and communication.
                                    <strong> Clean logic leads to clean decisions.</strong>
                                </li>
                                <li>
                                    I move through a structured sequence.
                                    <strong> Explore → Map → Solve → Build → Iterate.</strong>
                                </li>
                            </ul>
                        </section>

                        <Divider />

                        {/* WHAT I CAN OWN */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>What I Can Own From Day 1</h2>

                            <div className={styles.pills}>
                                {skills.map((skill, i) => (
                                    <PillTag key={i}>{skill}</PillTag>
                                ))}
                            </div>
                        </section>

                        <Divider />

                        {/* WHERE I ADD VALUE */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Where I Add the Most Value</h2>

                            <ul className={styles.bulletList}>
                                {whereIAddValue.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <Divider />

                        {/* FEATURED WORK */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Featured Work</h2>

                            <FeaturedWork
                                items={featuredWorkItems.slice(0, 2)}
                                showHeader={false}
                                showCta={false}
                            />

                            <div className={styles.recruiterCtas}>
                                <Button href="/experience" variant="outline">
                                    View Full Experience →
                                </Button>

                                <Button href="/insights" variant="outline">
                                    View Case Studies →
                                </Button>
                            </div>
                        </section>

                    </div>

                    <Divider />

                    <ContactCTA />
                </main>
            </Surface>

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
