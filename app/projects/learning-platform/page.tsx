import Link from "next/link"
import Image from "next/image"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import styles from "../page.module.css"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function LearningPlatformPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectHeader}>
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Projects
          </Link>
          <h1 className={styles.title}>Learning Platform</h1>
          <p className={styles.subtitle}>Collaborative Learning Environment</p>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Great%20Learning%20launches%20SaaS-based%20digital%20campus%20solution-BbT0arBDXXzWWAeCZOawD3Na753ErK.jpeg"
              alt="Learning Platform"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.linksContainer}>
              <Link
                href="https://github.com/hit-sharq/learning-platform-server"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Github className={styles.linkIcon} />
                View Code
              </Link>
              <Link href="https://learning-platform-client-alpha.vercel.app/login" className={styles.linkButton}>
                <ExternalLink className={styles.linkIcon} />
                Live Demo
              </Link>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p>
                A user-friendly learning environment that facilitates efficient course and assignment management. The
                platform bridges the gap between students and instructors, creating a collaborative space for
                educational growth.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <p>
                I focused on the back-end development, creating the necessary models using Flask. I designed and
                implemented the database schema, API endpoints, and authentication system to ensure secure and efficient
                data management.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technologies Used</h2>
              <ul className={styles.techList}>
                <li>Python</li>
                <li>Flask</li>
                <li>PostgreSQL</li>
                <li>RESTful API</li>
                <li>JWT Authentication</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureList}>
                <li>Course management system</li>
                <li>Assignment submission and grading</li>
                <li>Discussion forums for collaborative learning</li>
                <li>Progress tracking for students</li>
                <li>Secure authentication and authorization</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
              <p>
                One of the main challenges was designing a flexible database schema that could accommodate various
                course structures and content types. I solved this by implementing a modular design pattern that allows
                instructors to customize their course content while maintaining data integrity.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
