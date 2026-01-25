import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';
import Divider from '@/components/ui/Divider';
import Carousel from '@/components/ui/Carousel';

import HowIWork from '@/components/sections/HowIWork';
import FeaturedWork from '@/components/sections/FeaturedWork';
import ContactCTA from '@/components/sections/ContactCTA';
import Endorsements from '@/components/sections/Endorsements';

import Card from '@/components/ui/Card';
import { getAllInsightsMeta } from '@/lib/insights';

import {
  howIWorkItems,
  featuredWorkItems,
  // endorsements,
} from '@/content/data';

import styles from './page.module.css';

export default function HomePage() {
  const insights = getAllInsightsMeta().slice(0, 8);

  return (
    <div className={styles.page}>
      <Navbar variant="transparent" />
      <Hero />

      {/* HERO → CONTENT BRIDGE MARK */}
      <div className={styles.heroBridge}>
        <img
          src="/images/brand/bridge-mark.png"
          alt=""
          className={styles.bridgeLogo}
        />
      </div>

      <main className={styles.main}>
        <Surface roundedTop>
          <div className={styles.container}>
            {/* ENGINEERING CLARITY */}
            <div className={styles.engineeringHero}>
              <img
                src="/images/engineering-clarity/engineering-clarity-hero.png"
                alt="Engineering Clarity"
              />
            </div>

            <div className={styles.engineeringCard}>
              <img
                src="/images/engineering-clarity/engineering-clarity-card.png"
                alt="Market Product Systems Decisions"
              />
            </div>

            {/* ANALYTICAL MEMOS & CASE WORK */}
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                ANALYTICAL MEMOS & CASE WORK
              </h2>
              <p className={styles.sectionSubtitle}>
                Hypothesis-driven analyses on markets, business models, and product strategy.
              </p>
            </div>

            <Carousel>
              {insights.map((item) => (
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

            {/* HOW I WORK */}
            <HowIWork items={howIWorkItems} />
          </div>
        </Surface>

        {/* WHITE → DARK SECTION BRIDGE */}
        <div className={styles.sectionBridge}>
          <img
            src="/images/brand/section-bridge.png"
            alt=""
            className={styles.bridgeLogo}
          />
        </div>


        {/* FEATURED WORK (DARK SECTION) */}
        <section className={styles.darkSection}>
          <FeaturedWork items={featuredWorkItems.slice(0, 4)} />
        </section>

        {/* ENDORSEMENTS */}
        <Surface roundedBottom>
          {/* <Endorsements items={endorsements} />
          <Divider /> */}
          <ContactCTA />
        </Surface>
      </main>


      {/* CONTENT → FOOTER BRIDGE MARK */}
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
