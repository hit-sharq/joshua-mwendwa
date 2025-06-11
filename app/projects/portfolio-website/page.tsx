import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "../page.module.css"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function PortfolioWebsitePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectHeader}>
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Projects
          </Link>
          <h1 className={styles.title}>Portfolio Website</h1>
          <p className={styles.subtitle}>Personal Portfolio & Resume</p>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/favicon.ico"
              alt="Portfolio Website"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.linksContainer}>
              <Link
                href="https://github.com/hit-sharq/joshua-mwendwa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Github className={styles.linkIcon} />
                View Code
              </Link>
              <Link href="https://learning-platform-client-alpha.vercel.app/" className={styles.linkButton}>
                <ExternalLink className={styles.linkIcon} />
                Live Demo
              </Link>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p>
                A responsive portfolio website built with Next.js and CSS modules to showcase my projects, skills, and
                experience. The website features a clean, modern design with dark mode support and optimized
                performance.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <p>
                I designed and developed the entire website from scratch, focusing on creating a responsive layout that
                works well on all devices. I implemented custom CSS modules for styling and added dark mode support
                using next-themes.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technologies Used</h2>
              <ul className={styles.techList}>
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS Modules</li>
                <li>Lucide Icons</li>
                <li>next-themes</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureList}>
                <li>Responsive design that works on mobile, tablet, and desktop</li>
                <li>Dark mode support with system preference detection</li>
                <li>Project showcase with detailed project pages</li>
                <li>Interactive contact form</li>
                <li>Comprehensive resume/CV page</li>
                <li>Social media integration</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
              <p>
                One of the main challenges was creating a responsive design that looked good on all devices while
                maintaining a consistent user experience. I solved this by using CSS modules with media queries and a
                mobile-first approach to ensure the layout adapts smoothly to different screen sizes.
              </p>
              <p>
                Another challenge was implementing dark mode in a way that respects the user's system preferences. I
                used the next-themes library to handle theme switching and CSS variables to manage the color scheme,
                ensuring a seamless transition between light and dark modes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

