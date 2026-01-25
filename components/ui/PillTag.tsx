import styles from './PillTag.module.css';

interface PillTagProps {
    children: React.ReactNode;
}

export default function PillTag({ children }: PillTagProps) {
    return <span className={styles.pill}>{children}</span>;
}
