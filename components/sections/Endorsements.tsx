'use client';

import { useState, useEffect } from 'react';
import Carousel from '@/components/ui/Carousel';
import styles from './Endorsements.module.css';

interface Endorsement {
    type: 'text' | 'video';
    quote?: string;
    videoThumbnail?: string;
    videoUrl?: string;
    name: string;
    role: string;
    linkedin: string;
}

interface EndorsementsProps {
    items: Endorsement[];
}

interface EndorsementCardProps extends Endorsement {
    onExpand: () => void;
}

function EndorsementCard({
    type,
    quote,
    videoThumbnail,
    name,
    role,
    linkedin,
    onExpand,
}: EndorsementCardProps) {
    return (
        <article
            className={styles.card}
            onClick={onExpand}
            role="button"
            tabIndex={0}
        >
            {/* Decorative quote mark */}
            <img
                src="/icons/quote.png"
                alt=""
                aria-hidden
                className={styles.quoteIcon}
            />

            {/* CONTENT */}
            <div className={styles.content}>
                {type === 'text' && quote && (
                    <p className={styles.quoteText}>{quote}</p>
                )}

                {type === 'video' && videoThumbnail && (
                    <div className={styles.videoThumb}>
                        <img src={videoThumbnail} alt="Video endorsement" />
                        <img
                            src="/icons/play.png"
                            alt=""
                            aria-hidden
                            className={styles.playIcon}
                        />
                    </div>
                )}

                <span className={styles.seeMore}>See more</span>
            </div>

            {/* FOOTER */}
            <div className={styles.footer}>
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={styles.identity}
                >
                    <span className={styles.name}>{name}</span>
                    <span className={styles.role}>{role}</span>
                </a>
            </div>
        </article>
    );
}

export default function Endorsements({ items }: EndorsementsProps) {
    const [activeItem, setActiveItem] = useState<Endorsement | null>(null);

    /* ESC KEY CLOSE - SAFE & ISOLATED */
    useEffect(() => {
        if (!activeItem) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveItem(null);
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [activeItem]);

    return (
        <>
            <div className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        ENDORSED BY THE PEOPLE I’VE WORKED WITH
                    </h2>
                    <p className={styles.subtitle}>
                        Real experiences from people I’ve worked with- through internships,
                        collaborations, and early-stage projects.
                    </p>
                </div>

                <Carousel>
                    {items.map((item, index) => (
                        <EndorsementCard
                            key={index}
                            {...item}
                            onExpand={() => setActiveItem(item)}
                        />
                    ))}
                </Carousel>
            </div>

            {/* MODAL */}
            {activeItem && (
                <div
                    className={styles.modal}
                    onClick={() => setActiveItem(null)}
                >
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setActiveItem(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        {/* CONTENT */}
                        {activeItem.type === 'text' && activeItem.quote && (
                            <p className={styles.modalText}>
                                {activeItem.quote}
                            </p>
                        )}

                        {activeItem.type === 'video' && activeItem.videoUrl && (
                            <iframe
                                src={`${activeItem.videoUrl}${activeItem.videoUrl.includes('?') ? '&' : '?'}autoplay=1&controls=1`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                title="YouTube video player"
                                className={styles.modalVideo}
                            />
                        )}

                        {/* IDENTITY (CLICKABLE) */}
                        <a
                            href={activeItem.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.modalIdentity}
                        >
                            <span className={styles.name}>
                                {activeItem.name}
                            </span>
                            <span className={styles.role}>
                                {activeItem.role}
                            </span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
