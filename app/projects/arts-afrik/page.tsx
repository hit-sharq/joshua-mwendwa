import Link from "next/link"
import Image from "next/image"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import styles from "../page.module.css"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ArtsAfrikPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectHeader}>
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Projects
          </Link>
          <h1 className={styles.title}>Arts Afrik – Global African Art Marketplace</h1>
          <p className={styles.subtitle}>Full-Stack Developer</p>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/artsAfrik.png"
              alt="Arts Afrik"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.linksContainer}>
              <Link
                href="https://github.com/hit-sharq/artAfrik"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Github className={styles.linkIcon} />
                View Code
              </Link>
              <Link href="https://art-afrik-joshua-mathias-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                <ExternalLink className={styles.linkIcon} />
                Live Demo
              </Link>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p>
                Arts Afrik is a global digital marketplace designed to connect African artists with international collectors and enthusiasts. The platform empowers artists to showcase and sell their work, while providing buyers with a curated, immersive experience of authentic African art.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <p>
                Full-Stack Developer
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technologies Used</h2>
              <ul className={styles.techList}>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>PostgreSQL (Prisma)</li>
                <li>Clerk Auth</li>
                <li>Cloudinary</li>
                <li>Plain CSS</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureList}>
                <li>User authentication and profile management via Clerk</li>
                <li>Upload and manage art listings with Cloudinary</li>
                <li>Admin dashboard to manage orders, toggle featured art, and review uploads</li>
                <li>PostgreSQL database managed with Prisma ORM</li>
                <li>Real-time UI updates and dynamic content filtering</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
              <p>
                Built a scalable database schema to support users, orders, and art pieces. Designed a clean UI using plain CSS for maximum flexibility and control. Implemented secure file uploads and optimized image delivery via Cloudinary.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
