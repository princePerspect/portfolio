import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import PageHero from '@/components/layout/PageHero';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';
import Button from '@/components/ui/Button';
import PillTag from '@/components/ui/PillTag';
import ContactCTA from '@/components/sections/ContactCTA';
import styles from './page.module.css';
import Divider from '@/components/ui/Divider';

const pageTitle = 'About';
const pageDescription =
    "Learn about Prince Kumar's approach to structured thinking, product strategy, systems design, and turning ambiguity into actionable decisions.";
const previewImage = '/images/contact/contact-portrait.png';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: `${pageTitle} | Prince Kumar`,
        description: pageDescription,
        url: '/about',
        siteName: 'Prince Kumar',
        locale: 'en_US',
        type: 'profile',
        images: [
            {
                url: previewImage,
                alt: 'Prince Kumar',
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

export default function AboutPage() {
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

                        {/* IDENTITY */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Identity</h2>

                            <div className={styles.textBlock}>
                                <p>
                                    I’m someone who turns ambiguity into <strong>structured insight, clean workflows,
                                        and actionable decisions</strong>.
                                </p>

                                <p>
                                    I’m currently pursuing a B.Tech in Electronics & Communication Engineering
                                    (Graduating 2026) from JSS Academy of Technical Education, Noida (AKTU).
                                </p>

                                <p>
                                    I work across markets, product thinking, systems design, and decision-making;
                                    helping ideas grow into structured, build-ready clarity.
                                </p>
                            </div>

                            <ul className={styles.timeline}>
                                <li><strong>2023</strong> — Joined EDC (Entrepreneurship Development Cell)</li>
                                <li><strong>2024</strong> — Outreach Lead, EDC</li>
                                <li><strong>2024–2025</strong> — Startup events, conferences & hackathons across NCR</li>
                                <li><strong>2024–2025</strong> — Internships & early-stage product/system projects</li>
                                <li><strong>2025</strong> — Vice President, EDC</li>
                                <li><strong>2026</strong> — Graduation (B.Tech, ECE - JSSATE Noida)</li>
                            </ul>

                            <div className={styles.centerCta}>
                                <Button href="/experience" variant="outline">Explore My Work →</Button>
                            </div>
                        </section>

                        <Divider />

                        {/* WHAT I DO */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>What I Do</h2>

                            <p className={styles.sectionSub}>
                                I work across three pillars:
                            </p>

                            <div className={styles.cardGrid}>
                                <div className={styles.infoCard}>
                                    <h3>🔍︎ Insight & Understanding</h3>
                                    <p>Synthesizing market signals, user behavior, and real-world constraints.</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>🖧  Systems & Workflow Design</h3>
                                    <p>Designing clear flows, operational logic, and decision-ready structures.</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>𖣠  Strategy & Execution</h3>
                                    <p>Translating insight into execution plans that actually ship.</p>
                                </div>
                            </div>
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

                        {/* WHAT I’VE WORKED ON */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>What I’ve Worked On</h2>

                            <div className={styles.pills}>
                                <PillTag>Early-stage product development</PillTag>
                                <PillTag>User research</PillTag>
                                <PillTag>GTM strategies</PillTag>
                                <PillTag>Workflow automation</PillTag>
                                <PillTag>Partnership development</PillTag>
                                <PillTag>Operational design</PillTag>
                                <PillTag>Leadership</PillTag>
                            </div>

                            <p className={styles.helperText}>
                                My work spans startups, ecosystem projects, and college leadership -
                                always centered on bringing clarity where things are messy.
                            </p>
                        </section>

                        <Divider />

                        {/* WHY THIS MATTERS */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Why This Work Matters to Me</h2>

                            <p className={styles.textBlock}>
                                I enjoy turning messy, unstructured problems into clean, workable systems
                                that create real value. I love the feeling of products or solutions that
                                I’ve helped shape going live.
                            </p>
                        </section>

                        <Divider />

                        {/* WHAT I’M LEARNING */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>What I’m Learning Now</h2>

                            <div className={styles.pills}>
                                <PillTag>Product strategy</PillTag>
                                <PillTag>AI & automation</PillTag>
                                <PillTag>Market research frameworks</PillTag>
                                <PillTag>Financial systems & economics (next focus)</PillTag>
                            </div>
                        </section>

                        <Divider />

                        {/* OUTSIDE OF WORK */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Outside of Work</h2>

                            <div className={styles.cardGrid}>
                                <div className={styles.infoCard}>
                                    <img
                                        src="/icons/sports.png"
                                        alt=""
                                        className={styles.cardIcon}
                                    />
                                    <h3>Sports & Play</h3>
                                    <p>I enjoy almost any sport - not professionally, but with real energy.</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <img
                                        src="/icons/creative.png"
                                        alt=""
                                        className={styles.cardIcon}
                                    />
                                    <h3>Creative Interests</h3>
                                    <p>I love painting, sketching, and exploring visual creativity.</p>
                                </div>
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
