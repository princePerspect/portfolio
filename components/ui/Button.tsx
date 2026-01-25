import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    target?: string;
    fullWidth?: boolean;
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    target,
    fullWidth = false,
}: ButtonProps) {
    const className = `
        ${styles.button}
        ${styles[variant]}
        ${fullWidth ? styles.fullWidth : ''}
    `;

    if (href) {
        return (
            <Link href={href} target={target} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
