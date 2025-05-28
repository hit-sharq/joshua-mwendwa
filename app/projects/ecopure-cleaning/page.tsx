import Link from "next/link"
import Image from "next/image"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import styles from "../page.module.css"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function EcopureCleaningPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectHeader}>
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Projects
          </Link>
          <h1 className={styles.title}>ECOPURE Cleaning Services</h1>
          <p className={styles.subtitle}>Full-stack Developer, UI/UX Designer, DevOps, Database Architect, Project Manager</p>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/ecopure.png"
              alt="ECOPURE Cleaning Services"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.linksContainer}>
              <Link
                href="https://github.com/hit-sharq/EcOPURE"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Github className={styles.linkIcon} />
                View Code
              </Link>
              <Link
                href="https://ec-opure-q1y6.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <ExternalLink className={styles.linkIcon} />
                Live Demo
              </Link>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p>
                ECOPURE is a modern cleaning service platform that emphasizes environmental responsibility and ease of use. Designed for both customers and administrators, it features a seamless booking flow, dynamic service listings, contact forms, a secure dashboard, and integration with Cloudinary for media management. The project reflects a blend of functional backend logic and clean UI, tailored for the Kenyan market. The platform serves as both a service interface for clients and a management tool for the business.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <p>
                Full-stack Developer, UI/UX Designer, DevOps (deployment, environment setup), Database architect, Project manager
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technologies Used</h2>
              <ul className={styles.techList}>
                <li>Next.js (TypeScript), CSS Modules</li>
                <li>Node.js, Next.js API routes</li>
                <li>PostgreSQL with Prisma ORM</li>
                <li>Clerk Authentication</li>
                <li>Cloudinary</li>
                <li>Vercel Deployment</li>
                <li> Nodemailer</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureList}>
                <li>Fully responsive landing, about, and service pages</li>
                <li>Dynamic booking system with form validation</li>
                <li>Admin and user dashboard for managing bookings and inquiries</li>
                <li>Image upload and preview (for services and galleries)</li>
                <li>Authentication and role-based access</li>
                <li>Realtime feedback via toast messages and error handling</li>
                <li>PostgreSQL integration for persistent data</li>
                <li>Clean, eco-branded UI with intuitive navigation</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
              <p>
                Database deployment: Faced errors with local PostgreSQL shadow databases. Solved by switching to Supabase and resetting the migration history.
                Image handling: Used Cloudinary integration for scalable media storage and display.
                State management: Simplified with hooks and structured props, avoiding heavy state libraries.
                Deployment: Overcame Prisma deployment errors by ensuring correct connection strings and using npx prisma migrate deploy properly with Supabase.
                Styling consistency: Used plain CSS modules for full control while keeping design in sync with the eco-friendly brand identity.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
