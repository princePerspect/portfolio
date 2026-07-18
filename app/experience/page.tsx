import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import PageHero from '@/components/layout/PageHero';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';

import ExperienceSection from '@/components/sections/Experience/ExperienceSection';

import styles from './page.module.css';

const pageTitle = 'Experience';
const pageDescription =
    "Explore Prince Kumar's experience across product strategy, systems analysis, market research, partnerships, startup execution, and leadership.";
const previewImage = '/images/hero/hero-head.png';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: '/experience',
    },
    openGraph: {
        title: `${pageTitle} | Prince Kumar`,
        description: pageDescription,
        url: '/experience',
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

export default function ExperiencePage() {
    return (
        <div className={styles.page}>
            <Navbar variant="transparent" />

            <PageHero
                eyebrow=""
                title="Experience That Builds Clarity"
                subtitle="Markets, products, systems, and early-stage operations — where I learned to turn ambiguity into structure."
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
                <Surface roundedTop roundedBottom>
                    <ExperienceSection />
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
