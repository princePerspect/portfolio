import styles from './FeaturedWork.module.css';

interface FeaturedWorkItem {
    role: string;
    company: string;
    logo: string;
    bullets: string[];
}

interface FeaturedWorkProps {
    title?: string;
    items: FeaturedWorkItem[];
    showHeader?: boolean;
    showCta?: boolean;
}

export default function FeaturedWork({
    title = 'FEATURED WORK',
    items,
    showHeader = true,
    showCta = true,
}: FeaturedWorkProps) {
    return (
        <section className={styles.featuredWork}>
            <div className={styles.container}>

                {showHeader && (
                    <div className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.subtitle}>
                            Projects that reflect my approach to building, problem-solving, and execution.
                        </p>
                    </div>
                )}

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardBg} />

                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3 className={styles.role}>{item.role}</h3>
                                        <p className={styles.company}>{item.company}</p>
                                    </div>

                                    <img
                                        src={item.logo}
                                        alt={item.company}
                                        className={styles.logo}
                                    />
                                </div>

                                <ul className={styles.bullets}>
                                    {item.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {showCta && (
                    <div className={styles.cta}>
                        <a href="/experience" className={styles.button}>
                            EXPERIENCE →
                        </a>
                    </div>
                )}

            </div>
        </section>
    );
}
