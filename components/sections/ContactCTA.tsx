"use client";

import { FormEvent, useState } from "react";

import styles from "./ContactCTA.module.css";

const CONTACT_FORM_NAME = "contact";

function encodeFormData(formData: FormData) {
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
        params.append(key, value.toString());
    });

    return params.toString();
}

export default function ContactSection() {
    const [submissionState, setSubmissionState] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        try {
            setSubmissionState("submitting");

            const response = await fetch("/__forms.html", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encodeFormData(new FormData(form)),
            });

            if (!response.ok) {
                throw new Error("Unable to submit contact form");
            }

            form.reset();
            setSubmissionState("success");
        } catch {
            setSubmissionState("error");
        }
    }

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
                        href="#contact"
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
                        name={CONTACT_FORM_NAME}
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value={CONTACT_FORM_NAME}
                        />
                        <p className={styles.honeypot}>
                            <label>
                                Do not fill this field if you&apos;re human
                                <input
                                    name="bot-field"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </label>
                        </p>

                        <h3 className={styles.formTitle}>SEND A MESSAGE</h3>

                        {submissionState === "success" ? (
                            <div
                                className={styles.successState}
                                aria-live="polite"
                            >
                                <p className={styles.successText}>
                                    Thank you. Your message has been sent.
                                </p>
                                <button
                                    type="button"
                                    className={styles.sendButton}
                                    onClick={() => setSubmissionState("idle")}
                                >
                                    SEND ANOTHER MESSAGE
                                </button>
                            </div>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className={styles.input}
                                    required
                                    autoComplete="name"
                                    aria-label="Name"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className={styles.input}
                                    required
                                    autoComplete="email"
                                    aria-label="Email"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    className={styles.textarea}
                                    required
                                    autoComplete="off"
                                    aria-label="Message"
                                />

                                {submissionState === "error" ? (
                                    <p
                                        className={styles.errorText}
                                        aria-live="polite"
                                    >
                                        Something went wrong. Please try again.
                                    </p>
                                ) : null}

                                <button
                                    type="submit"
                                    className={styles.sendButton}
                                    disabled={submissionState === "submitting"}
                                >
                                    {submissionState === "submitting"
                                        ? "SENDING..."
                                        : "SEND MESSAGE"}
                                </button>
                            </>
                        )}
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
