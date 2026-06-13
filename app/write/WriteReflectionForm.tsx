'use client';

import { useSearchParams } from 'next/navigation';

import styles from './page.module.css';
import WriteReflectionFormStatic from './WriteReflectionFormStatic';

export default function WriteReflectionForm() {
    const searchParams = useSearchParams();
    const isSuccess = searchParams.get('success') === 'true';

    if (isSuccess) {
        return (
            <div className={styles.successState} aria-live="polite">
                {/* The success view is driven by the `?success=true` query param
                    that Netlify redirects to after a successful POST. */}
                <span className={styles.successEyebrow}>RECEIVED</span>
                <h2 className={styles.successTitle}>
                    Thank you for taking the time to write this.
                </h2>
                <p className={styles.successMessage}>
                    Your reflection has been received.
                </p>
            </div>
        );
    }

    return <WriteReflectionFormStatic />;
}
