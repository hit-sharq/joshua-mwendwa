import Link from "next/link"
import styles from "./footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© 2024 Joshua Mwendwa. All rights reserved.</p>
      <nav className={styles.nav}>
        <Link className={styles.navLink} href="#about">
          About
        </Link>
        <Link className={styles.navLink} href="#projects">
          Projects
        </Link>
        <Link className={styles.navLink} href="#contact">
          Contact
        </Link>
      </nav>
    </footer>
  )
}

