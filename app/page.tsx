import Link from "next/link"
import styles from "./page.module.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Joshua Mwendwa</h1>
            <p className={styles.subtitle}>Software Engineer</p>
            <div className={styles.cta}>
              <Link href="#contact" className={styles.primaryButton}>
                Get in Touch
              </Link>
              <Link href="#projects" className={styles.secondaryButton}>
                View My Work
              </Link>
            </div>
            <SocialLinks className={styles.socialLinks} />
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.sectionDescription}>
              Motivated and passionate software engineer with a solid foundation in programming principles, acquired
              through intensive boot camp training and hands-on personal projects.
            </p>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutColumn}>
                <ul className={styles.aboutList}>
                  <li>
                    <h3>Skills</h3>
                    <p>Python, JavaScript, HTML/CSS, Node.js, React, Express, Flask, PostgreSQL</p>
                  </li>
                  <li>
                    <h3>Experience</h3>
                    <p>Bootcamp Graduate (Moringa School), Sales Assistant at Gemark International Kenya Ltd</p>
                  </li>
                  <li>
                    <h3>Education</h3>
                    <p>Software Engineering Bootcamp - Moringa School (2024)</p>
                  </li>
                </ul>
              </div>
              <div className={styles.aboutColumn}>
                <div>
                  <h3>About My Work</h3>
                  <p>
                    I am eager to leverage my skills in a dynamic entry-level role within the tech industry, where I can
                    contribute to innovative solutions and continue to grow as a developer.
                  </p>
                  <p>
                    I have demonstrated strong leadership abilities throughout my educational journey and have excellent
                    communication skills. I am strongly committed to fostering a collaborative team environment and
                    possess refined planning and organizational skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>My Projects</h2>
            <p className={styles.sectionDescription}>
              Here are some of my recent projects. Each one represents a unique challenge and solution.
            </p>
            <div className={styles.projectsGrid}>
              <ProjectCard
                title="Portfolio Website"
                description="Personal Portfolio & Resume"
                image="/images/portfolio-website.png"
                details="A responsive portfolio website built with Next.js and CSS modules to showcase my projects, skills, and experience. Features dark mode support and a clean, modern design."
                codeUrl="https://github.com/hit-sharq/joshua-mwendwa"
                demoUrl="https://vercel.com/joshua-mathias-projects/joshua-mwendwa"
                slug="portfolio-website"
              />
              <ProjectCard
                title="Learning Platform"
                description="Collaborative Learning Environment"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Great%20Learning%20launches%20SaaS-based%20digital%20campus%20solution-BbT0arBDXXzWWAeCZOawD3Na753ErK.jpeg"
                details="A user-friendly learning environment that facilitates efficient course and assignment management. I focused on the back-end development, creating the necessary models using Flask."
                codeUrl="https://github.com/hit-sharq/learning-platform-client"
                demoUrl="https://learning-platform-client-alpha.vercel.app/login"
                slug="learning-platform"
              />
              <ProjectCard
                title="PetApp"
                description="Pet Care Tracking Application"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pet%20Adoption%20App%20Design-KXD2RpRnVjHyfzDM4Jis25bO74YfpZ.jpeg"
                details="An all-in-one pet care tracking app designed to help pet owners manage their pets' essential health and wellness needs. I was responsible for generating the routes for each specific model within the app."
                codeUrl="https://github.com/hit-sharq/petApp-frontend"
                demoUrl="https://pet-app-frontend.vercel.app/"
                slug="pet-app"
              />
              <ProjectCard
                title="Arts Afrik – Global African Art Marketplace"
                description="Global digital marketplace connecting African artists with international collectors."
                image="/images/artsAfrik.png"
                details="Arts Afrik is a global digital marketplace designed to connect African artists with international collectors and enthusiasts. The platform empowers artists to showcase and sell their work, while providing buyers with a curated, immersive experience of authentic African art."
                codeUrl="https://github.com/hit-sharq/artAfrik"
                demoUrl="https://art-afrik-joshua-mathias-projects.vercel.app/"
                slug="arts-afrik"
              />
              <ProjectCard
                title="ECOPURE Cleaning Services"
                description="A full-stack web platform providing eco-friendly residential and commercial cleaning services with online booking and administrative features."
                image="/images/ecopure.png"
                details="ECOPURE is a modern cleaning service platform that emphasizes environmental responsibility and ease of use. Designed for both customers and administrators, it features a seamless booking flow, dynamic service listings, contact forms, a secure dashboard, and integration with Cloudinary for media management. The project reflects a blend of functional backend logic and clean UI, tailored for the Kenyan market. The platform serves as both a service interface for clients and a management tool for the business."
                codeUrl="https://github.com/hit-sharq/EcOPURE"
                demoUrl="https://ec-opure-q1y6.vercel.app/"
                slug="ecopure-cleaning"
              />
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.sectionDescription}>
              Have a project in mind or want to chat? Feel free to reach out through any of these channels!
            </p>

            <div className={styles.socialContactWrapper}>
              <div className={styles.socialLinksSection}>
                <h3 className={styles.contactSubtitle}>Connect With Me</h3>
                <SocialLinks className={styles.contactSocial} variant="outline" showLabels={true} />
              </div>

              <div className={styles.formSection}>
                <h3 className={styles.contactSubtitle}>Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

