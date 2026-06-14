import styles from '../page.module.css';

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