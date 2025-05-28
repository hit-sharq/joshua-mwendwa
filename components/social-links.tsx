import Link from "next/link"
import { Github, Mail, Instagram, Twitter, Phone } from "lucide-react"
import styles from "./social-links.module.css"

interface SocialLinksProps {
  className?: string
  variant?: "default" | "outline"
  showLabels?: boolean
}

export function SocialLinks({ className = "", variant = "default", showLabels = false }: SocialLinksProps) {
  const buttonClass = variant === "outline" ? styles.outlineButton : styles.ghostButton

  return (
    <div className={`${styles.container} ${className}`}>
      <Link href="https://github.com/hit-sharq" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <Github className={styles.icon} />
        {showLabels && <span className={styles.label}>GitHub</span>}
        {!showLabels && <span className={styles.srOnly}>GitHub</span>}
      </Link>
      <Link href="https://www.instagram.com/j_lee087" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <Instagram className={styles.icon} />
        {showLabels && <span className={styles.label}>Instagram</span>}
        {!showLabels && <span className={styles.srOnly}>Instagram</span>}
      </Link>
      <Link href="https://twitter.com/j_l_e_e087" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <Twitter className={styles.icon} />
        {showLabels && <span className={styles.label}>Twitter/X</span>}
        {!showLabels && <span className={styles.srOnly}>Twitter/X</span>}
      </Link>
      <Link href="https://wa.me/+25492687584" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <Phone className={styles.icon} />
        {showLabels && <span className={styles.label}>WhatsApp</span>}
        {!showLabels && <span className={styles.srOnly}>WhatsApp</span>}
      </Link>
      <Link href="mailto:officialjoshuamwendwa@gmail.com" className={buttonClass}>
        <Mail className={styles.icon} />
        {showLabels && <span className={styles.label}>Email</span>}
        {!showLabels && <span className={styles.srOnly}>Email</span>}
      </Link>
    </div>
  )
}

