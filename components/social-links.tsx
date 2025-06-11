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

  const socialLinks = [
    {
      href: "https://github.com/hit-sharq",
      icon: Github,
      label: "GitHub",
      className: styles.githubButton,
    },
    {
      href: "https://www.instagram.com/j_lee087",
      icon: Instagram,
      label: "Instagram",
      className: styles.instagramButton,
    },
    {
      href: "https://twitter.com/j_l_e_e087",
      icon: Twitter,
      label: "Twitter/X",
      className: styles.twitterButton,
    },
    {
      href: "https://wa.me/+25492687584",
      icon: Phone,
      label: "WhatsApp",
      className: styles.whatsappButton,
    },
    {
      href: "mailto:officialjoshuamwendwa@gmail.com",
      icon: Mail,
      label: "Email",
      className: styles.emailButton,
    },
  ]

  return (
    <div className={`${styles.container} ${className}`}>
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className={`${buttonClass} ${link.className}`}
        >
          <link.icon className={styles.icon} />
          {showLabels && <span className={styles.label}>{link.label}</span>}
          {!showLabels && <span className={styles.srOnly}>{link.label}</span>}
        </Link>
      ))}
    </div>
  )
}
