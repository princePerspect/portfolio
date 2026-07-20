import styles from './page.module.css';

export default function WriteReflectionFormStatic() {
    return (
        <form
            name="write-reflection"
            method="POST"
            action="/__forms.html"
            className={styles.form}
        >
            {/* Netlify uses the form name plus this hidden field to identify
                and store submissions from the rendered HTML form. */}
            <input type="hidden" name="form-name" value="write-reflection" />

            {/* Honeypot field stays hidden from people; bots that fill it can
                be filtered out by Netlify as spam. */}
            <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="bot-field">
                    Do not fill this field if you&apos;re human
                </label>
                <input
                    id="bot-field"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="reflection-message" className={styles.label}>
                    Reflection / Message
                </label>
                <textarea
                    id="reflection-message"
                    name="message"
                    rows={8}
                    required
                    className={styles.textarea}
                    placeholder="Write whatever feels honest, useful, or true."
                />
            </div>

            <div className={styles.fieldGrid}>
                <div className={styles.field}>
                    <label htmlFor="reflection-name" className={styles.label}>
                        Name
                    </label>
                    <input
                        id="reflection-name"
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Optional - helps me contextualize your perspective"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="reflection-role" className={styles.label}>
                        Role / Designation
                    </label>
                    <input
                        id="reflection-role"
                        type="text"
                        name="role"
                        className={styles.input}
                        placeholder="Optional"
                    />
                </div>

                <div className={`${styles.field} ${styles.fullWidth}`}>
                    <label
                        htmlFor="reflection-organization"
                        className={styles.label}
                    >
                        Organization
                    </label>
                    <input
                        id="reflection-organization"
                        type="text"
                        name="organization"
                        className={styles.input}
                        placeholder="Optional"
                    />
                </div>
            </div>

            <div className={styles.actions}>
                <p className={styles.note}>
                    Anonymous reflections are completely welcome.
                </p>
                <button type="submit" className={styles.submitButton}>
                    Submit Reflection
                </button>
            </div>
        </form>
    );
}
