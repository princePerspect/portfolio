import styles from "./Hero.module.css";

interface HeroProps {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function Hero({
    title = "A CLEARER LENS FOR UNCLEAR PROBLEMS",
    subtitle = "I turn ambiguity into structured insight, data-backed decisions, and multi-angle clarity – across consulting, product, and early-stage ventures.",
    backgroundImage = "/images/hero/hero-head.png"
}: HeroProps) {
    return (
        <section className={styles.hero}>
            {/* Full-bleed image */}
            <img
                src={backgroundImage}
                alt="Prince Kumar"
                className={styles.image}
            />

            {/* Text content */}
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {title}
                </h1>

                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
