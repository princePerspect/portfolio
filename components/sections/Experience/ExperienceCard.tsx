import styles from './Experience.module.css';

interface ExperienceCardProps {
    item: {
        type: 'standard';
        company: string;
        role: string;
        timeline: string;
        logo: string;
        bullets: string[];
    };
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                {/* LOGO WRAPPER (FIXED SIZE) */}
                <div className={styles.logo}>
                    <img src={item.logo} alt={item.company} />
                </div>

                <div>
                    <h3 className={styles.company}>{item.company}</h3>
                    <p className={styles.role}>{item.role}</p>
                </div>
            </div>

            <div className={styles.timeline}>{item.timeline}</div>

            <ul className={styles.bullets}>
                {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>
        </article>
    );
}
