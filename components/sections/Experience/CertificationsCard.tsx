import Button from '@/components/ui/Button';
import styles from './Experience.module.css';

interface CertificationsCardProps {
    item: {
        items: string[];
        ctaLink: string;
    };
}

export default function CertificationsCard({ item }: CertificationsCardProps) {
    return (
        <article className={styles.card}>
            <h3 className={styles.company}>Certifications & Training</h3>

            <ul className={styles.certifications}>
                {item.items.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>

            <div className={styles.certCTA}>
                <Button href={item.ctaLink} target="_blank" variant="outline">
                    See Credentials →
                </Button>
            </div>
        </article>
    );
}
