import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* LEFT */}
                <div className={styles.left}>
                    <div className={styles.icons}>
                        <a
                            href="mailto:princeperspect@gmail.com"
                            aria-label="Email"
                        >
                            <img src="/icons/mail.png" alt="Email" />
                        </a>

                        <span className={styles.separator}>|</span>

                        <a
                            href="https://www.google.com/maps/place/Noida"
                            target="_blank"
                            aria-label="Location"
                        >
                            <img src="/icons/location.png" alt="Location" />
                        </a>

                        <span className={styles.separator}>|</span>

                        <a
                            href="https://linkedin.com/in/princeperspect"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <img src="/icons/linkedin.png" alt="LinkedIn" />
                        </a>
                    </div>

                    <p className={styles.copyright}>
                        © {currentYear} All rights reserved
                    </p>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    LETS CREATE SOMETHING ICONIC.
                </div>
            </div>
        </footer>
    );
}
