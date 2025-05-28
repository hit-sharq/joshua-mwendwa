import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "../page.module.css"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function PetAppPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.projectHeader}>
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Projects
          </Link>
          <h1 className={styles.title}>PetApp</h1>
          <p className={styles.subtitle}>Pet Care Tracking Application</p>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pet%20Adoption%20App%20Design-KXD2RpRnVjHyfzDM4Jis25bO74YfpZ.jpeg"
              alt="PetApp"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.linksContainer}>
              <Link
                href="https://github.com/hit-sharq/petApp-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Github className={styles.linkIcon} />
                View Code
              </Link>
              <Link href="https://pet-app-frontend.vercel.app/" className={styles.linkButton}>
                <ExternalLink className={styles.linkIcon} />
                Live Demo
              </Link>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p>
                An all-in-one pet care tracking app designed to help pet owners manage their pets' essential health and
                wellness needs. The application ensures consistent and timely care, ultimately promoting better
                long-term health outcomes for their companions.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>My Role</h2>
              <p>
                I was responsible for generating the routes for each specific model within the app. This included
                designing and implementing the API endpoints for pet profiles, health records, medication schedules, and
                appointment tracking.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technologies Used</h2>
              <ul className={styles.techList}>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>RESTful API</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureList}>
                <li>Pet profile management</li>
                <li>Health record tracking</li>
                <li>Medication reminders</li>
                <li>Vet appointment scheduling</li>
                <li>Vaccination history</li>
                <li>Diet and exercise logs</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
              <p>
                A significant challenge was creating a flexible notification system that could handle different types of
                reminders (medications, appointments, vaccinations) with varying frequencies. I implemented a modular
                notification system that calculates the next reminder date based on the specific requirements of each
                reminder type.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

