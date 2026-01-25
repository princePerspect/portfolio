import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    category?: string;
    excerpt?: string;
    image?: string;
    href?: string;
}

export default function Card({
    title,
    category,
    excerpt,
    image,
    href,
}: CardProps) {
    const content = (
        <article className={styles.card}>
            {image && (
                <div className={styles.media}>
                    {category && (
                        <span className={styles.badge}>{category}</span>
                    )}
                    <img src={image} alt={title} />
                </div>
            )}

            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>

                {excerpt && (
                    <p className={styles.excerpt}>{excerpt}</p>
                )}

                <div className={styles.footer}>
                    <span className={styles.arrow}>→</span>
                </div>
            </div>
        </article>
    );

    return href ? (
        <Link href={href} className={styles.wrapper}>
            {content}
        </Link>
    ) : (
        content
    );
}
