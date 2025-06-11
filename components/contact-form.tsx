"use client"

import type React from "react"
import { useState } from "react"
import styles from "./contact-form.module.css"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setMessageType("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitMessage("Thank you for your message! I'll get back to you soon.")
      setMessageType("success")
      setFormState({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again later.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Enter your message"
          required
          spellCheck="false"
        />
      </div>

      <button
        type="submit"
        className={`${styles.button} ${isSubmitting ? styles.loading : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitMessage && (
        <p className={messageType === "success" ? styles.successMessage : styles.errorMessage}>{submitMessage}</p>
      )}
    </form>
  )
}
