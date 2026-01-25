import { experienceItems } from '@/content/data';
import ExperienceCard from './ExperienceCard';
import PromotionCard from './PromotionCard';
import CertificationsCard from './CertificationsCard';
import Divider from '@/components/ui/Divider';
import styles from './Experience.module.css';

export default function ExperienceSection() {
    return (
        <section className={styles.section}>
            {experienceItems.map((item, index) => {
                // 👉 Insert divider just before Certifications
                if (item.type === 'certifications') {
                    return (
                        <div key={index}>
                            <Divider />
                            <CertificationsCard item={item} />
                        </div>
                    );
                }

                if (item.type === 'standard') {
                    return <ExperienceCard key={index} item={item} />;
                }

                if (item.type === 'promotion') {
                    return <PromotionCard key={index} item={item} />;
                }

                return null;
            })}
        </section>
    );
}
