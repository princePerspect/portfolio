import { Suspense } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Surface from '@/components/layout/Surface';
import WriteReflectionForm from './WriteReflectionForm';
import WriteReflectionFormStatic from './WriteReflectionFormStatic';

import styles from './page.module.css';

export default function WritePage() {
    return (
        <div className={styles.page}>
            <Navbar variant="transparent" />

            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <span className={styles.eyebrow}>PRIVATE REFLECTION</span>
                    <h1 className={styles.title}>A quiet place for your perspective</h1>
                    <p className={styles.subtitle}>
                        Thoughtful, Critical, Generous, Anonymous. This page is here
                        for honest reflection.
                    </p>
                </div>
            </section>

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
                        <section className={styles.card} id="reflection-form">
                            <div className={styles.copy}>
                                <span className={styles.eyebrow}>POSITIVE, CRITICAL, THOUGHTFUL, ANONYMOUS -
                                    EVERYTHING IS WELCOME</span>
                                <p>
                                    If we&apos;ve interacted, worked together, crossed
                                    paths briefly, or shared any part of a journey -
                                    I&apos;d genuinely value your perspective.
                                </p>
                                <p>
                                    Sometimes the clearest understanding of ourselves
                                    comes through the eyes of others.
                                </p>
                            </div>

                            <Suspense fallback={<WriteReflectionFormStatic />}>
                                <WriteReflectionForm />
                            </Suspense>
                        </section>
                    </div>
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
