import type { Metadata } from 'next';
import styles from '../page.module.css';

const pageTitle = 'Reflection Received';
const pageDescription =
    'Confirmation page for submitted reflections to Prince Kumar.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: '/write/success',
    },
    openGraph: {
        title: `${pageTitle} | Prince Kumar`,
        description: pageDescription,
        url: '/write/success',
        siteName: 'Prince Kumar',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: `${pageTitle} | Prince Kumar`,
        description: pageDescription,
    },
};

export default function ReflectionSuccessPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.card}>
                    <div
                        className={styles.successState}
                        aria-live="polite"
                    >
                        <span className={styles.successEyebrow}>
                            RECEIVED
                        </span>

                        <h2 className={styles.successTitle}>
                            Thank you for taking the time to write this.
                        </h2>

                        <p className={styles.successMessage}>
                            Your reflection has been received.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
