import Navbar from '@/components/layout/Navbar';
import PageHero from '@/components/layout/PageHero';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';

import ExperienceSection from '@/components/sections/Experience/ExperienceSection';

import styles from './page.module.css';

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
