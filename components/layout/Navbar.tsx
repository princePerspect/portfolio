'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavbarProps {
    variant?: 'transparent' | 'solid';
}

export default function Navbar({ variant = 'solid' }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarClass = `
        ${styles.navbar}
        ${isScrolled ? styles.glass : styles.transparent}
    `;

    const navLinks = [
        { label: 'ABOUT', href: '/about' },
        { label: 'EXPERIENCE', href: '/experience' },
        { label: 'INSIGHTS', href: '/insights' },
        { label: 'FOR RECRUITERS', href: '/for-recruiters' },
        { label: 'CONTACT', href: '#contact' },
    ];

    const handleNav = (href: string) => {
        setIsMobileMenuOpen(false);

        if (href.startsWith('#')) {
            if (pathname !== '/') {
                router.push('/' + href);
            } else {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(href);
        }
    };

    return (
        <>
            <nav className={navbarClass}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        <img src="/images/logo/logo.png" alt="Prince Kumar" />
                    </Link>

                    <div className={styles.nav}>
                        {navLinks.map(link => (
                            <button
                                key={link.label}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''
                                    }`}
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile glass menu */}
            {isMobileMenuOpen && (
                <div
                    className={styles.mobileOverlay}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div
                        className={styles.mobileMenu}
                        onClick={e => e.stopPropagation()}
                    >
                        {navLinks.map(link => (
                            <button
                                key={link.label}
                                className={styles.mobileNavLink}
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
