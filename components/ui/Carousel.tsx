'use client';

import { useRef } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
    children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!trackRef.current) return;

        const cardWidth = trackRef.current.firstElementChild?.clientWidth || 300;
        const scrollAmount = cardWidth + 24; // card width + gap

        trackRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.carousel}>
            <button
                className={`${styles.arrow} ${styles.left}`}
                onClick={() => scroll('left')}
                aria-label="Scroll left"
            >
                ‹
            </button>

            <div ref={trackRef} className={styles.track}>
                {children}
            </div>

            <button
                className={`${styles.arrow} ${styles.right}`}
                onClick={() => scroll('right')}
                aria-label="Scroll right"
            >
                ›
            </button>
        </div>
    );
}
