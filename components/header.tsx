import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Top%201200%20Emo%20Boy%20Names%20From%20A-Z%20%282024%29-NKAdeymsuFSx7R9s6azqoCn6nCSrXI.jpeg"
          alt="J Logo"
          width={40}
          height={40}
          className={styles.logoImage}
        />
        <span className={styles.logoText}>Joshua Mwendwa</span>
      </Link>
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
        <Link className={styles.navLink} href="/resume">
          Resume
        </Link>
      </nav>
    </header>
  )
}

