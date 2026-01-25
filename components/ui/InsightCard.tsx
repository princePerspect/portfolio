import styles from './InsightCard.module.css';

interface InsightCardProps {
    title: string;
    subtitle: string;
    slug: string;
    category?: string;
    thumbnail?: string;
}

export default function InsightCard({
    title,
    subtitle,
    slug,
    category,
    thumbnail,
}: InsightCardProps) {
    return (
        <a href={`/insights/${slug}`} className={styles.card}>
            {thumbnail && (
                <img
                    src={thumbnail}
                    alt={title}
                    className={styles.thumbnail}
                />
            )}

            <div className={styles.content}>
                {category && (
                    <span className={styles.category}>{category}</span>
                )}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </a>
    );
}
