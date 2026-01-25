import styles from './PageHero.module.css';

interface PageHeroProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
}

export default function PageHero({
    eyebrow,
    title,
    subtitle,
}: PageHeroProps) {
    return (
        <section className={styles.hero}>
            {/* LEFT: TEXT */}
            <div className={styles.text}>
                {eyebrow && (
                    <span className={styles.eyebrow}>
                        {eyebrow}
                    </span>
                )}

                <h1 className={styles.title}>
                    {title}
                </h1>

                {subtitle && (
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                )}
            </div>

            {/* RIGHT: IMAGE */}
            <div className={styles.imageWrapper}>
                <div className={styles.glow} />
                <img
                    src="/images/contact/contact-portrait.png"
                    alt="Prince Kumar"
                    className={styles.image}
                />
            </div>
        </section>
    );
}
