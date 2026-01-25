import styles from "./ContactCTA.module.css";

export default function ContactSection() {
    return (
        <section className={styles.contactSection} id="contact">
            {/* Top intro */}
            <div className={styles.intro}>
                <h2 className={styles.heading}>CONTACT</h2>

                <p className={styles.subtext}>
                    Based in Noida, India and open to on-site or remote opportunities
                    globally. Let’s connect.
                </p>

                <div className={styles.topActions}>
                    {/* EMAIL BUTTON (unique class) */}
                    <a
                        href="mailto:princeperspect@gmail.com"
                        className={styles.emailButton}
                    >
                        <img
                            src="/icons/mail.png"
                            alt=""
                            className={styles.buttonIcon}
                        />
                        PRINCEPERSPECT@GMAIL.COM
                        <span className={styles.arrow}>→</span>
                    </a>

                    {/* LINKEDIN BUTTON (shared pill class) */}
                    <a
                        href="https://linkedin.com/in/princeperspect"
                        target="_blank"
                        className={styles.pillButton}
                    >
                        <img
                            src="/icons/user.png"
                            alt=""
                            className={styles.buttonIcon}
                        />
                        Connect on LinkedIn
                    </a>
                </div>
            </div>

            {/* Dark card */}
            <div className={styles.card}>
                {/* Left: form */}
                <div className={styles.formWrapper}>
                    <form
                        className={styles.form}
                        action="mailto:princeperspect@gmail.com"
                        method="post"
                        encType="text/plain"
                    >
                        <h3 className={styles.formTitle}>SEND A MESSAGE</h3>

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={styles.input}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={4}
                            className={styles.textarea}
                            required
                        />

                        <button type="submit" className={styles.sendButton}>
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

                {/* Right: image */}
                <div className={styles.imageWrapper}>
                    <div className={styles.glow} />
                    <img
                        src="/images/contact/contact-portrait.png"
                        alt="Prince Kumar"
                        className={styles.image}
                    />
                </div>
            </div>

            {/* Bottom CTA */}
            <div className={styles.bottomAction}>
                <a href="/Prince-Kumar-Resume.pdf" className={styles.pillButton} target="_blank" rel="noopener noreferrer">
                    <img
                        src="/icons/download.png"
                        alt=""
                        className={styles.buttonIcon}
                    />
                    Download Resume
                </a>
            </div>
        </section>
    );
}
