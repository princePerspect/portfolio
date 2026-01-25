import styles from './Experience.module.css';

interface PromotionCardProps {
    item: {
        company: string;
        logo: string;
        roles: {
            title: string;
            timeline: string;
            bullets: string[];
        }[];
    };
}

export default function PromotionCard({ item }: PromotionCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                {/* LOGO WRAPPER (FIXED SIZE) */}
                <div className={styles.logo}>
                    <img src={item.logo} alt={item.company} />
                </div>

                <h3 className={styles.company}>{item.company}</h3>
            </div>

            {item.roles.map((role, index) => (
                <div key={index} className={styles.promotionBlock}>
                    <div className={styles.promotionHeader}>
                        <h4 className={styles.role}>{role.title}</h4>
                        <span className={styles.timeline}>{role.timeline}</span>
                    </div>

                    <ul className={styles.bullets}>
                        {role.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </article>
    );
}
