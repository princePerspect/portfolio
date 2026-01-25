import styles from './HowIWork.module.css';
import Divider from '@/components/ui/Divider';


interface WorkItem {
    icon: string; // icon filename only
    title: string;
    description: string;
}

interface HowIWorkProps {
    items: WorkItem[];
}

export default function HowIWork({ items }: HowIWorkProps) {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>HOW I WORK</h2>

            <Divider />

            <div className={styles.grid}>
                {items.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            src={`/icons/how-i-work/${item.icon}`}
                            alt={item.title}
                            className={styles.icon}
                        />

                        <h3 className={styles.title}>{item.title}</h3>

                        <p className={styles.description}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <Divider />
        </section>
    );
}
